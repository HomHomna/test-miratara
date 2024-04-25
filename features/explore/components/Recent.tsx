import React from 'react'
import { StarHalf } from '@/components/icons'
import styles from '../styles/screen.module.css'
import Image from 'next/image'

interface Props {
  data: any
}

const Recent: React.FC<Props> = (props) => {
  const { data } = props

  return (
    <>
      {data?.map((item: any, index: number) => {
        return (
          <div key={index} className={styles.card_recent_layout}>
            <div style={{ width: '100%', height: '100%', position: 'relative' }}>
              <Image
                alt={item.name}
                // width={200}
                // height={173}
                layout='fill'
                objectFit='contain'
                src={item.image_url}
              />
            </div>
          </div>
        )
      })}
    </>
  )
}

export default React.memo<Props>(Recent)
