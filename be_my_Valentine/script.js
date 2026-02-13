const messages = [
    "Ты уверена?",
    "Точно уверена??",
    "Ты не сомневаешься?",
    "Любимка, пожалуйста...",
    "Просто подумай!",
    "Если ты скажешь "нет", мне будет очень грустно...",
    "Мне будет очень грустно...",
    "Мне будет очень-очень грустно...",
    "Ладно, хорошо, я больше не буду спрашивать...",
    "Шучу, пожалуйста, скажи "да"! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
