# Valentine's Relationship App 💖

A cute and interactive web application for celebrating relationships, featuring a countdown, personal letter, photo gallery, and relationship quiz.

## Features
- **Countdown to Valentine's Day**: Real-time timer.
- **Interactive Quiz**: Test how well you know each other with cute questions.
- **Personalized Letter**: A heartfelt message display.
- **Photo Gallery**: A space for your favorite memories.
- **Themed UI**: Soft pink gradients, floating emojis, and cute animations.

## How to Run Locally

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)

### Setup Instructions
1. **Clone or Download the Project**
   Download the source code to your local machine.

2. **Install Dependencies**
   Open your terminal in the project root directory and run:
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**
   Create a `.env` file in the root directory and add a session secret:
   ```env
   SESSION_SECRET=your_random_secret_here
   ```

4. **Start the Development Server**
   Run the following command to start both the backend and frontend:
   ```bash
   npm run dev
   ```

5. **Access the App**
   Open your browser and navigate to:
   `http://localhost:5000`

## Tech Stack
- **Frontend**: React, Vite, Tailwind CSS, Framer Motion, Shadcn/UI
- **Backend**: Express.js
- **State Management**: TanStack Query
- **Routing**: Wouter
