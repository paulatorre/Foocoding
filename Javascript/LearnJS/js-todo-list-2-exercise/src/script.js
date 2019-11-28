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

uList.addEventListener('click', removeItem);
function removeItem (e){
  console.log(uList);
  if (e.target.tagName === 'LI') {
    alert("hola")
    console.log(e.target)
    uList.removeChild(e.target)
} 
};