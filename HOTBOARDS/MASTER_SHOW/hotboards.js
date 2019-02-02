
let titleCharCount = 50;
let subTitleCharcount = 30;


//Document has loaded
$(document).ready(function () {

    // vizrt.payloadhosting.setFieldValueCallbacks(createCallbacks());
    vizrt.payloadhosting.initialize();

    //Key up event for input fields with character counts
    $(".charCount").keyup(function () {
        $(this).css("background-color", "lightblue");
        var charLength = $("#boardTitle").val().length;
        CharacterCounter(this.id,charLength);
    });

    //Function to set characters remaining 
    function CharacterCounter(id, length){

        alert(length);

    };

});

