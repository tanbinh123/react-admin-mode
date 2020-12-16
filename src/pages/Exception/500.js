import React from 'react'
import { Result, Button } from 'antd'

class Exception500 extends React.Component {

    render() {
        return (<Result
            status="500"
            title="500"
            subTitle="抱歉，服务器出错了"
            extra={<Button type="primary">返回首页</Button>}
          />)
    }
}

export default Exception500