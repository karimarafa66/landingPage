# Web Developer Landing Page Mockup

A professional landing page mockup for showcasing web development services, specifically designed for Angular specialists.

## 🚀 Features

### Design & UI
- **Modern Gradient Design**: Eye-catching hero section with gradient background
- **Responsive Layout**: Fully responsive design that works on all devices
- **Professional Typography**: Clean, readable fonts with proper hierarchy
- **Interactive Elements**: Hover effects and smooth animations
- **Accessibility**: WCAG compliant with proper focus states and reduced motion support

### Sections Included
1. **Hero Section**: Compelling headline with call-to-action
2. **About Me**: Personal introduction with tech stack
3. **Services**: Grid layout showcasing offered services
4. **Portfolio**: Showcase of previous work (placeholder images)
5. **Testimonials**: Client feedback section
6. **Pricing**: Three-tier pricing structure
7. **Contact**: Contact form with validation
8. **Footer**: Social links and navigation

### Technical Features
- **CSS Custom Properties**: Maintainable color scheme and spacing
- **Smooth Scrolling**: Enhanced navigation experience
- **Form Validation**: Client-side form validation with user feedback
- **Intersection Observer**: Scroll-triggered animations
- **SEO Optimized**: Meta tags and semantic HTML structure
- **Performance**: Optimized loading and minimal dependencies

## 📁 Project Structure

```
mock/
├── index.html          # Main HTML structure
├── style.css           # Styling and responsive design
├── script.js           # Interactive functionality
├── deploy.js           # Deployment helper script
├── package.json        # Project configuration and npm scripts
├── .nojekyll           # Prevents GitHub Pages from using Jekyll
├── .gitattributes      # Git file attributes configuration
├── .gitignore          # Git ignore configuration
└── README.md           # Project documentation
```

## 🛠️ Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with custom properties and grid/flexbox
- **Vanilla JavaScript**: Interactive functionality without frameworks
- **Font Awesome**: Icon library for visual elements

## 🚀 Deployment

### Local Development

1. **Install dependencies**:
   ```
   npm install
   ```

2. **Start local development server**:
   ```
   npm start
   ```
   This will start a local server using the `serve` package.

### GitHub Pages Deployment

This project includes tools to ensure proper deployment on GitHub Pages:

1. **Run the deployment helper script**:
   ```
   npm run deploy
   ```
   or
   ```
   node deploy.js
   ```
   This script:
   - Ensures all image paths use relative URLs (without leading slashes)
   - Creates/verifies the .nojekyll file exists
   - Prepares your project for GitHub Pages deployment

2. **Common GitHub Pages Issues Fixed**:
   - **Image Path Issues**: The script fixes absolute paths that cause images not to display
   - **Jekyll Processing**: The .nojekyll file prevents GitHub's Jekyll processor from altering your files

3. **Manual Checks**:
   - Always ensure image paths use the format `images/filename.jpg` (not `/images/filename.jpg`)
   - Use relative paths for all resources

4. **Deployment Steps**:
   - Commit all changes to your repository
   - Push to GitHub
   - Enable GitHub Pages in your repository settings (Settings > Pages)
   - Select the branch you want to deploy

## 🎨 Color Scheme

- **Primary**: `#6a11cb` (Purple)
- **Secondary**: `#2575fc` (Blue)
- **Accent**: `#ff4081` (Pink)
- **Background**: `#f4f7f6` (Light Gray)
- **Text**: `#333` (Dark Gray)

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: 480px - 767px
- **Small Mobile**: Below 480px

## 🚀 Getting Started

1. **View the Mockup**: Simply open `index.html` in your web browser
2. **Local Development**: Use a local server for best experience:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   ```
3. **Customization**: Edit the files to match your branding and content

## 🔧 Customization Guide

### Colors
Update the CSS custom properties in `style.css`:
```css
:root {
    --primary-color: #your-color;
    --secondary-color: #your-color;
    --accent-color: #your-color;
}
```

### Content
- Replace placeholder text in `index.html`
- Update portfolio images with your actual work
- Modify pricing tiers to match your services
- Add your real contact information

### Branding
- Replace placeholder profile image
- Update meta tags with your information
- Customize social media links

## 🎯 Next Steps for Angular Implementation

1. **Angular CLI Setup**:
   ```bash
   ng new landing-page
   cd landing-page
   ```

2. **Component Structure**:
   - `HeroComponent`
   - `AboutComponent`
   - `ServicesComponent`
   - `PortfolioComponent`
   - `TestimonialsComponent`
   - `PricingComponent`
   - `ContactComponent`
   - `FooterComponent`

3. **Angular Features to Add**:
   - Angular Material for UI components
   - Reactive forms for contact form
   - Angular Animations for smooth transitions
   - Angular Universal for SSR
   - PWA capabilities

4. **Additional Enhancements**:
   - Content Management System integration
   - Blog section
   - Multi-language support
   - Analytics integration
   - Performance monitoring

## 📈 Performance Considerations

- **Optimized Images**: Use WebP format for better compression
- **Lazy Loading**: Implement for portfolio images
- **Critical CSS**: Inline critical styles for faster rendering
- **Minification**: Minify CSS and JavaScript for production
- **CDN**: Use CDN for external resources

## 🔍 SEO Features

- Semantic HTML structure
- Meta descriptions and keywords
- Open Graph tags for social sharing
- Structured data markup (can be added)
- Fast loading times
- Mobile-friendly design

## 📞 Support

For questions or customization help, feel free to reach out through the contact form on the landing page.

---

**Note**: This is a mockup template. Replace all placeholder content with your actual information before going live.