import React from 'react'
import { Field, Form, useForm } from '@/components/form'
import { Hotel, Flight, Car, PinLocate, People, Calendar } from '@/components/icons'
import { Button } from 'antd'
import styles from '../styles/detail.module.css'

interface Props {
  focusField: boolean
  setFocusField: Function
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

const FormSearch: React.FC<Props> = (props) => {
  const { focusField, setFocusField } = props

  const form = useForm({
    initialValues: {
      location: null,
      date: [null, null],
      adult: 1,
      children: 1,
      room: 1,
    },
    rules: {}
  })

  const { values, handlerChange } = form

  const handlerSubmit = (values: any) => {

  }

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    const elementId = event.target.id;
    if (elementId === 'field_number_stays') {
      setFocusField(true);
    } else {
      setFocusField(false);
      handlerChange((prev: any) => ({
        ...prev,
        adult: values?.adult,
        children: values?.children,
        room: values?.room,
        number_stays: `${values?.adult} adult, ${values?.children} children, ${values?.room} room`
      }))
    }
  }

  return (
    <Form form={form} handlerSubmit={handlerSubmit}>
      <div className={styles.layout_search}>
        <Field.Select
          name='location'
          options={mock_data_api_location}
          optKeys={['id', 'location']}
          suffixIcon={null}
          // prefix={<PinLocate />}
          placeholder='Where are you going?'
          value={values?.location || null}
          style={{ height: '42px' }}
          allowClear
        />
        <Field.RangePicker
          name="date"
          separator={<div className={styles.line_vertical}></div>}
          suffixIcon={<Calendar />}
          format={'ddd,DD MMM-YYYY'}
        />
        <div style={{ width: '100%', position: 'relative' }} id="number_stays" >
          <Field.Input
            name="number_stays"
            id='field_number_stays'
            readOnly={true}
            onFocus={handleFocus}
            prefix={<People />}
            // onBlur={() => {
            //   setFocusField(false)
            // }}
            style={{ height: '42px' }}
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
              <Button onClick={() => {
                setFocusField(false)
                handlerChange((prev: any) => ({
                  ...prev,
                  adult: values?.adult,
                  children: values?.children,
                  room: values?.room,
                  number_stays: `${values?.adult} adult, ${values?.children} children, ${values?.room} room`
                }))
              }} type='primary'>Save</Button>
            </div>
          </div>

        </div>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end', alignItems: 'center',marginBottom:'6px' }}>
          <Button className={styles.btn_search} htmlType='submit' type='primary'>Search</Button>
        </div>
      </div>
    </Form>
  )
}

export default React.memo<Props>(FormSearch)
