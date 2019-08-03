// bot that likes images every 10 sec

// clicking the like button

document.querySelector('button.dCJp8').click()
// now clicking the NEXT button
document.querySelector('a.coreSpriteRightPaginationArrow').click();

// instagram bot that likes photos
var count = 0;
setInterval(function() {
	
	var heart = document.querySelector('button.dCJp8');
	var arrow = document.querySelector('a.coreSpriteRightPaginationArrow');
	if(heart)
	{
		heart.click();
		count++;
		console.log("you've liked "+ count +" photos")
	} 
	arrow.click();
}, 10000);