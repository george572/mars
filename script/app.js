//nav
var nav = document.querySelector(".nav-list")
var burger  = document.querySelector(".burger");
	burger.addEventListener("click", function(){
		nav.classList.toggle("nav-list-active");

	})

nav.addEventListener("click", function(){
	if (nav.classList.contains("nav-list-active")) {
		nav.classList.remove("nav-list-active")
	}
})

window.onmousemove = function () {
		var navInfo = nav.getBoundingClientRect();
		if (navInfo.width >= 248 && nav.parentNode.querySelector(":hover") != nav) {
			nav.classList.remove("nav-list-active");
		}


///

	var mouseX = event.clientX.toString();
		var mouseY = event.clientY.toString();
		drone.style.left = ((mouseX/-25) + "px");
		drone.style.top = ((mouseY/-25) + "px");
		droneBg.style.left = ((mouseX/105) + "px");
		droneBg.style.top = (((mouseY/105) + (-31)) + "px");

}

var drone = document.querySelector(".drone")
var droneBg = document.querySelector(".animated-bg")


// scroll animations

  AOS.init();


  //smooth scroll
function currentYPosition() {
    // Firefox, Chrome, Opera, Safari
    if (self.pageYOffset) return self.pageYOffset;
    // Internet Explorer 6 - standards mode
    if (document.documentElement && document.documentElement.scrollTop)
        return document.documentElement.scrollTop;
    // Internet Explorer 6, 7 and 8
    if (document.body.scrollTop) return document.body.scrollTop;
    return 0;
}


function elmYPosition(eID) {
    var elm = document.getElementById(eID);
    var y = elm.offsetTop;
    var node = elm;
    while (node.offsetParent && node.offsetParent != document.body) {
        node = node.offsetParent;
        y += node.offsetTop;
    } return y;
}


function smoothScroll(eID) {
    var startY = currentYPosition();
    var stopY = elmYPosition(eID);
    var distance = stopY > startY ? stopY - startY : startY - stopY;
    if (distance < 100) {
        scrollTo(0, stopY); return;
    }
    var speed = Math.round(distance / 50);
    if (speed >= 20) speed = 20;
    var step = Math.round(distance / 25);
    var leapY = stopY > startY ? startY + step : startY - step;
    var timer = 0;
    if (stopY > startY) {
        for ( var i=startY; i<stopY; i+=step ) {
            setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
            leapY += step; if (leapY > stopY) leapY = stopY; timer++;
        } return;
    }
    for ( var i=startY; i>stopY; i-=step ) {
        setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
        leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
    }
}