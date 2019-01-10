//using Canvas API for drawing the balls on the screen  https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Drawing_graphics
//using requestAnimationFrame API for animating the whole display  https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const heigth = canvas.height = window.innerHeight;