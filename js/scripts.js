$(document).ready(function(){
  $("#input").submit(function(event){
    event.preventDefault();

    var array = [];

    var input1 = $("#input1").val();
    var input2 = $("#input2").val();
    var input3 = $("#input3").val();

    array.push(input1);
    array.push(input2);
    array.push(input3);

    var arrayUppers = array.map(function(arrayUpper) {
      return arrayUpper.toUpperCase();
    });

    arrayUppers.sort();

    arrayUppers.forEach(function(arrayUpper){
      var element = $("<li>" + arrayUpper + "</li>");
      $(".output").append(element);

       $(".output").show();
   });
     console.log(arrayUppers);
  });
});
