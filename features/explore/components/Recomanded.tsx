import React from 'react'
import Image from 'next/image'
import styles from '../styles/search_screen.module.css'

interface Props {
  data: any
}

const Recomanded: React.FC<Props> = (props) => {
  const { data } = props

  return (
    <div className={styles.recomanded_layout}>
      {
        data?.map((item: any) => {
          return (
            <div>
              <Image
                alt={item.name}
                width={256}
                height={123}
                // layout='fill'
                // objectFit='contain'
                src={item.url_image}
                // width={0}
                // height={0}
                sizes="100vw"
                style={{
                  width: '256px',
                  // maxWidth: '450px',
                  // height: '280px',
                  borderRadius: '4px',
                }}
              />
              <div>
                {item?.description}
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default React.memo<Props>(Recomanded)
