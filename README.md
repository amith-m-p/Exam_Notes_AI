# 📘 ExamNotes AI

An AI-powered tool that turns any topic into structured, exam-focused notes with diagrams, charts, and revision points. Notes can be downloaded as clean, printable PDFs.

## ✨ Features

- **AI notes generation** using Google Gemini 2.0 Flash
- **Diagrams** rendered with Mermaid.js
- **Charts** (bar, line, and pie) rendered with Recharts
- **Revision mode**, a quick 5-minute exam cheat sheet
- **PDF download** generated with PDFKit
- **Google sign-in** with Firebase
- **Credit-based access** with Stripe Checkout
- **Notes history** to revisit past generations

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 19, Vite, TailwindCSS 4, Redux Toolkit |
| Backend | Node.js, Express 5, MongoDB, Mongoose |
| AI | Google Gemini 2.0 Flash API |
| Auth | Firebase Google sign-in |
| Payments | Stripe Checkout |
| PDF | PDFKit |
| Animations | Motion (Framer Motion) |
| Charts and diagrams | Recharts, Mermaid.js |

## 📋 Prerequisites

- [Node.js](https://nodejs.org) 20 or newer
- npm (installed with Node.js)
- A MongoDB database (local or [MongoDB Atlas](https://cloud.mongodb.com))
- A Gemini API key, a Firebase project, and a Stripe account

## 🔑 Getting API Keys

| Service | Where to get it | Cost |
|---|---|---|
| MongoDB | [cloud.mongodb.com](https://cloud.mongodb.com) | Free tier available |
| Gemini AI | [aistudio.google.com](https://aistudio.google.com) | Free tier available |
| Firebase | [console.firebase.google.com](https://console.firebase.google.com) | Free tier available |
| Stripe | [dashboard.stripe.com](https://dashboard.stripe.com) | Free to sign up |

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone : https://github.com/amith-m-p/Exam_Notes_AI.git
cd ExamNotesAI
```

### 2. Install server dependencies

```bash
cd server
npm install
```

### 3. Install client dependencies

```bash
cd ../client
npm install
```

### 4. Configure environment variables

Create `server/.env`:

```env
PORT=8000
NODE_ENV=development
MONGODB_URL=your_mongodb_connection_string
GEMINI_API_KEY=your_gemini_api_key
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
CLIENT_URL=http://localhost:5173
```

Create `client/.env`:

```env
VITE_FIREBASE_APIKEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_APP_ID=your_firebase_app_id
VITE_SERVER_URL=http://localhost:8000
```

You can find the Firebase values in the Firebase Console under **Project settings → General → Your apps → SDK setup and configuration**.

> Never commit `.env` files to GitHub. Make sure `.env` is listed in `.gitignore`.

### 5. Run the app locally

Open two terminals:

```bash
# Terminal 1: backend
cd server
npm run dev
```

```bash
# Terminal 2: frontend
cd client
npm run dev
```

Then open **http://localhost:5173** in your browser.

### 6. Test Stripe webhooks locally

Stripe needs to reach your local server to confirm payments. Install the [Stripe CLI](https://docs.stripe.com/stripe-cli), then run:

```bash
stripe login
stripe listen --forward-to localhost:8000/<your-webhook-route>
```

The CLI prints a signing secret that starts with `whsec_`. Copy it into `STRIPE_WEBHOOK_SECRET` in `server/.env`, then restart the server.

## 💳 Credits

- New users receive **[5]** free credits when they first sign in.
- Generating a set of notes costs **[1]** credit.
- Additional credits can be purchased through Stripe Checkout. Credits are added after Stripe confirms the payment through the webhook.

## 🩹 Troubleshooting

- **Google sign-in fails:** Confirm that all Firebase values are set in `client/.env`. Add `localhost` under **Firebase Console → Authentication → Settings → Authorized domains**. Restart the Vite dev server after changing `.env` files.
- **Stripe webhook signature errors:** The webhook route needs the raw request body, so it must be registered before `express.json()` is applied.
- **Notes fail to generate:** Check that `GEMINI_API_KEY` is valid and that the model name used by the server is available for your key.

## 📁 Project Structure

ExamNotesAI/
├── client/ # React + Vite frontend
│ ├── src/
│ │ ├── components/ # UI components
│ │ ├── pages/ # Route pages
│ │ ├── redux/ # Redux Toolkit state
│ │ ├── services/ # API calls to the server
│ │ └── utils/ # Firebase configuration
│ └── .env # Client environment variables
│
└── server/ # Express backend
├── controllers/ # Route handlers
├── middleware/ # Authentication middleware
├── models/ # MongoDB schemas (Mongoose)
├── routes/ # API routes
├── services/ # Gemini AI service
└── utils/ # Database connection, tokens, prompt builder



## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
