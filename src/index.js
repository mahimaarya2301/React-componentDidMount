//Import Area
import React from 'react';
import ReactDOM from 'react-dom';

//Create a Class Component
class A extends React.Component{
    //1.Property

    //2.Constructor
    constructor(props){
        super(props);
        this.state = {name:"Mahima"};
    }
    //3.Method
    //Every Class Component Must Have render method which always return HTML
    render(){
        return(
            <div>
                <h1>Hello Welcome { this.state.name }</h1>
            </div>
        );
    }
    //This method calls after the view is rendered
    componentDidMount(){
        setTimeout( () =>{
            this.setState({name:"Priyanka"})
        },5000);

    }
}

ReactDOM.render(<A/>,document.getElementById('root'));