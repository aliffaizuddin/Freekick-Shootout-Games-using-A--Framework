
let counter = 0;

function incrementCounter() {
  counter++;
  const counterText = document.getElementById('counter');
  counterText.setAttribute('value', 'Goal: ' + counter);
}

document.addEventListener('DOMContentLoaded', function () {
  const aimElements = document.querySelectorAll('a-circle');

  aimElements.forEach(function (aim) {
    aim.addEventListener('mouseenter', function () {
      incrementCounter();
    });
  });
});
