/*
 * @Description: 
 * @Author: Do not edit
 * @Date: 2020-11-03 20:43:07
 * @LastEditors: Do not edit
 * @LastEditTime: 2020-11-03 23:58:12
 */
import React from 'react'

class Article extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    componentDidMount() {
        console.log(1, this.props)
    }
    handleClick() {
        // this.props.history.push('/login')
    }
    render() {
        return (
            <div>
                <h3 onClick={this.handleClick.bind(this)}>welcome</h3>
            </div>
        )
    }
}
export default Article