
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
const needFurniture = document.getElementById('needFurniture');
const furnitureCount = document.getElementById('furnitureCount');


let tentPrice = 2000;
let assemblyPrice = 1500;
const furniturePrice = 1800;

needFurniture.addEventListener('change', function() {
  if(!this.checked) {
    furnitureCount.value = 0;
  }
});

orderBtn.onclick = function() {
orderModal.style.display = "block";
}
closeBtn.addEventListener('click', () => {
  orderModal.style.display = 'none'; 
});
needFurnitureCheckbox.onchange = function() {
if(this.checked) {
    furnitureForm.style.display = "block";
} else {
    furnitureForm.style.display = "none";
}
}
tentsCount.oninput = function() {
  document.getElementById('tentsCountValue').innerHTML = this.value;
}

checkbox.addEventListener('change', function() {
  if(this.checked) {
    document.getElementById('furnitureCountBlock').style.display = 'block';
  } else {
    document.getElementById('furnitureCountBlock').style.display = 'none';
  }
});



daysCount.addEventListener('input', calculateTotal);
tentsCount.addEventListener('input', calculateTotal);
furnitureCount.addEventListener('input', calculateTotal);

function calculateTotal() {

  let tents = +tentsCount.value;
  if(tents < 0) tents = 0;
  
  let days = +daysCount.value;
  if(days < 0) days = 0;

  let totalTentsPrice = tents * tentPrice * days;
  let furnitureCount = +document.getElementById('furnitureCount').value;
  let totalFurniturePrice = furnitureCount * furniturePrice * days;
  let assemblyChecked = needAssembly.checked;
  let totalAssemblyPrice = assemblyChecked ? tents * assemblyPrice : 0;

  let total = totalTentsPrice + totalAssemblyPrice + totalFurniturePrice;

  document.getElementById('totalPrice').innerText = total+"₽";

}

tentsCount.addEventListener('input', calculateTotal);
daysCount.addEventListener('input', calculateTotal); 
needAssembly.addEventListener('change', calculateTotal);

calculateTotal();
// Открытие 
