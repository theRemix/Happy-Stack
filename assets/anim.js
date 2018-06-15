(function(window, document) {
  var animating = false;
  var distance = document.querySelector('.distance');
  var label = document.querySelector('.distance-label');
  var moonDistance = 238900;

  distance.addEventListener('animationstart', function(){
    animating = true;
  });

  distance.addEventListener('animationend', function(){
    animating = false;
  });

  function animate(timestamp) {
    if(animating){
      var stepDistance = ( distance.clientWidth / ( .46 * document.body.clientWidth ) * moonDistance );
      label.innerText = stepDistance > moonDistance / 1.5 ? stepDistance.toFixed() + " mi" : stepDistance.toFixed();
      window.requestAnimationFrame(animate);
    } else {
      label.innerText = moonDistance + " mi";
    }
  }

  window.requestAnimationFrame(animate);

}(window, window.document));
