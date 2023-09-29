import React,{Component} from 'react';
class Lifecyclecomponents extends Component{
    constructor(props){
        super(props)
        this.state={
            count:0,
        };
        this.handleClick=this.handleClick.bind(this);
        console.log('constructor called');
    }

componentDidMount() 
{
    console.log("component did mount is called");
}
componentWillUnmount() 
{
    console.log('ComponentwillUnmount called');
}
componentDidUpdate(prevProps, prevState){
    console.log("ComponentDidUpdate")
}
shouldComponentUpdate(nextProps,nextState) 
{
    console.log('shouldComponentUpdate called');
    return true;
}
componentDidCatch(error,errorInfo)
{
    console.log('componentDidcatch called');
}
handleClick() 
{
    this.setState({count:this.state.count+1});
}

render() 
{
    console.log('Render called');
    return(
        <div>
            <h1>Class-Based Component</h1>
            <p>Count:{this.state.count}</p>
            <button onClick={this.handleClick} >Increment Count</button>

        </div>
    )
}
}
export default Lifecyclecomponents; 
