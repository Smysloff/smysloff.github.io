var slideIndex = 0;
showDivs(slideIndex);
carousel();

function plusDivs(n) {
	showDivs(slideIndex += n);
}

function currentDiv(n) {
	showDivs(slideIndex = n);
}

function showDivs(n) {
	var i;
	var x = document.getElementsByClassName("pic");
	var dots = document.getElementsByClassName("demo");
	if (n > x.length) {slideIndex = 1}    
	if (n < 1) {slideIndex = x.length}
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";  
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	x[slideIndex-1].style.display = "block";  
	dots[slideIndex-1].className += " active";
}

function carousel() {
	var i;
	var x = document.getElementsByClassName("pic");
	var dots = document.getElementsByClassName("demo");
	for (i = 0; i < x.length; i++) {
	  x[i].style.display = "none"; 
	}
	slideIndex++;
	if (slideIndex > x.length) {slideIndex = 1} 
	x[slideIndex-1].style.display = "block"; 
	setTimeout(carousel, 6000);
	
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
		}
		x[slideIndex-1].style.display = "block";  
		dots[slideIndex-1].className += " active";
}