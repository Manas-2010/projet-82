 mouseEvent ="empty";

 canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
   ctx.beginPath();
  ctx.strokeStyle = "red";
  ctx.lineWidth = 2;
  ctx.arc(200 , 200 , 40, 0, 2*Math.PI);
  ctx.stroke();

 color = "red";

 canvas.addEventListener("mouseDown", my_mouseDown);
 function my_mouseDown(e){
    mouseEvent ="mouseDown";
 }

 canvas.addEventListener("mouseMove", my_mouseMove);
 function my_mouseMove(e){
        current_position_of_X = e.clientX - canvas.offsetLeft;
        current_position_of_Y = e.clientY - canvas.offsetTop;
        if (mouseEvent == "mouseDown"){
            console.log("current X and Y position =");
            console.log("X = " + current_position_of_X + "Y = " + current_position_of_Y);
            ctx.beginPath();
            ctx.strokeStyle = color;
            ctx.lineWidth = document.getElementById("Width_of_the_line").value;
            ctx.arc(current_position_of_X , current_position_of_Y , document.getElementById("radius"), 0, 2*Math.PI);
            ctx.stroke();
        }
    }