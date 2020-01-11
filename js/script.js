const numberRooms = document.querySelector('#numberRoom');
const container = document.querySelector('.options-container');

numberRooms.addEventListener('change', e => {
  let rooms = parseInt(e.target.value) - 1;
  let elementCreated = document.querySelector('.option-created');
  if (elementCreated != null) {
    elementCreated.remove();
  }
  renderOptions(rooms);
});

renderOptions = rooms => {
  let row = document.createElement('div');
  row.classList.add('option-created');
  for (let i = 1; i <= rooms; i++) {
    row.innerHTML += marked(i);
  }
  container.appendChild(row);
};

marked = i => {
  let options = renderValues(4);
  return `
<div class="render-options-container">	
	<div class="column-direction flex-center">
		<span>Habitacion</span>
   	<span>${i + 1}</span>
  </div>
	<div class="column-direction">
		<label for="numberAdults${i + 1}">Adultos</label>
		<div class="select-container">
			<select id="numberAdults${i + 1}" name="numberAdults${i + 1}">
				${options}
			</select>
		</div>
	</div>
	<div class="column-direction">
		<label for="numberChilds${i + 1}">Criancas</label>
			<div class="select-container">
				<select id="numberChilds${i + 1}" name="numberChilds${i + 1}">
					${options}    
				</select>
			</div>
		</div>
</div>
	`;
};
renderValues = items => {
  let options = null;
  for (let i = 1; i <= items; i++) {
    options += `<option value=${i}>${i}</option>`;
  }
  return options;
};

function dates() {
  let today = new Date();
  const dd = today.getDate();
  let mm = today.getMonth() + 1; //January is 0!
  const yyyy = today.getFullYear();
  if (dd < 10) {
    dd = '0' + dd;
  }
  if (mm < 10) {
    mm = '0' + mm;
  }

  today = yyyy + '-' + mm + '-' + dd;
  document.getElementById('arrival').setAttribute('min', today);
  document.getElementById('exitDate').setAttribute('min', today);
}
dates();
