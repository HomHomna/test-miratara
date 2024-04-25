import React, { useState, useCallback } from 'react'
import { Field, Form, useForm } from '@/components/form'
import styles from '../styles/screen.module.css'
import { Hotel, Flight, Car, PinLocate } from '@/components/icons'
import { Button, ConfigProvider } from 'antd'
import Recent from './Recent'

interface Props {
  focusField: boolean
  setFocusField: Function
}

interface typeSelectObj {
  icon: any;
  label: string;
  key: string;
}

const type_select = [
  {
    label: 'Hotel',
    icon: 'Hotel',
    key: 'hotel'
  },
  {
    label: 'Flight',
    icon: 'Flight',
    key: 'flight'
  },
  {
    label: 'Car',
    icon: 'Car',
    key: 'car'
  },
]

const mappingTransaction = {
  Hotel, Flight, Car
}

const mock_data_api_location = [
  {
    id: 1,
    location: 'Pattaya',
  },
  {
    id: 2,
    location: 'Bangkok',
  },
  {
    id: 3,
    location: 'Chiang mai',
  },
  {
    id: 4,
    location: 'Phuket',
  },
  //other data ...
]

const mock_data_api_recent = [
  {
    name: 'Hotel JW Marriott',
    amenities: ['Park', 'Bath', 'Drink', 'Gym', 'More'],
    rate: 4.9,
    review: 1366,
    per_night: 1000,
    image_url: '/images/hotel1.png',
    id: 1
  },
  {
    name: 'Hotel JW Marriott 2',
    amenities: ['Park', 'Bath', 'Drink', 'Gym', 'More'],
    rate: 4.9,
    review: 1366,
    per_night: 1000,
    image_url: '/images/hotel2.jpeg',
    id: 2
  },
]

const SearchSection: React.FC<Props> = (props) => {
  const { focusField, setFocusField } = props
  const [typeSelect, setTypeSelect] = useState<string>('hotel')

  const form = useForm({
    initialValues: {
      location: null,
      adult: 1,
      children: 1,
      room: 1,
    },
    rules: {}
  })

  const { values, handlerChange } = form

  const Icon = useCallback((iconName: keyof typeof mappingTransaction, { ...props }) => {
    const IconResult = mappingTransaction[iconName]
    return <IconResult {...props} />
  }, [])

  const handlerSubmit = (value: any) => {

  }

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    const elementId = event.target.id;
    if (elementId === 'field_number_stays') {
      setFocusField(true);
    } else {
      setFocusField(false);
    }
  };

  return (
    <div>
      <div className={styles.looking_for_text}>What Are You Looking For?</div>
      <div className={styles.type_select_layout}>
        {type_select?.map((item: typeSelectObj, index: number) => {
          return (
            <div key={index} className={styles.item_select}>
              <div onClick={() => { setTypeSelect(item.key) }} className={`${styles.type_select} ${typeSelect === item.key ? styles.select_active : null}`} >
                {Icon(item.icon as keyof typeof mappingTransaction, {
                  fill: typeSelect === item.key ? 'white' : undefined
                }
                )}
              </div>
              <div>{item.label}</div>
            </div>
          )
        })}
      </div>
      <br />
      <div >
        <Form form={form} handlerSubmit={handlerSubmit} className={styles.layout_field}>
          <Field.Select
            name='location'
            options={mock_data_api_location}
            optKeys={['id', 'location']}
            suffixIcon={null}
            prefix={<PinLocate />}
            placeholder='select'
            value={values?.location || null}
            style={{ height: '62px' }}
            allowClear
          />

          <Field.RangePicker
            name="date"
            separator={<div className={styles.line_vertical}></div>}
          />

          <div style={{ width: '100%', position: 'relative' }} id="number_stays" >
            <Field.Input
              name="number_stays"
              id='field_number_stays'
              readOnly={true}
              onFocus={handleFocus}
              // onBlur={() => {
              //   setFocusField(false)
              // }}
              style={{ height: '62px' }}
            />
            <div className={`field_number_stays ${focusField ? 'open' : ''}`}>
              <div className={styles.number_stays_layout}>
                <div>Adult</div>
                <div className={styles.layout_field_amount}>
                  <Button
                    type='text'
                    style={{ width: '100%', fontSize: '20px', height: '100%' }}
                    onClick={() => {
                      if (values?.adult <= 1) {
                        handlerChange((prev: any) => ({ ...prev, adult: 1 }))
                      } else {
                        handlerChange((prev: any) => ({ ...prev, adult: values?.adult - 1 }))
                      }
                    }}
                  >
                    -
                  </Button>
                  <Field.Input
                    name='adult'
                    readOnly={true}
                  />
                  <Button
                    type='text'
                    style={{ width: '100%', fontSize: '20px', height: '100%' }}
                    onClick={() => {
                      if (values?.adult >= 99) {
                        handlerChange((prev: any) => ({ ...prev, adult: 99 }))
                      } else {
                        handlerChange((prev: any) => ({ ...prev, adult: values?.adult + 1 }))
                      }
                    }}
                  >
                    +
                  </Button>
                </div>
                <div>Children</div>
                <div className={styles.layout_field_amount}>
                  <Button
                    type='text'
                    style={{ width: '100%', fontSize: '20px', height: '100%' }}
                    onClick={() => {
                      if (values?.children <= 1) {
                        handlerChange((prev: any) => ({ ...prev, children: 1 }))
                      } else {
                        handlerChange((prev: any) => ({ ...prev, children: values?.children - 1 }))
                      }
                    }}
                  >
                    -
                  </Button>
                  <Field.Input
                    name='children'
                    readOnly={true}
                  />
                  <Button
                    type='text'
                    style={{ width: '100%', fontSize: '20px', height: '100%' }}
                    onClick={() => {
                      if (values?.children >= 99) {
                        handlerChange((prev: any) => ({ ...prev, children: 99 }))
                      } else {
                        handlerChange((prev: any) => ({ ...prev, children: values?.children + 1 }))
                      }
                    }}
                  >
                    +
                  </Button>
                </div>
                <div>Room</div>
                <div className={styles.layout_field_amount}>
                  <Button
                    type='text'
                    style={{ width: '100%', fontSize: '20px', height: '100%' }}
                    onClick={() => {
                      if (values?.room <= 1) {
                        handlerChange((prev: any) => ({ ...prev, room: 1 }))
                      } else {
                        handlerChange((prev: any) => ({ ...prev, room: values?.room - 1 }))
                      }
                    }}
                  >
                    -
                  </Button>
                  <Field.Input
                    name='room'
                    readOnly={true}
                  />
                  <Button
                    type='text'
                    style={{ width: '100%', fontSize: '20px', height: '100%' }}
                    onClick={() => {
                      if (values?.room >= 99) {
                        handlerChange((prev: any) => ({ ...prev, room: 99 }))
                      } else {
                        handlerChange((prev: any) => ({ ...prev, room: values?.room + 1 }))
                      }
                    }}
                  >
                    +
                  </Button>
                </div>
              </div>
              <div className={styles.btn_number_stays}>
                <Button onClick={() => setFocusField(false)} type='primary'>Save</Button>
              </div>
            </div>

          </div>
          {/* <ConfigProvider
            theme={{
              components: {
                Button: {
                },
              },
            }}
          > */}
          <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
            <Button className={styles.btn_search} htmlType='submit' type='primary'>Search</Button>
          </div>
          {/* </ConfigProvider> */}
        </Form>
      </div>
      <Recent data={mock_data_api_recent || []} />
    </div>
  )
}

export default React.memo<Props>(SearchSection)
