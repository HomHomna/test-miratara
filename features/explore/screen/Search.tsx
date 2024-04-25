import React from 'react'
import { Field, Form, useForm } from '@/components/form'
import { ConfigProvider } from 'antd'
import styles from '../styles/search_screen.module.css'
import CardSearch from '../components/CardSearch'
import Recomanded from '../components/Recomanded'
import { Button } from 'antd'

interface Props {

}

const mock_data_search = [
  {
    id: 1,
    url_image: '/images/hotel_search_1.png',
    name: 'Hotel 1',
    price_start: 1000
  },
  {
    id: 2,
    url_image: '/images/hotel_search_2.png',
    name: 'Hotel 2',
    price_start: 1000
  },
  {
    id: 3,
    url_image: '/images/hotel_search_3.png',
    name: 'Hotel 3',
    price_start: 1000
  },
  {
    id: 4,
    url_image: '/images/hotel_search_4.png',
    name: 'Hotel 4',
    price_start: 1000
  },
  {
    id: 5,
    url_image: '/images/hotel_search_5.png',
    name: 'Hotel 5',
    price_start: 1000
  },
  {
    id: 6,
    url_image: '/images/hotel_search_6.png',
    name: 'Hotel 6',
    price_start: 1000
  },
  {
    id: 7,
    url_image: '/images/hotel_search_1.png',
    name: 'Hotel 7',
    price_start: 1000
  },
  {
    id: 8,
    url_image: '/images/hotel_search_2.png',
    name: 'Hotel 8',
    price_start: 1000
  },
  {
    id: 9,
    url_image: '/images/hotel_search_3.png',
    name: 'Hotel 9',
    price_start: 1000
  },
]

const data_mock_recomanded = [
  {
    id: 1,
    url_image: '/images/recomanded_1.png',
    description: 'Trip to Thailand &Get 30% off on flight booking'
  },
  {
    id: 2,
    url_image: '/images/recomanded_2.png',
    description: 'Get additional 25% off onBhutan tour fare'
  },
  {
    id: 3,
    url_image: '/images/recomanded_3.png',
    description: 'Trip to Thailand &Get 30% off on flight booking'
  },
  {
    id: 4,
    url_image: '/images/recomanded_4.png',
    description: 'Flat 40% off on hotel bookings in Agra'
  },
  {
    id: 5,
    url_image: '/images/recomanded_5.png',
    description: 'Trip to Thailand &Get 30% off on flight booking'
  },
]

const Search: React.FC<Props> = (props) => {
  const { } = props

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
        <div  style={{display:'flex', justifyContent:'space-between',alignItems:'center',marginTop:'10px'}}>
          <div>Best places to enjoy your stay</div>
          <div>
            <div style={{display:'flex'}}>
              <Button style={{ color: '#2D3DDF', width: '70px', height: '45px', marginRight: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Sort By</Button>
              <Button style={{ color: '#2D3DDF', width: '70px', height: '45px', marginRight: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Filter</Button>
            </div>
          </div>
        </div>
        <br />
        <CardSearch data={mock_data_search || []} />
      </div>
      <div className={styles.right_content}>
        <div style={{ marginBottom: '1rem', fontFamily: 'Poppins-SemiBold' }}>Recomanded</div>
        <Recomanded data={data_mock_recomanded} />
      </div>
    </div>
  )
}

export default React.memo<Props>(Search)
