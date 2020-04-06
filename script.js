function display_random_image()
{
   var theImages = [{
        src: "portfolio/image_1.jpeg"
    }, {
        src: "portfolio/image_2.jpeg"
    }, {
        src: "portfolio/image_3.jpeg"
    }	
	, {
        src: "http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg"
    }];


    var preBuffer = [];
    for (var i = 0, j = theImages.length; i < j; i++) {

      img = new Image();
      img.src = theImages[i].src;

      var height = img.height;
      var width = img.width;


      //Resize proportionally
      var maxWidth = 600; // Max width for the image
      var maxHeight = 400;    // Max height for the image
      var ratio = 0;  // Used for aspect ratio

      preBuffer[i] = new Image();
      preBuffer[i].src = theImages[i].src;


      if(width > maxWidth){
            ratio = maxWidth / width;   // get ratio for scaling image
            preBuffer[i].width = maxWidth;
            preBuffer[i].height = height * ratio;
      }

      // Check if current height is larger than max
      if(height > maxHeight){
          ratio = maxHeight / height; // get ratio for scaling image
          preBuffer[i].height = maxHeight;   // Set new height
          preBuffer[i].width = width * ratio;    // Reset width to match scaled image
      }
    }

// create random image number
  function getRandomInt(min,max)
    {
      //  return Math.floor(Math.random() * (max - min + 1)) + min;
      imn = Math.floor(Math.random() * (max - min + 1)) + min;
          return preBuffer[imn];
    }

// 0 is first image,   preBuffer.length - 1) is  last image

var newImage = getRandomInt(0, preBuffer.length - 1);

// remove the previous images
var images = document.getElementById("mainContent").getElementsByTagName('img');
var l = images.length;
for (var p = 0; p < l; p++) {
    images[0].parentNode.removeChild(images[0]);
}
// display the image

newImage.classList.add("mx-auto");
newImage.classList.add("d-block");

document.getElementById("mainContent").appendChild(newImage);
}
