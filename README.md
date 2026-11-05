# 📘 ExamNotes AI

An AI-powered exam notes generator that creates structured, exam-focused notes, diagrams, charts, and revision points from any topic — with PDF download and credit-based access.

---

## 🚀 Features

- 🤖 **AI Notes Generation** — Powered by Google Gemini 2.0 Flash
- 📊 **Auto Diagrams** — Mermaid.js flow diagrams
- 📈 **Charts** — Recharts bar/line/pie charts
- ⚡ **Revision Mode** — Quick 5-min exam cheat sheet
- ⬇️ **PDF Download** — Clean printable PDFs via PDFKit
- 🔐 **Google Auth** — Firebase Google sign-in
- 💳 **Credits System** — Stripe payment integration
- 📚 **Notes History** — View all past generated notes

---

## 🛠️ Tech Stack

| Layer | Tech |
|---|---|
| Frontend | React 19, Vite, TailwindCSS 4, Redux Toolkit |
| Backend | Node.js, Express 5, MongoDB, Mongoose |
| AI | Google Gemini 2.0 Flash API |
| Auth | Firebase Google OAuth |
| Payments | Stripe Checkout |
| PDF | PDFKit |
| Animations | Motion (Framer Motion) |
| Charts | Recharts, Mermaid.js |

---

## ⚙️ Setup & Installation

### 1. Clone the repo
```bash
git clone https://github.com/YOUR_USERNAME/ExamNotesAI.git
cd ExamNotesAI
```

### 2. Install Server Dependencies
```bash
cd server
npm install
```

### 3. Install Client Dependencies
```bash
cd ../client
npm install
```

### 4. Set Up Environment Variables

**`server/.env`**
```env
PORT=8000
NODE_ENV=development
MONGODB_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
GEMINI_API_KEY=your_gemini_api_key
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
CLIENT_URL=http://localhost:5173
```

**`client/.env`**
```env
VITE_FIREBASE_APIKEY=your_firebase_api_key
VITE_SERVER_URL=http://localhost:8000
```

### 5. Run the App

```bash
# Terminal 1 — Backend
cd server
npm run dev

# Terminal 2 — Frontend
cd client
npm run dev
```

Open → **http://localhost:5173**

---

## 🔑 API Keys Needed

| Service | Get it from |
|---|---|
| MongoDB | [cloud.mongodb.com](https://cloud.mongodb.com) (Free) |
| Gemini AI | [aistudio.google.com](https://aistudio.google.com) (Free) |
| Firebase | [console.firebase.google.com](https://console.firebase.google.com) |
| Stripe | [dashboard.stripe.com](https://dashboard.stripe.com) |

---

## 📁 Project Structure

```
ExamNotesAI/
├── client/                 # React + Vite frontend
│   ├── src/
│   │   ├── components/     # UI components
│   │   ├── pages/          # Route pages
│   │   ├── redux/          # State management
│   │   ├── services/       # API calls
│   │   └── utils/          # Firebase config
│   └── .env                # Client environment variables
│
└── server/                 # Express backend
    ├── controllers/        # Route handlers
    ├── middleware/         # Auth middleware
    ├── models/             # MongoDB schemas
    ├── routes/             # API routes
    ├── services/           # Gemini AI service
    └── utils/              # DB, token, prompt builder
```

---

## 📄 License

MIT License — Free to use for educational purposes.
