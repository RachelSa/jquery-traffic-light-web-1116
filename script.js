
$(document).ready(function() {
  
   /* code for button 1  -- Turn the light Red */
   $('#button1').click(
     function() {
         $('#top-light').css("background", "red");
     }
   );
   /* code for button 2 --- Say STOP */
   $('#button2').click(
     function() {
         $('#top-light').html("<p> STOP </p>");
     }
   );
  
   /* code for button 3 -- Turn the light Yellow */
  $('#button3').click(
     function() {
         $('#middle-light').css("background", "yellow");
     }
   );
   /* code for button 4 -- Turn the light Green */
   $('#button4').click(
     function() {
         $('#bottom-light').css("background", "green");
     }
   );
   /* code for button 5 -- Say GO! */
   $('#button5').click(
     function() {
         $('#bottom-light').html("<p> GO </p>");
     }
   );

   /* code for button 6 -- Make Green Light Blink -- Extension!! */
  //var timer = setInterval(blink, 10000); 

  //$('#button6').click(
    
     function blink() {
         $('#top-light').css("background", "red");
     }

  // );
  
  // setInterval(function() {

  //   while (true) {
  //     if (toggle == 0) {
  //       $('#top-light').css("background", "red")
  //       toggle == 1
  //     }
  //     else if (toggle == 1) {
  //       $('#top-light').css("background", "white")
  //       toggle == 0
  //     }
  //   }
  // }, 1000);



     
   
});
                  
                  
                  