/**
 * Created by yrhu on 2016/12/29.
 */
import React from "react";
import ReactDOM from "react-dom";
import XS from "./xianshi";
import CB from "./ControllerBar";
import $ from "jquery";
import "./Video.less";
import Animate from "uxcore-animate"
class Video extends React.Component{
   constructor(){
       super();
       this.state = {
           visible:true,
           change:false
       }
   }
    showCB(type){
     /* if(type){
          this.setState({visible:true});
      }else{
          this.setState({visible:false});
      }*/
    }
    render(){
         var style={height:this.props.Vheight||"350px",width:this.props.Vwidth||"550px",background:"rgba(100,100,100,0.1)",borderRadius:"10px"}
         var style1 = {
             height:"40px"
         }
        var style2=null;
         if(this.state.change){
             style2={height:(parseInt(this.props.Vheight||"350px")-parseInt(style1.height))+"px"}
         }else{
             style2={height:this.props.Vheight||"350px"};
         }

          return (
              <div className="Video" style={style} onMouseLeave={this.showCB.bind(this,false)} onMouseEnter={this.showCB.bind(this,true)}>
                    <XS sttrStyle={style2} bar={style2.height}></XS>
                  <Animate onEnd={(key,e)=>{console.log("key:"+key+"--e:"+(e?"进入":"离开"));this.state.change=!e}} showProp={"visible"} transitionAppear transitionName={"custom"}>
                      <CB sttrStyle={style1} key="CB" visible={this.state.visible}></CB>
                  </Animate>
              </div>
          );
    }
}
export { Video as default }