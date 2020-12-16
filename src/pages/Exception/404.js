import React from 'react'
import { Result, Button } from 'antd'

class Exception404 extends React.Component {

    render() {
        return (<Result
            status="404"
            title="404"
            subTitle="对不起！你要的界面找不到了"
            extra={<Button type="primary">返回首页</Button>}
          />)
    }
}


export default Exception404