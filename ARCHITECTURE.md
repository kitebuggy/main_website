# QL Security Website - Architecture Overview

## Project Information

**Company:** Quantum Leap Security Limited (trading as QL Security)  
**Project Type:** Corporate Website Rebrand & Modernization  
**Live Site:** Cloudflare Pages  
**Framework:** Jekyll (Static Site Generator)  
**Styling:** Tailwind CSS  
**Target Year:** 2026

## Purpose & Business Context

This website represents a complete rebrand from Bridgeway Security Solutions to QL Security, showcasing the company's pivot to AI security gap analysis and GRC-aligned cybersecurity services. The architecture prioritizes flexibility and maintainability to accommodate evolving service offerings and business needs.

## Technology Stack

### Core Technologies
- **Static Site Generator:** Jekyll 4.x
- **Hosting Platform:** Cloudflare Pages
- **CSS Framework:** Tailwind CSS (via CDN or build process)
- **Templating:** Liquid (Jekyll's templating engine)
- **Version Control:** Git (with Cloudflare Pages integration)

### Key Decision: Jekyll over Next.js
The project initially considered Next.js/React but ultimately chose Jekyll for:
- Simplicity and reduced complexity
- Better suited for content-focused corporate site
- Faster build times for static content
- Lower maintenance overhead
- Strong integration with Cloudflare Pages

## Site Structure

### Core Pages
1. **Home Page** (`index.html`)
   - Hero section with value proposition
   - Services overview
   - Certifications/partnerships display
   - Call-to-action sections

2. **Additional Pages** (Structure TBD)
   - Services detail pages
   - About/Company information
   - Contact page
   - Case studies/Resources (planned)

### Layout System

```
_layouts/
├── default.html          # Base layout with header/footer
├── page.html            # Standard page layout
├── post.html            # Blog post layout
└── [future layouts]     # Service pages, landing pages, etc.
```

#### Fixed Header Pattern & Content Clearance

**Critical Design Decision:** The site uses a fixed header that remains visible during scrolling. To ensure content is never hidden behind the header, we implement a standardized clearance pattern.

**Implementation:**
```html
<!-- default.html -->
<body>
  {% include components/header.html %}
  
  <main class="pt-32 lg:pt-40">  <!-- Header clearance applied here -->
    {{ content }}
  </main>
  
  {% include components/footer.html %}
</body>
```

**Key Principles:**
1. **Single Source of Truth:** Top padding is applied ONLY in `default.html` on the `<main>` tag
2. **Component Independence:** Individual layouts (page, post) and components (hero) do NOT add their own top padding
3. **Consistency Guarantee:** All pages automatically get proper header clearance
4. **DRY Principle:** Eliminates repeated padding declarations across templates

**Padding Values:**
- Desktop (`lg:pt-40`): 10rem (160px)
- Mobile (`pt-32`): 8rem (128px)

These values account for:
- Fixed header height
- Top bar (collapsible on scroll)
- Visual breathing room

**Before This Pattern (Problematic):**
```html
<!-- Each component had to remember padding -->
<section class="pt-32 lg:pt-40">  <!-- Repeated everywhere -->
  <!-- Content hidden behind header if forgotten -->
</section>
```

**After This Pattern (Correct):**
```html
<!-- default.html handles it once -->
<main class="pt-32 lg:pt-40">
  {{ content }}
</main>

<!-- Individual pages just focus on their content -->
<section class="py-20">  <!-- Only vertical padding, no top -->
  <!-- Content automatically clears header -->
</section>
```

### Component Architecture

```
_includes/
├── components/
│   ├── header.html          # Global navigation (fixed position)
│   ├── footer.html          # Company info, links, social
│   └── hero.html           # Homepage hero section
├── blocks/
│   └── cta-banner.html     # Reusable call-to-action banner
└── certifications/         # Modular certification displays
    ├── glassmorphic-container.html
    ├── white-section-grayscale.html
    ├── individual-dark-cards.html
    └── auto-scrolling-ticker.html
```

## Design System

### Color Palette
- **Primary Brand:** `#2C64B9` (Corporate Blue)
- **Light Variant:** `#4A90E2` (ql-blue-light)
- **Dark Variant:** `#2454a0` (ql-blue-dark)
- **Background:** Dark gradient themes
- **Accents:** White, grayscale for hover effects
- **Text:** High contrast for accessibility

### Responsive Design
- Mobile-first approach
- Tailwind's responsive breakpoints:
  - `sm:` 640px
  - `md:` 768px
  - `lg:` 1024px
  - `xl:` 1280px
  - `2xl:` 1536px

### Typography
- Modern, professional sans-serif fonts
- Clear hierarchy with Tailwind's text utilities
- Optimized for readability across devices

## Modular Component Philosophy

### Design Principle
The architecture emphasizes **flexibility over fixed implementations**. Rather than committing to a single design pattern, multiple component variations are provided for each major element.

### Component Characteristics
1. **Parameterized:** Accept variables via Jekyll's `include` syntax
2. **Reusable:** Work across different pages and contexts
3. **Self-contained:** Include necessary markup and styling
4. **Mix-and-match:** Compatible with other components
5. **Layout-agnostic:** Don't assume positioning context

### Example: Certification Display Options

Four distinct approaches, each solving different business needs:

1. **Glassmorphic Container**
   - Modern, translucent design
   - Best for: Premium, tech-forward presentation

2. **White Section with Grayscale**
   - Clean, professional appearance
   - Logos convert to grayscale, color on hover
   - Best for: Mixed logo backgrounds

3. **Individual Dark Cards**
   - Separate card per certification
   - Best for: Highlighting individual achievements

4. **Auto-scrolling Ticker**
   - Continuous animation
   - Best for: Multiple partnerships, dynamic feel

### Usage Pattern

```liquid
<!-- On any page, choose the appropriate component -->
{% include certifications/glassmorphic-container.html %}

<!-- Or mix multiple components -->
{% include certifications/white-section-grayscale.html %}
{% include certifications/auto-scrolling-ticker.html %}
```

## Content Management

### Jekyll Collections (Potential Future Use)
```yaml
# _config.yml
collections:
  services:
    output: true
    permalink: /services/:name/
  case_studies:
    output: true
    permalink: /case-studies/:name/
```

### Front Matter Standards
```yaml
---
layout: page
title: "Page Title"
description: "SEO meta description"
breadcrumbs: true              # Show breadcrumb navigation
show_contact_cta: true         # Include contact banner at bottom
last_updated: 2024-12-16       # Optional last updated date
---
```

## Asset Organization

```
assets/
├── css/
│   ├── main.css           # Global styles, body gradients
│   └── layouts.css        # Layout-specific styles, animations
├── js/
│   └── main.js            # Header scroll effects, mobile menu
└── images/
    ├── logo/
    ├── certifications/
    ├── services/
    └── og-images/         # Social media cards
```

## Build & Deployment

### Development Workflow
1. Local development with Jekyll serve
2. Git commit to repository
3. Automatic deployment via Cloudflare Pages
4. Edge caching and CDN distribution

### Build Process
```bash
# Local development
jekyll serve --livereload

# Production build
jekyll build
# Output: _site/ directory
```

### Cloudflare Pages Configuration
- **Build command:** `jekyll build`
- **Build output directory:** `_site`
- **Environment variables:** JEKYLL_ENV=production
- **Branch:** main (production)

## Performance Optimizations

### Static Site Benefits
- Pre-rendered HTML (no server-side processing)
- Cloudflare's global CDN
- Fast TTFB (Time to First Byte)
- Minimal JavaScript overhead

### Image Optimization
- Responsive images with `srcset`
- Modern formats (WebP with fallbacks)
- Lazy loading for below-fold content
- Optimized logo assets for certifications

### CSS Strategy
- Tailwind CSS for utility-first styling
- Minimal custom CSS in main.css and layouts.css
- Browser-based Tailwind (no build step currently)
- Critical styles inlined via CDN

### JavaScript Strategy
- Minimal dependencies
- Header scroll effects (collapse top bar on scroll)
- Mobile menu toggle
- Ticker animation controls
- Progressive enhancement approach

## Accessibility Considerations

- Semantic HTML5 elements
- Proper heading hierarchy
- Alt text for all images
- Keyboard navigation support
- Sufficient color contrast ratios
- ARIA labels where appropriate
- Focus styles for interactive elements

## SEO Architecture

### On-Page SEO
- Descriptive page titles
- Meta descriptions
- Semantic HTML structure
- Open Graph tags for social sharing
- Schema.org markup for business info

### Technical SEO
- Clean URL structure
- XML sitemap generation
- Robots.txt configuration
- Fast page load times
- Mobile-responsive design

## Security Considerations

### Static Site Security Benefits
- No server-side code execution
- No database vulnerabilities
- Cloudflare DDoS protection
- Automatic HTTPS via Cloudflare

### Best Practices
- Content Security Policy headers
- HTTPS enforcement
- Secure asset delivery
- Regular dependency updates

## Future Extensibility

### Planned Enhancements
1. **Blog/Resources Section**
   - Jekyll posts collection
   - Category/tag filtering
   - RSS feed generation

2. **Service Pages**
   - Detailed service descriptions
   - Case studies integration
   - Client testimonials

3. **Interactive Elements**
   - Contact forms (via third-party service)
   - Newsletter signup
   - Service calculators/assessments

4. **Analytics Integration**
   - Privacy-focused analytics
   - Conversion tracking
   - User behavior analysis

### Modularity Benefits
The component-based architecture allows:
- Easy A/B testing of different designs
- Rapid page creation with existing components
- Service offering pivots without redesign
- Scalable content management

## Development Principles

### Core Values
1. **Flexibility First:** Multiple solutions over single fixed approach
2. **Future-Proof:** Easy to modify as business evolves
3. **Maintainability:** Clean, documented code
4. **DRY (Don't Repeat Yourself):** Single source of truth for common patterns
5. **Performance:** Fast loading, optimized assets
6. **Professionalism:** Corporate-grade design and UX

### Technical Guidelines
- Semantic, accessible HTML
- Mobile-first responsive design
- Reusable Jekyll includes with parameters
- Minimal JavaScript dependency
- Progressive enhancement approach
- **NO inline styles** - all styling via Tailwind classes or external CSS
- Consistent layout patterns (header clearance, section structure)

### Code Quality Standards
1. **Production-Ready Code:** All code should be deployment-ready
2. **Maintainable Architecture:** Easy for future developers to understand
3. **Consistent Patterns:** Follow established conventions
4. **Documentation:** Comment complex logic, document component parameters

## Configuration Management

### Jekyll Configuration (`_config.yml`)
```yaml
title: Quantum Leap Security
description: AI Security Gap Analysis & GRC-Aligned Services
url: "https://qlsecurity.com"
baseurl: ""

# Build settings
markdown: kramdown
plugins:
  - jekyll-sitemap
  - jekyll-seo-tag

# Company information
company:
  legal_name: "Quantum Leap Security Limited"
  trading_as: "QL Security"
  brand_color: "#2C64B9"
```

## Maintenance & Updates

### Regular Tasks
- Content updates via Git commits
- Image asset optimization
- Jekyll/dependency updates
- Performance monitoring
- Security header reviews

### Change Management
- Feature branches for new components
- Testing on Cloudflare preview deployments
- Production deployment via main branch merge
- Rollback capability via Git history

## Documentation Standards

### Code Comments
- Explain complex Liquid logic
- Document component parameters
- Note design decisions and rationale

### Component Documentation
Each reusable component should document:
- Purpose and use cases
- Required/optional parameters
- Example usage
- Design variations available

---

**Document Version:** 1.1  
**Last Updated:** December 2024  
**Maintained By:** Jason / QL Security Development Team

**Recent Updates:**
- Added fixed header clearance pattern documentation
- Documented DRY principle for layout consistency
- Added code quality standards section
