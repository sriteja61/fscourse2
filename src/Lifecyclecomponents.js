import React,{componet} from 'reat';
class LifecycleComponent extends Componet{
    constructor(props){
        super(props)
        this.state={
            count:0,
        };
        this.handleClick=this.handleClick();
        console.log('constructor called');
    }
}
ComponentdidMount(){
    console.log("component did mount is called")
}
render(){
    return 
}