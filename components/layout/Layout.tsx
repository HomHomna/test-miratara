import React from 'react'
import Sidebar from './Sidebar'
import styles from '@/styles/components/Layout/Layout.module.css'

interface Props {
  children?: React.ReactNode
  menu: string | null
  setMenu: Function
}

const Layout: React.FC<Props> = (props) => {
  const { menu, setMenu } = props

  return (
    <div className={styles.container}>
      <Sidebar
        menuActive={menu}
        setMenu={setMenu}
      />
      <div className={styles.content}>
        {props.children}
      </div>
    </div>
  )
}

export default React.memo<Props>(Layout)
