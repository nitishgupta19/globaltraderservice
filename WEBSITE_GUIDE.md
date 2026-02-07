# Global Traders - IT Services Website

A modern, professional IT services website built with **React**, **Material-UI (MUI)**, and **Vite**. The website features a sleek dark theme with smooth scrolling navigation and fully responsive design.

## 📋 Project Structure

```
src/
├── components/
│   ├── Header.jsx        # Navigation component with sticky header
│   ├── Home.jsx          # Hero section with image and CTA buttons
│   ├── About.jsx         # Company info, mission, and services
│   ├── Contact.jsx       # Contact form and business information
│   └── Footer.jsx        # Footer with links and company details
├── assets/
│   ├── homepage.svg      # Hero section image (SVG format)
│   └── react.svg         # React logo
├── App.jsx               # Main app component with routing logic
├── App.css               # Application styles
├── index.css             # Global styles
└── main.jsx              # React entry point
```

## ✨ Features

### 1. **Responsive Navigation Header**
   - Sticky header that stays visible while scrolling
   - Smooth gradient background (dark theme)
   - Desktop navigation with hover effects
   - Mobile-responsive hamburger menu
   - Logo clickable to return to home
   - Animated underline on hover for nav items

### 2. **Home Section**
   - Hero content on the left side
   - Large responsive image on the right side
   - Welcome message and company description
   - Call-to-action (CTA) buttons:
     - "Get Started" button (solid cyan gradient)
     - "Learn More" button (outlined style)
   - Statistics section with key metrics:
     - 500+ Clients Served
     - 15+ Years Experience
     - 100+ Team Members
     - 99% Satisfaction Rate

### 3. **About Section**
   - Company information and history
   - Mission statement in highlighted box
   - Core values list (with bullet points)
   - Services grid (4 columns on desktop):
     - Custom Development
     - Cybersecurity
     - Performance Optimization
     - 24/7 Support
   - Interactive cards with hover effects

### 4. **Contact Section**
   - Contact form with fields:
     - Name
     - Email
     - Subject
     - Message (textarea)
   - Contact information cards:
     - Email: info.globaltraders.info@gmail.com
     - Address: M/S Global Traders, Building no-563, Third Floor, Shop No. T-40, Gali Bhel Sahib Mori Gate, Delhi 110006
     - Business Hours: Monday - Friday: 9:00 AM - 6:00 PM IST
   - Success message after form submission
   - Placeholder for map integration

### 5. **Footer**
   - Company information section
   - Quick links
   - Contact information with icons
   - Copyright information
   - Dark theme with gradient background

### 6. **Dark Theme**
   - Primary color: Cyan (#00d4ff)
   - Secondary color: Blue (#0099ff)
   - Background gradient: #0f0f1e to #1a1a2e
   - Professional dark UI with accent colors
   - Custom scrollbar styling with gradient

## 🎨 Design Features

### Color Scheme
- **Primary Gradient**: Cyan (#00d4ff) to Blue (#0099ff)
- **Background**: Dark navy gradient (#0f0f1e to #1a1a2e)
- **Text Primary**: White (#ffffff)
- **Text Secondary**: Light gray (#a0a0a0)
- **Accents**: Darker blue (#16213e)

### Typography
- **Font Family**: Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, sans-serif
- **Headings**: Bold with gradient text effect
- **Body Text**: Clear and readable on dark backgrounds

### Animations & Effects
- Smooth scroll behavior
- Hover effects on buttons and cards
- Transform animations on card hover
- Gradient text effects
- Backdrop blur effects on cards

## 🚀 Getting Started

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Environment Setup

The project uses:
- **Node.js**: 20.19.0+ or 22.12.0+
- **npm**: 10.8.1+
- **React**: 19.2.0+
- **Vite**: 7.2.4+
- **Material-UI**: 7.3.7+

## 📱 Responsive Design

The website is fully responsive with breakpoints for:
- **Mobile**: xs (0px) and sm (600px)
- **Tablet**: md (900px)
- **Desktop**: lg (1200px) and xl (1536px)

Mobile-specific features:
- Hamburger menu replaces desktop navigation
- Single column layout for all sections
- Touch-friendly button sizes
- Optimized image sizes

## 🔧 Navigation & Scrolling

**Smooth Scroll Navigation**: Click any navigation item or button to smoothly scroll to that section:
- Header Logo → Home
- "Home" button → Home section
- "About" button → About section
- "Contact" button → Contact section

Navigation is handled using React refs and the `scrollIntoView()` API for smooth scrolling behavior.

## 📧 Contact Information

- **Email**: [info.globaltraders.info@gmail.com](mailto:info.globaltraders.info@gmail.com)
- **Address**: M/S Global Traders, Building no-563, Third Floor, Shop No. T-40, Gali Bhel Sahib Mori Gate, Delhi 110006

## 🎯 Company Details

**Global Traders** - Professional IT Services Company

### Services Offered
- Custom Software Development
- Cybersecurity Solutions
- Performance Optimization
- 24/7 Technical Support

### Key Statistics
- **Experience**: 15+ years in IT services
- **Clients**: 500+ satisfied clients
- **Team**: 100+ professionals
- **Satisfaction**: 99% client satisfaction rate

## 📦 Build & Deployment

### Production Build
```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

### Deployment
The website can be deployed to:
- Vercel
- Netlify
- GitHub Pages
- Traditional web hosting
- Docker containers

## 🔐 Security & Best Practices

- Uses React best practices
- ESLint configuration for code quality
- CssBaseline from MUI for consistent styling across browsers
- Secure email links with proper href attributes
- Form validation ready (can be enhanced with backend integration)

## 📝 Notes

- The contact form currently logs data to console. Integrate with backend for email functionality
- Map placeholder can be replaced with actual map integration (Google Maps, Mapbox, etc.)
- All colors and gradients follow the dark theme design system
- Images are optimized SVG format for better performance
- The design is fully accessible with semantic HTML and proper ARIA labels

## 🤝 Contributing

For improvements or bug fixes, please update the respective component files in `src/components/`.

## 📄 License

All rights reserved. Global Traders © 2026
