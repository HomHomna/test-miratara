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
            <div style={{ width: '200px', height: '173px', position: 'relative' }}>
              <Image
                alt={item.name}
                // width={200}
                // height={173}
                // layout='fill'
                // objectFit='contain'
                src={item.image_url}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: '100%',borderRadius:'10px' }}
              />
            </div>
          </div>
        )
      })}
    </>
  )
}

export default React.memo<Props>(Recent)
