const body = document.body;
const parallaxBg = document.getElementById('parallax-bg');
const loveMeter = document.getElementById('love-meter');
const loveValue = document.getElementById('love-value');
const loveMessage = document.getElementById('love-message');

// Show the parallax background message immediately
parallaxBg.classList.add('show-message');

let isSliding = false;

loveMeter.addEventListener('input', () => {
    isSliding = true;
    updateLoveValue();
});

loveMeter.addEventListener('change', () => {
    isSliding = false;
});

function updateLoveValue() {
    const value = loveMeter.value;
    loveValue.textContent = `${value}%`;

    // Customize messages based on the percentage
    if (value <= 40) {
        loveMessage.textContent = "You mean the world to me, sweetheart. Let's work together to bring more love and warmth into our lives. I'm here for you every step of the way.";
    } else if (value <= 80) {
        loveMessage.textContent = "Your love means everything to me, and I cherish the moments we share. Let's keep growing together and deepening our connection.";
    } else {
        loveMessage.textContent = "Your love completes me in ways I can't even express. I'm so grateful for the depth of our connection and the love we share.";
    }

    // Change background image every time the slider moves
    preloadImage();
}

function preloadImage() {
    const tempImg = new Image();
    tempImg.src = `https://source.unsplash.com/1600x900/?love,romantic&${new Date().getTime()}`;
    tempImg.onload = () => {
        body.style.backgroundImage = `url('${tempImg.src}')`;
    };
}
