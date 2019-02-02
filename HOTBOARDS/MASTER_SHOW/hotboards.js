//Charcater counts used in the document
const characterCountDict = {
  boardTitle: 50,
  boardSubTitle: 30
};

//Document has loaded
$(document).ready(function() {
  // vizrt.payloadhosting.setFieldValueCallbacks(createCallbacks());
  //vizrt.payloadhosting.initialize();

  $(".charCount").on("keyup", function() {
    $(this).css("background-color", "lightblue");

    CharacterCounter(this);
  });

  
});

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

  if(charLength === 0){
    e.nextElementSibling.innerHTML = "";
  }else{
    e.nextElementSibling.innerHTML = "REMAING CHARACTERS: " + (maxNum - charLength);

  }
 
  // alert(maxNumber);
}
