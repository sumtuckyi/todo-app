const images = [
  "02.jpg",
  "03.jpg",
  "04.jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const image = document.createElement("img"); // JS에서 HTML의 element만들기

image.src = `images/${chosenImage}`;

document.body.appendChild(image);