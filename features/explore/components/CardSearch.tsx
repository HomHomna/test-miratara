import React from 'react'
import styles from '../styles/search_screen.module.css'
import Image from 'next/image'
import { Button } from 'antd'
import { useRouter } from 'next/router'

interface Props {
  data: any
}

const CardSearch: React.FC<Props> = (props) => {
  const { data } = props
  const { push } = useRouter()

  return (
    <div className={styles.card_search_layout}>
      {data?.map((item: any) => {
        return (
          <div className={styles.card_search}>
            <Image
              alt={item.name}
              width={450}
              height={280}
              // layout='fill'
              // objectFit='contain'
              src={item.url_image}
              // width={0}
              // height={0}
              sizes="100vw"
              style={{
                width: '450px',
                // maxWidth: '450px',
                // height: '280px',
                borderRadius: '4px',
              }}
            />
            <div className={styles.layout_detail}>
              <div>
                <div className={styles.name}>
                  {item.name}
                </div>
                <div className={styles.price}>
                  {`Price starts from ${item?.price_start?.toLocaleString()}`}
                </div>
              </div>
              <div>
                <Button onClick={()=>{push(`/explore/detail/${item.id}`)}} style={{ color: '#2D3DDF', width: '184px', height: '52px', marginRight: '20px' }}>View Details</Button>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default React.memo<Props>(CardSearch)
