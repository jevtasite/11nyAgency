# Petra Nešić Sports Graphics Portfolio - Complete Specification

## Project Overview

Build a dynamic sports graphics portfolio website for **Petra Nešić** (@petragfx on Instagram) with the **Kinetic Arena** design system. The entire site should embody explosive energy and dynamic movement of sports, where every element feels like it's in action. The website showcases sports graphics across football, basketball, tennis, and other sports with motion-first design principles.

**Client Brand:** #7852a9 (Purple) and #ffffff (White) from existing logo

---

## Technology Stack

### Core Framework

- **React 18** with Hooks
- **Vite** (build tool and dev server)
- **React Router DOM** (for navigation)

### Styling & Animation

- **Tailwind CSS** (utility-first styling)
- **Framer Motion** (advanced animations and physics-based motion)
- **React Spring** (spring physics for micro-interactions)

### State Management

- **Zustand** (lightweight state management for filter states and gallery)

### Image Optimization

- **React Lazy Load Image Component** (lazy loading for portfolio images)
- **Sharp** (image optimization during build)

### Fonts

- **Druk Wide Bold** (Display/Headers - Athletic energy)
- **Inter Variable** (Body text - 400-600 weight range)
- **Monument Extended** (Stats and numerical highlights)

### Additional Libraries

- **lucide-react** (icons for navigation and UI elements)
- **react-intersection-observer** (scroll-triggered animations)
- **masonry-layout** or **react-masonry-css** (portfolio grid)
- **react-photo-view** or **yet-another-react-lightbox** (image gallery lightbox)

### Deployment

- **Vercel** (primary recommendation for automatic deployments)
- Alternative: **Netlify**

---

## Design System - Kinetic Arena

### Color Palette

```css
/* Primary Colors */
--brand-purple: #7852a9;        /* Authority, creativity, brand identity */
--pure-white: #ffffff;          /* Clean showcase areas, brand secondary */

/* Supporting Colors */
--deep-charcoal: #1a1a1a;       /* Grounding contrast for work */
--electric-mint: #00ff88;       /* Energy burst, CTAs, hover states */
--hot-magenta: #ff3366;         /* Secondary energy highlights */
--true-black: #0a0a0a;          /* Maximum contrast backgrounds */

/* Utility Colors */
--success: #00ff88;             /* Form success states */
--error: #ff3366;               /* Error states */
--overlay: rgba(10, 10, 10, 0.9); /* Modal/lightbox overlays */
```

**Psychological Reasoning:**
- Purple maintains brand authority and creative identity
- Black creates "spotlight" effect making graphics the hero
- Electric mint provides forward motion and urgency
- Hot magenta adds secondary energy without competing with purple
- High contrast ensures portfolio work remains the focal point

### Typography

#### Font Families
- **Display:** Druk Wide Bold - Compressed athletic energy
- **Body:** Inter Variable (400-600 weights)
- **Accent:** Monument Extended - For stats and numbers

#### Type Scale
```css
/* Headers */
--h1: 72px;          /* Hero headlines */
--h2: 48px;          /* Section titles */
--h3: 32px;          /* Subsections */
--h4: 24px;          /* Card titles */

/* Body */
--body-large: 20px;  /* Intro paragraphs */
--body: 18px;        /* Standard text */
--body-small: 16px;  /* Secondary text */
--caption: 14px;     /* Metadata, timestamps */
--tiny: 12px;        /* Legal, fine print */

/* Line Heights */
--lh-display: 1.1;   /* Tight for headers */
--lh-body: 1.6;      /* Comfortable reading */
--lh-compact: 1.4;   /* Dense information */
```

#### Font Loading Strategy
```html
<!-- Google Fonts with display=swap -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" rel="stylesheet">

<!-- Self-hosted for Druk Wide and Monument Extended -->
<!-- Use WOFF2 format for best compression -->
```

### Spacing System

- **Base Unit:** 8px (all spacing is multiple of 8)
- **Scale:** 8, 16, 24, 32, 48, 64, 96, 128px
- **Grid:** 12-column layout
  - Gutters: 24px
  - Max-width: 1440px
  - Breakpoints: 375px, 768px, 1024px, 1440px, 1920px
- **Section Padding:** 96px vertical (desktop), 48px (tablet), 32px (mobile)
- **Component Padding:** 32px standard, 16px compact

### Motion Principles

**Core Philosophy:** Snappy, athletic movements that feel immediate and responsive

#### Timing Functions
```css
/* Primary Easing */
--ease-out-quick: cubic-bezier(0.25, 0.46, 0.45, 0.94); /* 0.3s */
--ease-spring: cubic-bezier(0.68, -0.55, 0.265, 1.55);  /* 0.4s */

/* Specific Animations */
--timing-instant: 0.15s;  /* Button presses */
--timing-quick: 0.3s;     /* Hover states */
--timing-normal: 0.5s;    /* Page transitions */
--timing-slow: 0.8s;      /* Large elements */
```

#### Animation Types

**1. Portfolio Items Hover**
```css
transform: scale(1.05) translateY(-8px);
box-shadow: 0 20px 60px rgba(120, 82, 169, 0.3);
transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
```

**2. Page Transitions**
- Diagonal wipe effect (inspired by sports broadcast transitions)
- Direction: bottom-left to top-right
- Duration: 0.5s

