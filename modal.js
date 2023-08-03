const orderModal = document.getElementById('orderModal');
const orderBtn = document.querySelector('.frame-button');
const closeSpan = document.getElementsByClassName("close")[0];
const needFurnitureCheckbox = document.getElementById("needFurniture");
const furnitureForm = document.getElementById("furnitureForm");
const closeBtn = document.querySelector('.close');
const tentsCount = document.getElementById('tentsCount');
const slider = document.querySelector('.noUi-slider');
const checkbox = document.getElementById('needFurniture');
const daysCount = document.getElementById('rentDays');
const needAssembly = document.getElementById('needAssembly');
const selectCity = document.querySelector('.select-city');
const tentSelect = document.querySelector('.selection-option');
const buttons = document.querySelectorAll('[data-tab-switch]');
const tabs = document.querySelectorAll('.tab');

let tentPrice = 2500;
let assemblyPrice = 1500;
const furniturePrice = 1800;



orderBtn.onclick = function() {
orderModal.style.display = "block";
setImages('1');
selectTab('tent') 
}
closeBtn.addEventListener('click', () => {
  orderModal.style.display = 'none'; 
});





tentsCount.oninput = function() {
  document.getElementById('tentsCountValue').innerHTML = this.value;
}


daysCount.addEventListener('input', calculateTotal);
tentsCount.addEventListener('input', calculateTotal);


tentSelect.addEventListener('change', () => {

  const selectedType = tentSelect.value;
  
  if(selectedType === '1') {
    tentPrice = 2500;
  } else if (selectedType === '2') {
    tentPrice = 1500;
  } else if (selectedType === '3') {
    tentPrice = 1500;
  }

  calculateTotal();

});

selectCity.addEventListener('change', () => {

  const selectedCity = selectCity.value;

  if(selectedCity === 'Брянск') {
    tentPrice += 500;
  } else {
    if(tentSelect.value === '1') {
      tentPrice = 2500;
    } else if (tentSelect.value === '2') {
      tentPrice = 1500; 
    } else if (tentSelect.value === '3') {
      tentPrice = 1000;
    }
  }

  calculateTotal();

});



function calculateTotal() {

  let tents = +tentsCount.value;
  if(tents <= 0) tents = 0;
  
  let days = +daysCount.value;
  if(days <= 0) days = 0;

  let totalTentsPrice = tents * tentPrice * days;
  let assemblyChecked = needAssembly.checked;
  let totalAssemblyPrice = assemblyChecked ? tents * assemblyPrice : 0;

  let total = totalTentsPrice + totalAssemblyPrice;

  document.getElementById('totalPrice').innerText = total+"₽";

}

tentsCount.addEventListener('input', calculateTotal);
daysCount.addEventListener('input', calculateTotal); 
needAssembly.addEventListener('change', calculateTotal);

calculateTotal();




const imagesType1 = [
  '/public/type_1/tent_1.jpg',
  '/public/type_1/tent_2.jpg',  
  '/public/type_1/tent_3.jpg' ,
  '/public/type_1/tent_4.jpg' 
];

const imagesType2 = [
  '/public/type_2/tent_1jpg',
  '/public/type_2/tent_2.jpg',
  '/public/type_2/tent_3.jpg'   
];

const ImageFurniture_1=[
  '/public/furniture_type_1/Screenshot_1.png',
]

const select = document.querySelector('.selection-option');
const imageEl = document.querySelector('.imge');

let currentImageIndex = 0;
let images = [];

select.addEventListener('change', function(event) {

  const selectedType = event.target.value;

  if(selectedType === '1') {
    images = imagesType1;
  } else if (selectedType === '2') {
    images = imagesType2;
  }

  currentImageIndex = 0;
  updateImage();

});

const prevButton = document.querySelector('.prev');
prevButton.addEventListener('click', function() {

  currentImageIndex--;
  if(currentImageIndex < 0) {
    currentImageIndex = images.length - 1;
  }

  updateImage();

});

const nextButton = document.querySelector('.next');
nextButton.addEventListener('click', function() {

  currentImageIndex++;
  if(currentImageIndex >= images.length) {
    currentImageIndex = 0;
  }

  updateImage();

});

function updateImage() {
  imageEl.src = images[currentImageIndex]; 
}

function setImages(type) {
  if(type === '1') {
    images = imagesType1;
  } else if (type === '2') {
    images = imagesType2;
  }
}
function updateImage() {
  if(!images.length) {
    return;
  }

  imageEl.src = images[currentImageIndex];
}





buttons.forEach(button => {
  button.addEventListener('click', () => {
    const tabName = button.dataset.tabSwitch;
    selectTab(tabName);
  })
});

function selectTab(tabName) {
  tabs.forEach(tab => {
    tab.style.display = 'none';
  });
  buttons.forEach(button => {
    button.classList.remove('active');
  });
  const activeButton = document.querySelector(`[data-tab-switch="${tabName}"]`);
  activeButton.classList.add('active');
  document.querySelector(`.tab[data-tab="${tabName}"]`).style.display = 'flex';
}

// скрываем все вкладки по умолчанию
tabs.forEach(tab => {
  tab.style.display = 'none';
});


