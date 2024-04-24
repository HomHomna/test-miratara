import React, { useCallback } from 'react'
import styles from '@/styles/components/Layout/Sidebar.module.css'
import Link from 'next/link'
import { Logo, Home, Search, User, Heart } from '../icons'

interface Props {
  menuActive: string | null
  setMenu: Function
}

interface menuObj {
  icon: string;
  label: string;
  path: string;
}

const menu = [
  {
    icon: 'Home',
    label: "Home",
    path: "/home"
  },
  {
    icon: 'Search',
    label: "Explore",
    path: "/explore"
  },
  {
    icon: 'Heart',
    label: "Trips",
    path: "/trips"
  },
  {
    icon: 'User',
    label: "Profile",
    path: "/profile"
  },
]

const mappingTransaction = {
  Home,
  Search,
  Heart,
  User,
}

const Sidebar: React.FC<Props> = (props) => {
  const { menuActive, setMenu } = props

  const Icon = useCallback((iconName: keyof typeof mappingTransaction, { ...props }) => {
    const IconResult = mappingTransaction[iconName]
    return <IconResult {...props} />
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.logo_sidebar}>
          <Logo width='30px' height='34px' />
        </div>
        <div className={styles.menu_content}>
          {
            menu?.map((item: menuObj, index: number) => {
              return (
                <Link legacyBehavior href={item.path} key={index}>
                  <div className={menuActive === item?.label ? styles.menu_item_active : styles.menu_item} onClick={() => { setMenu(item.label) }}>
                    {Icon(item.icon as keyof typeof mappingTransaction, {
                      fill: menuActive === item?.label ? '#2D3DDF' : undefined
                    }
                    )}
                    <div style={{ color: menuActive === item?.label ? '#2D3DDF' : 'white' }}>{item?.label}</div>
                  </div>
                </Link>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default React.memo<Props>(Sidebar)
