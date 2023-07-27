import React, { useMemo, FC, memo ,useRef, } from 'react';
import './Alert.module.less';
import { ButtonProps, ButtonStyle, NativeButtonProps } from './interface';

const Button: FC<ButtonProps & NativeButtonProps> = memo((props) => {
    // console.log(props); // log一下点击事件能不能使用
    const { type, width, height, children,show } = props;
    const buttonStyle = useMemo(() => {
        if (!type && type !== 'warning' && type !== 'success' && type !== 'error' ) {
            return 'info';
        }
        return type as any;
    }, [type]);
    const buttonSize = useMemo(() => {
        var size: ButtonStyle = {
            width: '',
            height: '',
        };
        if (width) {
            size.width = width + 'px';
        }
        if (height) {
            size.height = height + 'px';
        }
        return size;
    }, [width, height,]);

    // 调用useref 创建 名为myRef 的引用 将初始值设置为null 
    const myRef = useRef<HTMLDivElement>(null);
    //  声明一个为change 函数 
     function change() {
        console.log(myRef);
        if(myRef.current){
           myRef.current.hidden=true ;
        }
    } 
    return (
        // 通过ref 将myref 绑定到div 上
        <div className='Alert' ref={myRef}>
            <div className={buttonStyle} style={buttonSize as any}>
                {/* 渲染 */}
                    <div className='title'>{props.title}</div>
                    {children}
                    {/*  change 为传值   change()为点击运行事件 */}
                    <div className='span' style={ {display:show?"none":"block" }} onClick={ ()=>change()} >x</div>
            </div>
        </div>
    );
});

export default Button;
