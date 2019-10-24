import React, {Component} from 'react'
import './App.css'
import Title from './title'
import MoneyBookList from './moneybooklist'

class MoneyBook extends Component {
  
  constructor (props) {
    super(props)
    this.state = {books:[]}
  }

  componentDidMount () {
    this.setState({books:[
      {date: "1/1", item: "お年玉", amount: 10000}
      , {date: "1/3", item: "ケーキ", amount: -500}
      , {date: "2/1", item: "小遣い", amount: 3000}
      , {date: "1/5", item: "漫画", amount: -600}
    ]})
  }

  render () {
    return (
      <div>
        <Title>お小遣い帳</Title>
        <MoneyBookList books = {this.state.books} />
      </div>
    )
  }
}

export default MoneyBook