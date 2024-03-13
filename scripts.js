let number = 1;

let inputNumber = 1;

let limitNumber = 1;

let inputValue = document.getElementById('inc-and-dec-input');

let inputValueButton = document.getElementById('inc-and-dec-button');

inputValueButton.addEventListener('click', () => {
  inputNumber = +inputValue.value;
  console.log(inputNumber)
})

let limitInput = document.getElementById('limit-input');

let limitButton = document.getElementById('limit-button');

limitButton.addEventListener('click', () => {
  limitNumber = +limitInput.value;
  console.log(limitNumber)
})

const numberTag = document.getElementById('number');

const list = document.getElementById('boom-list');


const onIncrementClick = () => {
  number = number * inputNumber;
  numberTag.textContent = number;
  if (number > (inputNumber / (inputNumber ** limitNumber)) && number <= 1)
    while (list.firstChild) {
      list.removeChild(list.firstChild)
    }
  if (number === (inputNumber ** limitNumber)) {
    const boomItem = document.createElement('li');
    boomItem.textContent = '!bOoMm!';
    list.appendChild(boomItem);
  }
}


const onDecrementClick = () => {
  number = number / inputNumber;
  numberTag.textContent = number;
  if (number < (inputNumber ** limitNumber) && number >= 1)
    while (list.firstChild) {
      list.removeChild(list.firstChild)
    }
  if (number === (inputNumber / (inputNumber ** limitNumber))) {
    const boomItem = document.createElement('li');
    boomItem.textContent = '!bOoMm!';
    list.appendChild(boomItem);
  }
}