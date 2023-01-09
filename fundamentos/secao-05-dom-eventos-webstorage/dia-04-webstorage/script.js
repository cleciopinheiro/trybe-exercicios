const text = document.querySelector('#text');


window.addEventListener('click', (event) => {
  text.style.backgroundColor = event.target.innerHTML;
  text.style.fontFamily = event.target.innerHTML;
  text.style.lineHeight = event.target.innerHTML;
  text.style.fontSize = event.target.innerHTML;
});

window.addEventListener('click', (event) => {
  text.style.color = event.target.innerHTML;
  text.style.fontFamily = event.target.innerHTML;
  text.style.lineHeight = event.target.innerHTML;
  text.style.fontSize = event.target.innerHTML;
});