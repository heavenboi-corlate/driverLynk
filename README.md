# DriverLynk - Premium Driver Staffing Agency

A modern React-based website for DriverLynk, a premium driver staffing agency in the UK. Built with React, Tailwind CSS, and Vite for optimal performance and developer experience.

## 🚀 Features

### Modern React Architecture
- **React 18** with functional components and hooks
- **React Router** for seamless navigation
- **Vite** for fast development and optimized builds
- **Tailwind CSS** for responsive, utility-first styling

### Professional Components
- **HeroSection**: Dynamic hero sections with customizable backgrounds and animations
- **ServiceCard**: Interactive service cards with hover effects and feature lists
- **TestimonialCard**: Professional testimonial display with star ratings
- **StatsSection**: Animated statistics showcase
- **Navigation**: Responsive navigation with scroll effects and mobile menu

### Enhanced User Experience
- **Smooth Animations**: Custom CSS animations and transitions
- **Form Validation**: Real-time validation with error handling
- **Responsive Design**: Mobile-first approach with touch-friendly interactions
- **Accessibility**: WCAG compliant with reduced motion support
- **Performance**: Optimized loading and smooth scrolling

### Comprehensive Pages
- **Home**: Showcase of services, testimonials, and company stats
- **Services**: Detailed service offerings with process explanation
- **About**: Company information, team profiles, and values
- **Contact**: Contact form with validation and FAQ section
- **Hire Driver**: Comprehensive driver request form
- **Apply Driver**: Professional driver application form

## 🛠️ Technology Stack

- **Frontend**: React 18, React Router DOM
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Package Manager**: npm
- **Development**: Hot module replacement, ESLint

## 📁 Project Structure

```
driverLynk/
├── src/
│   ├── components/
│   │   ├── HeroSection.jsx      # Reusable hero sections
│   │   ├── ServiceCard.jsx      # Service display cards
│   │   ├── TestimonialCard.jsx  # Customer testimonials
│   │   ├── StatsSection.jsx     # Statistics display
│   │   ├── Navigation.jsx       # Main navigation
│   │   └── Footer.jsx           # Site footer
│   ├── pages/
│   │   ├── Home.jsx             # Landing page
│   │   ├── Services.jsx         # Services overview
│   │   ├── About.jsx            # Company information
│   │   ├── Contact.jsx          # Contact form
│   │   ├── HireDriver.jsx       # Driver request form
│   │   └── ApplyDriver.jsx      # Driver application
│   ├── App.jsx                  # Main app component
│   ├── main.jsx                 # App entry point
│   └── index.css                # Global styles and animations
├── public/                      # Static assets
├── package.json                 # Dependencies and scripts
├── vite.config.js              # Vite configuration
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
- **Primary Blue**: `#3b82f6` (Blue-600)
- **Secondary Red**: `#dc2626` (Red-600)
- **Success Green**: `#10b981` (Green-600)
- **Neutral Grays**: Various shades for text and backgrounds

### Typography
- **Headings**: Bold, responsive sizing
- **Body Text**: Clean, readable fonts
- **Buttons**: Medium weight with hover effects

### Components
- **Cards**: Rounded corners, subtle shadows, hover effects
- **Buttons**: Consistent styling with hover animations
- **Forms**: Clean inputs with focus states and validation
- **Navigation**: Transparent to solid background transition

## 📱 Responsive Design

The website is fully responsive with:
- **Mobile-first** approach
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Touch-friendly** interactions
- **Optimized** images and assets

## ♿ Accessibility

- **WCAG 2.1** compliant
- **Keyboard navigation** support
- **Screen reader** friendly
- **Reduced motion** support
- **High contrast** mode support
- **Focus indicators** for all interactive elements

## 🚀 Performance Features

- **Vite** for fast development and optimized builds
- **Code splitting** for better loading performance
- **Optimized images** and assets
- **Smooth animations** with hardware acceleration
- **Lazy loading** for better initial page load

## 📝 Form Features

### Contact Form
- Real-time validation
- Success/error feedback
- Required field indicators
- Email format validation

### Driver Request Form
- Comprehensive service selection
- Vehicle type options
- Urgency level selection
- Date and location inputs

### Driver Application Form
- Personal information collection
- License and experience details
- Vehicle type preferences
- Emergency contact information

## 🔧 Customization

### Adding New Pages
1. Create a new component in `src/pages/`
2. Add the route in `src/App.jsx`
3. Update navigation in `src/components/Navigation.jsx`

### Styling
- Use Tailwind CSS classes for styling
- Custom CSS in `src/index.css` for animations
- Component-specific styles can be added inline

### Content Updates
- Update content directly in component files
- Modify data arrays for services, testimonials, etc.
- Update contact information in relevant components

## 📄 License

This project is proprietary software for DriverLynk. All rights reserved.

## 🤝 Support

For technical support or questions about the website, please contact the development team.

---

**DriverLynk** - Your trusted partner for premium driver staffing solutions across the UK. 