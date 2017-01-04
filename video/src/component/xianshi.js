/**
 * Created by yrhu on 2016/12/29.
 */
import React from "react";
import ReactDOM from "react-dom";
import "./Video.less";
import $ from "jquery"
class XS extends React.Component{
    constructor(){
        super();
        this.state={
            show:false
        }
    }

   componentDidMount(){
    let o = this.refs.video;
    console.log(o.readyState)
      if(!this.canPlay()){
          this.setState({show:true});
      };
   }

   canPlay(){
       var obj = $( this.refs.video);
       let video = this.refs.video;
       obj.children().each(function(index,item){
           item = $(item);
         if(item.attr("src")){
             let type = item.attr("src").substr(item.attr("src").lastIndexOf(".")+1,item.attr("src").length);
             console.log(type)
             let r = video.canPlayType("video/"+type+"")
             if(r){
                return r;
             }
         }
       })
   }

    render(){
        let height=this.props.bar;
        let style ={height:height};
        console.log(style.height)
          return (
              <div className="XS" style={style}>
                  <div  className="xs-message" style={{width:"550px",height:style.height,display:this.state.show?"block":"none"}}>
                      <p>播放器不支持此格式的视频文件</p>
                  </div>

                  <video ref = "video" width={"550px"} height={style.height}>
                       <source  src="./test/Wildlife.wmv" />
                       <div>该浏览器不支持!请升级浏览器</div>
                  </video>
              </div>
          );
    }
}
export{ XS as default }