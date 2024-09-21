const heartsContainer = document.getElementById("hearts-container");

function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");

    heart.style.left = `${Math.random() * 100}vw`;  
    heart.style.animationDuration = `${Math.random() * 3 + 1}s`; 

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}


setInterval(createHeart, 300);

const continueButton = document.getElementById("continueButton");
continueButton.onclick = () => {
    window.location.href = "./flor.html"; 
};
