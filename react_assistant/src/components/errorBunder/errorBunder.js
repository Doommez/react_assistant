import { Component } from "react"
import { Skeleton } from 'antd';


class Error extends Component{
  constructor(props){
    super(props)
    this.state={
      error:false
    }
  }

  componentDidCatch(error, errorInfo){
    console.log(error, errorInfo);
    this.setState({
      error:true
    })
  }
  render(){
    if(this.state.error){
      return (<h1>error!!!!</h1>)
    }
    
    return  this.props.children;
  }
}
export default Error