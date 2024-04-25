import React, { useCallback } from 'react'
import styles from '../styles/screen.module.css'
import Image from 'next/image'
import {
  StarFill,
  StarHalf,
  Park,
  Bath,
  Drink,
  Gym,
  More,
} from '@/components/icons'

interface Props {
  data: any
}

const mappingTransaction = {
  Park,
  Bath,
  Drink,
  Gym,
  More,
}

const Recent: React.FC<Props> = (props) => {
  const { data } = props

  const Icon = useCallback((iconName: keyof typeof mappingTransaction, { ...props }) => {
    const IconResult = mappingTransaction[iconName]
    return <IconResult {...props} />
  }, [])

  return (
    <div className={styles.card}>
      {data?.map((item: any, index: number) => {
        const numStars = Math.floor(item.rate)
        const hasHalfStar = item.rate - numStars >= 0.5

        const stars = Array.from({ length: numStars }, (_, index) => (
          <StarFill fill="#FFC362" />
        ))

        if (hasHalfStar) {
          stars.push(<StarHalf fill="#FFC362" />)
        }

        const emptyStars = Array.from({ length: 5 - stars.length }, (_, index) => (
          <StarFill fill="#727C8E" />
        ))

        const allStars = [...stars, ...emptyStars]

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
                style={{ width: '100%', height: '100%', borderRadius: '4px' }}
              />
            </div>
            {/* <div>
              
            </div> */}
            <div className={styles.card_detail}>
              <div className={styles.layout_detail}>
                <div style={{ fontFamily: 'Poppins-SemiBold' }}>{item.name}</div>
                <div className={styles.starts}>
                  {allStars}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', marginTop: '7px' }}>
                  <div className={styles.rating}>
                    <StarFill fill="#FFFFFF" />
                    {item.rate}
                  </div>
                  <div className={styles.review}>
                    {`${item.review} Reviews`}
                  </div>
                </div>
                <div style={{ fontSize: '14px', color: '#A8A8A8',marginTop:'7px' }}>Amenities</div>
                <div style={{ display: 'flex', gap: '8px',marginBottom:'7px',marginTop:'7px' }}>
                  {item.amenities?.map((icon: any) => {
                    return (
                      <div className={styles.amenities_box}>
                        {Icon(icon as keyof typeof mappingTransaction, {})}
                      </div>
                    )
                  })}
                </div>
                <div className={styles.price}>{`${item?.per_night?.toLocaleString()}/night`}</div>
              </div>
              <div className={styles.book_now_text}>
                Book Now
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default React.memo<Props>(Recent)
