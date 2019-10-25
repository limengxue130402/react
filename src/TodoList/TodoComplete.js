import React, { Component } from 'react'

export default class TodoComplete extends Component {
    clickbox2 =(idx,e)=>{
        var checked = e.target.checked;
        if(checked == false){
            this.props.changeItem2(idx,e);
            e.target.checked=true;
        }

    }
    render() {
        var {arr2} = this.props;
        return (
            
            <div style={{textAlign:'center'}} className='doing'>
                <span style={{color:'black',fontSize:25,fontWeight:'bold',textAlign:'center'}}>已经完成</span>
                <span style={{marginLeft:700,width:20,background:'rgb(247, 236, 236)',fontSize:18,borderRadius:100}}>{this.props.arr2.length}</span>
                
                <ul>
                    {
                        arr2.map((item,idx)=>
                            <li key={idx} style={{width:800,background:'white',height:30,marginTop:20,fontSize:16,marginLeft:160,borderRadius:10}}>
                                <input type='checkbox' onClick={(e)=>this.clickbox2(idx,e)} defaultChecked={true} style={{width:18,height:18,marginTop:5,float:'left',marginLeft:50}}/>
                                <span style={{marginLeft:10,float:'left'}}>{item}</span>
                                <button onClick={(e)=>this.props.del1(idx,e)} style={{marginRight:20,borderRadius:25,float:'right'}}>删除</button>
                            </li>
                        )
                    }
                </ul>
            </div>
        )
    }
}
