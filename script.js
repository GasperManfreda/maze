var canvas = document.getElementById('mazeCanvas');
var ctx = canvas.getContext('2d');
var canvas2 = document.getElementById('mazeCanvas2');
var ctx2 = canvas2.getContext('2d');


const buttonSolve = document.getElementById("solve");
const buttonReset = document.getElementById("btn-reset");
var slider = document.getElementById("slider");
let slid;
buttonSolve.onclick = function() {
    buttonSolve.disabled = true;
    solve();

}; 
   
ctx.save();
ctx.font="15px ''";
ctx.font="   15px ''";
ctx.scale(1.55,1.55);
ctx2.scale(1.55,1.55);
function draw() {
ctx.strokeStyle="black";
ctx.font="   15px ''";

ctx.beginPath();
ctx.moveTo(2,2);
ctx.lineTo(146,2);
 
ctx.moveTo(162,2);
ctx.lineTo(322,2);
 
ctx.moveTo(66,18);
ctx.lineTo(82,18);
 
ctx.moveTo(114,18);
ctx.lineTo(130,18);
 
ctx.moveTo(146,18);
ctx.lineTo(162,18);
 
ctx.moveTo(178,18);
ctx.lineTo(194,18);
 
ctx.moveTo(226,18);
ctx.lineTo(258,18);
 
ctx.moveTo(306,18);
ctx.lineTo(322,18);
 
ctx.moveTo(50,34);
ctx.lineTo(66,34);
 
ctx.moveTo(130,34);
ctx.lineTo(162,34);
 
ctx.moveTo(194,34);
ctx.lineTo(210,34);
 
ctx.moveTo(226,34);
ctx.lineTo(242,34);
 
ctx.moveTo(34,50);
ctx.lineTo(50,50);
 
ctx.moveTo(66,50);
ctx.lineTo(98,50);
 
ctx.moveTo(114,50);
ctx.lineTo(146,50);
 
ctx.moveTo(162,50);
ctx.lineTo(194,50);
 
ctx.moveTo(226,50);
ctx.lineTo(258,50);
 
ctx.moveTo(274,50);
ctx.lineTo(306,50);
 
ctx.moveTo(2,66);
ctx.lineTo(18,66);
 
ctx.moveTo(50,66);
ctx.lineTo(66,66);
 
ctx.moveTo(82,66);
ctx.lineTo(114,66);
 
ctx.moveTo(146,66);
ctx.lineTo(162,66);
 
ctx.moveTo(258,66);
ctx.lineTo(274,66);
 
ctx.moveTo(306,66);
ctx.lineTo(322,66);
 
ctx.moveTo(2,82);
ctx.lineTo(34,82);
 
ctx.moveTo(82,82);
ctx.lineTo(114,82);
 
ctx.moveTo(130,82);
ctx.lineTo(146,82);
 
ctx.moveTo(162,82);
ctx.lineTo(194,82);
 
ctx.moveTo(226,82);
ctx.lineTo(290,82);
 
ctx.moveTo(18,98);
ctx.lineTo(50,98);
 
ctx.moveTo(146,98);
ctx.lineTo(162,98);
 
ctx.moveTo(178,98);
ctx.lineTo(290,98);
 
ctx.moveTo(306,98);
ctx.lineTo(322,98);
 
ctx.moveTo(18,114);
ctx.lineTo(34,114);
 
ctx.moveTo(50,114);
ctx.lineTo(82,114);
 
ctx.moveTo(130,114);
ctx.lineTo(146,114);
 
ctx.moveTo(162,114);
ctx.lineTo(194,114);
 
ctx.moveTo(210,114);
ctx.lineTo(306,114);
 
ctx.moveTo(2,130);
ctx.lineTo(34,130);
 
ctx.moveTo(66,130);
ctx.lineTo(130,130);
 
ctx.moveTo(178,130);
ctx.lineTo(210,130);
 
ctx.moveTo(226,130);
ctx.lineTo(258,130);
 
ctx.moveTo(290,130);
ctx.lineTo(322,130);
 
ctx.moveTo(18,146);
ctx.lineTo(66,146);
 
ctx.moveTo(82,146);
ctx.lineTo(114,146);
 
ctx.moveTo(146,146);
ctx.lineTo(194,146);
 
ctx.moveTo(210,146);
ctx.lineTo(242,146);
 
ctx.moveTo(258,146);
ctx.lineTo(306,146);
 
ctx.moveTo(2,162);
ctx.lineTo(18,162);
 
ctx.moveTo(34,162);
ctx.lineTo(50,162);
 
ctx.moveTo(130,162);
ctx.lineTo(178,162);
 
ctx.moveTo(274,162);
ctx.lineTo(290,162);
 
ctx.moveTo(66,178);
ctx.lineTo(98,178);
 
ctx.moveTo(194,178);
ctx.lineTo(210,178);
 
ctx.moveTo(226,178);
ctx.lineTo(242,178);
 
ctx.moveTo(258,178);
ctx.lineTo(274,178);
 
ctx.moveTo(290,178);
ctx.lineTo(306,178);
 
ctx.moveTo(18,194);
ctx.lineTo(98,194);
 
ctx.moveTo(162,194);
ctx.lineTo(194,194);
 
ctx.moveTo(210,194);
ctx.lineTo(226,194);
 
ctx.moveTo(274,194);
ctx.lineTo(290,194);
 
ctx.moveTo(306,194);
ctx.lineTo(322,194);
 
ctx.moveTo(2,210);
ctx.lineTo(50,210);
 
ctx.moveTo(82,210);
ctx.lineTo(130,210);
 
ctx.moveTo(146,210);
ctx.lineTo(210,210);
 
ctx.moveTo(290,210);
ctx.lineTo(306,210);
 
ctx.moveTo(18,226);
ctx.lineTo(66,226);
 
ctx.moveTo(114,226);
ctx.lineTo(290,226);
 
ctx.moveTo(2,242);
ctx.lineTo(18,242);
 
ctx.moveTo(66,242);
ctx.lineTo(114,242);
 
ctx.moveTo(130,242);
ctx.lineTo(162,242);
 
ctx.moveTo(178,242);
ctx.lineTo(226,242);
 
ctx.moveTo(290,242);
ctx.lineTo(306,242);
 
ctx.moveTo(18,258);
ctx.lineTo(34,258);
 
ctx.moveTo(114,258);
ctx.lineTo(146,258);
 
ctx.moveTo(162,258);
ctx.lineTo(178,258);
 
ctx.moveTo(194,258);
ctx.lineTo(210,258);
 
ctx.moveTo(242,258);
ctx.lineTo(322,258);
 
ctx.moveTo(50,274);
ctx.lineTo(82,274);
 
ctx.moveTo(98,274);
ctx.lineTo(130,274);
 
ctx.moveTo(146,274);
ctx.lineTo(162,274);
 
ctx.moveTo(226,274);
ctx.lineTo(242,274);
 
ctx.moveTo(274,274);
ctx.lineTo(290,274);
 
ctx.moveTo(34,290);
ctx.lineTo(114,290);
 
ctx.moveTo(130,290);
ctx.lineTo(226,290);
 
ctx.moveTo(258,290);
ctx.lineTo(274,290);
 
ctx.moveTo(290,290);
ctx.lineTo(322,290);
 
ctx.moveTo(34,306);
ctx.lineTo(82,306);
 
ctx.moveTo(114,306);
ctx.lineTo(130,306);
 
ctx.moveTo(162,306);
ctx.lineTo(178,306);
 
ctx.moveTo(226,306);
ctx.lineTo(242,306);
 
ctx.moveTo(274,306);
ctx.lineTo(306,306);
 
ctx.moveTo(2,322);
ctx.lineTo(162,322);
 
ctx.moveTo(178,322);
ctx.lineTo(322,322);
 
ctx.moveTo(2,2);
ctx.lineTo(2,322);
 
ctx.moveTo(18,2);
ctx.lineTo(18,50);
 
ctx.moveTo(18,162);
ctx.lineTo(18,178);
 
ctx.moveTo(18,258);
ctx.lineTo(18,306);
 
ctx.moveTo(34,18);
ctx.lineTo(34,82);
 
ctx.moveTo(34,114);
ctx.lineTo(34,130);
 
ctx.moveTo(34,146);
ctx.lineTo(34,162);
 
ctx.moveTo(34,178);
ctx.lineTo(34,194);
 
ctx.moveTo(34,226);
ctx.lineTo(34,258);
 
ctx.moveTo(34,274);
ctx.lineTo(34,290);
 
ctx.moveTo(34,306);
ctx.lineTo(34,322);
 
ctx.moveTo(50,2);
ctx.lineTo(50,34);
 
ctx.moveTo(50,66);
ctx.lineTo(50,130);
 
ctx.moveTo(50,162);
ctx.lineTo(50,178);
 
ctx.moveTo(50,226);
ctx.lineTo(50,274);
 
ctx.moveTo(66,18);
ctx.lineTo(66,98);
 
ctx.moveTo(66,146);
ctx.lineTo(66,226);
 
ctx.moveTo(66,242);
ctx.lineTo(66,258);
 
ctx.moveTo(82,34);
ctx.lineTo(82,50);
 
ctx.moveTo(82,82);
ctx.lineTo(82,114);
 
ctx.moveTo(82,130);
ctx.lineTo(82,162);
 
ctx.moveTo(82,210);
ctx.lineTo(82,242);
 
ctx.moveTo(82,258);
ctx.lineTo(82,290);
 
ctx.moveTo(98,2);
ctx.lineTo(98,34);
 
ctx.moveTo(98,98);
ctx.lineTo(98,130);
 
ctx.moveTo(98,162);
ctx.lineTo(98,178);
 
ctx.moveTo(98,210);
ctx.lineTo(98,226);
 
ctx.moveTo(98,242);
ctx.lineTo(98,274);
 
ctx.moveTo(98,306);
ctx.lineTo(98,322);
 
ctx.moveTo(114,34);
ctx.lineTo(114,114);
 
ctx.moveTo(114,146);
ctx.lineTo(114,210);
 
ctx.moveTo(114,226);
ctx.lineTo(114,242);
 
ctx.moveTo(114,290);
ctx.lineTo(114,306);
 
ctx.moveTo(130,2);
ctx.lineTo(130,34);
 
ctx.moveTo(130,66);
ctx.lineTo(130,194);
 
ctx.moveTo(130,242);
ctx.lineTo(130,258);
 
ctx.moveTo(130,274);
ctx.lineTo(130,290);
 
ctx.moveTo(130,306);
ctx.lineTo(130,322);
 
ctx.moveTo(146,50);
ctx.lineTo(146,66);
 
ctx.moveTo(146,130);
ctx.lineTo(146,146);
 
ctx.moveTo(146,178);
ctx.lineTo(146,210);
 
ctx.moveTo(146,258);
ctx.lineTo(146,274);
 
ctx.moveTo(146,290);
ctx.lineTo(146,306);
 
ctx.moveTo(162,18);
ctx.lineTo(162,34);
 
ctx.moveTo(162,66);
ctx.lineTo(162,130);
 
ctx.moveTo(162,178);
ctx.lineTo(162,194);
 
ctx.moveTo(162,242);
ctx.lineTo(162,258);
 
ctx.moveTo(162,306);
ctx.lineTo(162,322);
 
ctx.moveTo(178,2);
ctx.lineTo(178,18);
 
ctx.moveTo(178,34);
ctx.lineTo(178,66);
 
ctx.moveTo(178,130);
ctx.lineTo(178,146);
 
ctx.moveTo(178,162);
ctx.lineTo(178,194);
 
ctx.moveTo(178,258);
ctx.lineTo(178,290);
 
ctx.moveTo(194,50);
ctx.lineTo(194,82);
 
ctx.moveTo(194,146);
ctx.lineTo(194,162);
 
ctx.moveTo(194,194);
ctx.lineTo(194,210);
 
ctx.moveTo(194,242);
ctx.lineTo(194,274);
 
ctx.moveTo(194,290);
ctx.lineTo(194,322);
 
ctx.moveTo(210,2);
ctx.lineTo(210,98);
 
ctx.moveTo(210,114);
ctx.lineTo(210,194);
 
ctx.moveTo(210,274);
ctx.lineTo(210,290);
 
ctx.moveTo(210,306);
ctx.lineTo(210,322);
 
ctx.moveTo(226,34);
ctx.lineTo(226,50);
 
ctx.moveTo(226,66);
ctx.lineTo(226,82);
 
ctx.moveTo(226,162);
ctx.lineTo(226,178);
 
ctx.moveTo(226,194);
ctx.lineTo(226,210);
 
ctx.moveTo(226,242);
ctx.lineTo(226,274);
 
ctx.moveTo(226,290);
ctx.lineTo(226,306);
 
ctx.moveTo(242,50);
ctx.lineTo(242,66);
 
ctx.moveTo(242,146);
ctx.lineTo(242,226);
 
ctx.moveTo(242,242);
ctx.lineTo(242,258);
 
ctx.moveTo(242,274);
ctx.lineTo(242,306);
 
ctx.moveTo(258,2);
ctx.lineTo(258,66);
 
ctx.moveTo(258,130);
ctx.lineTo(258,210);
 
ctx.moveTo(258,226);
ctx.lineTo(258,242);
 
ctx.moveTo(258,274);
ctx.lineTo(258,322);
 
ctx.moveTo(274,18);
ctx.lineTo(274,50);
 
ctx.moveTo(274,114);
ctx.lineTo(274,130);
 
ctx.moveTo(274,162);
ctx.lineTo(274,178);
 
ctx.moveTo(274,194);
ctx.lineTo(274,226);
 
ctx.moveTo(274,242);
ctx.lineTo(274,258);
 
ctx.moveTo(274,290);
ctx.lineTo(274,306);
 
ctx.moveTo(290,2);
ctx.lineTo(290,34);
 
ctx.moveTo(290,50);
ctx.lineTo(290,98);
 
ctx.moveTo(290,178);
ctx.lineTo(290,210);
 
ctx.moveTo(290,226);
ctx.lineTo(290,242);
 
ctx.moveTo(290,274);
ctx.lineTo(290,290);
 
ctx.moveTo(306,34);
ctx.lineTo(306,50);
 
ctx.moveTo(306,82);
ctx.lineTo(306,98);
 
ctx.moveTo(306,146);
ctx.lineTo(306,178);
 
ctx.moveTo(306,210);
ctx.lineTo(306,226);
 
ctx.moveTo(306,258);
ctx.lineTo(306,274);
 
ctx.moveTo(322,2);
ctx.lineTo(322,322);


ctx.stroke();

}

