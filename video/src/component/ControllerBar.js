/**
 * Created by yrhu on 2016/12/29.
 */
import React from "react";
import ReactDOM from "react-dom";
import "./Video.less"
import $ from "jquery"
class ControllerBar extends React.Component{
    constructor(){
        super();
        this.state = {
            md:false,
            now:0,
            percent:0,
            play:true,
            muilt:false,
            full:false
        }
    }

    process(){
        let obj = this.refs.process;
        this.setState({md:true})
    }
    move(event){
        if(this.state.md){
            let obj = this.refs.process;
            let left = event.clientX-595;

            if(left>0&&left<365) {
                obj.style.left = (event.clientX - 595) + "px";
                this.setState({now:left});
                this.percent();
            }
        }
    }

    moveout(){
        this.setState({md:false});
    }

    percent(){
        let p = Math.round(this.state.now/400*100);
        this.setState({percent:p});
    }

    play(){
        let o = $(this.refs.play);
        if(this.state.play){
            this.setState({play:false});
            o.removeClass("icon-play");
            o.addClass("icon-pause")
        }else{
            this.setState({play:true});
            o.removeClass("icon-pause");
            o.addClass("icon-play")
        }
    }

    muilt(){
        let o = $(this.refs.muilt);
        if(this.state.muilt){
            this.setState({muilt:false});
            o.removeClass("icon-volume-up");
            o.addClass("icon-volume-off");
        }else{
            this.setState({muilt:true});
            o.removeClass("icon-volume-off");
            o.addClass("icon-volume-up");
        }
    }

    fullScreen(){
        let o = $(this.refs.full);
        if(this.state.full){
            this.setState({full:false});
            o.removeClass("icon-fullscreen");
            o.addClass("icon-resize-small");
            this.exitFullscreen();
        }else{
            this.setState({full:true});
            o.removeClass("icon-resize-small");
            o.addClass("icon-fullscreen");
            this.launchFullscreen(this.refs.full);
        }
    }
//退出全屏
   exitFullscreen() {

        console.log("_________________")
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if(document.oRequestFullscreen){
            document.oCancelFullScreen();
        }else if (document.webkitExitFullscreen){
            document.webkitExitFullscreen();
        }
    }
    //進入全屏
    launchFullscreen(element) {
        //此方法不可以在異步任務中執行，否則火狐無法全屏
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        } else if (element.oRequestFullscreen) {
            element.oRequestFullscreen();
        }
        else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullScreen();
        }
    }
    render(){
        let style =this.props.sttrStyle;
            style.display=this.props.visible?"":"none";
        return (
            <div className="CB" style={style}>
                <div className="SP"><a ref="play" className="icon-play" href="javascript:void(0)"  onClick={this.play.bind(this)}></a></div>
                <div className="PRO"><span ref="process" id="processBar" onMouseDown={this.process.bind(this)} onMouseMove={this.move.bind(this)} onMouseOut={this.moveout.bind(this)}>{this.state.percent+"%"}</span></div>
                <div className="VO"><a ref="muilt" className="icon-volume-up" href="javascript:void(0)" onClick={this.muilt.bind(this)}></a></div>
                <div className="SC"><a ref="full" className=" icon-fullscreen" href="javascript:void(0)" onClick={this.fullScreen.bind(this)}></a></div>
            </div>
        );
    }
}

export { ControllerBar as default }