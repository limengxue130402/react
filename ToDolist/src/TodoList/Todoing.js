import React, { Component } from 'react'

export default class Todoing extends Component {
    clickbox =(idx,e)=>{
        var checked = e.target.checked;
        if(checked == true){
            this.props.changeItem(idx,e);
            e.target.checked=false;
        }
    }
    render() {
        var {arr} = this.props;
        return (
            <div style={{width:1200,}} className='doing'>
                <span style={{color:'black',fontSize:25,fontWeight:'bold',textAlign:'center',marginLeft:190}}>正在进行</span>
                <span style={{marginLeft:700,width:20,background:'rgb(247, 236, 236)',fontSize:18,borderRadius:100}}>{this.props.arr.length}</span>
                <ul style={{paddingLeft:200}}>
                    {
                        arr.map((item,idx)=>
                            <li key={idx} style={{width:800,background:'white',height:30,marginTop:20,fontSize:16,borderRadius:10}}>
                                <input type='checkbox' style={{width:18,height:18,marginLeft:50,marginTop:5}} onClick={(e)=>this.clickbox(idx,e)}/>
                                <span style={{marginLeft:10}}>{item}</span>
                                <button onClick={(e)=>this.props.del(idx,e)} style={{marginRight:20,borderRadius:25,float:'right'}}>删除</button>
                            </li>
                        )

                    }
                </ul>
            </div>
        )
    }
}
