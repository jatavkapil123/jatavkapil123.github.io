# Portfolio Website

A modern, responsive portfolio website built with React, Vite, and Bootstrap. Features a clean design with sections for projects, experience, certifications, and contact information.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with Bootstrap 5
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Interactive Components**: Dynamic project cards, experience timeline, and certification showcase
- **Contact Form**: Integrated with EmailJS for direct contact functionality
- **Performance Optimized**: Built with Vite for fast development and optimized production builds
- **Docker Support**: Containerized with Nginx for production deployment
- **Kubernetes Ready**: Complete K8s manifests for scalable deployment

## 🛠️ Tech Stack

- **Frontend**: React 19, Vite 6
- **Styling**: Bootstrap 5, Custom CSS
- **Icons**: React Icons
- **Animations**: Framer Motion
- **Email Service**: EmailJS
- **Build Tool**: Vite
- **Containerization**: Docker + Nginx
- **Orchestration**: Kubernetes

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/          # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Aboutme.jsx
│   │   ├── Skills.jsx
│   │   ├── Projectscards.jsx
│   │   ├── Experience.jsx
│   │   ├── Certifications.jsx
│   │   ├── ContactMe.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── projectsData.js  # Project information
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── k8s/                     # Kubernetes manifests
├── public/                  # Static assets
├── Dockerfile              # Docker configuration
├── nginx.conf              # Nginx configuration
└── package.json
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Local Development

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## 🐳 Docker Deployment

### Build Docker Image

```bash
docker build -t portfolio .
```

### Run Container

```bash
docker run -p 80:80 portfolio
```

## ☸️ Kubernetes Deployment

The project includes complete Kubernetes manifests in the `k8s/` directory:

- `namespace.yml` - Dedicated namespace
- `deployment.yml` - Application deployment
- `service.yml` - ClusterIP service
- `lb.yml` - LoadBalancer service
- `ingress.yml` - Ingress configuration
- `configmap.yml` - Configuration management
- `hpa.yml` - Horizontal Pod Autoscaler

### Deploy to Kubernetes

```bash
# Deploy all resources
kubectl apply -f k8s/

# Or use the deployment script
chmod +x k8s/deploy.sh
./k8s/deploy.sh
```

### Cleanup

```bash
# Remove all resources
kubectl delete -f k8s/

# Or use the cleanup script
chmod +x k8s/cleanup.sh
./k8s/cleanup.sh
```

## 🌐 Render Deployment

### Method 1: Direct Git Deployment

1. **Connect Repository**
   - Go to [Render Dashboard](https://dashboard.render.com)
   - Click "New +" → "Static Site"
   - Connect your GitHub repository

2. **Configure Build Settings**
   - **Build Command**: `npm run build`
   - **Publish Directory**: `dist`
   - **Node Version**: `18` (or latest)

3. **Environment Variables** (if needed)
   - Add any required environment variables

4. **Deploy**
   - Click "Create Static Site"
   - Render will automatically build and deploy

### Method 2: Docker Deployment

1. **Create Web Service**
   - Go to Render Dashboard
   - Click "New +" → "Web Service"
   - Connect your repository

2. **Configure Docker Settings**
   - **Environment**: `Docker`
   - **Dockerfile Path**: `./Dockerfile`
   - **Port**: `80`

3. **Deploy**
   - Click "Create Web Service"

## 📧 Email Configuration

To enable the contact form:

1. **Create EmailJS Account**
   - Sign up at [EmailJS](https://www.emailjs.com/)
   - Create an email service
   - Create an email template

2. **Update Configuration**
   - Add your EmailJS credentials to the ContactMe component
   - Update service ID, template ID, and user ID

## 🎨 Customization

### Adding Projects

Edit `src/data/projectsData.js` to add your projects:

```javascript
{
  id: 1,
  title: "Your Project",
  description: "Project description",
  technologies: ["React", "Node.js"],
  githubUrl: "https://github.com/username/repo",
  liveUrl: "https://your-project.com",
  image: "/path/to/image.jpg"
}
```

### Updating Personal Information

- **About Section**: Edit `src/components/Aboutme.jsx`
- **Skills**: Update `src/components/Skills.jsx`
- **Experience**: Modify `src/components/Experience.jsx`
- **Certifications**: Update `src/components/Certifications.jsx`

### Styling

- **Global Styles**: `src/App.css`
- **Component Styles**: Inline styles or CSS modules
- **Bootstrap Customization**: Override Bootstrap variables

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run deploy` - Deploy to GitHub Pages

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (< 768px)

## 🚀 Performance Features

- **Code Splitting**: Automatic code splitting with Vite
- **Asset Optimization**: Optimized images and assets
- **Lazy Loading**: Components loaded on demand
- **Caching**: Nginx caching for static assets
- **Minification**: CSS and JS minification

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- **Email**: [your-email@example.com]
- **LinkedIn**: [Your LinkedIn Profile]
- **GitHub**: [Your GitHub Profile]

---

⭐ Star this repository if you found it helpful!