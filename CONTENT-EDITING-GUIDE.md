# Content Editing Guide for QL Security Website

This guide shows non-technical users how to edit website content safely without touching any code.

---

## 🎯 Important Rule

**✅ ONLY edit content between the `---` marks at the top of the file**  
**❌ NEVER edit anything below the second `---` mark**

---

## 📄 Quick Reference - What Can I Edit?

| Page | File | What You Can Edit |
|------|------|-------------------|
| **Homepage** | `index.html` | Hero, Services, Ticker, CTA, Certifications |
| **About** | `about.markdown` | All text sections, mission, approach, etc. |
| **404 Error** | `404.html` | Error message, button text |
| **Standards** | `_data/standards.yml` | List of standards in ticker |

---

## 📝 General Editing Rules

### ✅ DO:
1. Keep all the `---` marks in place
2. Keep indentation (spaces) exactly as shown  
3. Keep quotes around text: `"like this"`
4. Keep the colons: `title:`
5. Use two spaces for indentation, not tabs
6. Save file after editing

### ❌ DON'T:
1. Delete any `---` marks
2. Change the indentation
3. Remove quotes from text
4. Remove colons
5. Edit anything below the second `---`
6. Use tabs (use spaces instead)

---

## 🏠 Editing the Homepage

**File:** `index.html`

### File Structure
```yaml
---
[EDIT THIS SECTION]
---

[DON'T TOUCH THIS CODE]
```

### 1. Main Hero Section

```yaml
hero:
  badge: "AI Security & GRC Innovation"
  title: "Secure Your"
  title_gradient: "AI-Driven Future"
  description: "Expert AI security gap analysis..."
  cta_primary: "Schedule Free Consultation"
  cta_primary_link: "/contact/"
  cta_secondary: "Download AI Security Guide"
  cta_secondary_link: "/resources/ai-security-guide.pdf"
```

**What you can edit:**
- `badge` - Small text above title
- `title` - First part of heading
- `title_gradient` - Second part (shown in blue gradient)
- `description` - Paragraph below heading
- `cta_primary` - Main button text
- `cta_primary_link` - Where main button goes
- `cta_secondary` - Secondary button text
- `cta_secondary_link` - Where secondary button goes

**Example change:**
```yaml
hero:
  title: "Protect Your"
  title_gradient: "Digital Future"
```

### 2. Services Section

```yaml
services:
  title: "Our Services"
  subtitle: "Comprehensive security innovation..."
  
  cards:
    - title: "AI Security Gap Analysis"
      description: "Comprehensive assessment..."
      icon: "lightbulb"
      link: "/services/ai-security/"
      features:
        - "LLM Security Review"
        - "AI Model Risk Assessment"
        - "Data Privacy Analysis"
```

**What you can edit:**
- `title` - Main section heading
- `subtitle` - Text below heading
- For each card:
  - `title` - Service name
  - `description` - Service description
  - `icon` - Keep as: "lightbulb", "shield", or "clipboard"
  - `link` - Where "Learn more" goes
  - `features` - List of bullet points

**To add a feature:**
```yaml
      features:
        - "Existing Feature"
        - "New Feature Here"  # Add this line
```

**To add a new service card:**
```yaml
    - title: "New Service Name"
      description: "Description here"
      icon: "shield"
      link: "/services/new-service/"
      features:
        - "Feature 1"
        - "Feature 2"
```

**To remove a service:**
Delete the entire card section (from `- title:` to the last feature)

### 3. Standards Ticker

```yaml
standards_ticker:
  title: "Standards & Frameworks"
  subtitle: "Expert guidance across..."
  speed: 45
```

**What you can edit:**
- `title` - Heading above ticker
- `subtitle` - Text below heading
- `speed` - Scroll speed (lower = faster)
  - Fast: 25-30
  - Medium: 35-45
  - Slow: 50-60

### 4. CTA Section

```yaml
cta:
  title: "Ready to Secure Your AI Future?"
  description: "Get a free AI security gap analysis..."
  cta_primary: "Book Free Consultation"
  cta_primary_link: "/contact/"
  cta_secondary: "Download Service Overview"
  cta_secondary_link: "/resources/"
```

**What you can edit:**
- `title` - Main heading
- `description` - Paragraph text
- `cta_primary` - Main button text
- `cta_primary_link` - Where main button goes
- `cta_secondary` - Secondary button text
- `cta_secondary_link` - Where secondary button goes

### 5. Certifications Sections

```yaml
certifications:
  title: "Certifications & Partnerships"
  subtitle: "Trusted standards..."
  show_descriptions: true
  
  display_styles:
    - glassmorphic
    - cards
    - white
    - ticker
    - white_ticker
```

**What you can edit:**
- `title` - Main heading for all certification sections
- `subtitle` - Text below heading
- `show_descriptions` - true or false
- `display_styles` - Which styles to show

**To hide a section:**
Remove or comment out the line:
```yaml
  display_styles:
    - glassmorphic
    # - cards  # This is now hidden
    - white
```

---

## 📖 Editing the About Page

**File:** `about.markdown`

### 1. Introduction

```yaml
intro:
  heading: "Who We Are"
  content: |
    QL Security (Quantum Leap Security Limited) is a forward-thinking...
    
    Founded by security professionals...
```

**To edit:**
```yaml
intro:
  heading: "About QL Security"
  content: |
    Your content here.
    
    More paragraphs here.
```

**Note:** The `|` symbol means "multi-line text". Keep it there.

### 2. Mission Section

```yaml
mission:
  heading: "Our Mission"
  intro: "We believe that security should be proactive..."
  points:
    - "Point 1 here"
    - "Point 2 here"
    - "Point 3 here"
```

**To add a point:**
```yaml
    - "New point here"
```

