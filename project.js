var toggler = false;
var degflag = false;
var enddegflag = false; 
var min = 10; 
var max = 17;
var randNumber = Math.floor(Math.random() * (max - min + 1)) + min;
var counter = 1;

var quheads = "https://upload.wikimedia.org/wikipedia/commons/a/a0/2006_Quarter_Proof.png";
var qutails = "https://upload.wikimedia.org/wikipedia/commons/a/af/2008_HI_Proof.png";
var myimg = document.querySelector("#myimg");
var result = document.querySelector("#result");
var posrotInterval, negrotInterval;

//css way flip test then delete 
myimg.addEventListener("click", function() {
  counter = 1;
  toggler = false;
  degflag = false;
  enddegflag = false;
  randNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  myimg.style.transform = "rotateY(89deg)";
}, false);

myimg.addEventListener("transitionend", function () {
  if (counter < randNumber) {
    toggler = (toggler) ? false : true;
    if (toggler) {
      myimg.src = (myimg.src == quheads) ? qutails : quheads;
      myimg.style.transform = "rotateY(0deg)";
      degflag = false;
    }
    else {
      myimg.style.transform = "rotateY(89deg)";
      degflag = true;
    }
    counter += 1;
  }
  else {
    if (degflag && !enddegflag) {
      myimg.style.transform = "rotateY(0deg)";
      enddegflag = true;
    }
    else {
      
      if (myimg.src == quheads) {
        result.innerHTML = "HEADS";
        result.style.color = "#00aaff";
      }
      else {
        result.innerHTML = "TAILS";
        result.style.color = "#cc0000";
      }
      document.querySelector("#lasttime").innerHTML = new Date().toLocaleString();
    }
  }
}, false);

// add background button 
function myFunction() {
   document.body.style.background = "linear-gradient(to left, #434343, #000000 )"; 
}

function theLight() {
  document.body.style.background = "linear-gradient(274deg, #830300, #1f1c18)";
}

function theDarkknight() {
  document.body.style.background = "linear-gradient(to left, #ba8b02, #181818 )";
}

// smooth scroll 
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

// store hash 
var hash = this.hash;

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault(); 

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({ 
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // end if
  });
});

// hide/show content 
function myShow() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}






