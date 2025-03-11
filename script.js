const $ = el => document.querySelector(el);
const $$ = el => document.querySelectorAll(el);

const $container = $('.bricks');

function generateBricks() {
  Array.from({ length: 500 }).forEach(() => {
    const $brick = document.createElement('aside');
    $brick.classList.add('brick');
    const duration = Math.random() * 5;
    $brick.style.animationDuration = `${2 + duration}s`;
    $brick.style.animationDelay = `${duration * 3}ms`;
    $container.appendChild($brick);
  });
}

document.addEventListener('DOMContentLoaded', generateBricks);