**To remove a point:**
Delete the entire line

### 3. Why Choose Us

```yaml
why_choose:
  heading: "Why Choose QL Security?"
  points:
    - title: "AI Security Expertise"
      description: "We specialize in..."
    
    - title: "Another Benefit"
      description: "Description here"
```

**To add a benefit:**
```yaml
    - title: "New Benefit"
      description: "Why this matters"
```

### 4. Our Approach

```yaml
approach:
  heading: "Our Approach"
  intro: "Every engagement begins..."
  steps:
    - number: 1
      title: "Assess"
      description: "Conduct thorough analysis..."
    
    - number: 2
      title: "Next Step"
      description: "What we do next"
```

**To edit a step:**
```yaml
    - number: 1
      title: "Your Title"
      description: "Your description"
```

### 5. Certifications List

```yaml
certifications:
  heading: "Our Certifications"
  intro: "We maintain expertise in..."
  items:
    - "ISO 27001 Information Security Management"
    - "GDPR Data Protection and Privacy"
    - "New Certification Here"
```

### 6. Call to Action

```yaml
cta:
  heading: "Get Started"
  content: "Ready to strengthen..."
  button_text: "Contact us"
  button_link: "/contact/"
  button_suffix: "for a free consultation..."
```

---

## ❌ Editing the 404 Error Page

**File:** `404.html`

```yaml
error_page:
  error_code: "404"
  heading: "Page Not Found"
  description: "The page you're looking for..."
  
  primary_button:
    text: "Back to Home"
    link: "/"
    icon: "home"
  
  secondary_button:
    text: "Contact Us"
    link: "/contact"
    icon: "email"
```

**What you can edit:**
- `heading` - Main error message
- `description` - Explanation text
- `primary_button.text` - Main button text
- `secondary_button.text` - Secondary button text

**Keep:** `error_code`, `icon` values, and `link` values

---

## 📋 Editing Standards List

**File:** `_data/standards.yml`

```yaml
- name: "Cyber Essentials"
  category: "UK Cybersecurity"
  
- name: "ISO 9001"
  category: "Quality Management"
  
- name: "ISO 14001"
  category: "Environmental Management"
```

### To Add a Standard
```yaml
- name: "Your Standard Name"
  category: "Category Name"
```

### To Remove a Standard
Delete both the `name` and `category` lines

### To Reorder Standards
Cut and paste entries - they appear in file order

---

## 🔧 After Making Changes

1. **Save the file** (Ctrl+S or Cmd+S)
2. **If running Jekyll locally:**
   - It rebuilds automatically
   - Refresh your browser
   - If changes don't appear, restart Jekyll:
     ```
     Ctrl+C
     bundle exec jekyll serve
     ```
3. **Preview before publishing**

---

## 🐛 Troubleshooting

### Changes Don't Appear?
- ✅ Check you saved the file
- ✅ Restart Jekyll
- ✅ Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- ✅ Check for syntax errors (see below)

### Page Breaks After Editing?
**Check:**
- ✅ `---` marks are still there (should be 2 of them)
- ✅ Indentation matches the examples (use spaces, not tabs)
- ✅ All text is in quotes: `"like this"`
- ✅ No missing colons after field names

**Fix:**
- Use "Undo" (Ctrl+Z or Cmd+Z) to revert
- Compare your edits to the examples
- Ask for help if stuck

### Common Syntax Errors

❌ **Wrong:** Missing quotes
```yaml
title: Page Title
```

✅ **Right:** Text in quotes
```yaml
title: "Page Title"
```

❌ **Wrong:** Using tabs
```yaml
  title: "Text"  # (used Tab key)
```

✅ **Right:** Using spaces
```yaml
  title: "Text"  # (used 2 spaces)
```

❌ **Wrong:** Missing dash in list
```yaml
points:
  "Point 1"
  "Point 2"
```

✅ **Right:** Dash before each item
```yaml
points:
  - "Point 1"
  - "Point 2"
```

---

## 💡 Pro Tips

### Copy & Paste Safety
- Always copy complete sections
- Include all indentation
- Test after pasting

### Making Big Changes
1. Make a backup copy first
2. Edit one section at a time
3. Save and test after each section
4. If it breaks, undo that section

### Working with Lists
- Keep dashes aligned
- Keep indentation consistent
- One item per line

---

## 📞 Getting Help

If something breaks or you're unsure:
1. **Undo** your changes (Ctrl+Z / Cmd+Z)
2. **Compare** to the examples in this guide
3. **Check** the formatting rules above
4. **Ask** a developer for help
5. **Show** them this guide - it helps explain what you're trying to do

---

## 📚 Quick Reference Card

| Want to... | File | Section |
|-----------|------|---------|
| Change homepage title | `index.html` | `hero.title` |
| Add a service | `index.html` | `services.cards` |
| Change ticker speed | `index.html` | `standards_ticker.speed` |
| Edit about intro | `about.markdown` | `intro.content` |
| Add a standard | `_data/standards.yml` | Add new entry |
| Change 404 message | `404.html` | `error_page.description` |

---

## ✅ Checklist Before Publishing

- [ ] Edited only the top section (between `---` marks)
- [ ] Kept all quotes and colons
- [ ] Kept indentation the same
- [ ] Saved the file
- [ ] Tested locally (if possible)
- [ ] Checked page doesn't break
- [ ] Reviewed content for typos
- [ ] Ready to publish!

---

**Remember:** You're editing configuration files, not code. As long as you:
1. Stay between the `---` marks
2. Keep the formatting consistent
3. Use quotes around text

You'll be fine! 🎉

---

**Last Updated:** December 23, 2025  
**Questions?** Check `SITE-WIDE-IMPLEMENTATION.md` for technical details
