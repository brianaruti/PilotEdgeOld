//Charcater counts used in the document
const characterCountDict = {
  boardTitle: 50,
  boardSubTitle: 30
};

//Document has loaded
$(document).ready(function() {
  // vizrt.payloadhosting.setFieldValueCallbacks(createCallbacks());
  //vizrt.payloadhosting.initialize();

  $(".countChars").on("keyup", function() {
    $(this).css("background-color", "lightblue");
    CharacterCounter(this);
  }); //Keyup

  $('.form-check-input[name="stockChoices"]').change(function() {
    RadioButtonChanged(this);
  }); // Radio Button
}); //Document ready function

//Radio button on Change event
function RadioButtonChanged(e) {
  let idValue = $(e).attr("id");

  let stockElement = $("#stockChoices1");
  //alert(idValue);

  // $(".require-if-active").each(function() {
    
  //   // if ($(el.data("require-pair")).is(":checked")) {
  //   //   el.prop("required", true);
  //   // } else {
  //   //   el.prop("required", false);
  //   // }
  // });
}
//Function to set characters remaining, gets the element from the keyup event
function CharacterCounter(e) {
  let maxNum = characterCountDict[e.id]; //get max character count

  //Set the maxLength attribute for the field triggering the event
  if ($(e).attr("maxLength") != maxNum) {
    $(e).attr("maxLength", maxNum);
  }

  //Get the text length
  var charLength = $(e).val().length;

  if (charLength > maxNum) {
    $(e).css("background-color", "red");
    $(e).css("color", "white");
  } else {
    $(e).css("background-color", "lightblue");
    $(e).css("color", "black");
  }

  if (charLength === 0) {
    e.nextElementSibling.innerHTML = "";
  } else {
    e.nextElementSibling.innerHTML =
      "REMAING CHARACTERS: " + (maxNum - charLength);
  }

  // alert(maxNumber);
}
