const btnclilck =document.querySelector("btn")
 function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
btnclilck.addEventListener('click',() => {
var randomColor = getRandomColor();
 btnclilck.style.color  =randomColor
})