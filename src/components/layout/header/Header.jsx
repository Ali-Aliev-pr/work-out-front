import React from 'react'
import { useAuth } from '../../../hooks/useAuth'
import styles from './Header.module.scss'
import {FiArrowLeft} from 'react-icons/fi'
import Hamburger from '../hamburger/Hamburger'

const Header = ({backLink}) => {

  const {isAuth} = useAuth()

  return (
    <header className={styles.header}>
      <button>
        <FiArrowLeft onClick={() => {console.log('Hello World!')}} />
      </button>
      <Hamburger /> 
    </header>
  )
}

export default Header