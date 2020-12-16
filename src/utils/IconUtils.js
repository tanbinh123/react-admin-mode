import React from 'react'
import  * as Icon from '@ant-design/icons';
/**
 * 创建图标
 * @param {} iconName 
 */
export function createIcon(iconName) {
    return (React.createElement(
                Icon[iconName],
                {
                style:{ fontSize: '16px', color: '#08c' }
                }
            )
    )
}