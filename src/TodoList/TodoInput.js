import React, { Component } from 'react'

export default class TodoInput extends Component {
    handle =(e) =>{
        if(e.keyCode == 13){
            this.props.add(e.target.value);
            e.target.value=''
        }
    }
    render() {
        return (
            <div style={{height:60,textAlign:'center',background:'black'}}>
                <span style={{color:'white',fontSize:30}}>ToDoList</span>
                <input style={{marginLeft:200,height:30,width:500,borderRadius:5}} placeholder='添加ToDo' name='a' onKeyDown={this.handle}></input>
            </div>
        )
    }

}
