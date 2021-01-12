document.getElementById('calorie-form').addEventListener('submit', 

function(e){
  document.getElementById('results').style.display = 'none';

  document.getElementById('loading').style.display = 'block';

  setTimeout(calculateCalories, 2000);

  e.preventDefault();
});

function calculateCalories(e) {
  
  const age = document.getElementById('age');
  const gender = document.querySelector('input[name="customRadioInline1"]:checked');
  const weight = document.getElementById('weight');
  const height = document.getElementById('height');
  const activity = document.getElementById('list').value;
  const totalCalories = document.getElementById('total-calories');
  
  
  // using benedict calorie Equasion  

  if (age.value === '' || weight.value === '' || height.value === '' || 80 < age.value || age.value < 15) {
    errorMessage('Please make sure the values you entered are correct')
  } else if(gender.id === 'male' && activity === "1") {
    totalCalories.value = Math.round( 1.2 * (66.5 + (13.75 * parseFloat(weight.value)) + (5.003 * parseFloat(height.value)) - (6.755 * parseFloat(age.value))));
  } else if(gender.id === 'male' && activity === "2") {
    totalCalories.value = Math.round( 1.375 * (66.5 + (13.75 * parseFloat(weight.value)) + (5.003 * parseFloat(height.value)) - (6.755 * parseFloat(age.value))));
  } else if (gender.id === 'male' && activity === "3") {
    totalCalories.value = Math.round( 1.55 * (66.5 + (13.75 * parseFloat(weight.value)) + (5.003 * parseFloat(height.value)) - (6.755 * parseFloat(age.value))));
  } else if(gender.id === 'male' && activity === "4") {
    totalCalories.value = Math.round( 1.725 * (66.5 + (13.75 * parseFloat(weight.value)) + (5.003 * parseFloat(height.value)) - (6.755 * parseFloat(age.value))));
  } else if(gender.id === 'male' && activity === "5") {
    totalCalories.value =Math.round(  1.9 * (66.5 + (13.75 * parseFloat(weight.value)) + (5.003 * parseFloat(height.value)) - (6.755 * parseFloat(age.value))));
    ;
  } else if(gender.id === 'female' && activity === "1") {
    totalCalories.value = Math.round( 1.2 * (655 + (9.563 * parseFloat(weight.value)) + (1.850 * parseFloat(height.value)) - (4.676 * parseFloat(age.value))));
  } else if(gender.id === 'female' && activity === "2") {
    totalCalories.value =Math.round(  1.375 * (655 + (9.563 * parseFloat(weight.value)) + (1.850 * parseFloat(height.value)) - (4.676 * parseFloat(age.value))));
  } else if(gender.id === 'female' && activity === "3") {
    totalCalories.value = Math.round( 1.55 * (655 + (9.563 * parseFloat(weight.value)) + (1.850 * parseFloat(height.value)) - (4.676 * parseFloat(age.value))));
  } else if(gender.id === 'female' && activity === "4") {
    totalCalories.value =Math.round(  1.725* (655 + (9.563 * parseFloat(weight.value)) + (1.850 * parseFloat(height.value)) - (4.676 * parseFloat(age.value))));
  } else {
    totalCalories.value =Math.round(  1.9 * (655 + (9.563 * parseFloat(weight.value)) + (1.850 * parseFloat(height)) - (4.676 * parseFloat(age.value))));
  } 

  document.getElementById('results').style.display = 'block';

  document.getElementById('loading').style.display = 'none';

  // caculating the carbs 

  let cho = document.getElementById(`cho`);

  cho.value  = Math.round(totalCalories.value * (55/100))/4;

  //calculating the protein 

  let protein = document.getElementById(`protein`);

  protein.value  = Math.round(totalCalories.value * (20/100))/4;

  //calculation the fat

  let fat = document.getElementById(`fat`);

  fat.value  = Math.round(totalCalories.value * (25/100))/9;


}


function errorMessage(error) {
  document.getElementById('results').style.display = 'none';

  document.getElementById('loading').style.display = 'none';
  const errorDiv = document.createElement('div');
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');
  errorDiv.className = 'alert alert-danger';
  errorDiv.appendChild(document.createTextNode(error));

  card.insertBefore(errorDiv, heading);

  setTimeout(clearError, 4000);
}

function clearError() {
  document.querySelector('.alert').remove();
}

window.addEventListener("load", () => {
  document.body.classList.remove("preload");
});

document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".nav");

  document.querySelector("#btnNav").addEventListener("click", () => {
      nav.classList.add("nav--open");
  });

  document.querySelector(".nav__overlay").addEventListener("click", () => {
      nav.classList.remove("nav--open");
  });
});