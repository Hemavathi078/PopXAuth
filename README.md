# PopX Mobile App - React.js Interview Assignment

A pixel-perfect mobile app interface built with React.js, featuring a multi-screen user flow with seamless navigation.

## 🚀 Live Demo

- **Hosted Application**: [Deploy to Netlify/Vercel after building]
- **GitHub Repository**: https://github.com/Hemavathi078/PopXAuth

## 📱 Features

- **Card-Based Design**: Clean mobile card interface with rounded corners
- **Bottom Content Alignment**: Content positioned at bottom of card container
- **Floating Labels**: Modern input fields with floating labels and red asterisks
- **Component-Based Architecture**: Fully modular reusable UI components
- **Form Validation**: Real-time password validation with visual feedback
- **Phone Number Validation**: Numeric-only input for phone fields
- **Local Storage**: Persistent user data storage
- **Responsive Navigation**: Touch-friendly bottom navigation with larger icons

## 🎨 Screens

1. **Welcome Screen** - Landing page with call-to-action buttons (Step 1 of 4)
2. **Login Screen** - User authentication form (Step 2 of 4)
3. **Signup Screen** - User registration form with validation (Step 3 of 4)
4. **Profile Screen** - Account settings display (Step 4 of 4)

## 🛠️ Technology Stack

- **React.js 18.2.0** - Frontend framework
- **React Router DOM 6.3.0** - Client-side routing
- **CSS3** - Styling and animations
- **HTML5** - Semantic markup

## 📁 Project Structure

```
src/
├── components/
│   ├── common/
│   │   ├── Button.js              # Reusable button component
│   │   ├── FormInput.js           # Floating label input component
│   │   ├── RadioGroup.js          # Radio button group component
│   │   ├── BottomNavigation.js    # Bottom navigation bar
│   │   ├── PageTitle.js           # Page title component
│   │   └── ProfileCard.js         # User profile card component
│   ├── LandingScreen.js           # Welcome page (Step 1)
│   ├── LoginScreen.js             # Login page (Step 2)
│   ├── SignupScreen.js            # Registration page (Step 3)
│   └── ProfileScreen.js           # Profile page (Step 4)
├── App.js                         # Main application component
├── App.css                        # Global styles
├── index.js                       # Application entry point
└── index.css                      # Base styles and card layout
```

## 🔧 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/Hemavathi078/PopXAuth.git
   cd PopXAuth
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 🎯 Component Architecture

### Reusable Components

- **FormInput**: Floating label input fields with validation and error states
- **Button**: Primary and secondary button variants with hover effects
- **RadioGroup**: Radio button groups with floating labels
- **BottomNavigation**: Navigation bar with home, previous/next, and step indicator
- **PageTitle**: Consistent page titles and subtitles with center alignment
- **ProfileCard**: User profile display with avatar and description

### Page Components

Each screen is built using the reusable components above, ensuring consistency and maintainability.

## 🎨 Design Implementation

- **Card Container**: Mobile app appears as centered card with shadow and rounded corners
- **Bottom Alignment**: Content positioned at bottom of card for modern mobile feel
- **Floating Labels**: Input fields with labels inside borders and red asterisks for required fields
- **Purple Theme**: Consistent purple color scheme for labels and buttons
- **Clean Typography**: Optimized font sizes and spacing for mobile readability
- **Touch-Friendly**: Larger navigation icons and proper button sizing

## 🔄 Navigation Flow

```
Welcome Screen (1/4) → Login Screen (2/4) → Signup Screen (3/4) → Profile Screen (4/4)
```

**Navigation Features:**
- Home icon to return to welcome screen
- Left/Right arrows for step navigation
- Step indicator showing current progress
- Seamless transitions between screens

## 📱 Responsive Design

- **Mobile First**: Optimized for 375px width
- **Centered Layout**: App container centered on larger screens
- **Flexible Components**: Adapts to different screen sizes
- **Touch-Friendly**: Appropriate button sizes and spacing

## 🚀 Deployment

### Netlify Deployment
1. Build the project: `npm run build`
2. Deploy the `build` folder to Netlify
3. Configure redirects for React Router

### Vercel Deployment
1. Connect your GitHub repository to Vercel
2. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `build`
3. Deploy automatically on push

## 🧪 Testing

Run the application locally and test:
- Form validation on all screens
- Navigation between screens
- Responsive design on different screen sizes
- Data persistence using localStorage

## 📋 Development Process

1. **Analysis**: Studied Adobe XD design specifications
2. **Planning**: Created component hierarchy and routing structure
3. **Development**: Built reusable components first, then assembled screens
4. **Styling**: Implemented pixel-perfect CSS matching the design
5. **Testing**: Verified functionality and responsiveness
6. **Deployment**: Hosted on production platform

## 🎯 Key Features Implemented

- ✅ **Card-based mobile interface** with centered layout
- ✅ **Bottom content alignment** matching modern mobile design
- ✅ **Floating labels** with red asterisks for required fields
- ✅ **Component-based architecture** with full modularity
- ✅ **Real-time form validation** with visual feedback
- ✅ **Phone number validation** (numeric input only)
- ✅ **Password strength validation** with 5 security rules
- ✅ **Responsive navigation** with larger touch-friendly icons
- ✅ **Clean, maintainable code** structure

## 👨‍💻 Author

**Hemavathi078**
- GitHub: https://github.com/Hemavathi078
- Email: hemavathip087@gmail.com
- Repository: https://github.com/Hemavathi078/PopXAuth

## 📄 License

This project is created for interview assessment purposes.
