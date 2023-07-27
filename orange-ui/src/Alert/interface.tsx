export interface ButtonProps {
    //自定义button接口
    /**
     * @description 按钮主题
     * @default info
     */
    type?: String;
    /**
     * @description 宽度
     */
    width?: Number;
    /**
     * @description 高度
     */
    height?: Number;
    /**
     * @description  显示掩藏关闭按钮
     */
    show?:boolean
  }
  export interface ButtonStyle {
    //button样式接口
    width?: String;
    height?: String;
    background?:string;
    show?:any
  }
  export type NativeButtonProps = Omit<React.AllHTMLAttributes<HTMLElement>, 'type'>; //原生button接口
  