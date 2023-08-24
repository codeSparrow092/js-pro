const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color = color + hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
let setinterval;
const startChangingColor = function () {
  changeColor = function () {
    document.body.style.backgroundColor = randomColor();
  };
  if (!setinterval) {
    setinterval = setInterval(changeColor, 1000);
  }
};
const stopChangingColor = function () {
  clearInterval(setinterval);
  setinterval = null;
};

document.querySelector('#start').addEventListener('click', startChangingColor);
document.querySelector('#stop').addEventListener('click', stopChangingColor);
