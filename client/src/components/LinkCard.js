import React from 'react'

export const LinkCard = ({ link }) => {
  return (
    <>
      <h2>Силка</h2>
      <p>Ваша силка: <a href={link.to} target="_blank" rel="noopener norefferer">{link.to}</a></p>
      <p>Звідки: <a href={link.from} target="_blank" rel="noopener norefferer">{link.from}</a></p>

      <p>Кількість кліків по силці: <strong>{link.clicks}</strong></p>
      <p>Дата створення: <strong>{new Date(link.date).toLocaleDateString()}</strong> </p>
    </>
  )
}