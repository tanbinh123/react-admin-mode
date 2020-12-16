import React from 'react'
import { Result, Button } from 'antd'

class Exception403 extends React.Component {

    render() {
        return (<Result
            status="403"
            title="403"
            subTitle="抱歉，你无权访问该页面"
            extra={<Button type="primary">抱歉，你无权访问该页面</Button>}
          />)
    }
}

export default Exception403