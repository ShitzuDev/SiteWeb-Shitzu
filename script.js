document.addEventListener("DOMContentLoaded", () => {
    const titles = document.querySelectorAll("h2");
    titles.forEach((title) => {
        let text = title.textContent;
        title.textContent = "";
        let i = 0;
        const typingEffect = setInterval(() => {
            if (i < text.length) {
                title.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(typingEffect);
            }
        }, 100);
    });
});
