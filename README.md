# ChatBot

A web-based AI chatbot using React and Express, powered by a local LLaMA3 model via Olama for context-aware conversations.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [How It Works](#how-it-works)
- [About Backend (Endpoints)](#about-backend-endpoints)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)

## Features

- 🌟 **Smooth glowing background** - Eye-catching animated background effects
- 📱 **Responsive design** - Adapts to different screen sizes
- 💬 **Interactive chat interface** - Real-time messaging experience
- 🎯 **Dynamic input positioning** - Input box transitions from center to bottom
- ⚡ **Fast and lightweight** - Optimized for performance
- 🎨 **Modern UI/UX** - Clean and intuitive user interface

## Tech Stack

### Frontend
- **React** - JavaScript library for building user interfaces
- **Tailwind CSS** - Utility-first CSS framework for styling
- **JavaScript (ES6+)** - Modern JavaScript features
- **Vite** - Fast build tool and development server

### Development Tools
- **npm** - Package manager
- **ESLint** - Code linting
- **Git** - Version control

## How It Works

The application follows a component-based architecture:

```text
📦 Component Architecture
├── MessagesProvider.jsx (Root Provider)
│   ├── Manages global state for messages
│   ├── Provides context to all child components
│   └── Handles message operations (send, receive, delete)
│
├── Child Components
│   ├── ChatInterface - Main chat display
│   ├── MessageInput - User input component
│   ├── MessageList - Display messages
│   └── Background - Animated background effects
```

**Key Features:**
- The `src/components/MessagesProvider.jsx` serves as the central provider component
- All other components are children of MessagesProvider and have access to the message context
- State management is handled through React Context API
- Messages flow from input → provider → display components

## About Backend (Endpoints)

### API Endpoints

> **Note:** This section will be updated as backend functionality is implemented.

**Planned Endpoints:**

```bash
# Message Operations
POST /api/messages          # Send a new message
GET  /api/messages          # Retrieve message history
DELETE /api/messages/:id    # Delete a specific message

# User Operations
POST /api/users/login       # User authentication
GET  /api/users/profile     # Get user profile

# Chat Operations
GET  /api/chat/response     # Get bot response
POST /api/chat/context      # Set conversation context
```

**Response Format:**
```json
{
  "status": "success",
  "data": {
    "message": "Response content",
    "timestamp": "2024-01-01T00:00:00Z"
  },
  "error": null
}
```

## Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager
- Git

### Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Amitrajit007/echo-bot
   cd Chat-bot
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

5. **Preview production build:**
   ```bash
   npm run preview
   ```

## Usage

### Getting Started
1. Open your browser and navigate to `http://localhost:5173` (or the port shown in terminal)
2. The chatbot interface will load with an animated background
3. Start typing your message in the input field
4. Press Enter or click Send to submit your message
5. View the conversation in the chat interface

### Key Features Usage
- **Sending Messages:** Type in the input field and press Enter
- **Viewing History:** Scroll through the message list to see previous conversations
- **Responsive Design:** Access the app on any device - it automatically adapts

### Keyboard Shortcuts
- `Enter` - Send message
- `Shift + Enter` - New line (if multiline input is enabled)

## Project Structure
```
chatbot/                                          # Root folder
│
├── client/                                       # Frontend React app
│     ├── node_modules/                           # Installed npm packages
│     ├── src/                                    # Source files
│     │     ├── assets/                           # Static assets like images
│     │     │ └── logo.webp
│     │     ├── components/                       # React components
│     │     │      ├── App.jsx                    # Main App component
│     │     │      ├── Background.jsx             # Background component
│     │     │      ├── Chat.jsx                   # Chat UI component
│     │     │      ├── Footer.jsx                 # Footer component
│     │     │      ├── Header.jsx                 # Header component
│     │     │      ├── Input.jsx                  # Input box component
│     │     │      ├── MessagesContext.jsx        # Messages-related centext
│     │     │      ├── MessagesProvider.jsx       # Context provider for messages
│     │     │      ├── RenderChat.jsx             # Render chat UI
│     │     │      └── Reply.jsx                  # Reply component
│     │     ├── index.css                         # Global CSS
│     │     └── main.jsx                          # Entry point for React
│     │
│     ├── .eslint/                                # ESLint configuration folder
│     ├── config.js                               # Config file for client
│     ├── index.html                              # Main HTML file
│     ├── package.json                            # npm dependencies & scripts
│     ├── package-lock.json                       # npm lock file
│     ├── update.md                               # Update/change log
│     └── vidconfig.js                            # Video configuration
│
├── server/                                       # Backend Node.js server
│     ├── node_modules/                           # Installed npm packages
│     ├── .env                                    # Environment variables
│     ├── index.js                                # Entry point for server
│     ├── package.json                            # npm dependencies & scripts
│     └── package-lock.json                       # npm lock file
│
├── .gitignore
└── README.md                                     # Project documentation
```
### Key Files Description
```
| File/Folder | Description |
|-------------|-------------|
| `.gitignore` | Specifies intentionally untracked files to ignore |
| `README.md` | Project documentation and overview |
| `client/` | Frontend code of the chatbot |
| `client/config.js` | Frontend configuration file |
| `client/eslint/` | ESLint configuration and rules |
| `client/index.html` | Main HTML file for frontend |
| `client/package.json` | Frontend project dependencies and scripts |
| `client/package-lock.json` | Lockfile for frontend dependencies |
| `client/update.md` | Notes or updates related to the frontend |
| `client/vidconfig.js` | Vite-related configuration |
| `client/src/` | Source folder containing frontend components and assets |
| `client/src/index.css` | Main CSS file for styling |
| `client/src/main.jsx` | Frontend entry point for React app |
| `client/src/assets/` | Folder containing static assets |
| `client/src/assets/logo.webp` | Logo image file |
| `client/src/components/` | Folder containing React components |
| `client/src/components/App.jsx` | Main App component |
| `client/src/components/Background.jsx` | Animated glowing background effects |
| `client/src/components/Chat.jsx` | Chat interface UI component |
| `client/src/components/Footer.jsx` | Footer component for the UI |
| `client/src/components/Header.jsx` | Header component for the UI |
| `client/src/components/Input.jsx` | Handles user input and sending messages |
| `client/src/components/Messages/` | Folder containing individual message components |
| `client/src/components/Context.jsx` | Provides React context for app-wide state |
| `client/src/components/MessagesProvider.jsx` | Central state management for messages and chat functionality |
| `client/src/components/RenderServer.jsx` | Handles server message rendering |
| `client/src/components/RenderChat.jsx` | Handles chat message rendering |
| `client/src/components/Reply.jsx` | Handles reply message rendering |
| `server/` | Backend code of the chatbot |
| `server/index.jsx` | Entry point for server |
| `server/env.env` | Environment variables for backend |
| `server/package.json` | Backend project dependencies and scripts |
| `server/package-lock.json` | Lockfile for backend dependencies |

---
