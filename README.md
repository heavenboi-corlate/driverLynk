# DriverLynk - Premium Driver Staffing Agency

A modern, professional website for DriverLynk, a UK-based premium driver staffing agency. Built with React, Vite, and Tailwind CSS, featuring a dark theme with glass morphism effects and multi-step application forms.

![DriverLynk Preview](https://img.shields.io/badge/Status-Production%20Ready-brightgreen)
![React](https://img.shields.io/badge/React-18.2.0-blue)
![Vite](https://img.shields.io/badge/Vite-5.0.0-purple)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.3.0-38B2AC)

## 🌟 Features

### 🎨 **Modern Design System**
- **Dark Theme**: Professional dark color scheme with glass morphism effects
- **Brand Colors**: Consistent primary blue (#0A1931), accent red (#E74C3C), and yellow (#F1C40F)
- **Typography**: Clean Inter font with responsive sizing
- **Animations**: Smooth fade-in, float, and hover animations
- **Glass Morphism**: Premium backdrop blur effects throughout

### 📱 **Responsive Design**
- **Mobile-First**: Optimized for all device sizes
- **Touch-Friendly**: Optimized interactions for mobile devices
- **Performance**: Reduced animations on mobile for better performance
- **Accessibility**: WCAG 2.1 compliant with keyboard navigation

### 🚀 **Interactive Forms**
- **Multi-Step Progression**: Both HireDriver and ApplyDriver forms feature 4-step progression
- **Real-time Validation**: Comprehensive form validation with error handling
- **Progress Indicators**: Visual progress bars and step indicators
- **Interactive Cards**: Clickable service and option cards with hover effects

### 🛠️ **Technical Excellence**
- **React 18**: Latest React features with hooks and modern patterns
- **Vite**: Fast development and optimized production builds
- **Tailwind CSS**: Utility-first CSS framework with custom design system
- **Component Architecture**: Reusable, modular components
- **Error Handling**: Comprehensive error boundaries and validation

## 📁 Project Structure

```
driverLynk/
├── src/
│   ├── components/
│   │   ├── HeroSection.jsx      # Reusable hero sections
│   │   ├── ServiceCard.jsx      # Service display cards
│   │   ├── TestimonialCard.jsx  # Customer testimonials
│   │   ├── ProgressBar.jsx      # Multi-step form progress
│   │   ├── FormField.jsx        # Reusable form inputs
│   │   ├── Navigation.jsx       # Main navigation
│   │   ├── Footer.jsx           # Site footer with Corlate attribution
│   │   ├── ToastContext.jsx     # Global notification system
│   │   └── LoadingSpinner.jsx   # Loading states
│   ├── pages/
│   │   ├── Home.jsx             # Landing page
│   │   ├── Services.jsx         # Services overview
│   │   ├── About.jsx            # Company information
│   │   ├── Contact.jsx          # Contact form
│   │   ├── HireDriver.jsx       # Multi-step driver request form
│   │   └── ApplyDriver.jsx      # Multi-step driver application
│   ├── App.jsx                  # Main app component with routing
│   ├── main.jsx                 # App entry point
│   └── index.css                # Global styles and animations
├── public/                      # Static assets
├── package.json                 # Dependencies and scripts
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind CSS configuration
└── README.md                   # Project documentation
```

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm (comes with Node.js)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd driverLynk
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
   Navigate to `http://localhost:5173` to view the application

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

## 🎨 Design System

### Color Palette
- **Primary Blue**: `#0A1931` (Dark Blue) - Main background
- **Accent Red**: `#E74C3C` (Vibrant Red) - Calls-to-action
- **Accent Yellow**: `#F1C40F` (Bright Yellow) - Highlights
- **Text Primary**: `#ECF0F1` (Light Grey) - Main text
- **Text Secondary**: `#bcccdc` (Medium Grey) - Secondary text

### Typography
- **Font Family**: Inter (Google Fonts)
- **Headings**: Bold, responsive sizing with tight line heights
- **Body Text**: Clean, readable with relaxed line heights
- **Buttons**: Medium weight with hover effects

### Components
- **Cards**: Glass morphism with backdrop blur and subtle borders
- **Buttons**: Gradient backgrounds with hover animations
- **Forms**: Clean inputs with focus states and validation
- **Navigation**: Transparent to solid background transition

## 📱 Responsive Design

The website is fully responsive with:
- **Mobile-first** approach
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Touch-friendly** interactions
- **Optimized** images and assets
- **Reduced motion** support for accessibility

## ♿ Accessibility

- **WCAG 2.1** compliant
- **Keyboard navigation** support
- **Screen reader** friendly
- **Reduced motion** support
- **High contrast** mode support
- **Focus indicators** for all interactive elements
- **ARIA labels** and semantic HTML

## 🚀 Performance Features

- **Vite** for fast development and optimized builds
- **Code splitting** for better loading performance
- **Optimized images** and assets
- **Smooth animations** with hardware acceleration
- **Lazy loading** for better initial page load
- **Mobile optimizations** for reduced animation complexity

## 📝 Form Features

### Contact Form
- Real-time validation
- Success/error feedback with toast notifications
- Required field indicators
- Email format validation

### HireDriver Form (Multi-Step)
- **Step 1**: Basic company information
- **Step 2**: Service requirements and vehicle types
- **Step 3**: Location details and urgency level
- **Step 4**: Additional information and budget
- Progress bar and step indicators
- Interactive card-based selections

### ApplyDriver Form (Multi-Step)
- **Step 1**: Personal information
- **Step 2**: Address and emergency contact
- **Step 3**: Driving license and experience
- **Step 4**: Availability and preferences
- Progress bar and step indicators
- Interactive card-based selections

## 🌐 Deployment

### GitHub Pages Deployment

1. **Add GitHub Pages dependency**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json scripts**
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Update vite.config.js for base path**
   ```javascript
   export default defineConfig({
     base: '/driverLynk/',
     // ... other config
   })
   ```

4. **Deploy to GitHub Pages**
   ```bash
   npm run deploy
   ```

5. **Configure GitHub Pages**
   - Go to repository Settings > Pages
   - Source: Deploy from a branch
   - Branch: gh-pages
   - Folder: / (root)

### Other Deployment Options

- **Netlify**: Connect repository and build with `npm run build`
- **Vercel**: Connect repository and build with `npm run build`
- **Firebase Hosting**: Use `firebase deploy` after build

## 🔧 Customization

### Adding New Pages
1. Create a new component in `src/pages/`
2. Add the route in `src/App.jsx`
3. Update navigation in `src/components/Navigation.jsx`

### Styling
- Modify `tailwind.config.js` for theme changes
- Update `src/index.css` for global styles
- Use design system classes for consistency

### Content
- Update hero data in each page component
- Modify service cards in `src/components/ServiceCard.jsx`
- Update testimonials and features arrays

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

For support, email hello@driverlynk.com or visit our website.

---

**Designed and Developed by [Corlate Technologies](https://corlate.co.za)** 