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
     * @description 是否显示表格
     * @default true
     * 
     */
    show?:Boolean;
    /**
     * @description 表头
     */
    columns?:any
    /**
     * @description 显示的数据
     */
    items?:any
    /**
     * @description 是否为斑马纹 table
     */
    cell?:Boolean
    
    
  }
  export interface ButtonStyle {
    //button样式接口
    

     
  }
  export type NativeButtonProps = Omit<React.AllHTMLAttributes<HTMLElement>, 'type'>; //原生button接口
   