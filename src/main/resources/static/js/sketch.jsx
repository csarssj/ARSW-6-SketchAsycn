class sketch extends React.Component{
    constructor(props){
        super(props)

    Sketch = (p)=>{
        
        p.setup = ()=>{
            p.createCanvas(200, 200);
        }
        p.draw = ()=>{
              if (p.mouseIsPressed === true) {
                p.fill(0,0,0);
                p.ellipse(p.mouseX,p.mouseY, 20, 20);
              } 
              if (p.mouseIsPressed === false) {
                p.fill(255,255,255);
              }
        }
    }
    componentDidMount(){
        this.myP5 = new p5(this.Sketch, this.myRef.current, this.state.color, this.state.strokeColor)
    }
    
    render(){
        return <div id = 'sketch'>
        </div>
    }
}
