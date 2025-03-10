function showHearts(event) {
    event.stopPropagation(); // Prevents multiple triggers

    for (let i = 0; i < 5; i++) {
        let heart = document.createElement("i");
        heart.classList.add("fas", "fa-heart", "heart");

        let x = event.clientX + Math.random() * 50 - 25;
        let y = event.clientY + Math.random() * 50 - 25;

        heart.style.left = `${x}px`;
        heart.style.top = `${y}px`;
        heart.style.position = "absolute";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 2000);
    }
}