**3. Scroll Animations**
- Parallax depth on hero graphics (0.5x scroll speed)
- Fade-in + slide-up for content sections (30px translateY)
- Stagger delay: 0.1s between elements

**4. Loading States**
- Pulsing concentric circles expanding from center
- Brand purple with 50% opacity fade
- Infinite loop, 1.5s duration

**5. Micro-interactions**
- Spring physics for buttons (Framer Motion spring)
- Tension: 300, Friction: 20
- Scale: 0.95 on press, 1.05 on hover

---

## Signature Visual Element: "Velocity Trails"

### Concept
Animated gradient streaks that follow cursor movement and appear behind project thumbnails on hover, creating a sense of speed and athleticism.

### Technical Implementation

```javascript
// useVelocityTrails.js hook
import { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';

const useVelocityTrails = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [velocity, setVelocity] = useState(0);
  
  const props = useSpring({
    xy: [mousePos.x, mousePos.y],
    config: { mass: 1, tension: 200, friction: 30 }
  });
  
  useEffect(() => {
    let lastX = 0;
    let lastY = 0;
    let lastTime = Date.now();
    
    const handleMouseMove = (e) => {
      const currentTime = Date.now();
      const deltaTime = currentTime - lastTime;
      const deltaX = e.clientX - lastX;
      const deltaY = e.clientY - lastY;
      
      const currentVelocity = Math.sqrt(deltaX ** 2 + deltaY ** 2) / deltaTime;
      
      setVelocity(currentVelocity);
      setMousePos({ x: e.clientX, y: e.clientY });
      
      lastX = e.clientX;
      lastY = e.clientY;
      lastTime = currentTime;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  return { mousePos, velocity, props };
};
```

### Visual Properties
- Gradient: `linear-gradient(135deg, #7852a9 0%, #00ff88 100%)`
- Motion blur: `filter: blur(20px)`
- Opacity: Based on velocity (0.3 - 0.8)
- Trail length: Proportional to mouse speed
- Only appears when velocity exceeds threshold (0.5 units)

---

## Site Structure & Content

### Navigation

**Type:** Fixed header with transparent background, solid background on scroll

**Logo:** 
- Petra's existing logo (purple and white)
- Position: Top-left
- Size: 48px height on desktop, 40px mobile
- Hover effect: Subtle scale(1.05) + glow

**Menu Items:**
- Home
- Portfolio (with sport category dropdown: All / Football / Basketball / Tennis / Other)
- About
- Contact

**Mobile Navigation:**
- Hamburger menu (top-right)
- Full-screen overlay menu
- Animated entrance: slide-in from right with stagger

**Scroll Behavior:**
- Transparent background initially
- Becomes `rgba(10, 10, 10, 0.95)` with backdrop-blur after 100px scroll
- Logo shrinks slightly (48px → 40px)

---

### 1. Hero Section

**Content:**
- **Headline:** "EXPLOSIVE SPORTS GRAPHICS" (Druk Wide Bold, 72px)
- **Subheadline:** "Bringing athletic energy to life through design" (Inter, 24px)
- **Name:** "PETRA NEŠIĆ" (Monument Extended, 32px, purple)
- **Role:** "Sports Graphic Designer" (Inter, 18px, electric mint)
- **CTA Button:** "VIEW PORTFOLIO" (solid purple, electric mint hover)
- **Social Links:** Instagram icon (@petragfx) - minimal, electric mint on hover

