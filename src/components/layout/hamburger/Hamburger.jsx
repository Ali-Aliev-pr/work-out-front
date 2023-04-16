import React, { useState } from 'react'
import styles from './Hamburger.module.scss'
import {CgMenuRight} from 'react-icons/cg'
import {IoClose} from 'react-icons/io5'
import Menu from './Menu'

const Hamburger = () => {

  const [isShow, setIsShow] = useState(false)

  return (
    <div className={styles.wrapper}>
      <button onClick={() => setIsShow(!isShow)}>
        {isShow ? <IoClose /> : <CgMenuRight />}
      </button>
      <Menu isShow={isShow} />
    </div>
  )
}

export default Hamburger 