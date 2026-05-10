# AI Chat Assistant 🚀

A modern real-time AI chat application built using:

- Frontend: HTML, CSS, JavaScript
- Backend: Node.js + Express
- Real-time Communication: WebSockets
- AI Integration: Groq Cloud API
- Markdown Rendering + Syntax Highlighting

Inspired by the experience of modern AI assistants like ChatGPT.

---

# ✨ Features

- ⚡ Real-time AI chat using WebSockets
- 🎨 Modern dark ChatGPT-style UI
- 💬 AI & User chat bubbles
- ⌨️ Typing indicator
- 🔄 Auto-scroll chat
- 📏 Auto-resizing textarea
- 🧠 AI responses powered by Groq
- 📝 Markdown rendering
- 💻 Syntax-highlighted code blocks
- 🔗 Styled links for dark mode
- 🧹 New Chat functionality
- 📡 Connection status indicator

---

# 🛠️ Tech Stack

## Frontend
- HTML5
- CSS3
- Vanilla JavaScript

## Backend
- Node.js
- Express.js
- WebSocket (`ws`)
- Groq SDK

## Libraries
- marked.js
- highlight.js
- dotenv
- cors

---

# 📂 Project Structure

```txt
project/
│
├── backend/
│   ├── server.js
│   ├── .env
│   └── package.json
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── app.js
│
└── README.md
```

---

# ⚙️ Installation

## 1. Clone Repository

```bash
git clone <your-repo-url>
```

---

## 2. Install Backend Dependencies

```bash
cd backend

npm install express ws cors dotenv groq-sdk
```

---

## 3. Create `.env`

```env
GROQ_API_KEY=your_api_key_here
```

Get API key from:

https://console.groq.com/keys

---

## 4. Run Backend

```bash
node server.js
```

Backend runs on:

```txt
http://localhost:3000
```

---

## 5. Run Frontend

Open frontend using:

- VS Code Live Server

OR

- Any local development server

Frontend example:

```txt
http://127.0.0.1:5500
```

---

# 🧠 WebSocket Architecture

```txt
Frontend
   ⇅
WebSocket Server
   ⇅
Groq AI API
```

### Flow

1. User sends message
2. Frontend sends through WebSocket
3. Backend receives message
4. Groq API generates AI response
5. Backend streams response back
6. Frontend renders beautifully

---

# 🎨 UI Highlights

- Responsive dark interface
- Smooth animations
- Clean typography
- ChatGPT-inspired layout
- Styled markdown content
- Syntax highlighted code blocks

---

# 📦 Supported Markdown

The AI supports:

- Headings
- Bullet Lists
- Code Blocks
- Tables
- Links
- Inline Code
- Quotes

---

# 🔮 Future Improvements

- Streaming AI responses
- Chat history persistence
- Authentication
- Multi-chat sidebar
- Voice input
- Image generation
- File uploads
- Mobile responsiveness
- React migration
- AI memory/context

---

# 📸 Preview

```txt
You: Explain WebSockets

AI:

# WebSockets

WebSockets provide full-duplex communication between
client and server...
```

---

# 🚀 Deployment Ideas

## Frontend
- Vercel
- Netlify

## Backend
- Render
- Railway
- VPS

---

# 🔐 Security Notes

- Never expose API keys publicly
- Store secrets inside `.env`
- Use HTTPS + WSS in production

---

# 🙌 Acknowledgements

- Groq Cloud
- highlight.js
- marked.js
- WebSocket API
- Node.js ecosystem

---

# 📜 License

MIT License

---

# 💡 Inspiration

Built to explore:
- real-time communication
- AI integrations
- modern frontend UX
- scalable chat architectures

and to recreate a ChatGPT-like AI assistant experience from scratch.
