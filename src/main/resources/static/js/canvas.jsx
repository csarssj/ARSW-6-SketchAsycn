let sketch = [];
const instace = new StatusComponent(props);
function setup() {
  createCanvas(800, 600);
  background(153);
}
function draw() {
  if (mouseIsPressed) {
    fill(0,0,0);
    ellipse(mouseX,mouseY, 20, 20);
  }else{ 
    fill(255,255,255);
  }
  
}
function update(data){
    sketch=data;
}
function drawing(sketch) {
    for (let i= 0; i<sketch.length; i++){
        console.log('yea'+sketch.x + ', ' + sketch.y)
        ellipse(sketch[i].x, sketch[i].y, 20, 20);
        fill(255, 0, 100);
    }
}
