# Kapil Jatav Portfolio - Kubernetes Deployment

This directory contains all the Kubernetes manifests and deployment scripts for the Kapil Jatav DevOps Portfolio application.

## 📁 Directory Structure

```
k8s/
├── namespace.yml           # Namespace definition
├── deployment.yml          # Main application deployment
├── service.yml            # NodePort service
├── clusterIP_service.yml  # ClusterIP service
├── lb.yml                 # LoadBalancer service
├── ingress.yml            # Ingress configuration
├── configmap.yml          # Application configuration
├── secret.yml             # Sensitive data (EmailJS keys)
├── serviceaccount.yml     # Service account and RBAC
├── hpa.yml                # Horizontal Pod Autoscaler
├── pdb.yml                # Pod Disruption Budget
├── networkpolicy.yml      # Network security policy
├── kustomization.yml      # Kustomize configuration
├── deploy.sh              # Deployment script
├── cleanup.sh             # Cleanup script
└── README.md              # This file
```

## 🚀 Quick Deployment

### Prerequisites

- Kubernetes cluster (minikube, EKS, GKE, AKS, etc.)
- kubectl configured
- Docker installed
- Ingress controller (for ingress functionality)

### Deploy the Application

```bash
# Navigate to k8s directory
cd k8s

# Run the deployment script
./deploy.sh
```

### Manual Deployment

If you prefer manual deployment:

```bash
# Build the Docker image
docker build -t portfolio-app:latest ..

# Apply manifests in order
kubectl apply -f namespace.yml
kubectl apply -f serviceaccount.yml
kubectl apply -f configmap.yml
kubectl apply -f secret.yml
kubectl apply -f deployment.yml
kubectl apply -f clusterIP_service.yml
kubectl apply -f service.yml
kubectl apply -f ingress.yml
kubectl apply -f hpa.yml
kubectl apply -f pdb.yml
kubectl apply -f networkpolicy.yml
```

## 🔧 Configuration

### Environment Variables

The application uses the following environment variables (configured in ConfigMap):

- `NODE_ENV`: Set to "production"
- `PORT`: Application port (80)

### Secrets

EmailJS configuration is stored in Kubernetes secrets:

- `emailjs-service-id`: EmailJS service ID
- `emailjs-template-id`: EmailJS template ID  
- `emailjs-public-key`: EmailJS public key

To update secrets:

```bash
# Encode your values
echo -n "your-service-id" | base64
echo -n "your-template-id" | base64
echo -n "your-public-key" | base64

# Update secret.yml with encoded values
kubectl apply -f secret.yml
```

## 📊 Monitoring and Scaling

### Horizontal Pod Autoscaler (HPA)

The HPA automatically scales the application based on:

- CPU utilization (target: 70%)
- Memory utilization (target: 80%)
- Min replicas: 2
- Max replicas: 10

### Pod Disruption Budget (PDB)

Ensures at least 1 pod is always available during voluntary disruptions.

### Resource Limits

Each pod has:

- **Requests**: 64Mi memory, 50m CPU
- **Limits**: 256Mi memory, 200m CPU

## 🌐 Access Methods

### 1. NodePort Service

Access via NodePort (30001):

```bash
# Get node IP
kubectl get nodes -o wide

# Access application
curl http://<NODE_IP>:30001
```

### 2. LoadBalancer Service

For cloud environments:

```bash
kubectl get svc portfolio-loadbalancer -n portfolio
```

### 3. Ingress

Configure DNS to point to your ingress controller:

- `portfolio.kapiljatav.dev`
- `www.portfolio.kapiljatav.dev`

### 4. Port Forward (Development)

```bash
kubectl port-forward svc/portfolio-clusterip 8080:80 -n portfolio
```

Then access: http://localhost:8080

## 🔒 Security Features

### Network Policy

Restricts network traffic to only necessary communications:

- Ingress: Only from ingress controller and same namespace
- Egress: DNS, HTTP, and HTTPS traffic only

### Security Context

- Runs as non-root user (UID: 101)
- Read-only root filesystem
- Drops all capabilities
- Prevents privilege escalation

### RBAC

Service account with minimal required permissions:

- Read access to pods, services, configmaps
- Read access to deployments and replicasets

## 📈 Health Checks

### Liveness Probe

- Endpoint: `GET /`
- Initial delay: 30s
- Period: 10s
- Timeout: 5s
- Failure threshold: 3

### Readiness Probe

- Endpoint: `GET /`
- Initial delay: 5s
- Period: 5s
- Timeout: 3s
- Failure threshold: 3

## 🛠️ Troubleshooting

### Check Pod Status

```bash
kubectl get pods -n portfolio
kubectl describe pod <pod-name> -n portfolio
```

### View Logs

```bash
kubectl logs -f deployment/portfolio-deployment -n portfolio
```

### Check Services

```bash
kubectl get svc -n portfolio
kubectl describe svc portfolio-service -n portfolio
```

### Check Ingress

```bash
kubectl get ingress -n portfolio
kubectl describe ingress portfolio-ingress -n portfolio
```

### Debug Network Issues

```bash
# Test service connectivity
kubectl run debug --image=busybox -it --rm --restart=Never -n portfolio -- sh

# Inside the debug pod:
nslookup portfolio-clusterip
wget -qO- http://portfolio-clusterip
```

## 🧹 Cleanup

To remove all resources:

```bash
./cleanup.sh
```

Or manually:

```bash
kubectl delete namespace portfolio
```

## 📝 Customization

### Update Image

```bash
# Build new image
docker build -t portfolio-app:v2.0.0 ..

# Update deployment
kubectl set image deployment/portfolio-deployment portfolio-container=portfolio-app:v2.0.0 -n portfolio
```

### Scale Application

```bash
# Manual scaling
kubectl scale deployment portfolio-deployment --replicas=5 -n portfolio

# Update HPA limits
kubectl patch hpa portfolio-hpa -n portfolio -p '{"spec":{"maxReplicas":15}}'
```

### Update Configuration

```bash
# Edit ConfigMap
kubectl edit configmap portfolio-config -n portfolio

# Restart deployment to pick up changes
kubectl rollout restart deployment/portfolio-deployment -n portfolio
```

## 🏷️ Labels and Annotations

All resources use consistent labeling:

- `app: portfolio`
- `component: frontend|security|config|etc`
- `version: v1.0.0`
- `owner: kapil-jatav`
- `environment: production`

## 📚 Additional Resources

- [Kubernetes Documentation](https://kubernetes.io/docs/)
- [Nginx Ingress Controller](https://kubernetes.github.io/ingress-nginx/)
- [Horizontal Pod Autoscaler](https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/)
- [Network Policies](https://kubernetes.io/docs/concepts/services-networking/network-policies/)

---

**Author**: Kapil Jatav  
**Email**: kapiljatav4991@gmail.com  
**GitHub**: https://github.com/jatavkapil123