var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];
var repeat = 0;
while (repeat< 8) {
  console.log(ingredients[repeat]);
  repeat++;
}

for (var i=0;i<ingredients.length;i++){
  console.log(ingredients[i]);
}
var rep = ingredients.length -1
while (rep >0) {
  console.log(ingredients[rep]);
  rep--;
}