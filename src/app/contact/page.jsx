import Image from 'next/image'
import Styles from './page.module.css'
import React from 'react'

const Contact = () => {
  return (
    <div className={Styles.contact}>
          <Image src="/maintenance.jpg" width={1100} height={500}/>
    </div>
  )
}

export default Contact
