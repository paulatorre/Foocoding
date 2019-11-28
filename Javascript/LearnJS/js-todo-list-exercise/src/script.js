const newInput = document.querySelector('input[type="text"]');
const uList = document.querySelector('ul');
const btn = document.querySelector('input[type="submit"]');

btn.addEventListener('click', addItem);

function addItem (){
  const newLi = document.createElement("li");
  newLi.textContent = newInput.value;
  uList.appendChild(newLi);
  
  
  event.preventDefault();
  event.stopPropagation();
};