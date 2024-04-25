import React from 'react'
import styles from '../styles/detail.module.css'
import { Field, Form, useForm } from '@/components/form'
import { ConfigProvider } from 'antd'
import FormSearch from '../components/FormSearch'
import Image from 'next/image'
import star from '@/utils/star'
import {
  StarFill,
  StarHalf,
  Park,
  Bath,
  Drink,
  Gym,
  More,
  Wifi,
} from '@/components/icons'

interface Props {
  id?: string | string[] | undefined | number
  focusField: boolean
  setFocusField: Function
}

const mock_data = [
  {
    name: 'Deluxe Room',
    price: 1500,
    id: 2,
    url_image: '/images/hotel.png'
  },
  {
    name: 'Standard Room',
    price: 1000,
    id: 1,
    url_image: '/images/hotel.png'
  },
]

const detail: React.FC<Props> = (props) => {
  const { focusField, setFocusField, id } = props

  return (
    <div className={styles.container}>
      <div style={{ width: '95%' }}>
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
      </div>
      <br />
      <div>
        <FormSearch
          focusField={focusField}
          setFocusField={setFocusField} />
      </div>
      <div className={styles.layout_detail}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div className={styles.layout_detail_image}>
            <div style={{ gridColumn: 'span 3', gridRow: 'span 3' }}>
              <Image
                src="/images/detail_1.png"
                alt="1"
                width={680}
                height={448}
                style={{ height: '100%', width: '100%' }}
              />
            </div>
            <div style={{ gridColumn: 'span 2', gridRow: 'span 2' }}>
              <Image
                src="/images/detail_2.png"
                alt="2"
                width={408}
                height={285}
                style={{ height: '100%', width: '100%' }}
              />
            </div>
            <div >
              <Image
                src="/images/detail_3.png"
                alt="2"
                width={408}
                height={285}
                style={{ height: '100%', width: '100%' }}
              />
            </div>
            <div >
              <Image
                src="/images/detail_4.png"
                alt="2"
                width={408}
                height={285}
                style={{ height: '100%', width: '100%' }}
              />
            </div>
          </div>
          <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center', marginTop: '1.5rem' }}>
            <div>
              <div style={{ fontSize: '26px', fontFamily: 'Poppins-SemiBold' }}>Holiday Inn Resort</div>
              <div style={{ color: '#B7BCF3', fontSize: '16px' }}>Mobor,Cavelossim,Goa</div>
            </div>
            <div style={{ width: '250px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', border: '1px solid #2D3DDF', color: '#2D3DDF', borderRadius: '4px' }}>Price Starting from 1,000 BAHT</div>
          </div>
          <div style={{display:'flex',gap:'10px',marginTop:'20px'}}>
            {mock_data?.map((item: any, index: number) => {
              return (
                <div key={index} className={styles.card_recent_layout}>
                  <div style={{ width: '150px', height: '144px', position: 'relative' }}>
                    <Image
                      alt={item.id}
                      // width={200}
                      // height={173}
                      // layout='fill'
                      // objectFit='contain'
                      src={item.url_image}
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
                      <div style={{ display: 'flex', alignItems: 'center', marginTop: '7px' }}>
                        <div className={styles.rating}>
                          <StarFill fill="#FFFFFF" />
                          {item.rate}
                        </div>
                      </div>
                      <div className={styles.price}>{`${item?.price?.toLocaleString()}/night`}</div>
                    </div>
                    <div className={styles.book_now_text}>
                      Book Now
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', flexDirection: 'column', width: '80%', marginLeft: '3rem', boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px', padding: '20px', borderRadius: '12px', height: 'fit-content', marginTop: '15px' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start' }}>
              <div style={{ width: '50px', height: '50px', background: '#2D3DDF', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', borderRadius: '14px' }}>8.4</div>
              <div style={{ marginLeft: '15px', marginBottom: '20px' }}>
                <div style={{ fontFamily: 'Poppins-SemiBold', fontSize: '18px' }}>Excellent</div>
                <div style={{ color: '#B7BCF3', fontSize: '14px' }}>1231 Reviews</div>
              </div>
            </div>
            <div style={{ marginLeft: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', width: '60%' }}>
                <div>Housekeeping</div>
                <div style={{ display: 'flex', gap: '3px' }}>{star(4)}</div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', width: '60%' }}>
                <div>Food</div>
                <div style={{ display: 'flex', gap: '3px' }}>{star(4.5)}</div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', width: '60%' }}>
                <div>Service</div>
                <div style={{ display: 'flex', gap: '3px' }}>{star(4)}</div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', width: '60%' }}>
                <div>Staff</div>
                <div style={{ display: 'flex', gap: '3px' }}>{star(4)}</div>
              </div>
            </div>
            <br />
            <div>
              <div>Service</div>
              <div>
                <div style={{ display: 'flex', gap: '8px', marginBottom: '7px', marginTop: '7px' }}>
                  <div className={styles.amenities_box}>
                    <Park />
                  </div>
                  <div className={styles.amenities_box}>
                    <Bath />
                  </div>
                  <div className={styles.amenities_box}>
                    <Drink />
                  </div>
                  <div className={styles.amenities_box}>
                    <Wifi />
                  </div>
                  <div className={styles.amenities_box}>
                    <Gym />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ color:'#2D3DDF',marginLeft: '3rem', fontSize: '16px', marginTop: '1rem' }}>This property is in highly demand today.</div>
        </div>
      </div>
    </div>
  )
}

export default React.memo<Props>(detail)
