import React, {useMemo, FC, memo, useState, useRef,} from "react";
import './Popover.module.less'
// import {useLongPress} from 'ahooks'
import {PopoverProps, PopoverStyle} from "./interface";

const Popover: FC<PopoverProps> = memo((props) => {
  const {trigger, title, content, width, children, placement} = props
  const [show, setShow] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  // 点击
  const click = () => {
    setShow(!show);
    console.log('click');

  }
  // 移入
  const handleMouseEnter = () => {
    setShow(!show)
  }
  // 移出
  const handleMouseLeave = () => {
    setShow(!show)
  }
  // 长按
  // useLongPress(() => setShow(!show), ref, {
  //   onLongPressEnd: () => setShow(!show)
  // });

  const popoverStyle = useMemo(() => {
    if (!trigger && trigger !== 'hover' && trigger !== 'focus' && trigger !== 'manual') {
      return 'click'
    }
    return trigger as any
  }, [trigger])

  const popoverSize = useMemo(() => {
    var size: PopoverStyle = {
      width: '80px',
      position: 'relative',
    }
    if (width) {
      size.width = width + 'px'
    }
    return size

  }, [width, content, title])
  const placementClass = useMemo(() => {
    if (!placement && placement !== 'bottom' && placement !== 'left' && placement !== 'right') {
      return 'top'

    }
    return placement as any
  }, [placement])

  return (
    <div
      className={popoverStyle}
      ref={ref}
      onClick={popoverStyle === 'click' ? click : undefined}
      onMouseEnter={popoverStyle === 'hover' ? handleMouseEnter : undefined}
      onMouseLeave={popoverStyle === 'hover' ? handleMouseLeave : undefined}
      style={popoverSize as any}
    >{children}
      <div className={placementClass}
           style={{display: show ? 'block' : 'none'}}
      >
        <div className="title">{title}</div>
        {content}
        <p className="san"></p>
      </div>
    </div>

  )

})

export function getOverlay(title?: PopoverProps['title'], content?: PopoverProps['content']) {
  if (!title && !content) {
    return undefined
  }
  return (
    <>
      {title && <div>{title}</div>}
      <div>{content}</div>
    </>
  );

}

Popover.defaultProps = {title: '标题', content: "我是哈哈哈哈哈内容"}
export default Popover

