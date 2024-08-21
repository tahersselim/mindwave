import React from 'react'
import Styles from './page.module.css'
import { items } from './data'
import { notFound } from 'next/navigation'

const getData = (cat)=>{
  const data = items[cat]
  if (data) {
    return data
  }
  return notFound
}


const Category = ({params}) => {
  const data = getData(params.category)
  return (
    <div>
      category
      
    </div>
  )
}

export default Category
