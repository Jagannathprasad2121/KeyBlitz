# ⌨️ KeyBlitz — Typing Speed Game

KeyBlitz is a fast-paced browser-based typing game...

## 🌐 Live Demo
👉 [Play KeyBlitz](https://remarkable-florentine-93622f.netlify.app/)

🚀 Features:
1.⏱️ Real-time countdown timer
2.🎯 Score tracking system
3.📈 Level progression (every 5 correct words)
4.🎯 Accuracy calculation
5.🏆 High score saved using Local Storage
6.💡 Smooth cursor movement & visual feedback
7.🎨 Clean and responsive UI

🕹️ How to Play:
1.Click Start Game
2.Type the highlighted word
3.Press Space to move to the next word
4.Use Backspace to correct mistakes
5.Each correct word gives you points
6.Game ends when time reaches 0

🎮 Game Rules:
✔️ Correct letters → Green
❌ Incorrect letters → Red
⛔ Incomplete word → Cannot skip
⭐ Score increases only for fully correct words
📊 Accuracy = (Correct Keystrokes / Total Keystrokes) × 100

| Feature    | Description                      |
| ---------- | -------------------------------- |
| Timer      | 60 seconds countdown             |
| Scoring    | +10 per correct word             |
| Level Up   | Every 5 correct words            |
| High Score | Stored in browser (localStorage) |


Project Structure:
KeyBlitz/
│
├── index.html      # Main HTML structure
├── style.css       # Styling and layout
├── script.js       # Game logic
└── assets/
    └── Logo.png    # Game logo