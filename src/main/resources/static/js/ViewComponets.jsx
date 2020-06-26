class StatusComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            status: ""
        };
    }
    componentDidMount() {
        this.timerID = setInterval(
                () => this.checkStatus(),
                5000
                );
    }
    static addSketch(mouseX,mouseY){
        var data = new FormData();
        data.append('posX', mouseX);
        data.append('posY', mouseY);
        fetch('/setSketch', {
            method: 'POST',
            body: data
        })
                .then(function (response) {
                    if (response.ok) {
                        return response.text();
                    } else {
                        console.log("fail", data);
                        throw "error";
                    }

                });
        
    }
    checkStatus() {
        fetch("/getSketch")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        status: result
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            );
    }
    render() {
           const {
               error,
               isLoaded,
               status
           } = this.state;
           if (error) {
               return <div> Error: {
                   error.message
               } </div>;
           } else if (!isLoaded) {
               return <div> Loading... </div>;
           } else {
               return (
                   <div>
                       <h1> The server status is: </h1>
                       <p> {status} </p>
                   </div>
               );
           }
       }
   }

ReactDOM.render(
        <StatusComponent />,
        document.getElementById('status')
);
