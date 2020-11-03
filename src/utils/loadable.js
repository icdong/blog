/*
 * @Description: loading组件
 * @Author: Do not edit
 * @Date: 2020-11-01 15:29:40
 * @LastEditors: Do not edit
 * @LastEditTime: 2020-11-01 16:40:36
 */
import React from 'react';
import Loadable from 'react-loadable';

//通用的loading组件
const loadingComponent = () => {
    return (
        <div>loading</div>
    )
}

//loading组件默认采用通用的，若传入了loading，则采用传入的loading组件
export default (loader, loading = loadingComponent) => {
    return Loadable({
        loader,
        loading
    })
}
