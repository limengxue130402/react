import React, { Component } from 'react'
import Todoing from './Todoing'
import TodoInput from './TodoInput'
import TodoComplete from './TodoComplete'

export default class Todolist extends Component {
    constructor(){
        super();
        this.state={
            arr:[],
            arr2:[]
        }
    }
    componentDidMount(){
        this.setState({
            arr:JSON.parse(localStorage.getItem('arr')) || [],
            arr2:JSON.parse(localStorage.getItem('arr2')) || []
        })
    }
    addItem = (data)=>{
        this.setState({
            arr:[...this.state.arr,data]
        },()=>{
            localStorage.setItem('arr',JSON.stringify(this.state.arr))
        })
    }
    delItem = (idx,e) => {
        let arr = [...this.state.arr]; 
        arr.splice(idx, 1);
        this.setState(() =>{
            return{
                arr:arr
            }
        },()=>{
            localStorage.setItem("arr",JSON.stringify(this.state.arr))
        })
    }
    delItem1 = (idx,e) => {
        let arr2 = [...this.state.arr2]; 
        arr2.splice(idx, 1);
        this.setState(() =>{
            return{
                arr2:arr2
            }
        },()=>{
            localStorage.setItem("arr2",JSON.stringify(this.state.arr2))
        })
    }
    changeItem = (idx,e)=>{
        let arr2 = [...this.state.arr2,this.state.arr[idx]]
        this.setState({
            arr2:arr2
        },()=>{
            localStorage.setItem("arr2",JSON.stringify(this.state.arr2))
        })
         this.delItem(idx,e)
    }
    changeItem2 = (idx,e)=>{
        let arr = [...this.state.arr,this.state.arr2[idx]]
        this.setState({
            arr:arr
        },()=>{
            localStorage.setItem("arr",JSON.stringify(this.state.arr))
        })
         this.delItem1(idx,e)
    }
    render() {
        return (
            <div> 
                <TodoInput add={this.addItem}></TodoInput>
                <Todoing arr={this.state.arr} del={this.delItem} changeItem={this.changeItem}/>
                <TodoComplete arr2={this.state.arr2} del1={this.delItem1} changeItem2={this.changeItem2}></TodoComplete>
            </div>
            
        )
    }
}

