# Portfolio Nohan – Next.js

Ce dépôt contient la version Next.js du portfolio de Nohan (app router). Le projet met en avant l’intégration Tailwind CSS v4, l’animation GSAP pour la section Hero et l’envoi d’e-mails via EmailJS.

## Stack principale

- [Next.js 15](https://nextjs.org/) (App Router)
- [React 19](https://react.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/) via la nouvelle API PostCSS
- [GSAP](https://gsap.com/) pour les animations
- [EmailJS Browser SDK](https://www.emailjs.com/)

## Prérequis

- Node.js 18.18+ ou 20+
- npm (ou pnpm / yarn, à adapter aux exemples)

## Installation & scripts

```bash
npm install            # Installe les dépendances
npm run dev            # Démarre le serveur de dev avec Turbopack
npm run build          # Génère le build de production
npm run start          # Lance le serveur de production après build
npm run lint           # Vérifie la qualité du code avec ESLint
```

Le script `npm run dev` est configuré avec l’option `--turbopack` pour profiter du nouveau bundler de Next.js.

## Variables d’environnement

L’application utilise EmailJS côté client. Crée un fichier `.env.local` (non versionné) à la racine :

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=...
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=...
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=...
```

Ne commit jamais de secrets : `.env*` est déjà ignoré dans `.gitignore`.

## Structure du projet

```
app/
  layout.jsx        # Layout racine + métadonnées
  page.jsx          # Page principale assemblant les sections
  globals.css       # Styles globaux + Tailwind
src/components/     # Header, Hero, Skills, Projects, Contact
public/             # Assets statiques
```

Le répertoire `.next/` est généré automatiquement (build cache) et ne doit pas être versionné.

## Qualité & linting

La configuration ESLint (`eslint.config.js`) s’appuie sur `eslint-config-next`, `@eslint/js` et `eslint-plugin-react-hooks`. Lance `npm run lint` avant chaque commit pour éviter les régressions.

## Déploiement

1. Construis l’app : `npm run build`
2. Lance un serveur local pour vérifier : `npm run start`
3. Déploie sur la plateforme de ton choix (Vercel recommandé pour Next.js). Pense à définir les variables d’environnement dans le dashboard du fournisseur.

## Notes supplémentaires

- Les assets ou caches générés (`.next/`, `node_modules/`, build output) restent ignorés dans Git.
- Pour regénérer un cache propre, supprime `.next/` puis relance `npm run dev`.

Bon développement !
