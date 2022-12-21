//when user observes a section, an animation triggers
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    }))
})
//change element of the hidden class to show
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
//elements of the fade class don't trasnform. they only fade
const hiddenFadeElements = document.querySelectorAll('.hidden-fade-only');
hiddenFadeElements.forEach((el) => observer.observe(el));
// trigger the number counter animation on page load
const valueDisplays = document.querySelectorAll('.num');
const interval = 5000;
//change the display by increasing the number content from 0 to 1856
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