const points = [
[154,2], [154,10], [170,10], [170,26], [186,26], [186,42], 
[202,42], [202,90], [170,90], [170,106], [202,106], [202,122], 
[170,122], [170,138], [154,138], [154,106], [138,106], [138,90], 
[154,90], [154,74], [138,74], [138,58], [122,58], [122,122], 
[106,122], [106,90], [90,90], [90,122], [58,122], [58,138], 
[74,138], [74,170], [90,170], [90,154], [106,154], [106,202], 
[74,202], [74,234], [58,234], [58,266], [74,266], [74,250], 
[90,250], [90,282], [122,282], [122,298], [138,298], [138,314], 
[154,314], [154,298], [186,298], [186,314], [170,314], [170,322]
];

function solve() {
    ctx.beginPath();

    ctx.lineWidth = 5;
    ctx.strokeStyle = "grey";
    ctx.lineJoin = "round";

    ctx.moveTo(points[0][0], points[0][1]);
    drawStep(1);
    
}
const DELAY = 50;
function drawStep(index) {
    if (index >= points.length) {
        drawImg();
        buttonSolve.disabled = false;
        return;
    }

    const [x, y] = points[index];  
    ctx.lineTo(x, y);
    ctx.stroke();

    setTimeout(function() {
        drawStep(index + 1);
    }, DELAY);
}
const img = new Image();



