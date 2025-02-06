# 📚 ENT - Environnement Numérique de Travail

Bienvenue sur **ENT**, une plateforme e-learning interactive conçue pour améliorer l'expérience d'apprentissage en ligne. Ce projet permet aux enseignants de gérer leurs cours et aux étudiants d'accéder facilement aux ressources pédagogiques.

## 🚀 Fonctionnalités principales

- 🔐 **Authentification sécurisée** (inscription, connexion, gestion des rôles)
- 📚 **Gestion des cours** (création, modification, suppression)
- 🎥 **Affichage et suivi des vidéos de formation**
- 📝 **Système de quiz interactifs**
- 📊 **Suivi des progrès des étudiants**
- 💬 **Forum de discussion** pour l'échange entre apprenants et enseignants

## 🛠️ Technologies utilisées

- **Framework** : Next.js
- **Frontend** : React, Tailwind CSS
- **Backend** : Next.js API Routes, Prisma
- **Base de données** : MySQL
- **Authentification** : NextAuth.js

## 📥 Installation

### 📌 Prérequis

- **Node.js 18+**
- **Base de données MySQL ou MongoDB configurée**
- **Prisma installé**

### 🔧 Étapes d'installation

1. **Cloner le projet**

```bash
 git clone https://github.com/ton-utilisateur/ENT.git
 cd ENT
```

2. **Installer les dépendances**

```bash
 npm install
```

3. **Configurer l'environnement**
   Créer un fichier `.env.local` à la racine du projet et ajouter :

```env
DATABASE_URL="votre_url_de_base_de_donnees"
NEXTAUTH_SECRET="votre_secret"
```

4. **Exécuter les migrations de base de données**

```bash
 npx prisma migrate dev --name init
```

5. **Lancer l'application**

```bash
 npm run dev
```

## 📅 Roadmap

- [ ] Finalisation du système d'authentification
- [ ] Ajout de la gestion avancée des cours
- [ ] Intégration d'un tableau de bord administrateur
- [ ] Amélioration de l'UX/UI

## 🤝 Contribution

Les contributions sont les bienvenues !

1. Forker le repo
2. Créer une branche (`git checkout -b feature-xyz`)
3. Commiter vos modifications (`git commit -m "Ajout d'une nouvelle fonctionnalité"`)
4. Pousser la branche (`git push origin feature-xyz`)
5. Ouvrir une Pull Request

## 📜 Licence

Ce projet est sous licence MIT. Voir [LICENSE](LICENSE) pour plus d'informations.

---

✨ _Ce projet est activement développé, restez à l'affût des mises à jour !_
