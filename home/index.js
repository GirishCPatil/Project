document.addEventListener("DOMContentLoaded", function() {
    const typingText = document.querySelector('.typing-text');
    const text = typingText.textContent;
    typingText.textContent = '';

    let i = 0;
    function type() {
        if (i < text.length) {
            typingText.textContent += text.charAt(i);
            i++;
            setTimeout(type, 100); // Adjust typing speed here
        }
    }

    type();
});
