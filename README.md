# Better Impermanence

**Live:** [betterimpermanence.com](https://www.betterimpermanence.com/)

A personal blog I built for Alissa Doyle. She writes and publishes posts in a
hosted CMS without touching code, and the site is statically generated with
Next.js.

## Features

- Statically generated post pages and category pages (`getStaticProps` /
  `getStaticPaths`) for fast loads and good SEO
- Rich text from Sanity's Portable Text, with a custom image serializer
  (`components/BlockContentSerialized.js`)
- Category pages, plus a sidebar with category links and an author bio card
- Contact form handled by Netlify Forms, with a honeypot field for spam
- **Sanity Studio** customized with a Netlify deploy widget and Google Analytics
  on the dashboard, so the author can publish and rebuild the site from one place

## Structure

```
web/   Next.js site (React, Emotion)
api/   Sanity Studio: schemas for posts, categories, authors
```

## Tech

Next.js · React · Sanity (headless CMS, GROQ queries) · Emotion · Netlify

## Running locally

```bash
cd api && yarn && yarn start   # Sanity Studio
cd web && yarn && yarn dev     # Next.js site
```
