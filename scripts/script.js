// Array of image URLs
const images = [
  'image1.jpg',
  'image2.jpg',
  'image3.jpg',
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
      // Handle click event, e.g., open a modal or navigate to a detailed view
      console.log('Image clicked:', imageURL);
    });

    imgContainer.appendChild(img);
    gallery.appendChild(imgContainer);
  });
}

// Call the createGallery function when the page finishes loading
window.addEventListener('load', createGallery);
