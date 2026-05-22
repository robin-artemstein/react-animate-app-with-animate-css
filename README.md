# React Animate CSS app

The CSS animation application build the following tech stack combination.

- React for UI and interaction design
- Vite for web building
- TypeScript for static typing
- Tailwind for UI styling 
- Animate.css for animation

## Push to GitHub repository
```
git init
git add .
git commit -m "The Nth commit on date."
git remote rm origin
git branch -M main
git remote add origin git@github.com:robin-artemstein/robin-artemstein-react-animate-css-app.git
git push -u origin main
```

## Installation

Install Bun first

https://bun.sh

Then install dependencies:
```
bun install
bun dev
```
## Project structure
```
react-animate-css-app/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── HelloModal.tsx    # Modal component when users click on the "Say hello" button.
│   │   ├── SurpriseModal.tsx # Modal component when users click on the "Get surprised" button.
│   │   └── ByeModal.tsx      # Modal component when users click on the "Kiss bye" button.
│   ├── App.tsx               # Main page
│   ├── main.tsx
│   ├── vite-env.d.ts
│   └── index.css             # Tailwind + global styles
├── index.html
├── vite.config.ts
├── tailwind.config.js        # (if needed)
├── tsconfig.json
├── package.json
└── README.md
```