// var image = document.getElementById('image');
//
// var counter = 0;
//
// var walkingMan = setInterval(function() {
//
//
//   if (counter < window.screen.width) {
//
//     counter = counter + 20;
//     image.style.marginLeft = counter + "px";
//
//   }
//
//   else {
//
//     counter = counter - 20;
//     image.style.marginLeft = -(counter + "px");
//   }
// }, 200);


var image = document.getElementById('image');

var counter = 0;
var dir = 'right';

var walkingMan = setInterval(function() {

  if (dir === 'right') {

    counter = counter + 10;
    image.style.marginLeft = counter + "px";
    image.style.transform = "scaleX(1)";

    if (counter >= window.innerWidth - 300) {

      dir = 'left'
    };

  }

  if (dir ==='left') {

      counter = counter - 10;
      image.style.marginLeft = counter + "px";
      image.style.transform = "scaleX(-1)";

      if (counter === 0) {

        dir = 'right'

      };
  }

}, 200);
