# Quick Customization Guide - Global Traders Website

## 🎨 How to Customize the Website

### 1. Change Colors & Theme

Edit the dark theme in **[src/App.jsx](src/App.jsx)**:

```javascript
const darkTheme = createTheme({
  palette: {
    primary: {
      main: '#00d4ff',  // Change primary color here
    },
    secondary: {
      main: '#0099ff',  // Change secondary color here
    },
    background: {
      default: '#0f0f1e',  // Change background color here
    },
  },
});
```

### 2. Update Company Information

#### Email & Address
Edit **[src/components/Footer.jsx](src/components/Footer.jsx)** and **[src/components/Contact.jsx](src/components/Contact.jsx)**:
- Find and replace email: `info.globaltraders.info@gmail.com`
- Find and replace address: `M/S Global Traders...`

#### Business Hours
Edit **[src/components/Contact.jsx](src/components/Contact.jsx)**:
- Update the "Business Hours" text in the contactMethods array

### 3. Change Company Name & Branding

#### Website Title
In **[src/components/Header.jsx](src/components/Header.jsx)**, change:
```javascript
<Box sx={{...}}>Global Traders</Box>
```

In **[src/components/Footer.jsx](src/components/Footer.jsx)**, change:
```javascript
<Box>Global Traders</Box>
```

### 4. Update Services List

Edit **[src/components/About.jsx](src/components/About.jsx)**:

Find the `services` array and update:
```javascript
const services = [
  {
    icon: <CodeIcon sx={{ fontSize: '3rem', color: '#00d4ff' }} />,
    title: 'Your Service Name',
    description: 'Your service description here',
  },
  // Add more services...
];
```

### 5. Edit Statistics on Home Page

In **[src/components/Home.jsx](src/components/Home.jsx)**, find the statistics grid:

```javascript
<Typography sx={{ fontSize: '2rem', fontWeight: 'bold', color: '#00d4ff' }}>
  500+  {/* Change this number */}
</Typography>
<Typography sx={{ color: '#b0b0b0', fontSize: '0.9rem' }}>
  Clients Served  {/* Change this label */}
</Typography>
```

### 6. Change Section Content

#### Home Section
- Edit welcome message in **[src/components/Home.jsx](src/components/Home.jsx)**
- Replace the hero image by updating the import path

#### About Section
- Edit company description and mission in **[src/components/About.jsx](src/components/About.jsx)**
- Update values list in the "Our Values" section

#### Contact Section
- Modify form fields in **[src/components/Contact.jsx](src/components/Contact.jsx)**
- The form currently logs to console; add backend integration as needed

### 7. Replace Hero Image

Replace **[src/assets/homepage.svg](src/assets/homepage.svg)** with your own image:

1. Place your image in `src/assets/`
2. Update the import in **[src/components/Home.jsx](src/components/Home.jsx)**:
```javascript
import homepageImage from '../assets/your-image.jpg';
```

### 8. Add New Sections

To add a new section:

1. Create a new component file: `src/components/YourSection.jsx`
2. Import it in **[src/App.jsx](src/App.jsx)**
3. Add it to the main layout with a ref:
```javascript
<div ref={yourRef}>
  <YourSection />
</div>
```

### 9. Update Navigation

To add new navigation items, edit **[src/components/Header.jsx](src/components/Header.jsx)**:

```javascript
const navItems = ['Home', 'About', 'Contact', 'Your New Item'];
```

Then handle navigation in **[src/App.jsx](src/App.jsx)** by adding cases to the `handleNavigation` function.

### 10. Enable Contact Form Backend

In **[src/components/Contact.jsx](src/components/Contact.jsx)**, replace the `handleSubmit` function:

```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch('YOUR_BACKEND_API', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    // Handle response
  } catch (error) {
    console.error('Error:', error);
  }
};
```

## 📱 Responsive Breakpoints

The website uses MUI breakpoints:
- `xs`: 0px - Mobile phones
- `sm`: 600px - Tablets
- `md`: 900px - Small desktops
- `lg`: 1200px - Desktops
- `xl`: 1536px - Large desktops

To customize for specific breakpoints, use:
```jsx
sx={{
  fontSize: { xs: '1rem', sm: '1.5rem', md: '2rem' },
  padding: { xs: 1, md: 3 },
}}
```

## 🎯 Typography & Fonts

To change fonts, edit the typography in the theme:

```javascript
typography: {
  fontFamily: 'Your Font Family',
  h1: { fontSize: '3.5rem' },
  h2: { fontSize: '2.5rem' },
  // etc.
}
```

## 🔗 Adding External Links

Add links to social media or external sites by updating Footer:

```javascript
<Link
  href="https://your-link.com"
  target="_blank"
  rel="noopener noreferrer"
  sx={{ color: '#00d4ff' }}
>
  Your Link Text
</Link>
```

## 🚀 Performance Tips

1. Optimize images: Convert to WebP format
2. Use `lazy` loading for images: `loading="lazy"`
3. Minimize animations for slower devices
4. Use production build: `npm run build`
5. Enable gzip compression on server

## 🐛 Common Issues & Solutions

### Issue: Styles not applying
- **Solution**: Ensure you're inside a `ThemeProvider` component (already done in App.jsx)

### Issue: Navigation not scrolling
- **Solution**: Check that ref is properly attached to the target component

### Issue: Images not loading
- **Solution**: Verify image path and ensure file exists in `src/assets/`

### Issue: MUI components not styled correctly
- **Solution**: Ensure MUI theme is properly configured and CssBaseline is included

## 📚 Useful Resources

- [Material-UI Documentation](https://mui.com)
- [React Documentation](https://react.dev)
- [Vite Documentation](https://vite.dev)
- [CSS-in-JS with Emotion](https://emotion.sh)

## 💾 Saving & Building

```bash
# Development with hot reload
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Lint code
npm run lint
```

---

**Need Help?** Check the component files directly - they have detailed comments explaining each section!
