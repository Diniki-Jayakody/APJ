# APJ Consultancy — Premium Study Abroad Website

A handcrafted, premium React website for APJ Consultancy — built with Vite, Tailwind CSS, Framer Motion, and a scalable component architecture.

## Quick Start

```bash
npm install
cp .env.example .env   # Add EmailJS credentials
npm run dev
```

## EmailJS Setup

Create a `.env` file:

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Template variables: `from_name`, `phone`, `destination`, `education`, `message`, `to_name`

## Country Data

Country content is parsed from `src/data/source.html`:

```bash
npm run parse-countries
```

Output: `src/data/countries.js`

## Project Structure

```
src/
├── animations/     # Framer Motion variants
├── assets/         # Images & SVGs
├── components/     # Reusable UI & layout
├── constants/      # Theme, routes, strings, contact
├── context/        # React context providers
├── data/           # Parsed country & site content
├── hooks/          # Custom hooks
├── pages/          # Route pages
├── sections/       # Landing page sections
├── services/       # EmailJS integration
├── styles/         # Tailwind entry
└── utils/          # Helpers
```

## Build

```bash
npm run build
npm run preview
```
