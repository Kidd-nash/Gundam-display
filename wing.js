console.log('testing');

// always wrap js with load event listener
window.addEventListener('load', function(event) {

  var imageForWing = document.getElementById("wing-name");
  var spanForWing = document.getElementById("id-for-wing");
  var imageForTallgeese = document.getElementById("tallgeese-name");
  var spanForTallgeese = document.getElementById("id-for-tallgeese");

  // events: click, mouseover, mouseout

  imageForWing.addEventListener('mouseover', function(e) {
     spanForWing.innerHTML = "Gunpla name: Wing";
  });

  imageForWing.addEventListener('mouseout', function(e) {
     spanForWing.innerHTML = "";
  });

  imageForTallgeese.addEventListener('mouseover', function(e) {
     spanForTallgeese.innerHTML = "Gunpla name: Tallgeese";
  });

  imageForTallgeese.addEventListener('mouseout', function(e) {
     spanForTallgeese.innerHTML = "";
  });

});
