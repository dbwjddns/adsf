const images = ["qw.jpeg", "as.jpeg", "df.jpeg"];

const todayImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${todayImage}`;

document.body.appendChild(bgImage);
