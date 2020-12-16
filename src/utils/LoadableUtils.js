import React from 'react';
import Loadable from 'react-loadable';
import { message } from 'antd';


export default (loader) => {
    return Loadable({
        loader,
        loading() {
            return <div>组件加载中...</div>
        }
    });
}