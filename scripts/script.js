// Array of image URLs
const images = [
  'images/fav-grafitti.JPG',
  'images/building-light.JPG',
  'images/dat-one-mtn.JPG',
  'images/slc-long-exposure.JPG',
  'images/day-dragon.JPG',
  'images/desert-tree.JPG',
  'images/dumpster-dive.JPG',
  'images/night-dragon.JPG',
  'images/indicator.JPG',
  'images/or-wave.JPG',
  'images/recycle-clown.JPG',
  'images/shoes-grafitti.JPG',
  
  // Add more image URLs here
];

// Function to create image elements and append them to the gallery
function createGallery() {
  const gallery = document.getElementById('gallery');

  images.forEach((imageURL) => {
    const imgContainer = document.createElement('div');
    imgContainer.className = 'img-container';

    const img = document.createElement('img');
    img.src = imageURL;

    img.addEventListener('click', () => {
      showOriginalImage(imageURL);
    });

    imgContainer.appendChild(img);
    gallery.appendChild(imgContainer);
  });
}

// Function to display the original image in a modal or separate view
function showOriginalImage(imageURL) {
  const overlay = document.createElement('div');
  overlay.className = 'overlay';

  const modal = document.createElement('div');
  modal.className = 'modal';

  const img = document.createElement('img');
  img.src = imageURL;

  modal.appendChild(img);
  overlay.appendChild(modal);
  document.body.appendChild(overlay);

  overlay.addEventListener('click', () => {
    document.body.removeChild(overlay);
  });
}

// Call the createGallery function when the page finishes loading
window.addEventListener('load', createGallery);
