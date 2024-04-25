import React from 'react'
import { Field, Form, useForm } from '@/components/form'
import styles from '../styles/screen.module.css'
import { ConfigProvider, Button } from 'antd'
import SearchSection from '../components/SearchSection'
import Image from 'next/image'

interface Props {
  focusField: boolean
  setFocusField: Function
}

const index: React.FC<Props> = (props) => {
  const { focusField, setFocusField } = props

  return (
    <div className={styles.container}>
      <div className={styles.left_content}>
        <ConfigProvider
          theme={{
            token: {
              colorBgContainer: '#EBEDFF',
            },
            // components: {
            //   Input: {
            //     activeBg:'#FC2121'
            //   },
            // },
          }}
        >
          <Field.Input
            name='country'
            style={{ boxShadow: 'rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px' }}
            placeholder='Search city , Country, Place for Travel advisory'
          />
        </ConfigProvider>
        <SearchSection focusField={focusField} setFocusField={setFocusField} />
      </div>
      <div style={{ width: '100%', height: '100%', position: 'relative' }} className={styles.image}>
        <Image
          alt={'taj'}
          // width={200}
          // height={173}
          // layout='fill'
          // objectFit='contain'
          src={`/images/filter_blue.png`}
          // src={`/images/taj_mahal.png`}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: '100%', borderRadius: '4px' }}
        />
        <div style={{ position: 'absolute', color: 'white', zIndex: 20, bottom: '50%', fontSize: '60px', fontFamily: 'Poppins-SemiBold', left: '3rem' }}>Incredible India</div>
        <div style={{ position: 'absolute', color: 'white', zIndex: 20, bottom: '40%', fontSize: '30px', fontFamily: 'Poppins-SemiBold', left: '3rem' }}>“For where thy treasure is,
          there also will thy heart be.”</div>
        <ConfigProvider
          theme={{
            components: {
              Button: {
                defaultActiveBg:'#ffffff4d'
              },
            },
          }}
        >
          <Button type='default' style={{ width: '170px', height: '60px', position: 'absolute', color: '#2D3DDF', zIndex: 20, bottom: '10%', left: '3rem',fontFamily: 'Poppins-SemiBold' }}>Take Tour</Button>
        </ConfigProvider>
      </div>
    </div>
  )
}

export default React.memo<Props>(index)
