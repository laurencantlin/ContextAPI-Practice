import React, {Component} from 'react';
import Context from '../config/Context';

class ContextProvider extends Component{
    constructor(){
        super()
        this.state={
            posts:[]
        }
    }

    grabDataFromApi(){
        fetch('http://jsonplaceholder.typicode.com/posts/').then(response=> response.json()).then(json=>this.setState({posts:json}))
    }

    componentWillMount(){
        this.grabDataFromApi();
    }
    render(){
        return(
            <Context.Provider value={{posts:this.state.posts}}>
            {this.props.children}</Context.Provider>
        );
    }
}
export default ContextProvider