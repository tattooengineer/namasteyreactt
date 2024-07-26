import React from "react";

class ClassComp extends React.Component {
    constructor(props){
       
        super(props)
        this.state = {
            count : 1
        }
        console.log(this.props.name + "constructor");
    
    }


    componentDidMount(){
        console.log(this.props.name + "componentdidmount");
    }
render(){
    const {name} = this.props
    const {count} = this.state
    console.log(this.props.name + "render");
    return(

        <div>
            <h1>{name}</h1>
            <h1>{count}</h1>
            <button onClick={()=>{
                this.setState({
                    count : this.state.count + 1
                })
            }}>click</button>
        </div>
    );
}

}
export default ClassComp