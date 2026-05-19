# Kael-Private-Research-Core-Official-Website
Official website of Kael-Private-Research Core – a Myanmar‑based research and development platform. Creating free, open‑source tools for AI, automation, and practical software solutions.

# 🌐 Kael‑Private Research Core – Official Website

[![Website Status](https://img.shields.io/website?url=https%3A%2F%2Fkael-privateresearchcore.github.io)](https://kael-privateresearchcore.github.io)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Made with Three.js](https://img.shields.io/badge/Three.js-r128-green)](https://threejs.org)

This repository contains the **source code** for the official website of **Kael‑Private Research Core** – an elite, confidential research unit based in Yangon, Myanmar, founded by **Kaelion (Kyaw Wai Yan Naing)**.

The website serves as a digital headquarters, showcasing our mission, strategic competencies, research notes, and contact channels.

---

## 🚀 Live Site

[https://kaelprivateresearchcore.dpdns.org](https://kaelprivateresearchcore.dpdns.org)

---

## ✨ Features

- **Immersive 3D Background** – Animated Three.js torus knot that reacts to mouse movement.
- **Dark / Light Theme Toggle** – Persistent user preference.
- **Typed Hero Text** – Dynamic rotation of research taglines.
- **Animated Statistics Counter** – Years of research, projects deployed, security audits.
- **Live Visitor Counter** – Integrated with CountAPI (fallback to localStorage).
- **Blog / Research Notes Section** – Markdown‑based posts loaded from a `blog-posts.json` manifest and rendered with `marked.js`.
- **Contact Form** – Integrated with Formspree (serverless submission).
- **PWA Ready** – Includes a `manifest.json` and service worker registration.
- **Responsive Design** – Works on desktop, tablet, and mobile.
- **Smooth Scroll Reveal Animations** – Content fades in as you scroll.

---

## 🛠️ Tech Stack

| Component | Technology |
|-----------|------------|
| **Core Markup** | HTML5, CSS3, Vanilla JavaScript |
| **3D Graphics** | Three.js (r128) |
| **Markdown Rendering** | marked.js |
| **Icons** | Font Awesome 6 |
| **Fonts** | Google Fonts (Inter) |
| **Form Handling** | Formspree (serverless) |
| **Visitor Counting** | CountAPI (or localStorage fallback) |
| **Hosting** | GitHub Pages (or any static host) |
| **PWA** | Web App Manifest + Service Worker |

---

## 📂 Repository Structure

├── index.html # Main entry point
├── manifest.json # PWA manifest
├── sw.js # Service worker (for offline caching)
├── blog-posts.json # Manifest of blog posts (title, file path)
├── blog/ # Folder containing Markdown (.md) blog posts
├── assets/ # (optional) images, CSS, JS
└── README.md

