# Ember & Bite — Digital Restaurant Menu

A modern, mobile-first digital menu website. Customers browse the menu, build an order, and send it to the restaurant via WhatsApp.

## Quick Start

Open `index.html` in a browser, or serve locally:

```bash
npx serve .
```

## Customize

### Restaurant info
Edit `js/config.js`:
- Restaurant name, tagline, logo
- WhatsApp number (international format, no `+`)
- Phone, Instagram, location, hours
- Currency symbol

### Menu items
Edit `js/menu-data.js`:
- Add/remove categories in `MENU_CATEGORIES`
- Add/remove products in `MENU_ITEMS`
- Each product supports optional extras/add-ons

### Images
Replace Unsplash URLs with local paths, e.g. `./images/classic-burger.jpg`

## Features

- Responsive layout (mobile-first)
- Sticky category navigation with scroll spy
- Product detail modal with extras
- Client-side cart with localStorage persistence
- Order summary with optional customer details
- WhatsApp order integration
- Toast confirmation on add to cart

## File Structure

```
restaurant-menu/
├── index.html          # Page structure
├── js/
│   ├── config.js       # Restaurant settings
│   ├── menu-data.js    # Categories & products
│   └── app.js          # All interactivity
└── README.md
```

## Tech Stack

- HTML5
- Tailwind CSS (CDN)
- Vanilla JavaScript
