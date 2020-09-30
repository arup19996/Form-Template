import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button,Card,Radio,RadioGroup,FormGroup,FormControlLabel,Checkbox, Input, Select } from '@material-ui/core';

class App extends React.Component {
  
  constructor(props){
    super(props);
    this.state={
      answertype: "text",
      radioOption : [{label:"Option", value:"option1"}],
      multipleOption : [{label:"Option", value:"option1"}]
    }
    this.onChange = this.onChange.bind(this);
    this.radioAddClick = this.radioAddClick.bind(this);
    this.multipleButtonClick = this.multipleButtonClick.bind(this);
  }

  multipleButtonClick(e){
    e.preventDefault()
    let multipleOption = [...this.state.multipleOption]
    multipleOption.push({
      label:"Option", value:multipleOption.length +1
    })
    this.setState({
      multipleOption : multipleOption
    })

  }

  radioAddClick(e){
    e.preventDefault()
    let radioOption = [...this.state.radioOption]
    radioOption.push({
      label:"Option", value:radioOption.length +1
    })
    this.setState({
      radioOption : radioOption
    })
  }

  onChange(e){
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  render(){
  return (
    <div className="App">
      <div className="Continer">
        <h2 className="templateheading">Form Template</h2>
      <Card className="formContainer">
            <Input placeholder="Form Title" className="formtitle" name="form_title"></Input>
            <Input placeholder="Form Description" className="formdescription" name="form_description"></Input>
          
      </Card>
      <Card className="questionContainer">
        <Input type="text" placeholder="Question" className="question" name="question"></Input>
        <Select name="answertype" className="answertype" value={this.state.answertype} onChange={this.onChange}>
          <option value="text">Short Answer</option>
          <option value="radio">Multiple Choice</option>
          <option value="checkbox">CheckBoxs</option>
        </Select>
        <div className="shortanswertext">
        {
          
          this.state.answertype === "text" ?
          <Input type="text" className="width100" placeholder="short answer text"></Input>
          : this.state.answertype === "radio"?
          <RadioGroup>
         { this.state.radioOption.map(data=>{
            return  <FormControlLabel value={data.value} control={<Radio />} label={data.
            label} />
            
          })}
          {this.state.radioOption.length <5 ? 
           <FormControlLabel value="Add Option" control={<Radio />} onClick={this.radioAddClick} label="Add Option"/>
            : null  
        }
          </RadioGroup>
          
          : this.state.answertype === "checkbox" ? 
          <FormGroup>
         { this.state.multipleOption.map(data=>{
            return  <FormControlLabel value={data.value} control={<Checkbox />} label={data.
            label} />
            
          })}
          {this.state.radioOption.length <5 ? 
           <FormControlLabel value="Add Option" control={<Checkbox />} onClick={this.multipleButtonClick} label="Add Option"/>
            : null  
        }
          </FormGroup>
          : null
        }
        </div>
      </Card>
      </div>
    </div>
  );
  }
}

export default App;
