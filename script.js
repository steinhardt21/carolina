function display_random_image()
{
     var theImages = [{
        src: "portfolio/image_1.jpeg",
        width: "240",
        height: "160"
    }, {
        src: "portfolio/image_2.jpeg",
        width: "320",
        height: "195"
    }, {
        src: "http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg",
        width: "500",
        height: "343"
    }];

    var preBuffer = [];
    for (var i = 0, j = theImages.length; i < j; i++) {
        preBuffer[i] = new Image();
        preBuffer[i].src = theImages[i].src;
        preBuffer[i].width = "100";
        preBuffer[i].height = "100";
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
var images = document.getElementsByTagName('img');
var l = images.length;
for (var p = 0; p < l; p++) {
    images[0].parentNode.removeChild(images[0]);
}
// display the image
document.getElementById("mainContent").appendChild(newImage);
}
