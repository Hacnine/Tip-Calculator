  price = document.getElementById("price_id");
  tip = document.getElementById("tip_id");
  people = document.getElementById("people_id")
  btn_calculate = document.getElementById("btn_calculate");

  function checkID(price, people, tip){
    if (price.id === 'price_id'){
      testPrice();
    }
    if(tip.id === 'tip_id'){
      testTip();
    }
    if(people.id === 'people_id'){
      testPeople();
    }
  }

  function testPeople() {
  // Get the input value
  var inputValue = document.getElementById("people_id").value;
  console.log(people.id);

  // Check if the input is an integer or a string
  if (!isNaN(inputValue) && Number.isInteger(Number(inputValue))) {
    console.log("Input is an integer.");
    document.getElementById('small_price').innerHTML = ""


  } else {
    console.log("Input is a string.");
    document.getElementById('small_people').innerHTML = "Please input numbers only."

  }

  // Clear the form
  // document.getElementById("myFormid").reset();
}

  function testTip() {
  // Get the input value
  var inputValue = document.getElementById("tip_id").value;
  console.log(tip.id);

  // Check if the input is an integer or a string
  if (!isNaN(inputValue) && Number.isInteger(Number(inputValue))) {
    console.log("Input is an integer.");
    document.getElementById('small_tip').innerHTML = ""

  } else {
    console.log("Input is a string.");
    // document.getElementById('small_price').innerHTML = "Please input numbers only."
    document.getElementById('small_tip').innerHTML = "Please input numbers only."
    // document.getElementById('small_people').innerHTML = "Please input numbers only."
}

  // Clear the form
  // document.getElementById("myFormid").reset();
}
  function testPrice() {
  // Get the input value
  var inputValue = document.getElementById("price_id").value;
  console.log(price.id);

  // Check if the input is an integer or a string
  if (!isNaN(inputValue) && Number.isInteger(Number(inputValue))) {
    console.log("Input is an integer.");
    document.getElementById('small_price').innerHTML = ""


  } else {
    console.log("Input is a string.");
    document.getElementById('small_price').innerHTML = "Please input numbers only."
    // document.getElementById('small_tip').innerHTML = "Please input numbers only."
    // document.getElementById('small_people').innerHTML = "Please input numbers only."

  }

  // Clear the form
  // document.getElementById("myFormid").reset();
}


  function show(){
    tip_value = tip.value*price.value/100
    // console.log(typeof price.value);
    tip_para.innerHTML = (tip_value).toFixed(2);
    people_value = Number(people.value);
    total = tip_value + Number(price.value);
    total_amount.innerHTML = (total).toFixed(2);
    tipperperson.innerHTML =  (tip_value/people_value).toFixed(2);
    totalperperson.innerHTML = (total/ people_value).toFixed(2);



  }

  function callTwoFunctions(){
    show();
    checkID(price, people, tip);
    // testInput();
  }
  btn_calculate.addEventListener("click", callTwoFunctions);
