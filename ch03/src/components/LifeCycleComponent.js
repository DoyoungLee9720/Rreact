import { Component } from "react";

class LifeCycleComponent extends Component{
    componentDidMount(){}
    shouldComponentUpdate(){}
    render(){
        return(
            <div className="LifeCycleComponent">
                <h4>LifeCycleComponent</h4>
            </div>
        );
    }
    componentDidUpdate(){}
    componentWillUnmount(){}
}
export default LifeCycleComponent;