var DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
var DETAIL_TITLE_SELECTOR = '[data-image-role="title"]';
var THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]';
/*** Code for gold challenge ***/
//generates random number between 1&5
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
//initializes the first random number
var randomNum = getRandomInt(1, 6);
//returns 1-5 based on the thumbnail
function numFromThumb(thumbnail) {
  'use strict';
  return thumbnail.getAttribute('data-image-num');
}
//changes the detail info to tacocat
function setTacoDetails() {
  'use strict';
  var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
  detailImage.setAttribute('src', 'img/tacocat.jpg');

  var detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
  detailTitle.textContent = 'TACOCAT';
}
/*******************************/

function setDetails(imageUrl, titleText) {
  'use strict';
  var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
  detailImage.setAttribute('src', imageUrl);

  var detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
  detailTitle.textContent = titleText;
}

function imageFromThumb(thumbnail) {
  'use strict';
  return thumbnail.getAttribute('data-image-url');
}

function titleFromThumb(thumbnail) {
  'use strict';
  return thumbnail.getAttribute('data-image-title');
}

function setDetailsFromThumb(thumbnail) {
  'use strict';
  //tacocat: recieves number from the clicked thumbnail
  var thumNum = numFromThumb(thumbnail);
  //tacocat: checks if the random number
  //  is for the thumbnail clicked
  if (randomNum == thumNum) { //if tacocat
    setTacoDetails(); //change details to tacocat
    var oldNum = randomNum;
    while (oldNum == randomNum) { //loops random number generator until
      randomNum = getRandomInt(1, 6); //there is a new random thumbnail
    }
  } else { //changes detail to regular thumbnail
    setDetails(imageFromThumb(thumbnail), titleFromThumb(thumbnail));
  }

}

function addThumbClickHandler(thumb) {
  'use strict';
  thumb.addEventListener('click', function(event) {
    event.preventDefault();
    setDetailsFromThumb(thumb);
  });
}

function getThumbnailsArray() {
  'use strict';
  var thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
  var thumbnailArray = [].slice.call(thumbnails);
  return thumbnailArray;
}

function initializeEvents() {
  'use strict';
  var thumbnails = getThumbnailsArray();
  thumbnails.forEach(addThumbClickHandler);

}

initializeEvents();
