$(document).ready(function(){
//   $("button#functionButton").click(function() {
//       $(".card#functionCard").toggle();
//   });
//
//   $("#functionCard").click(function() {
//       $("#term-function").fadeToggle();
//         $("#def-function").fadeToggle();
// });
//
//   $("button#booleanButton").click(function() {
//     $("#booleanCard").toggle();
//   });
//
//     $("#booleanCard").click(function() {
//       $("#term-boolean").fadeToggle();
//         $("#def-boolean").fadeToggle();
// });
//
// $("button#chainingMethButton").click(function() {
//   $("#chainingMethCard").toggle();
// });

//   $("#chainingMethCard").click(function() {
//     $("#term-chainingMeth").fadeToggle();
//       $("#def-chainingMeth").fadeToggle();
// });
    $(".card").click(function(){
      $(this).children("h3").slideToggle();
      $(this).children(".definitions").slideToggle();
   });

});
