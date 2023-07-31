export interface TagProps{
    // 
    /**
     *   按钮主题
     * @default primary
     * */ 
    type?: String
    /**
     *    宽度
     * 
     * */ 
    width?: Number
     /**
     *   高度
     * 
     * */ 
     height?: Number
    /**
     *   是否可关闭
     * @default false
     * */ 
    closable?:Boolean

    /**
     *  是否禁用渐变动画
     * @default  false
     * */ 
     disable_transitions?:Boolean

    /**
     *  是否有边框描边
     * @default false
     * */  
    hit?:Boolean
    /**
     *  背景色
     * */ 
    color?:String
    /**
     *  尺寸
     * */ 

    size?:String
}

export interface TagStyle{
    // 样式接口
    type?:String
    closable?:Boolean
    disable_transitions?:Boolean
    hit?:Boolean
    color?:String
    size?:String
    height?: String
    width?: String
    icon?:any;
    position?:String
    paddingRight?:String
    
}

export type NativeTagProps = Omit<React.LabelHTMLAttributes<HTMLElement>,'type'>