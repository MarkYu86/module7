import React from 'react'
import { useData } from '../hooks/useData'

export default function TestComponent() {
const data = useData('https://fakestoreapi.com/products')

//Very important to turn off strict mode for this to work!

  return (
    <div>        <ul>
    {data?.map((item) => (
      <li key={item.id}>{item.title}</li>
    ))}
  </ul></div>
  )
}