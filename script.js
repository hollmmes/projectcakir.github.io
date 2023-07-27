const images = ["kedi2.jpg", "kedi3.jpg","kedi4.jpg","kedi5.jpeg","kedi6.jpeg","kedi7.jpeg","kedi8.jpeg","kedi9.jpeg","kedi10.jpeg","kedi11.jpeg","kedi12.jpeg","kedi13.jpeg","kedi14.jpeg","kedi15.jpeg","kedi16.jpeg","kedi17.jpeg","kedi18.jpeg","kedi19.jpeg","kedi20.jpeg"];
const titles = ["Yakalayabilirsen Yakala Beni!", "Senden Hızlıyım", "Senden Güçlüyüm","Sen Kimsin ki beni yakalyacaksın","Küçücük kediyi bile yakalayamıyorsun","Eziğin Tekisin","Paran Yok","Kız Arkadaşın yok","Hayatın yok","Bu siteyi kodlarken kaç saat harcadın mesela","Kod israfı","Miyav","TSSSSSSSSSSSSSSSSS","Ağ bu acıttı","İşte buna kaza derim","5 Yıl Sonra Bugün seni öldüreceğim","Şaka Yaptım köle şimdi b*kumu temizle","Başımı da sev","Seni seviyorum <3:3"];
let currentImageIndex = 0;
let isMoving = false;

function getRandomPosition() {
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  const buttonWidth = 100;
  const buttonHeight = 40;
  const margin = 100; // Butonun kenarlara olan minimum uzaklığı (piksel cinsinden)

  // Maksimum X ve Y konumları
  const maxX = windowWidth - buttonWidth - margin;
  const maxY = windowHeight - buttonHeight - margin;

  // Minimum X ve Y konumları
  const minX = margin;
  const minY = margin;

  const randomX = Math.floor(Math.random() * (maxX - minX + 1)) + minX;
  const randomY = Math.floor(Math.random() * (maxY - minY + 1)) + minY;

  return { x: randomX, y: randomY };
}

function moveButton() {
  if (!isMoving) {
    isMoving = true;
    const button = document.getElementById('button');
    const newPosition = getRandomPosition();

    button.style.left = newPosition.x + 'px';
    button.style.top = newPosition.y + 'px';

    changeImageAndTitle();
  }
}

function stopMoving() {
  isMoving = false;
}

function changeImageAndTitle() {
  const kediImage = document.getElementById("kediImage");
  const title = document.getElementById("title");

  currentImageIndex = (currentImageIndex + 1) % images.length;
  const nextImage = images[currentImageIndex];
  const nextTitle = titles[currentImageIndex];

  kediImage.src = nextImage;
  title.textContent = nextTitle;
}


// Butonun başlangıçta ortada kalmasını sağlamak için
document.addEventListener('DOMContentLoaded', function () {
  const button = document.getElementById('button');
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  const initialX = (windowWidth - button.clientWidth) / 2;
  const initialY = (windowHeight - button.clientHeight) / 2;

  button.style.left = initialX + 'px';
  button.style.top = initialY + 'px';
});
