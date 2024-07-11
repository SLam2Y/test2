function pulsate(element, delay) {
    setTimeout(() => {
        element.style.animation = `pulsate 2s infinite`;
    }, delay);
}

document.addEventListener('DOMContentLoaded', () => {
    const rect1 = document.getElementById('rect1');
    const rect2 = document.getElementById('rect2');
    const rect3 = document.getElementById('rect3');

    pulsate(rect1, 0);
    pulsate(rect2, 2000);
    pulsate(rect3, 4000);
});
