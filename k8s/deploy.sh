#!/bin/bash

# Kapil Jatav Portfolio - Kubernetes Deployment Script
# This script deploys the portfolio application to Kubernetes

set -e

echo "🚀 Deploying Kapil Jatav Portfolio to Kubernetes..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if kubectl is installed
if ! command -v kubectl &> /dev/null; then
    print_error "kubectl is not installed. Please install kubectl first."
    exit 1
fi

# Check if cluster is accessible
if ! kubectl cluster-info &> /dev/null; then
    print_error "Cannot connect to Kubernetes cluster. Please check your kubeconfig."
    exit 1
fi

print_status "Connected to Kubernetes cluster successfully"

# Build Docker image
print_status "Building Docker image..."
docker build -t portfolio-app:latest ..

print_success "Docker image built successfully"

# Load image to minikube (if using minikube)
if kubectl config current-context | grep -q "minikube"; then
    print_status "Loading image to minikube..."
    minikube image load portfolio-app:latest
    print_success "Image loaded to minikube"
fi

# Apply Kubernetes manifests in order
print_status "Applying Kubernetes manifests..."

# Create namespace first
kubectl apply -f namespace.yml
print_success "Namespace created"

# Apply service account and RBAC
kubectl apply -f serviceaccount.yml
print_success "Service account and RBAC configured"

# Apply ConfigMap and Secrets
kubectl apply -f configmap.yml
kubectl apply -f secret.yml
print_success "ConfigMap and Secrets applied"

# Apply Deployment
kubectl apply -f deployment.yml
print_success "Deployment created"

# Apply Services
kubectl apply -f clusterIP_service.yml
kubectl apply -f service.yml
print_success "Services created"

# Apply Ingress
kubectl apply -f ingress.yml
print_success "Ingress created"

# Apply HPA and PDB
kubectl apply -f hpa.yml
kubectl apply -f pdb.yml
print_success "HPA and PDB configured"

# Apply Network Policy
kubectl apply -f networkpolicy.yml
print_success "Network policy applied"

# Wait for deployment to be ready
print_status "Waiting for deployment to be ready..."
kubectl wait --for=condition=available --timeout=300s deployment/portfolio-deployment -n portfolio

print_success "Deployment is ready!"

# Show deployment status
print_status "Deployment Status:"
kubectl get all -n portfolio

# Get service URLs
print_status "Service Information:"
kubectl get svc -n portfolio

# If using minikube, show URL
if kubectl config current-context | grep -q "minikube"; then
    print_status "Getting Minikube service URL..."
    minikube service portfolio-service -n portfolio --url
fi

print_success "🎉 Portfolio deployment completed successfully!"
print_status "Your portfolio is now running on Kubernetes!"