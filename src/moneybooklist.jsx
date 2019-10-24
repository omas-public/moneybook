import React from 'react'

const MoneyBookList = props => {
  const headings = ['日付', '項目', '入金', '出金']
  return (
    <div>
      <table className="book">
        <thead>
          <tr>{headings.map(v => <th key = {v}>{v}</th>)}</tr>
        </thead>
        <tbody>
          {
            props.books.map(book => 
              <MoneyBookItem book = {book} key = {book.date + book.item} />
            )
          }
        </tbody>
      </table>
    </div>
  )
}

const MoneyBookItem = props => {
  const {date, item, amount} = props.book
  return (
    <tr>
      <td>{date}</td>
      <td>{item}</td>
      <td>{amount >= 0 ? amount : null}</td>
      <td>{amount < 0 ? -amount : null}</td>
    </tr>
  )
}

export default MoneyBookList