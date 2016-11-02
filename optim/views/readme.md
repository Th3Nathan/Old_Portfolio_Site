

Optimized main.js

I moved the first four lines of code out of the for loop, so it is only necessary to read the DOM once rather than in every loop. I store elements with the class randomPizzaContainer in a containers object so that all DOM reading is done before the for loop starts. The for loops sole function now is to write to the DOM and change the width of pizza containers. 
  function changePizzaSizes(size) {
    var containers = document.getElementsByClassName("randomPizzaContainer");
    var dx = determineDx(containers[1], size);
    var newwidth = containers[1].offsetWidth + dx + 'px';
    for (var i = 0; i < containers.length; i++) {
      containers[i].style.width = newwidth;
    }
  }


Here I similarly seperated reading and writing operations by taking the scrollTop out of the loop so it only need to run once rather than whenever each background pizza is moved. 
  var cachedScroll = document.body.scrollTop;
  var items = document.querySelectorAll('.mover');
  for (var i = 0; i < items.length; i++) {
    var phase = Math.sin((cachedScroll / 1250) + (i % 5));
    items[i].style.left = items[i].basicLeft + 100 * phase + 'px';
  }


Originally, 200 moving pizzas were created, but only about 40 will ever be displayed. I changed it to 40 to trim unnecessary processing. 	
document.addEventListener('DOMContentLoaded', function() {
  var cols = 8;
  var s = 256;
  for (var i = 0; i < 40; i++) {
    var elem = document.createElement('img');
    elem.className = 'mover';
    elem.src = "images/pizza.png";
    elem.style.height = "100px";
    elem.style.width = "73.333px";
    elem.basicLeft = (i % cols) * s;
    elem.style.top = (Math.floor(i / cols) * s) + 'px';
    document.querySelector("#movingPizzas1").appendChild(elem);
  }
  updatePositions();
});