let currentIndex = 0;
index = 0
    let x = points[0][0];
    let y = points[0][1];

    

    let speed = 0.1;  // Speed of the movement, adjust as necessary
    
    

      // Draw image at the current position
      function drawImg() {
         // Clear canvas
        //draw();
         // Draw image
         ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
        if (currentIndex >= points.length - 1) {
            return;  // Exit the function to stop animation
        }
       
        // Move towards the next point
        const targetX = points[currentIndex][0];
        const targetY = points[currentIndex][1];

        // Calculate direction vector
        const dx = targetX - x;
        const dy = targetY - y;
        

        if(points[index][0] < points[index+1][0]){
            img.src="img/car_right.png";
            car_size = ctx2.drawImage(img, x-10, y-5,20,10);
        }
        else if(points[index][0] > points[index+1][0]){
            img.src="img/car_left.png";
            car_size = ctx2.drawImage(img, x-5, y-5,20,10);
        }
        else if(points[index][1] > points[index+1][1]){
            img.src="img/car_up.png";
            car_size = ctx2.drawImage(img, x-5, y-10,10,20);
        }
        else if(points[index][1] < points[index+1][1]){
            img.src="img/car_down.png";
            car_size = ctx2.drawImage(img, x-5, y-10,10,20);
        }
        // Move the image smoothly towards the target point
        if (Math.abs(dx) < 1 && Math.abs(dy) < 1) {
          // Once the current point is reached, move to the next point
          currentIndex = (currentIndex + 1) % points.length;  // Loop through points
        }
        else {
          x += dx * speed;
          y += dy * speed;
        }
        index = currentIndex - 1;

        requestAnimationFrame(drawImg); // Continue the animation
    }

    
draw();