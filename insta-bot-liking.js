
// bot that likes images every 10 sec

// bot checks if image is already liked by you and if yes - it skips to the next image and counts the already liked image

// ---------------------
// setting the counter

let counter = 0;

// adding counter for already liked pictures

let notLiked = 0;


//adding a setInterval for this 

setInterval(function(){

let btnRight = document.querySelector('a.coreSpriteRightPaginationArrow');

let like = document.querySelector('[aria-label="Like"]');

							if(like!==null){
												like.click();
												counter++;
												console.log("You liked " + counter + " photos");
											}	
							else{
								notLiked++;
								console.log("You have skipped liking (already liked) " + notLiked+ " photos")
							}
						
							btnRight.click();
							

						}, 5000);

