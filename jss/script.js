function taxIdeaData(data) {


  console.log(data);
  nameArray = [];
  orgArray = [];
  orgTypeArray = [];
  for (var i = 0; i < data.length; i++) {
  nameArray.push(data[i].name);
  orgArray.push(data[i].organization);
  orgTypeArray.push(data[i].type_of_organization);

  document.querySelector('.dataTestOne').innerHTML = nameArray.join(" ");
  document.querySelector('.dataTestTwo').innerHTML = orgArray.join(" ");
  document.querySelector('.dataTestThree').innerHTML = orgTypeArray.join(" ");
}
console.log(nameArray);
console.log(orgArray);
console.log(orgTypeArray);

}
