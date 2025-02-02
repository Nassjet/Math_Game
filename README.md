# Math Game - Application Mobile d'Entraînement aux Mathématiques

## Description
Math Game est une application mobile développée en React Native qui permet aux utilisateurs de s'entraîner aux mathématiques de manière ludique. L'application propose différents modes de difficulté et des exercices chronométrés pour améliorer ses compétences en calcul mental.

## Fonctionnalités
- Mode Facile : Additions et soustractions simples et aléatoires en 15 sec
- Mode Difficile : Multiplication Additions et Soustractions aléatoires en 10 sec
- Système de score basé sur la rapidité
- Chronomètre de 10 à 15 secondes par exercice
- Interface utilisateur intuitive

## Prérequis
- Node.js (version 12 ou supérieure)
- npm ou yarn
- React Native CLI

## Installation

1. Cloner le repository
```bash
git clone [URL_DU_REPO]
cd Math_Game
```

2. Installer les dépendances
```bash
npm install
# ou
yarn install
```

3. Lancer l'application en développement
```bash
# Pour Android
npm run android
# ou
yarn android

# Pour iOS
npm run ios
# ou
yarn ios

# Ou tout simplement
npx expo start 
```

## Structure du Projet
```
math-game/
  ├── src/
  │   ├── components/      # Composants réutilisables
  │   ├── navigation        # Fichier de Navigation entre les écrans
  │   ├── screens/         # Écrans de l'application
  │   └── utils/          # Fonctions utilitaires
  │   
  ├── App.js              # Point d'entrée de l'application
  └── package.json        # Dépendances du projet
```

## Contribution
Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou une pull request.