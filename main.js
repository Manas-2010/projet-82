mouseEvent ="empty"; 
canvas = document.getElementById("myCanvas"); 
ctx = canvas.getContext("2d");
 color = "red"; 
width_of_line = 2; radius = 40; 
canvas.addEventListener("mousedown", my_mousedown); 
function my_mousedown(e){ mouseEvent ="mousedown"; }
 canvas.addEventListener("mousemove", my_mousemove); 
 function my_mousemove(e){ current_position_of_x = e.clientX - canvas.offsetLeft;
     current_position_of_y = e.clientY - canvas.offsetTop;
      if (mouseEvent == "mousedown")
      { console.log("current X and Y position ="); 
      console.log("X = " + current_position_of_x + "Y = " + current_position_of_y);
       ctx.beginPath();
        ctx.strokeStyle = color;
         ctx.lineWidth = width_of_line; 
ctx.arc(current_position_of_x , current_position_of_y , radius, 0, 2*Math.PI); ctx.stroke(); } }