import React, { useMemo, FC, memo, } from 'react';
import './Tabs.module.less'
import { ButtonProps, ButtonStyle, NativeButtonProps } from './interface';

const Button: FC<ButtonProps & NativeButtonProps> = memo((props) => {
    console.log(props);

    const { type,  children, show,cell } = props;
    // console.log(columns);
    const buttonStyle = useMemo(() => {
        if (!type && type !== 'warning' && type !== 'success' && type !== 'danger' && type !== 'primary') {
            return 'tabs';
        }
        return type as any;
    }, [type]);
    // const buttonSize = useMemo(() => {

    // }, []);




    return (        
            <table className={[ show ? 'table' : 'tables',cell?'tab':'tables'].join(' ')}>
                <thead >
                    <tr>
                        {
                            props.columns.map((item: any,) => {
                                return (
                                    <th >{item} </th>
                                )
                            })
                        }
                    </tr>
                </thead>
                {
                    props.items.map((item: any) => {
                        return (
                            <tbody key={item.name}>
                                <tr className='title'>
                                    <td>{item.date} </td>
                                    <td> {item.name} </td>
                                    <td>{item.address} </td>
                                </tr>
                            </tbody>
                        )
                    })

                }
            </table>
       
    );
});

export default Button;
