# Mercadinho 🛒

Mercadinho is a frontend project simulating a mini virtual market with complete CRUD functionalities. It was developed as part of a university Front-End class.

## ⚠️ Important Notes

This project contains several mistakes and inconsistencies as it was my first React.js project. Notable points include:

- **Gatsby** was not an ideal choice for this type of project.
- Component names are incorrectly formatted (first letters not uppercase).
- No further updates or maintenance will be provided.

This project is currently being refactored and improved in [minimarket](https://github.com/LucasCatuyama/minimarket).

## Technologies 🚀

- **Frontend:** React, Vite, Tailwind CSS
- **API:** Fake API using JSON Server for backend simulation

## Features ✨

- **Product listing** available for purchase
- **Add products** to the cart
- **Update quantity** of products in the cart
- **Remove products** from the cart

## Prerequisites 📋

- [Node.js](https://nodejs.org/en) (recommended version 18 or higher)

## Installation ⚙️

Clone the repository:

```bash
git clone https://github.com/LucasCatuyama/mercadinho.git
cd mercadinho
```

Install dependencies and run the project:

```bash
npm install
npm run dev
```

### Fake JSON API Setup

This project uses JSON Server as a fake backend. To run the JSON Server:

```bash
npm install json-server
npx json-server --watch db.json --port 3000
```

Open the application at [http://localhost:5173](http://localhost:5173).
