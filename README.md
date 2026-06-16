# ⚡ BotLeague — India's Ultimate Robotics Arena

A full stack web application for **BotLeague**, India's national ecosystem for competitive robotics. Built as a Full Stack Developer Intern assignment for **Botmakers Pvt Ltd**.

🌐 **Live Site:** [botleague-rho.vercel.app](https://botleague-rho.vercel.app)

---

## 📌 Project Overview

BotLeague is a platform where robotics teams across India can:
- View and register for competitive robotics events
- Track live competition brackets and past results
- Explore competition disciplines (Robo Race, Robo War, FPV Drone, etc.)
- Sign up as a Judge, Volunteer, or Community Member
- Track national rankings via a leaderboard

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|---|---|
| React 18 | UI library |
| Vite | Build tool and dev server |
| Plain CSS | Component-scoped styling (no framework) |
| JavaScript ES6+ | Application logic |

### Backend
| Technology | Purpose |
|---|---|
| FastAPI (Python) | REST API server |
| PyMongo | MongoDB driver |
| Pydantic | Request validation |
| python-dotenv | Environment variable management |

### Database
| Technology | Purpose |
|---|---|
| MongoDB Atlas | Cloud-hosted NoSQL database (M0 free tier) |

### Deployment
| Service | What's deployed |
|---|---|
| Vercel | Frontend (React + Vite) |
| Render *(in progress)* | Backend (FastAPI) |
| MongoDB Atlas | Database (cloud) |

---

## 📁 Project Structure

```
botleague/
│
├── src/                          # Frontend source
│   ├── components/               # One folder per section
│   │   ├── Navbar/
│   │   │   ├── Navbar.jsx
│   │   │   └── Navbar.css
│   │   ├── Hero/
│   │   │   ├── Hero.jsx
│   │   │   └── Hero.css
│   │   ├── Competitions/
│   │   │   ├── Competitions.jsx
│   │   │   └── Competitions.css
│   │   ├── UserJourney/
│   │   │   ├── UserJourney.jsx
│   │   │   └── UserJourney.css
│   │   ├── AboutLeague/
│   │   │   ├── AboutLeague.jsx
│   │   │   └── AboutLeague.css
│   │   ├── Categories/
│   │   │   ├── Categories.jsx
│   │   │   └── Categories.css
│   │   ├── Disciplines/
│   │   │   ├── Disciplines.jsx
│   │   │   └── Disciplines.css
│   │   ├── Advantages/
│   │   │   ├── Advantages.jsx
│   │   │   └── Advantages.css
│   │   ├── Ecosystem/
│   │   │   ├── Ecosystem.jsx
│   │   │   └── Ecosystem.css
│   │   ├── Sponsors/
│   │   │   ├── Sponsors.jsx
│   │   │   └── Sponsors.css
│   │   └── Footer/
│   │       ├── Footer.jsx
│   │       └── Footer.css
│   │
│   ├── data/                     # Static data layer
│   │   ├── events.js
│   │   ├── categories.js
│   │   ├── disciplines.js
│   │   ├── journey.js
│   │   ├── advantages.js
│   │   └── sponsors.js
│   │
│   ├── pages/
│   │   └── Home.jsx              # Composes all sections
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css                 # Design tokens + global styles
│
├── server/                       # Backend source
│   ├── main.py                   # FastAPI app + all endpoints
│   ├── database.py               # MongoDB connection
│   ├── requirements.txt          # Python dependencies
│   ├── .env.example              # Environment variable template
│   └── .gitignore
│
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

---

## 🎨 Frontend Sections

The site is a single-page application with the following sections built top to bottom:

| Section | Description |
|---|---|
| **Navbar** | Sticky nav with logo, links, Login and Register buttons. Responsive hamburger menu on mobile |
| **Hero** | Full-width banner with headline, subtext, and CTA buttons |
| **Competitions & Events** | Three-column layout showing Live bracket, Upcoming events, and Past results |
| **User Journey** | 4-step visual path — Build Team → Compete → Earn Ranking → Join League |
| **What is BotLeague?** | 4-point explainer — Structured Events, Digital Identity, National Ranking, Career Pathway |
| **Categories** | 4 category cards — Mini Makers, Junior Innovators, Young Engineers, Robo Minds |
| **Competition Disciplines** | Grid of 6 sport cards — Robo Race, Line Follower, RC Racing, FPV Drone, Robo Hockey, Robo War |
| **The League Advantage** | 4 advantages with a live Leaderboard card on the right |
| **Join the Ecosystem** | 3 signup forms — Become a Judge, Volunteer, Community Member |
| **Sponsors** | Sponsor logo strip |
| **Footer** | Quick links + social media icons |

---

## 🔌 Backend API

Base URL: `http://localhost:8000` (local) / Render URL (deployed)

| Method | Endpoint | Description | Auth |
|---|---|---|---|
| GET | `/` | Health check | Public |
| POST | `/register` | Register a new user | Public |
| GET | `/users` | Get all registered users | Public |

### Example Requests

**Health Check**
```
GET /
Response: { "message": "BotLeague API Running" }
```

**Register User**
```
POST /register
Body:    { "name": "Shreyash", "email": "shreyash@gmail.com" }
Response: { "message": "User Registered Successfully" }
```

**Get All Users**
```
GET /users
Response: [ { "name": "Shreyash", "email": "shreyash@gmail.com" } ]
```

---

## 🗄️ Database

- **Provider:** MongoDB Atlas (M0 free tier)
- **Cluster:** `botleague-cluster` hosted on AWS Mumbai (ap-south-1)
- **Database:** `botleague`
- **Collections:**
  - `users` — stores registered user data

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- Python 3.10+
- MongoDB Atlas account

---

### Frontend Setup

```bash
# Clone the repo
git clone https://github.com/your-username/botleague.git
cd botleague

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

---

### Backend Setup

```bash
cd server

# Create virtual environment
python -m venv venv

# Activate it
# On Windows:
venv\Scripts\activate
# On Mac/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Create .env file
cp .env.example .env
# Fill in your MONGO_URI

# Start server
uvicorn main:app --reload
```

Open [http://localhost:8000](http://localhost:8000)

API docs auto-generated at [http://localhost:8000/docs](http://localhost:8000/docs)

---

## 🌍 Deployment

### Frontend — Vercel
- Connected GitHub repo to Vercel
- Framework auto-detected as Vite
- Auto-deploys on every push to `main`
- Live at: [botleague-rho.vercel.app](https://botleague-rho.vercel.app)

### Backend — Render *(in progress)*
- Web service connected to GitHub repo
- Root directory set to `server/`
- Environment variables configured on Render dashboard
- Start command: `uvicorn main:app --host 0.0.0.0 --port 8000`

---

## 🔒 Environment Variables

Create a `.env` file inside `server/` based on `.env.example`:

```env
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/botleague
```

> ⚠️ Never commit your `.env` file. It is listed in `.gitignore`.

---

## 📈 Current Status

| Feature | Status |
|---|---|
| Frontend UI (all sections) | ✅ Complete |
| Frontend deployed on Vercel | ✅ Live |
| MongoDB Atlas connected | ✅ Working |
| User registration API | ✅ Working |
| Backend deployed on Render | 🚧 In progress |
| Frontend connected to backend | 🚧 In progress |
| Events API | 🚧 Planned |
| Ecosystem signup API | 🚧 Planned |
| Leaderboard API | 🚧 Planned |

---

## 👨‍💻 Author

**Shreyash**
Full Stack Developer Intern Assignment — Botmakers Pvt Ltd

---

## 📄 License

This project was built for assignment purposes for Botmakers Pvt Ltd.