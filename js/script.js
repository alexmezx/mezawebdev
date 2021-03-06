var windowHeight = window.innerHeight;
var windowWidth = window.innerWidth;
console.log("height: " + windowHeight);
console.log("width: " + windowWidth);

/*
*	Personal Website
*	@author Alex Meza
*	@date July 2016
*	@frameworks jquery.js, bootstrap.js, snowstorm.js, tinycolor.js
*/

/*
* Variables
*/
	var primaryColor = getRandomColor();
	var backgroundColor = tinycolor(primaryColor).darken(25).toString();

/* 
* Global Functions
*/
// Random Color Generator, Returns string
	function getRandomColor() {
	    var letters = '0123456789ABCDEF'.split('');
	    var color = '#';
	    for (var i = 0; i < 6; i++ ) {
	        color += letters[Math.floor(Math.random() * 16)];
	    }
	    return color;
	}
	
// Snow Storm Settings
	snowStorm.followMouse = false;
	snowStorm.flakesMax = 50;
	snowStorm.flakesMaxActive = 20;
	snowStorm.snowColor = primaryColor;
	snowStorm.snowStick = false;
	snowStorm.vMaxX = 2;
	snowStorm.vMaxY = 2;

// Landing Page
	$(".landpage-content, #landing-page-footer").hide();
	$(".landpage-content, #landing-page-footer").fadeIn(1550);
	$(".scroll-down-button").on("click", function() {
		snowStorm.stop();
		$("#landingScreen").animate({
			top: "-89.5vh"
		}, function() {
			$("#landingScreen").hide();
			$("#navbar-main, #content-main").css("display","block");
		});
	});

// Header 

// Body 
	$("body").css("background", backgroundColor);
	$(".link").css("color", backgroundColor);