**Design:**
- Full viewport height (100vh)
- Background: True black (#0a0a0a)
- Featured work: Large showcase graphic with parallax scroll effect
  - Overlay gradient: `linear-gradient(rgba(10,10,10,0.3), rgba(10,10,10,0.7))`
  - Image should be Petra's strongest work
- Velocity trails follow cursor movement across hero
- Animated entrance: 
  - Headline: Fade-in + slide-up (0.6s delay)
  - Name: Scale-in from 0.8 (0.8s delay)
  - CTA: Bounce-in from bottom (1.0s delay)

**Interactions:**
- Parallax background moves at 0.5x scroll speed
- CTA button: Scale 1.0 → 1.05 on hover with purple glow
- Mouse position affects gradient overlay intensity

---

### 2. Featured Work Section

**Content:**
- **Heading:** "SIGNATURE PROJECTS" (Druk Wide Bold, 48px)
- **Description:** Brief intro about featured work (2-3 sentences)
- **Featured Projects:** 3-4 best projects in large format

**Design:**
- Background: Deep charcoal (#1a1a1a)
- Layout: Alternating left-right for each project
  - Left: Image (60% width)
  - Right: Details (40% width)
- Each project card includes:
  - Sport category badge (purple background)
  - Project title (32px)
  - Client name
  - Brief description
  - "View Project" link (electric mint underline)

**Animation:**
- Scroll-triggered reveal: Fade-in + slide from side
- Stagger delay: 0.15s between projects
- Image hover: Scale 1.0 → 1.05 with velocity trail
- Image click: Opens lightbox with full resolution

---

### 3. Full Portfolio Gallery

**Content:**
- **Heading:** "ALL PROJECTS" (Druk Wide Bold, 48px)
- **Filter Buttons:** All / Football / Basketball / Tennis / Other Sports
- **Portfolio Grid:** Masonry layout with all graphics

**Design:**

#### Filter Buttons
```css
/* Active state */
background: linear-gradient(135deg, #7852a9, #9b7bb5);
color: #ffffff;
transform: scale(1.05);

/* Inactive state */
background: transparent;
border: 2px solid #7852a9;
color: #7852a9;

/* Hover state */
background: rgba(120, 82, 169, 0.1);
transform: translateY(-2px);
```

#### Masonry Grid
- Responsive columns: 
  - Mobile: 1 column
  - Tablet: 2 columns
  - Desktop: 3 columns
  - Large: 4 columns
- Gap: 24px
- Items: Various aspect ratios (maintain original graphic proportions)

#### Portfolio Item Card
```javascript
// Structure
<div className="portfolio-item">
  <div className="image-container">
    <img src="..." alt="..." loading="lazy" />
    <div className="overlay">
      <span className="category-badge">FOOTBALL</span>
      <h3 className="project-title">Project Name</h3>
      <span className="view-icon">→</span>
    </div>
  </div>
</div>
```

**Hover States:**
```css
/* Image scale */
.portfolio-item:hover img {
  transform: scale(1.1);
  filter: brightness(0.7);
}

/* Overlay appearance */
.portfolio-item:hover .overlay {
  opacity: 1;
  background: linear-gradient(180deg, transparent, rgba(10,10,10,0.9));
}

/* Velocity trail */
.portfolio-item:hover::before {
  content: '';
  /* Gradient trail effect */
  opacity: 0.6;
  filter: blur(15px);
}
```

**Interactions:**
- Filter animation: Smooth fade-out/in with 0.3s duration
- Click: Opens lightbox with:
  - Full resolution image
  - Project details sidebar (right side)
  - Navigation arrows (previous/next)
  - Close button (top-right)
  - Background: rgba(10, 10, 10, 0.95) with backdrop blur

**Lightbox Features:**
- **Left side:** Full image (80% width)
- **Right sidebar (20% width):**
  - Project title (24px)
  - Sport category
  - Client name
  - Year
  - Tools used
  - Description
  - Instagram share button
  - Download button (if allowed)
- Keyboard navigation: Arrow keys, ESC to close
- Swipe gestures on mobile
- URL updates with project slug (e.g., /portfolio/football-poster-01)

---

### 4. About Section

**Content:**
- **Heading:** "MEET THE DESIGNER" (Druk Wide Bold, 48px)
- **Profile Image:** Professional photo of Petra
  - Border: 4px solid purple
  - Hover: Subtle rotation effect + glow
- **Bio:** 2-3 paragraphs about Petra's background
  - Experience in sports graphics
  - Design philosophy
  - Sports she specializes in
- **Skills List:**
  - Adobe Photoshop
  - Adobe Illustrator
  - Typography
  - Sports Branding
  - Social Media Graphics
  - Print Design
- **Stats:** (Monument Extended numbers, 48px)
  - Years of Experience
  - Projects Completed
  - Sports Covered
  - Happy Clients

**Design:**
- Background: True black (#0a0a0a)
- Layout: Two columns (desktop)
  - Left: Profile image + stats (40%)
  - Right: Bio + skills (60%)
- Mobile: Stacked vertically

**Stats Cards:**
```javascript
<div className="stat-card">
  <h3 className="stat-number">50+</h3> {/* Monument Extended */}
  <p className="stat-label">Projects</p> {/* Inter */}
  <div className="stat-bar"></div> {/* Purple accent line */}
</div>
```

**Animation:**
- Numbers count up on scroll into view (use Intersection Observer)
- Skills fade in with stagger (0.1s delay)
- Profile image: Subtle parallax on scroll

---

### 5. Process Section

**Content:**
- **Heading:** "MY CREATIVE PROCESS" (Druk Wide Bold, 48px)
- **Steps:** 4-5 key steps in design process
  1. **Brief & Research** - Understanding team identity and requirements
  2. **Concept Development** - Sketching ideas and exploring directions
  3. **Design Execution** - Creating the graphic with attention to detail
  4. **Refinement** - Client feedback and final adjustments
  5. **Delivery** - Providing all formats for various platforms

**Design:**
- Background: Deep charcoal (#1a1a1a)
- Layout: Horizontal timeline (desktop), vertical (mobile)
- Each step represented by:
  - Number badge (Monument Extended, 64px, purple)
  - Title (24px)
  - Description (18px)
  - Icon or small illustration

**Animation:**
- Timeline progress line fills on scroll (purple line, 4px)
- Step cards fade-in as they reach viewport
- Numbers scale-in with spring physics

---

### 6. Services Section

**Content:**
- **Heading:** "WHAT I OFFER" (Druk Wide Bold, 48px)
- **Services:**
  1. **Sports Team Branding**
     - Logo design, jerseys, merchandise graphics
  2. **Game Day Graphics**
     - Matchday posters, starting lineups, score graphics
  3. **Social Media Content**
     - Instagram posts, stories, highlight reels graphics
  4. **Tournament Materials**
     - Brackets, promotional posters, awards graphics
  5. **Player Graphics**
     - Individual player cards, stats graphics, announcements

**Design:**
- Background: True black (#0a0a0a)
- Layout: Grid of service cards (2x3 on desktop, 1 column mobile)
- Each service card:
  - Icon (lucide-react or custom SVG)
  - Title (24px)
  - Description (16px)
  - "Learn More" link (electric mint)

**Service Card Style:**
```css
.service-card {
  background: linear-gradient(135deg, #1a1a1a, #0a0a0a);
  border: 1px solid rgba(120, 82, 169, 0.2);
  border-radius: 8px;
  padding: 32px;
  transition: all 0.3s ease-out;
}

.service-card:hover {
  transform: translateY(-8px);
  border-color: #7852a9;
  box-shadow: 0 20px 40px rgba(120, 82, 169, 0.2);
}

.service-card:hover .icon {
  color: #00ff88;
  transform: scale(1.1);
}
```

---

### 7. Testimonials Section (Optional)

**Content:**
- **Heading:** "CLIENT FEEDBACK" (Druk Wide Bold, 48px)
- **Testimonials:** 3-4 quotes from satisfied clients
  - Quote text
  - Client name
  - Team/Organization
  - Avatar or team logo

**Design:**
- Background: Deep charcoal (#1a1a1a)
- Layout: Carousel/slider (1 testimonial visible at a time)
- Navigation: Arrow buttons + dots indicator
- Auto-play: 5s interval (pauses on hover)

**Testimonial Card:**
```javascript
<div className="testimonial-card">
  <div className="quote-icon">❝</div>
  <p className="quote-text">"..."</p>
  <div className="client-info">
    <img src="avatar.jpg" alt="" className="client-avatar" />
    <div>
      <h4 className="client-name">John Doe</h4>
      <p className="client-org">FC Example</p>
    </div>
  </div>
</div>
```

---

### 8. Call-to-Action Section

**Content:**
- **Headline:** "READY TO ELEVATE YOUR TEAM'S VISUAL IDENTITY?" (40px)
- **Subheadline:** "Let's create graphics that make your team stand out" (20px)
- **CTA Button:** "START A PROJECT" (large, prominent)
- **Secondary CTA:** "View Instagram" (ghost button)

**Design:**
- Background: Solid purple gradient
  - `linear-gradient(135deg, #7852a9 0%, #9b7bb5 100%)`
- Full-width section
- Centered content
- White text for maximum contrast

**Button Styles:**
```css
/* Primary CTA */
.cta-primary {
  background: #00ff88;
  color: #0a0a0a;
  padding: 20px 48px;
  font-size: 18px;
  font-weight: 600;
  border-radius: 4px;
  transition: all 0.3s ease-out;
}

.cta-primary:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 30px rgba(0, 255, 136, 0.3);
}

/* Secondary CTA */
.cta-secondary {
  background: transparent;
  color: #ffffff;
  border: 2px solid #ffffff;
  padding: 18px 46px;
}

.cta-secondary:hover {
  background: rgba(255, 255, 255, 0.1);
}
```

---

### 9. Contact Section

**Content:**
- **Heading:** "GET IN TOUCH" (Druk Wide Bold, 48px)
- **Description:** Brief invitation to reach out
- **Contact Methods:**
  - Email: Display email with click-to-copy button
  - Instagram: @petragfx with direct link
  - Response Time: "Usually responds within 24 hours"

**Contact Form:**
```javascript
<form className="contact-form">
  <div className="form-group">
    <label>Name *</label>
    <input type="text" required />
  </div>
  
  <div className="form-group">
    <label>Email *</label>
    <input type="email" required />
  </div>
  
  <div className="form-group">
    <label>Sport/Category *</label>
    <select>
      <option>Football</option>
      <option>Basketball</option>
      <option>Tennis</option>
      <option>Other</option>
    </select>
  </div>
  
  <div className="form-group">
    <label>Project Type *</label>
    <select>
      <option>Social Media Graphics</option>
      <option>Team Branding</option>
      <option>Game Day Graphics</option>
      <option>Other</option>
    </select>
  </div>
  
  <div className="form-group">
    <label>Message *</label>
    <textarea rows="6" required></textarea>
  </div>
  
  <button type="submit" className="submit-button">
    SEND MESSAGE
  </button>
</form>
```

**Form Styling:**
```css
.form-group input,
.form-group select,
.form-group textarea {
  background: #1a1a1a;
  border: 2px solid rgba(120, 82, 169, 0.3);
  color: #ffffff;
  padding: 16px;
  border-radius: 4px;
  font-family: 'Inter', sans-serif;
  transition: all 0.3s ease;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #7852a9;
  box-shadow: 0 0 0 3px rgba(120, 82, 169, 0.1);
}

.submit-button {
  background: linear-gradient(135deg, #7852a9, #9b7bb5);
  color: #ffffff;
  padding: 16px 48px;
  border: none;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease-out;
}

.submit-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(120, 82, 169, 0.3);
}
```

**Form Submission:**
- Use Formspree, Netlify Forms, or custom API endpoint
- Success message: Green toast notification
- Error message: Red toast notification with specific error
- Loading state: Disabled button with spinner

**Design:**
- Background: True black (#0a0a0a)
- Layout: Two columns (desktop)
  - Left: Contact info and social links (40%)
  - Right: Contact form (60%)
- Mobile: Stacked vertically

---

### 10. Footer

**Content:**
- **Logo:** Petra's logo (smaller version, 32px height)
- **Navigation Links:** Quick links to all sections
- **Social Media:**
  - Instagram (primary)
  - Facebook
  - LinkedIn
  - Behance/Dribbble (if applicable)
- **Copyright:** "© 2025 Petra Nešić. All rights reserved."
- **Credits:** "Website by [Your Name/Agency]" (if applicable)
- **Back to Top Button:** Arrow icon, fixed bottom-right

**Design:**
- Background: Deep charcoal (#1a1a1a)
- Border-top: 1px solid rgba(120, 82, 169, 0.3)
- Padding: 64px vertical
- Layout: Three columns (desktop)
  - Left: Logo + tagline
  - Center: Quick links
  - Right: Social media + copyright
- Mobile: Stacked sections

**Footer Links Style:**
```css
.footer-link {
  color: rgba(255, 255, 255, 0.7);
  transition: color 0.3s ease;
}

.footer-link:hover {
  color: #00ff88;
}
```

**Back to Top Button:**
```css
.back-to-top {
  position: fixed;
  bottom: 32px;
  right: 32px;
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, #7852a9, #9b7bb5);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.3s ease-out;
  z-index: 1000;
}

.back-to-top.visible {
  opacity: 1;
  transform: translateY(0);
}

.back-to-top:hover {
  transform: translateY(-4px) scale(1.05);
  box-shadow: 0 10px 30px rgba(120, 82, 169, 0.4);
}
```

**Scroll Behavior:**
- Button appears after scrolling 500px
- Smooth scroll animation to top (1s duration)
- Spring physics on click

---

## Interactive Features & Animations

### 1. Cursor Velocity Trails

**Implementation:**
```javascript
// VelocityTrail.jsx
import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const VelocityTrail = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 200 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  
  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);
  
  return (
    <motion.div
      className="velocity-trail"
      style={{
        translateX: cursorXSpring,
        translateY: cursorYSpring,
      }}
    />
  );
};
```

**CSS:**
```css
.velocity-trail {
  position: fixed;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: linear-gradient(135deg, #7852a9, #00ff88);
  filter: blur(40px);
  opacity: 0.4;
  pointer-events: none;
  z-index: 9999;
  mix-blend-mode: screen;
  transform: translate(-50%, -50%);
}
```

### 2. Portfolio Filter Animation

**Implementation:**
```javascript
import { motion, AnimatePresence } from 'framer-motion';

const portfolioVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.05,
      duration: 0.4,
      ease: 'easeOut'
    }
  }),
  exit: { opacity: 0, scale: 0.8, transition: { duration: 0.3 } }
};

// In component
<AnimatePresence mode="wait">
  {filteredProjects.map((project, index) => (
    <motion.div
      key={project.id}
      custom={index}
      variants={portfolioVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      layout
    >
      {/* Project card content */}
    </motion.div>
  ))}
</AnimatePresence>
```

### 3. Scroll-Triggered Animations

**Implementation:**
```javascript
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Section = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {children}
    </motion.section>
  );
};
```

### 4. Parallax Scroll Effect

**Implementation:**
```javascript
import { useScroll, useTransform, motion } from 'framer-motion';

const ParallaxImage = ({ src }) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -200]);
  
  return (
    <motion.div style={{ y }} className="parallax-container">
      <img src={src} alt="" />
    </motion.div>
  );
};
```

### 5. Page Transition (Diagonal Wipe)

**Implementation:**
```javascript
// PageTransition.jsx
import { motion } from 'framer-motion';

const pageVariants = {
  initial: {
    clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)'
  },
  animate: {
    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
    transition: {
      duration: 0.5,
      ease: [0.6, 0.01, 0.05, 0.95]
    }
  },
  exit: {
    clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)',
    transition: {
      duration: 0.5,
      ease: [0.6, 0.01, 0.05, 0.95]
    }
  }
};

export const PageTransition = ({ children }) => {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  );
};
```

### 6. Number Counter Animation

**Implementation:**
```javascript
import { motion, useSpring, useTransform } from 'framer-motion';
import { useEffect } from 'react';

const Counter = ({ value, duration = 2 }) => {
  const count = useSpring(0, { duration: duration * 1000 });
  const rounded = useTransform(count, Math.round);
  
  useEffect(() => {
    count.set(value);
  }, [value]);
  
  return <motion.span>{rounded}</motion.span>;
};
```

---

## Technical Implementation Details

### File Structure

```
petra-portfolio/
├── public/
│   ├── images/
│   │   ├── portfolio/
│   │   │   ├── football/
│   │   │   ├── basketball/
│   │   │   ├── tennis/
│   │   │   └── other/
│   │   ├── about/
│   │   └── favicon/
│   └── fonts/
│       ├── DrukWide-Bold.woff2
│       ├── MonumentExtended-Regular.woff2
│       └── MonumentExtended-Bold.woff2
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Button.jsx
│   │   │   ├── Input.jsx
│   │   │   ├── Select.jsx
│   │   │   └── Loading.jsx
│   │   ├── layout/
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── Layout.jsx
│   │   ├── sections/
│   │   │   ├── Hero.jsx
│   │   │   ├── FeaturedWork.jsx
│   │   │   ├── Portfolio.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Process.jsx
│   │   │   ├── Services.jsx
│   │   │   ├── Testimonials.jsx
│   │   │   ├── CTA.jsx
│   │   │   └── Contact.jsx
│   │   └── effects/
│   │       ├── VelocityTrail.jsx
│   │       ├── ParallaxImage.jsx
│   │       └── PageTransition.jsx
│   ├── hooks/
│   │   ├── useVelocityTrails.js
│   │   ├── useScrollAnimation.js
│   │   └── useWindowSize.js
│   ├── store/
│   │   └── portfolioStore.js
│   ├── data/
│   │   ├── portfolio.js
│   │   ├── testimonials.js
│   │   └── services.js
│   ├── utils/
│   │   ├── animations.js
│   │   └── helpers.js
│   ├── styles/
│   │   ├── globals.css
│   │   └── animations.css
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .env.example
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── README.md
```

### Tailwind Configuration

```javascript
// tailwind.config.js
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'brand-purple': '#7852a9',
        'deep-charcoal': '#1a1a1a',
        'electric-mint': '#00ff88',
        'hot-magenta': '#ff3366',
        'true-black': '#0a0a0a',
        'pure-white': '#ffffff',
      },
      fontFamily: {
        'display': ['Druk Wide', 'sans-serif'],
        'body': ['Inter Variable', 'sans-serif'],
        'accent': ['Monument Extended', 'sans-serif'],
      },
      fontSize: {
        'h1': '72px',
        'h2': '48px',
        'h3': '32px',
        'h4': '24px',
        'body-lg': '20px',
        'body': '18px',
        'body-sm': '16px',
        'caption': '14px',
        'tiny': '12px',
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      lineHeight: {
        'display': '1.1',
        'body': '1.6',
        'compact': '1.4',
      },
      boxShadow: {
        'purple-glow': '0 10px 40px rgba(120, 82, 169, 0.3)',
        'purple-glow-lg': '0 20px 60px rgba(120, 82, 169, 0.4)',
        'mint-glow': '0 10px 30px rgba(0, 255, 136, 0.3)',
      },
      backdropBlur: {
        'xs': '2px',
      },
      transitionTimingFunction: {
        'out-quick': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'spring': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
      transitionDuration: {
        '400': '400ms',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-subtle': 'bounce 2s ease-in-out infinite',
      },
      backgroundImage: {
        'purple-gradient': 'linear-gradient(135deg, #7852a9 0%, #9b7bb5 100%)',
        'velocity-trail': 'linear-gradient(135deg, #7852a9 0%, #00ff88 100%)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};
```

### Portfolio Data Structure

```javascript
// src/data/portfolio.js
export const portfolioProjects = [
  {
    id: 'football-001',
    title: 'Championship Final Poster',
    category: 'football',
    client: 'FC Example',
    year: 2024,
    description: 'Matchday graphic for championship final, featuring dynamic player action and team colors.',
    image: '/images/portfolio/football/championship-final.jpg',
    thumbnail: '/images/portfolio/football/championship-final-thumb.jpg',
    featured: true,
    tools: ['Photoshop', 'Illustrator'],
    tags: ['poster', 'matchday', 'championship'],
  },
  // ... more projects
];

export const categories = ['all', 'football', 'basketball', 'tennis', 'other'];
```

### Zustand Store

```javascript
// src/store/portfolioStore.js
import { create } from 'zustand';

export const usePortfolioStore = create((set) => ({
  activeCategory: 'all',
  setActiveCategory: (category) => set({ activeCategory: category }),
  
  lightboxOpen: false,
  selectedProject: null,
  openLightbox: (project) => set({ lightboxOpen: true, selectedProject: project }),
  closeLightbox: () => set({ lightboxOpen: false, selectedProject: null }),
}));
```

---

## Performance Optimization

### 1. Image Optimization

**Strategy:**
- Serve WebP format with JPEG fallback
- Use responsive images with `srcset`
- Lazy load all portfolio images
- Use blur-up placeholder technique

**Implementation:**
```javascript
// Lazy load component
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

<LazyLoadImage
  src={project.image}
  alt={project.title}
  effect="blur"
  placeholderSrc={project.thumbnail}
  threshold={100}
/>
```

**Build-time optimization:**
```javascript
// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import imagemin from 'vite-plugin-imagemin';

export default defineConfig({
  plugins: [
    react(),
    imagemin({
      gifsicle: { optimizationLevel: 7 },
      optipng: { optimizationLevel: 7 },
      mozjpeg: { quality: 80 },
      pngquant: { quality: [0.8, 0.9], speed: 4 },
      svgo: {
        plugins: [
          { name: 'removeViewBox', active: false },
          { name: 'removeEmptyAttrs', active: false }
        ]
      },
      webp: { quality: 80 }
    })
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'framer-motion': ['framer-motion'],
          'vendor': ['react', 'react-dom', 'react-router-dom']
        }
      }
    }
  }
});
```

### 2. Code Splitting

```javascript
// Lazy load routes
import { lazy, Suspense } from 'react';

const Portfolio = lazy(() => import('./components/sections/Portfolio'));
const About = lazy(() => import('./components/sections/About'));

// Use with Suspense
<Suspense fallback={<Loading />}>
  <Portfolio />
</Suspense>
```

### 3. Font Loading

```css
/* globals.css */
@font-face {
  font-family: 'Druk Wide';
  src: url('/fonts/DrukWide-Bold.woff2') format('woff2');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Monument Extended';
  src: url('/fonts/MonumentExtended-Regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
```

### 4. Animation Performance

- Use `transform` and `opacity` for animations (GPU-accelerated)
- Add `will-change` property sparingly
- Use `requestAnimationFrame` for smooth animations
- Disable animations on low-end devices

```javascript
// Check for reduced motion preference
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Conditionally apply animations
const animationProps = prefersReducedMotion ? {} : {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};
```

---

## SEO & Accessibility

### Meta Tags

```html
<!-- index.html -->
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  
  <!-- Primary Meta Tags -->
  <title>Petra Nešić - Sports Graphic Designer | Football, Basketball, Tennis Graphics</title>
  <meta name="title" content="Petra Nešić - Sports Graphic Designer | @petragfx" />
  <meta name="description" content="Professional sports graphics designer specializing in football, basketball, and tennis. Creating explosive visual content for teams and athletes." />
  <meta name="keywords" content="sports graphics, graphic designer, football graphics, basketball design, tennis graphics, sports branding, petra nesic, petragfx" />
  
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://petranesic.com/" />
  <meta property="og:title" content="Petra Nešić - Sports Graphic Designer" />
  <meta property="og:description" content="Professional sports graphics designer specializing in football, basketball, and tennis." />
  <meta property="og:image" content="https://petranesic.com/og-image.jpg" />
  
  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content="https://petranesic.com/" />
  <meta property="twitter:title" content="Petra Nešić - Sports Graphic Designer" />
  <meta property="twitter:description" content="Professional sports graphics designer specializing in football, basketball, and tennis." />
  <meta property="twitter:image" content="https://petranesic.com/og-image.jpg" />
  
  <!-- Favicon -->
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
  
  <!-- Canonical URL -->
  <link rel="canonical" href="https://petranesic.com/" />
</head>
```

### Semantic HTML

```javascript
// Use proper semantic tags
<header>
  <nav aria-label="Main navigation">
    <ul role="list">
      <li><a href="#home">Home</a></li>
      {/* ... */}
    </ul>
  </nav>
</header>

<main>
  <section aria-labelledby="portfolio-heading">
    <h2 id="portfolio-heading">Portfolio</h2>
    {/* ... */}
  </section>
</main>

<footer role="contentinfo">
  {/* ... */}
</footer>
```

### ARIA Labels

```javascript
// Portfolio filter buttons
<button
  aria-label={`Filter projects by ${category}`}
  aria-pressed={activeCategory === category}
  onClick={() => setActiveCategory(category)}
>
  {category}
</button>

// Lightbox
<div
  role="dialog"
  aria-modal="true"
  aria-labelledby="lightbox-title"
>
  <h2 id="lightbox-title">{project.title}</h2>
  {/* ... */}
</div>
```

### Keyboard Navigation

```javascript
// Ensure all interactive elements are keyboard accessible
<button
  onKeyDown={(e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleClick();
    }
  }}
>
  Click me
</button>

// Trap focus in modal
import FocusTrap from 'focus-trap-react';

<FocusTrap active={lightboxOpen}>
  <div className="lightbox">
    {/* ... */}
  </div>
</FocusTrap>
```

### Alt Text Best Practices

```javascript
// Descriptive alt text for portfolio images
<img
  src={project.image}
  alt={`${project.title} - ${project.category} graphic design for ${project.client}`}
/>

// Decorative images
<img
  src="decoration.svg"
  alt=""
  aria-hidden="true"
/>
```

---

## Analytics & Tracking

### Google Analytics 4

```javascript
// Add to index.html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Event Tracking

```javascript
// Track portfolio interactions
const trackEvent = (category, action, label) => {
  if (window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label
    });
  }
};

// Usage
trackEvent('Portfolio', 'Filter Click', 'Football');
trackEvent('Portfolio', 'Project View', project.title);
trackEvent('Contact', 'Form Submit', 'Success');
```

---

## Testing Checklist

### Functional Testing

- [ ] All navigation links work correctly
- [ ] Portfolio filter shows correct projects
- [ ] Lightbox opens/closes properly
- [ ] Contact form validates and submits
- [ ] Social media links open in new tabs
- [ ] Back to top button appears and functions
- [ ] Mobile menu opens/closes smoothly

### Visual Testing

- [ ] Typography hierarchy is clear
- [ ] Colors match brand guidelines
- [ ] Images load with proper aspect ratios
- [ ] Hover states work on all interactive elements
- [ ] Animations are smooth (60fps)
- [ ] No layout shifts during page load
- [ ] Consistent spacing throughout

### Responsive Testing

- [ ] Test on mobile (375px, 414px)
- [ ] Test on tablet (768px, 1024px)
- [ ] Test on desktop (1440px, 1920px)
- [ ] Test on ultrawide (2560px+)
- [ ] Touch targets are at least 44x44px on mobile
- [ ] Text is readable on all screen sizes

### Performance Testing

- [ ] Lighthouse score > 90 for all metrics
- [ ] First Contentful Paint < 1.5s
- [ ] Largest Contentful Paint < 2.5s
- [ ] Total Blocking Time < 200ms
- [ ] Cumulative Layout Shift < 0.1
- [ ] Images are optimized (WebP format)
- [ ] Fonts are preloaded

### Accessibility Testing

- [ ] WCAG 2.1 AA compliance
- [ ] Keyboard navigation works throughout
- [ ] Screen reader compatibility (test with NVDA/JAWS)
- [ ] Color contrast ratio meets standards
- [ ] Focus indicators are visible
- [ ] All images have appropriate alt text
- [ ] Forms have proper labels

### Browser Testing

- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

---

## Deployment

### Build Process

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Environment Variables

```bash
# .env.example
VITE_FORMSPREE_ID=your_formspree_id
VITE_GA_TRACKING_ID=G-XXXXXXXXXX
VITE_SITE_URL=https://petranesic.com
```

### Vercel Deployment

```json
// vercel.json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "vite",
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

### Performance Headers

```javascript
// vercel.json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    },
    {
      "source": "/fonts/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    },
    {
      "source": "/images/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

---

## Content Management

### Portfolio Data Management

**Option 1: Static JSON** (Recommended for initial launch)
```javascript
// src/data/portfolio.js
export const portfolioProjects = [
  // Manual array of projects
];
```

**Option 2: CMS Integration** (For easier content updates)
- **Sanity.io** - Structured content, real-time updates
- **Contentful** - Enterprise-grade CMS
- **Strapi** - Self-hosted option

**Example with Sanity:**
```bash
# Install Sanity CLI
npm install -g @sanity/cli

# Initialize Sanity project
sanity init

# Start Sanity Studio
cd sanity-studio
sanity start
```

### Image Upload Workflow

1. Optimize images before upload
   - Use Photoshop: Save for Web (JPEG 80% quality)
   - Or use online tools: TinyPNG, Squoosh
   - Target: < 500KB per image

2. Naming convention:
   ```
   category-descriptor-year.jpg
   Examples:
   - football-championship-poster-2024.jpg
   - basketball-lineup-graphic-2024.jpg
   - tennis-tournament-banner-2024.jpg
   ```

3. Folder structure:
   ```
   public/images/portfolio/
   ├── football/
   ├── basketball/
   ├── tennis/
   └── other/
   ```

---

## Maintenance & Updates

### Regular Tasks

**Weekly:**
- Check for broken links
- Review contact form submissions
- Monitor site performance (Google PageSpeed Insights)

**Monthly:**
- Update npm dependencies
- Review analytics data
- Add new portfolio pieces
- Update meta descriptions if needed

**Quarterly:**
- Full accessibility audit
- Security audit
- Backup entire project
- Review and optimize images

### Update Process

```bash
# Check for outdated packages
npm outdated

# Update all dependencies
npm update

# Or update specific package
npm install package-name@latest

# Test thoroughly after updates
npm run dev
npm run build
```

---

## Support & Documentation

### Browser Support

- Chrome: Last 2 versions
- Firefox: Last 2 versions
- Safari: Last 2 versions
- Edge: Last 2 versions
- Mobile browsers: iOS Safari 12+, Chrome Android 90+

### Known Limitations

1. **Velocity Trails:** May not perform well on low-end devices
   - Fallback: Disable on mobile or low-performance devices
   
2. **Parallax Effects:** Disabled on mobile for performance
   - Mobile users see static images

3. **WebP Format:** Fallback to JPEG for older browsers
   - Implemented automatically with `<picture>` element

### Getting Help

- **Technical Issues:** File issue on GitHub repository
- **Design Questions:** Contact designer via email
- **Urgent Bugs:** Priority support channel

---

## Credits & Inspiration

### Design Inspiration Sources
- Nike SNKRS app (motion design)
- ESPN website redesign (sports energy)
- Bleacher Report app (content presentation)
- Awwwards winners (interaction design)

### Open Source Libraries Used
- React (MIT License)
- Framer Motion (MIT License)
- Tailwind CSS (MIT License)
- Lucide Icons (ISC License)
- And others (see package.json)

---

## Appendix

### Color Usage Guide

| Color | Primary Use | Secondary Use | Don't Use For |
|-------|-------------|---------------|---------------|
| Brand Purple | Headers, CTAs, Accents | Borders, Highlights | Body text, Backgrounds |
| Electric Mint | Hover states, Success | Links, Icons | Headers, Large areas |
| Hot Magenta | Alerts, Featured items | Accents | Backgrounds, Primary CTAs |
| True Black | Backgrounds, Depth | N/A | Long-form text |
| White | Text, Cards | Accents | Backgrounds on light images |

### Typography Usage Guide

| Font | Primary Use | Size Range | Weight Range |
|------|-------------|------------|--------------|
| Druk Wide Bold | Headers, Impact text | 32px - 72px | 700 |
| Inter Variable | Body, UI elements | 14px - 24px | 400 - 600 |
| Monument Extended | Numbers, Stats | 24px - 64px | 400 - 700 |

### Animation Duration Guide

| Element Type | Duration | Easing |
|--------------|----------|--------|
| Button hover | 0.3s | ease-out-quick |
| Page transition | 0.5s | ease-out |
| Scroll reveal | 0.6s | ease-out |
| Lightbox open/close | 0.4s | ease-in-out |
| Filter animation | 0.3s | ease-out-quick |
| Loading spinner | 1.5s | linear (infinite) |

---

## Final Notes

This specification document is a living guide and should be updated as the project evolves. Always prioritize:

1. **Performance** - Site should load fast on all devices
2. **Accessibility** - Everyone should be able to use the site
3. **Brand consistency** - Maintain Petra's visual identity
4. **User experience** - Make navigation intuitive and enjoyable
5. **Content quality** - Showcase the best work prominently

**Version:** 1.0  
**Last Updated:** [Current Date]  
**Author:** [Your Name]  
**Contact:** [Your Email]

---

*This document serves as the complete technical and design specification for Petra Nešić's portfolio website using the Kinetic Arena design system.*
