# 🧪 Tech Quiz: Cypress Testing Suite

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs)
![Express](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb)
![Cypress](https://img.shields.io/badge/Cypress-17202C?style=for-the-badge&logo=cypress)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript)

## 📋 Description

This project is a **testing enhancement** for a full-stack MERN Tech Quiz App using **Cypress**. The app allows users to take a 10-question quiz and view their score. The goal of this challenge is to validate the reliability and behavior of the quiz component using:

- ✅ **Component tests**
- ✅ **End-to-end tests**

No modifications were made to the core application code—only testing was added.

---

## 🏗️ Project Structure

```bash
.
├── client/                   # React frontend
├── server/                   # Node/Express backend
├── cypress/                 # Cypress test folder
│   ├── component/
│   │   └── Quiz.cy.jsx      # Component test
│   ├── e2e/
│   │   └── quiz.cy.js       # End-to-end test
│   ├── fixtures/
│   │   └── questions.json   # Optional fixture data
├── cypress.config.ts        # Cypress configuration
├── .env                     # Environment variables
├── package.json
└── README.md
```

---

## 🚀 How to Run Tests

### 1. Clone and Install

```bash
git clone https://github.com/jsanc33/tech-quiz-cypress.git
cd tech-quiz-cypress
npm install
```

### 2. Setup Environment

Rename the `.env.example` to `.env` and add any required variables (typically for MongoDB and server port).

### 3. Run Cypress

```bash
npm run cypress
```

This will open the Cypress UI. Select either:

- `Component` → `Quiz.cy.jsx`
- `E2E` → `quiz.cy.js`

---

## ✅ Acceptance Criteria Covered

- [x] Quiz starts when the start button is clicked.
- [x] User is presented with one question at a time.
- [x] User can answer all 10 questions.
- [x] Final score is displayed.
- [x] Option to start a new quiz is available.

---

## 🧪 Technologies Used

- **React**
- **Node.js**
- **Express**
- **MongoDB**
- **Cypress**
- **JavaScript (ES6+)**

---

## 📄 License

MIT license with Joseph
