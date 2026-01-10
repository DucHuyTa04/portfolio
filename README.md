# Duc Huy Ta - Portfolio Website

A modern, performant portfolio website showcasing Data Analysis and Machine Learning projects. Built with React and Sanity CMS.

![Portfolio Preview](./frontend_react/public/logo.webp)

## 🌟 Features

- **Responsive Design** - Optimized for all devices (mobile, tablet, desktop)
- **Accessibility** - WCAG 2.1 compliant with proper ARIA labels and keyboard navigation
- **SEO Optimized** - Comprehensive meta tags, Open Graph, and structured data
- **Performance** - Lazy loading, image optimization, and efficient rendering
- **Smooth Animations** - Powered by Framer Motion
- **CMS Integration** - Easy content management with Sanity
- **Contact Form** - EmailJS integration for direct messaging
- **Loading Screen** - Multi-language greeting animation

## 🚀 Tech Stack

### Frontend
- **React 18** - UI library with modern hooks
- **Framer Motion** - Animation library
- **React Scroll** - Smooth scrolling navigation
- **React Icons** - Icon library
- **EmailJS** - Contact form integration
- **Sanity Client** - CMS integration

### Backend
- **Sanity CMS** - Headless CMS for content management
- **Sanity Vision** - Query testing tool

## 📁 Project Structure

```
portfolio/
├── backend_sanity/          # Sanity CMS backend
│   ├── schemas/            # Content schemas
│   │   ├── index.js       # Schema exports
│   │   └── works.js       # Work/project schema
│   ├── sanity.config.js   # Sanity configuration
│   └── sanity.cli.js      # CLI configuration
│
└── frontend_react/         # React frontend
    ├── public/            # Static assets
    │   ├── index.html    # HTML template with SEO
    │   └── manifest.json # PWA manifest
    ├── src/
    │   ├── components/   # React components
    │   │   ├── About/   # About section
    │   │   ├── Contact/ # Contact form
    │   │   ├── ErrorBoundary/ # Error handling
    │   │   ├── Footer/  # Footer component
    │   │   ├── Intro/   # Hero section
    │   │   ├── LoadingScreen/ # Loading animation
    │   │   ├── Navbar/  # Navigation
    │   │   └── Work/    # Portfolio projects
    │   ├── assets/      # Images and media
    │   ├── App.jsx      # Main app component
    │   ├── client.js    # Sanity client setup
    │   ├── index.js     # App entry point
    │   └── index.css    # Global styles
    └── package.json     # Dependencies
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd portfolio
```

### 2. Backend Setup (Sanity)
```bash
cd backend_sanity
npm install
```

Create `.env` file in `backend_sanity/` (if needed):
```env
# Add any Sanity-specific environment variables here
```

Start Sanity Studio:
```bash
npm run dev
```
The Sanity Studio will be available at `http://localhost:3333`

### 3. Frontend Setup (React)
```bash
cd frontend_react
npm install
```

Create `.env` file in `frontend_react/`:
```env
# Sanity Configuration
REACT_APP_SANITY_PROJECT_ID=your_project_id_here
REACT_APP_SANITY_TOKEN=your_token_here

# EmailJS Configuration
REACT_APP_EMAILJS_SERVICE_ID=your_service_id_here
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id_here
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key_here
```

**Note:** Use `.env.example` as a template.

Start React development server:
```bash
npm start
```
The website will be available at `http://localhost:3000`

## 🔑 Environment Variables

### Frontend Required Variables:

| Variable | Description | Where to Get |
|----------|-------------|--------------|
| `REACT_APP_SANITY_PROJECT_ID` | Your Sanity project ID | Sanity dashboard |
| `REACT_APP_SANITY_TOKEN` | Sanity API token | Sanity dashboard > API settings |
| `REACT_APP_EMAILJS_SERVICE_ID` | EmailJS service ID | EmailJS dashboard |
| `REACT_APP_EMAILJS_TEMPLATE_ID` | EmailJS template ID | EmailJS dashboard |
| `REACT_APP_EMAILJS_PUBLIC_KEY` | EmailJS public key | EmailJS dashboard |

## 📦 Build for Production

### Frontend
```bash
cd frontend_react
npm run build
```
This creates an optimized production build in the `build/` folder.

### Backend
```bash
cd backend_sanity
npm run build
```

### Deploy Sanity Studio
```bash
cd backend_sanity
npm run deploy
```

## 🎨 Customization

### Colors
Edit color variables in `frontend_react/src/index.css`:
```css
:root {
    --primary-color: #B6C4B6;
    --secondary-color: #304D30;
    --white-color: white;
    --dark-green-color: #163020;
}
```

### Content
1. Start Sanity Studio: `cd backend_sanity && npm run dev`
2. Navigate to `http://localhost:3333`
3. Edit projects, add images, update descriptions

### Sections
Modify components in `frontend_react/src/components/`:
- **About** - Update skills, bio, profile image
- **Work** - Projects are managed via Sanity
- **Contact** - Update email address in Contact component
- **Footer** - Update social media links

## 🔒 Security Best Practices

- ✅ Environment variables for sensitive data
- ✅ `.env` files excluded from Git
- ✅ Error boundaries for graceful error handling
- ✅ Input validation on contact form
- ✅ Sanitized user inputs

## ♿ Accessibility Features

- ✅ Semantic HTML5 elements
- ✅ ARIA labels and roles
- ✅ Keyboard navigation support
- ✅ Focus indicators
- ✅ Skip to main content link
- ✅ Screen reader compatible
- ✅ Alt text for all images

## 🚀 Performance Optimizations

- ✅ Lazy loading images
- ✅ React.memo for expensive components
- ✅ Efficient state management
- ✅ Image preloading
- ✅ Code splitting ready
- ✅ WebP image format
- ✅ Reduced loading time (800ms)

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🐛 Troubleshooting

### Issue: "Cannot connect to Sanity"
**Solution:** Check your `REACT_APP_SANITY_PROJECT_ID` and `REACT_APP_SANITY_TOKEN` in `.env`

### Issue: "EmailJS not sending messages"
**Solution:** Verify EmailJS credentials in `.env` and check EmailJS dashboard for service status

### Issue: "Images not loading"
**Solution:** Ensure Sanity images are published and check CORS settings in Sanity dashboard

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Duc Huy Ta**
- Email: taduchuy04@gmail.com
- Location: Montreal, Canada
- University: Concordia University
- Program: Computer Science

## 🙏 Acknowledgments

- [React](https://reactjs.org/)
- [Sanity.io](https://www.sanity.io/)
- [Framer Motion](https://www.framer.com/motion/)
- [EmailJS](https://www.emailjs.com/)
- [React Icons](https://react-icons.github.io/react-icons/)

---

Made with ❤️ by Duc Huy Ta
