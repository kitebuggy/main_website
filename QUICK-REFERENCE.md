# QL Security Website - Quick Reference

## 📁 What Can I Edit?

```
┌─────────────────────────────────────────────────────────┐
│                    HOMEPAGE (index.html)                 │
├─────────────────────────────────────────────────────────┤
│ ✏️  Hero Section         → title, description, buttons  │
│ ✏️  Services Section     → service cards, features      │
│ ✏️  Standards Ticker     → title, subtitle, speed       │
│ ✏️  CTA Section          → heading, buttons             │
│ ✏️  Certifications       → which styles to show         │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│               ABOUT PAGE (about.markdown)                │
├─────────────────────────────────────────────────────────┤
│ ✏️  Introduction         → heading, paragraphs          │
│ ✏️  Mission              → heading, bullet points       │
│ ✏️  Why Choose Us        → benefits list                │
│ ✏️  Our Approach         → 5 numbered steps             │
│ ✏️  Certifications       → list of certs                │
│ ✏️  Get Started CTA      → heading, button              │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│              404 PAGE (404.html)                         │
├─────────────────────────────────────────────────────────┤
│ ✏️  Error Message        → heading, description         │
│ ✏️  Buttons              → button text                  │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│         STANDARDS (_data/standards.yml)                  │
├─────────────────────────────────────────────────────────┤
│ ✏️  Standards List       → add, remove, reorder         │
└─────────────────────────────────────────────────────────┘
```

---

## 🎯 The Golden Rule

```
┌─────────────────────────────────────────────────┐
│  ONLY EDIT BETWEEN THESE MARKS:                 │
│                                                  │
│  ---                          ← Top mark        │
│  [YOUR EDITABLE CONTENT]      ← Edit here only  │
│  ---                          ← Bottom mark     │
│                                                  │
│  [CODE BELOW - DON'T TOUCH]   ← Never edit     │
└─────────────────────────────────────────────────┘
```

---

## ✅ Safe Editing Checklist

Before you save:

- [ ] Edited only between `---` marks
- [ ] Kept all quotes: `"like this"`
- [ ] Kept all colons: `field:`
- [ ] Kept indentation the same
- [ ] Used spaces, not tabs
- [ ] Checked for typos

---

## 🚀 Quick Tasks

### Change Homepage Title
```yaml
File: index.html
Find: hero.title
Change: "Your New Title"
Time: 1 minute
```

### Add a Service
```yaml
File: index.html
Find: services.cards
Copy: existing card structure
Paste: below last card
Edit: title, description, features
Time: 3 minutes
```

### Change Ticker Speed
```yaml
File: index.html
Find: standards_ticker.speed
Change: 30 (faster) or 60 (slower)
Time: 30 seconds
```

### Add a Standard
```yaml
File: _data/standards.yml
Add at end:
- name: "Your Standard"
  category: "Category"
Time: 1 minute
```

---

## 📚 Documentation Map

```
Need help with...           Read this...
─────────────────────────────────────────────────────
Quick reference             → THIS FILE
How to edit                 → CONTENT-EDITING-GUIDE.md
Technical details           → SITE-WIDE-IMPLEMENTATION.md
Implementation notes        → IMPLEMENTATION-COMPLETE.md
Homepage specifics          → HOMEPAGE-REFACTORING.md
Standards ticker            → standards-ticker-guide.md
```

---

## 💡 Common Edits at a Glance

| Want to... | Edit This |
|-----------|-----------|
| Change main headline | `index.html` → `hero.title` |
| Add service | `index.html` → `services.cards` |
| Speed up ticker | `index.html` → `standards_ticker.speed` |
| Change about intro | `about.markdown` → `intro.content` |
| Add standard | `_data/standards.yml` → new entry |
| Change 404 text | `404.html` → `error_page.description` |

---

## ⚠️ If Something Breaks

1. **Don't panic!** Press Ctrl+Z (or Cmd+Z) to undo
2. Check you didn't delete `---` marks
3. Check indentation matches original
4. Check all text has quotes: `"text"`
5. Ask for help - show them this guide

---

## 🎓 Learning Path

**New to editing?**
1. Read this quick reference (5 min)
2. Try changing homepage title (2 min)
3. Read full CONTENT-EDITING-GUIDE.md (15 min)
4. Practice more edits

**Ready to dive deep?**
1. Read SITE-WIDE-IMPLEMENTATION.md
2. Understand the architecture
3. Extend patterns to new pages

---

## 📊 File Structure

```
ql-security/
│
├── index.html                      ← Homepage content
├── about.markdown                  ← About page content
├── 404.html                        ← Error page content
│
├── _data/
│   └── standards.yml               ← Standards list
│
├── _includes/components/
│   └── standards-ticker.html       ← Ticker component
│
├── assets/css/
│   └── layouts.css                 ← Contains .standards-badge
│
└── CONTENT-EDITING-GUIDE.md        ← Main editing guide
    SITE-WIDE-IMPLEMENTATION.md     ← Technical docs
    IMPLEMENTATION-COMPLETE.md      ← Summary
    HOMEPAGE-REFACTORING.md         ← Homepage notes
```

---

## 🎨 YAML Format Quick Guide

### Text Field
```yaml
field_name: "Your text here"
```

### Multiple Lines
```yaml
field_name: |
  First paragraph here.
  
  Second paragraph here.
```

### List of Items
```yaml
items:
  - "Item 1"
  - "Item 2"
  - "Item 3"
```

### Nested Structure
```yaml
section:
  title: "Title Here"
  items:
    - "Item 1"
    - "Item 2"
```

---

## 🔑 Key Concepts

**Front Matter** = Content between `---` marks at top of file  
**YAML** = Simple format for structured data  
**Liquid** = Template language (the code you don't edit)  
**Component** = Reusable piece of page (like hero, ticker)  
**Data File** = Shared data (like standards list)  

---

## ✨ Success Formula

```
1. Find the file       → See "What Can I Edit?" above
2. Locate section      → Between --- marks at top
3. Edit carefully      → Keep format, quotes, spacing
4. Save file           → Ctrl+S or Cmd+S
5. Test                → Refresh browser
6. Done!               → Content updated ✅
```

---

## 📞 Help & Support

**Stuck?** → Read CONTENT-EDITING-GUIDE.md  
**Broke something?** → Press Ctrl+Z / Cmd+Z  
**Need developer?** → Show them this guide  
**Want to learn more?** → Read SITE-WIDE-IMPLEMENTATION.md  

---

**Remember:** As long as you edit only between the `---` marks and keep the formatting consistent, you're safe! 🎉

---

**Last Updated:** December 23, 2025  
**Status:** ✅ All pages refactored and documented  
**Confidence:** Edit safely and independently!
