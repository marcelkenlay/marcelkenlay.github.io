import * as React from 'react';
import {Menu as AntdMenu} from 'antd';
import Icon from "antd/lib/icon";


const fontSize = '28px';
const fontStyle = {
    fontSize
};

export function Menu({selected, onSelect}){
    return (
        <AntdMenu
            mode="horizontal"
            defaultSelectedKeys={[selected]}
            style={{
                lineHeight: '64px',
                background: 'inherit',
                borderBottom: 0,
                color: '#fff',
            }}
            onSelect={selected => onSelect(selected.key)}
        >
            <AntdMenu.Item key="/cv" style={fontStyle}>
                <Icon type="profile" style={fontStyle}/> CV
            </AntdMenu.Item>
            <AntdMenu.Item key="/projects" style={fontStyle}>
                <Icon type="project" style={fontStyle}/> Projects
            </AntdMenu.Item>
        </AntdMenu>);
}