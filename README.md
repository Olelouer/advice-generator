# Advice Generator

Petite application qui affiche un conseil aléatoire, récupéré depuis l'[Advice Slip API](https://api.adviceslip.com/). Un clic sur le bouton dé génère un nouveau conseil.

## Stack

- [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Oxlint](https://oxc.rs/) pour le linting

## Fonctionnalités

- Affichage d'un conseil aléatoire avec son numéro
- Génération d'un nouveau conseil au clic
- Mise en page responsive (mobile et desktop)
- Effet lumineux au survol du bouton

## Installation

```bash
npm install
npm run dev
```

L'application tourne ensuite sur [http://localhost:5173](http://localhost:5173).

## Scripts

| Commande          | Description                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Lance le serveur de développement    |
| `npm run build`   | Compile l'application pour la prod   |
| `npm run preview` | Prévisualise le build de production  |
| `npm run lint`    | Analyse le code avec Oxlint          |

## Structure

```
src/
├── assets/      # Icônes et images (SVG)
├── components   # Composants secondaires
├── App.tsx      # Composant principal
├── index.css    # Thème Tailwind et styles de base
└── main.tsx     # Point d'entrée
```