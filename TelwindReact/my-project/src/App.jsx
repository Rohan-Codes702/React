import { useState } from 'react'
import './App.css'
import Card from './components/card'

function Name() {
  return (
    <div className='flex flex-row gap-20 ml-40'>
      <Card username="Rohan" />
      <Card username="Amit" />
      <Card username="Priya" />
    </div>
  )
}

export default Name
