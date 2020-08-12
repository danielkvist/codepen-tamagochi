const firstBtn = document.getElementById('firstButton');
const middleBtn = document.getElementById('middleButton');
const secondBtn = document.getElementById('secondButton');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const { h, w } = canvas;

ctx.scale(20, 20);

ctx.fillStyle = 'black';
ctx.fillRect(1, 1, 2, 1);
ctx.fillRect(3, 2, 2, 1);
ctx.fillRect(3, 1, 2, 1);
