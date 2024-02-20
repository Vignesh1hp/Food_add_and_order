const ordered_foods = document.querySelectorAll('.order_btn');

ordered_foods.forEach(function(button){
  button.addEventListener('click',function(){
    const food_name = this.parentElement.querySelector('p').textContent;
    addFoodIntoBox(food_name);
  });
});

function addFoodIntoBox(food_name){
  const orderedList = document.querySelector('.ordered_list ol');
  const newList = document.createElement('li');
  const newDiv = document.createElement('div');
  const newFood = document.createElement('p');

  newFood.textContent = food_name;
  newDiv.classList.add('added_foods');
  newDiv.appendChild(newFood);
  newList.appendChild(newDiv);
  orderedList.appendChild(newList);

}

































