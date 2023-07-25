import React, { useMemo, FC, memo } from 'react';
import css from './Loading.module.less';
import { LoadingProps, NativeLoadingProps } from './interface';


const Loading: FC<LoadingProps & NativeLoadingProps> = memo((props) => {
    const { type, text, children, mask, loading, all } = props;
    // const style = useMemo(() => {
    //     if (!type && type !== 'all') {
    //         return 'absolute';
    //     }
    //     return type as any;
    // }, [type]);
    // const aa
    return (
        <div className={[mask === 'white' ? css.white : css.black, loading === true ? css.show : css.hidden, all === true ? css.all : css.single].join(' ')}>
            <div className={css.content}>
                {children ? children[0] : <div className={css.icon}></div>}
                {text ? text : ''}
            </div>
        </div>

    );
});

export default Loading;
