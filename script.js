const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    }))
})

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

const valueDisplays = document.querySelectorAll('.num');
const interval = 5000;

valueDisplays.forEach((intDisplay) => {
    let startValue = 0;
    let endValue = parseInt(intDisplay.getAttribute('data-val'));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function () {
        startValue += 1;
        intDisplay.textContent = startValue + "+ satisfied customers";
        if (startValue == endValue) {
            clearInterval(counter);
        }
    }, duration
    );
});
