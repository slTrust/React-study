import React, { Component } from 'react';
import './button.css'

class Button extends Component {
    constructor(props){
        super(props);
        this.state = {
            active:false,
            deltaX:0,
            deltaY:0
        }
        // 当前节点
        this.myRef = React.createRef();
    }
    x(event){
        // 事件源
        console.log(event);
        // 距离左边的距离
        console.log(event.clientX);
        // 距离上面的距离
        console.log(event.clientY);
        // 当前按钮的引用
        console.log(this.myRef);
        // 获取边缘属性
        console.log(this.myRef.current.getBoundingClientRect())
        // 
        let {x,y} = this.myRef.current.getBoundingClientRect();
        let {clientX,clientY} = event;
        let deltaX = clientX - x - 5;
        let deltaY = clientY - y - 5;
        // 得到点击的位置
        console.log(deltaX,deltaY);

        this.setState({
            active:true, 
            deltaX:deltaX,
            deltaY:deltaY
        })
        console.log('组件里面的函数')
        this.props.onClick && this.props.onClick.call(null,event);
    }
    y(){
        this.setState({
            active:false
        })
    }
    render() {
        return (
            <button ref={this.myRef} className="button2"
                onClick={ this.x.bind(this) }
            >
                <span className="value">{ this.props.value }</span>
               
                { (this.state.active === true)?(
                    <span className="circle" onAnimationEnd={ this.y.bind(this) } style={{left:this.state.deltaX,top:this.state.deltaY}}></span>
                ):''}
            </button>
        );
    }
}

export default Button;
