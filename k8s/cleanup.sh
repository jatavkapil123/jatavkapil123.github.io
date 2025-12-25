#!/bin/bash

# Kapil Jatav Portfolio - Kubernetes Cleanup Script
# This script removes the portfolio application from Kubernetes

set -e

echo "🧹 Cleaning up Kapil Jatav Portfolio from Kubernetes..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

# Check if kubectl is installed
if ! command -v kubectl &> /dev/null; then
    echo -e "${RED}[ERROR]${NC} kubectl is not installed."
    exit 1
fi

# Delete all resources in the portfolio namespace
print_status "Deleting all portfolio resources..."

kubectl delete -f networkpolicy.yml --ignore-not-found=true
kubectl delete -f pdb.yml --ignore-not-found=true
kubectl delete -f hpa.yml --ignore-not-found=true
kubectl delete -f ingress.yml --ignore-not-found=true
kubectl delete -f service.yml --ignore-not-found=true
kubectl delete -f clusterIP_service.yml --ignore-not-found=true
kubectl delete -f deployment.yml --ignore-not-found=true
kubectl delete -f secret.yml --ignore-not-found=true
kubectl delete -f configmap.yml --ignore-not-found=true
kubectl delete -f serviceaccount.yml --ignore-not-found=true

# Delete namespace (this will delete any remaining resources)
kubectl delete -f namespace.yml --ignore-not-found=true

print_success "All portfolio resources have been cleaned up!"

# Optional: Remove Docker image
read -p "Do you want to remove the Docker image as well? (y/N): " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    print_status "Removing Docker image..."
    docker rmi portfolio-app:latest --force 2>/dev/null || true
    print_success "Docker image removed"
fi

print_success "🎉 Cleanup completed successfully!"