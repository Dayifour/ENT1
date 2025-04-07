# 🧠 LEARN.md — Get Started with ENT

Welcome to the learning guide for **ENT - Digital Work Environment**!  
This document will help you **understand**, **explore**, and **contribute** to the project effectively.

---

## 🎯 What You’ll Learn

- How ENT is structured and works under the hood
- Key technologies used in the stack
- How to run the project locally
- How to contribute like a pro

---

## 🛠️ Tech Stack Overview

| Layer        | Technology           |
|--------------|----------------------|
| Frontend     | React, Tailwind CSS  |
| Backend      | Next.js API Routes   |
| Database     | MySQL + Prisma       |
| Auth         | NextAuth.js          |
| Framework    | Next.js              |

---

## 📁 Project Structure (simplified)

```bash
/ENT
│
├── pages/              # Next.js routes
│   ├── api/            # Backend API endpoints
│   └── auth/           # Authentication logic
│
├── prisma/             # Prisma schema & migrations
├── public/             # Static assets
├── styles/             # Global Tailwind styles
├── components/         # Reusable React components
├── .env.local          # Local environment variables
└── ...
```

---

## 🚀 Getting Started

1. **Clone the project**  
   ```bash
   git clone https://github.com/ton-utilisateur/ENT.git
   cd ENT
   ```

2. **Install dependencies**  
   ```bash
   npm install
   ```

3. **Configure environment variables**  
   Create a `.env.local` file:
   ```env
   DATABASE_URL="your_database_url"
   NEXTAUTH_SECRET="your_secret"
   ```

4. **Set up the database**  
   ```bash
   npx prisma migrate dev --name init
   ```

5. **Launch the development server**  
   ```bash
   npm run dev
   ```

---

## 🔍 Explore the Features

- 🔐 Auth system with roles  
- 📚 Manage courses and resources  
- 🎥 Watch & follow training videos  
- 📝 Take interactive quizzes  
- 📊 Monitor student progress  
- 💬 Use the forum to engage in discussions  

---

## 🤝 Contribute to ENT

Want to contribute? Amazing! Follow these steps:

1. Fork the repo  
2. Create your branch  
   ```bash
   git checkout -b feature-xyz
   ```
3. Make your changes and commit  
   ```bash
   git commit -m "Add feature xyz"
   ```
4. Push your branch  
   ```bash
   git push origin feature-xyz
   ```
5. Open a Pull Request 🚀

---

## 📘 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma ORM Guide](https://www.prisma.io/docs)
- [NextAuth.js Docs](https://next-auth.js.org/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)

---

## 📜 License

Licensed under the MIT License. See [`LICENSE`](./LICENSE) for details.

---

**✨ ENT is a growing project — your feedback and ideas are always welcome!**
