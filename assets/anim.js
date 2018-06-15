(function(window, document) {
  var animating = false;
  var monster = document.querySelector('.monster-pop');
  var distance = document.querySelector('.distance');
  var label = document.querySelector('.distance-label');
  var moonDistance = 238900;

  distance.addEventListener('animationstart', function(){
    animating = true;
  });

  distance.addEventListener('animationend', function(){
    animating = false;
  });

  function format(float){
    return float.toFixed().toString().split('').reduce(function(number, digit, i, a){
      return number + ( (a.length-1 - i % 3 === 3 && i < a.length-1) ? digit + "," : digit );
    }, '');
  }

  function animate(timestamp) {
    if(animating){
      var stepDistance = ( distance.clientWidth / ( .52 * document.body.clientWidth ) * moonDistance );
      label.innerText = stepDistance > moonDistance / 2 ? format(stepDistance) + " mi" : format(stepDistance);
      window.requestAnimationFrame(animate);
    } else {
      label.innerText = format(moonDistance) + " mi";
      monster.classList.add('monster-pop-up');
    }
  }

  window.requestAnimationFrame(animate);

}(window, window.document));
