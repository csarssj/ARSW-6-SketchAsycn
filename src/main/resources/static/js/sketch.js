let sketch = [];
const instace = new StatusComponent(props);
function setup() {
  createCanvas(800, 600);
  background(153);
  
  var button = createButton("reset");
  button.position(820, 10);
  button.mousePressed(clear());
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
 
}
function addSketch(x,y){
    sketch.add(x,y);
}