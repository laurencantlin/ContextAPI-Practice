import React from "react";
import { Row, Col, Input, CardPanel } from "react-materialize";
import {Collapsible,CollapsibleItem, Icon} from 'react-materialize'
import { Link } from "react-router-dom";
import { Collapse } from 'antd';
import 'antd/dist/antd.css'// const Panel = Collapse.Panel;
import { Radio } from 'antd';
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

const customPanelStyle = {
  background: 'turquoise',
  borderRadius: 0,
  marginBottom: 0,
  // height: "calc(100%/5)",
  border: 0,
  // height:'100%',
  'overflow': 'hidden',
};
const customCollapseStyle = {
  // height: '82vh',
};
class Accordian extends React.Component {
  state={
  }
handleShapeChange = event => {
  event.preventDefault();
console.log("yo")
  console.log(this.state.bm)
  const { name, value } = event.target;
  this.setState({
      bm: {shape: value}
  });
};
onClickShape = event => {
  event.preventDefault();
console.log("yo")
const { name, value } = event.target;
this.setState({
  bmshape: {shape: value}
});

console.log(this.state.bmshape)

}



render(props) {
return(

  <Collapsible accordion  defaultActiveKey={1}>
  <CollapsibleItem header='Add Food ' className= "wide " icon='filter_drama'>

  </CollapsibleItem>
  <CollapsibleItem header='Add Water '  className= "wide"icon='place'>
    Lorem ipsum dolor sit amet.
  </CollapsibleItem>
  <CollapsibleItem header='JellyBeans '  className= "wide"icon='place'>
    Lorem ipsum dolor sit amet.
  </CollapsibleItem>
  <CollapsibleItem header='Push ' className= "wide"icon='whatshot'>
  <RadioGroup defaultValue="a" className="has-text-centered" size="small">
        <RadioButton value="1" onClick={this.onClickShape} onChange={this.handleShapeChange}>1</RadioButton>
        <RadioButton value="2" onClick={this.onClickShape}>2</RadioButton>
        <RadioButton value="3" onClick={this.onClickShape}>3</RadioButton>
        <RadioButton value="4" onClick={this.onClickShape}>4</RadioButton>
        <RadioButton value="5" onClick={this.onClickShape} onChange={this.handleShapeChange}>5</RadioButton>
        <RadioButton value="6" onClick={this.onClickShape} onChange={this.handleShapeChange}>6</RadioButton>
        <RadioButton value="7" onClick={this.onClickShape} onChange={this.handleShapeChange}>7</RadioButton>

      </RadioGroup>  </CollapsibleItem>
</Collapsible>
)}}

export default Accordian;
