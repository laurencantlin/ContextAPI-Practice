import React, {Component} from "react";

import Context from '../../config/Context.js';
import ContextProvider from '../../provider/ContextProvider';
class Home extends Component {
    render() {
        return ( <div> homepage
            <ContextProvider>
                <Context.Consumer>
                    {data=> <div>{data.posts.map(p=><div><h5>{p.title}</h5><br/></div>)}</div>}</Context.Consumer></ContextProvider> </div>
        )
    }
}
export default Home;