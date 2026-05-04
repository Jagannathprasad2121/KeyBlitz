//=================UI ELEMENTS========================
const startBtn = document.querySelector('.start-btn');
const howToBtn = document.querySelector('.how-btn');
const backBtn = document.querySelector('.back-btn');
const restartBtn = document.querySelector('.restart-btn');
const startScreen = document.querySelector('#start-screen');
const gameScreen = document.querySelector('#game-screen');
const howScreen = document.querySelector('#how-screen');
const gameOverScreen = document.querySelector('#game-over-screen');
//====================SCREEN EVENTS=====================
startBtn.addEventListener('click',function(){
    startScreen.classList.remove('active');
    gameScreen.classList.add('active');
    resetGame();
});

howToBtn.addEventListener('click',function(){
    startScreen.classList.remove('active');
    howScreen.classList.add('active');
});

backBtn.addEventListener('click', function(){
    howScreen.classList.remove('active');
    startScreen.classList.add('active');
});

restartBtn.addEventListener('click',function(){
    gameOverScreen.classList.remove('active');
    gameScreen.classList.add('active');
    resetGame();
});

//========================================GAME SETUP================================================================
const words = "apple jump blue fast river quiet storm orange mountain jump train happy yellow blue river light sun fire water song dream dark sleep bright voice tree green leaf book red fast slow bird jump sky wind cold hot loud quiet jump blue river fast bright dark song orange mountain train dream light green leaf tree slow red book sun fire blue water apple song fast quiet mountain tree jump bright dark red sky bird yellow dream song river train orange fast blue wind hot cold loud jump tree red leaf slow water bright fire blue apple sun song mountain dream train wind slow leaf red jump yellow light blue voice sun fast quiet tree river dark bright dream slow orange book rain fire water moon jump train wind fast blue red mountain sun quiet light song leaf book dark tree apple blue green yellow song orange purple fast river train bright dark dream wind cloud apple red slow quiet loud jump blue tree mountain train leaf fire water sun river light orange book dream green yellow jump blue fast dark voice red sky hot cold quiet loud jump sky blue rain tree leaf slow orange sun red fast blue river tree mountain dream bright dark cold wind loud fast jump leaf apple red sun quiet sky cloud water bird book yellow purple blue song river fast dream slow dark bright mountain hot hot cold loud tree leaf slow red blue sun leaf river water apple song dream green purple orange train fast slow blue yellow jump dark bright cold windy hot blue sound jump green slow red light fast book song tree blue dream hot windy river red mountain fast slow sun jump blue tree slow bright leaf green wind sun yellow".split(" ");

const wordCount = words.length;

function randomWord(){
    const randomIndex = Math.floor(Math.random()*wordCount);
    return words[randomIndex];
}

function formatWord(word){
    return `
        <div class="word">
            ${word
                .split('')
                .map(letter => `<span class="letter">${letter}</span>`)
                .join('')}
        </div>
    `;
}

function newGame(){
    document.querySelector('.words').innerHTML = "";
    for(let i=0; i<words.length; i++){
        document.querySelector('.words').innerHTML += formatWord(randomWord());
    }
}
newGame();
//=============================TYPING LOGIC=============================
document.addEventListener('keydown', handleTyping);
let currentWordIndex = 0;
let currentLetterIndex = 0;
let score = 0;
let isGameActive = false;
let time = 60;
let timerInterval;

function formatTime(t){
    const sec = t % 60;
    return `00:${sec < 10 ? '0' : ''}${sec}`;
}
function startTimer(){
    clearInterval(timerInterval); // 🔥 prevent multiple timers

    timerInterval = setInterval(() => {
        time--;

        document.getElementById('time').textContent = formatTime(time);

        if(time <= 0){
            clearInterval(timerInterval);
            endGame();
        }
    }, 1000);
}
function resetGame(){
    score = 0;
    time = 60;
    currentWordIndex = 0;
    currentLetterIndex = 0;
    isGameActive = true;

    document.getElementById('score').textContent = score;
    document.getElementById('time').textContent = formatTime(time);

    newGame();
}
function endGame(){
    isGameActive = false;

    gameScreen.classList.remove('active');
    gameOverScreen.classList.add('active');

    document.getElementById('final-score').textContent = score;
}

function handleTyping(e){
    startTimer()
    const wordElements = document.querySelectorAll('.word');
    const currentWord = wordElements[currentWordIndex];
    const letters = currentWord.querySelectorAll('.letter');

    wordElements.forEach(word => word.classList.remove('active'));
    currentWord.classList.add('activeWord');

    const key = e.key;

    if(key.length === 1 && key !== ' '){
        if(key === letters[currentLetterIndex].textContent){
            letters[currentLetterIndex].classList.add('correct');
        } else {
            letters[currentLetterIndex].classList.add('incorrect');
        }

        currentLetterIndex++;
    }

    if(key === 'Backspace'){
        if(currentLetterIndex > 0){
            
            currentLetterIndex--;
            letters[currentLetterIndex].classList.remove('correct', 'incorrect');
        }
    }
    
    if(key === ' '){
        if(currentLetterIndex < letters.length) return;
        e.preventDefault();
        const correctLetters = currentWord.querySelectorAll('.correct').length;
        const totalLetters = letters.length;

        if(correctLetters === totalLetters){
            score += 10;
        }
        document.querySelector('#score').textContent = score;
        currentWordIndex++;
        currentLetterIndex = 0;
    }
}
