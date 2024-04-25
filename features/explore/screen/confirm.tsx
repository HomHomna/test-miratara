import React from 'react'
import { Field, Form, useForm, useFormList } from '@/components/form'
import { Button, ConfigProvider } from 'antd'
import FormSearch from '../components/FormSearch'
import styles from '../styles/confirm.module.css'
import star from '@/utils/star'
import Image from 'next/image'
import formatNumber from '@/utils/format/formatNumber'
import { useRouter } from 'next/router'

interface Props {
  focusField: boolean
  setFocusField: Function
}

interface UserData {
  firstName: null | string;
  lastName: null | string;
  email: null | string;
  mobile: null | string;
}

const initValuesList = {
  values: {
    firstName: null,
    lastName: null,
    email: null,
    mobile: null
  },
  rules: {
  },
  errors: {}
}

const mock_data_amount = {
  base_fare: 1000,
  total_discount: 0,
  after_discount: 1000,
  tax: 140,
  total: 1140
}

const confirm: React.FC<Props> = (props) => {
  const { focusField, setFocusField } = props
  const { push } = useRouter()
  const form = useFormList<UserData>({
    initialValues: {
      firstName: null,
      lastName: null,
      email: null,
      mobile: null
    },
    rules: {}
  },
    {
      initialValues: [
        {
          values: {
            nameInstitution: '',
            creditLimit: '',
          },
          rules: {
            // product_name: {
            //   required: 'Please input Product name'
            // },
            // amount: {
            //   required: 'Please input amount'
            // },
          },
          errors: {}
        }
      ]
    })

  const { listCtl, values } = form

  const handlerSubmit = (values: any) => {
    push('/payment')
  }

  return (
    <div>
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
      <div className={styles.layout}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center', marginTop: '25px' }}>
            <div>
              <div style={{ fontSize: '22px', fontFamily: 'Poppins-SemiBold' }}>Review your booking</div>
              <div style={{ display: 'flex', alignItems: 'center', fontSize: '20px', color: '#2D3DDF', fontFamily: 'Poppins-SemiBold' }}>Holiday In Resort <div style={{ display: 'flex', gap: '3px', marginLeft: '10px' }}>{star(4)}</div></div>
              <div style={{ color: '#00000080' }}>Tambudki, Arpora, goa, Goa, India</div>
              <div style={{ color: '#00000080' }}>This hotel is reviewed by global firm</div>
            </div>
            <div style={{ width: '231px', height: '105px', position: 'relative' }}>
              <Image
                alt={'id'}
                // width={200}
                // height={173}
                // layout='fill'
                // objectFit='contain'
                src={`/images/hotel_confirm.png`}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: '100%', borderRadius: '4px' }}
              />
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#F4F7FF', padding: '1rem', borderRadius: '15px', marginTop: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '350px' }}>
              <div>
                <div style={{ fontSize: '14px', color: '#00000080' }}>Check-in</div>
                <div style={{ fontSize: '18px', fontFamily: 'Poppins-SemiBold' }}>Sunday 21, Dec</div>
                <div style={{ fontSize: '16px', color: '#00000080' }}>10am</div>
              </div>
              <div style={{ color: '#2D3DDF', width: '129px', height: '48px', background: '#B7BCF3', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>1 night</div>
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '350px' }}>
                <div>
                  <div style={{ fontSize: '14px', color: '#00000080' }}>Check-out</div>
                  <div style={{ fontSize: '18px', fontFamily: 'Poppins-SemiBold' }}>Sunday 22, Dec</div>
                  <div style={{ fontSize: '16px', color: '#00000080' }}>10am</div>
                </div>
                <div style={{ fontSize: '18px', fontFamily: 'Poppins-SemiBold' }}>2 Adult - 1 room</div>
              </div>
            </div>
          </div>
          <div>
            <div>Guest Details</div>
            <br />
            <Form form={form} handlerSubmit={handlerSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,50%)', gap: '10px' }}>
                <Field.Input
                  name="firstName"
                  placeholder='First Name'
                />
                <Field.Input
                  name="lastName"
                  placeholder='Last Name'
                />
                <Field.Input
                  name="email"
                  placeholder='Email Address'
                />
                <Field.Input
                  name="mobile"
                  placeholder='Mobile Number'
                />
              </div>
              <Button
                onClick={() => listCtl.addListItem(initValuesList)}
                type='link'
              >
                Add Guest +
              </Button>
              {listCtl.values.map((item: any, index: number) => (
                <>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,50%)', gap: '10px' }}>
                    <Field.Input
                      name="firstName"
                      placeholder='First Name'
                    />
                    <Field.Input
                      name="lastName"
                      placeholder='Last Name'
                    />
                    <Field.Input
                      name="email"
                      placeholder='Email Address'
                    />
                    <Field.Input
                      name="mobile"
                      placeholder='Mobile Number'
                    />
                    <Button
                      onClick={() => listCtl.removeListItem(index)}
                      type='link'
                      style={{ display: 'flex', justifyContent: 'flex-start' }}
                    >
                      Remove
                    </Button>
                  </div>
                </>
              ))}
              <Field.TextArea
                name='request'
                label={"Special Request(optional)"}
              />
              <br /><br />
              <Button style={{ width: '250px', height: '50px', fontSize: '18px' }} type='primary' htmlType='submit'>Continue</Button>
            </Form>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div className={styles.card_total}>
            <div className={styles.space_between}>
              <div>Base fare</div>
              <div style={{ color: '#2d3ddf80' }}>{formatNumber(mock_data_amount.base_fare, 2)}</div>
            </div>
            <div className={styles.space_between}>
              <div>Total discount</div>
              <div style={{ color: '#2d3ddf80' }}>{formatNumber(mock_data_amount.total_discount, 2)}</div>
            </div>
            <div className={styles.space_between}>
              <div>Price after discount</div>
              <div style={{ color: '#2d3ddf80' }}>{formatNumber(mock_data_amount.after_discount, 2)}</div>
            </div>
            <div className={styles.space_between}>
              <div>Taxes & service fees</div>
              <div style={{ color: '#2d3ddf80' }}>{formatNumber(mock_data_amount.tax, 2)}</div>
            </div>
            <div className={`${styles.space_between} ${styles.total}`}>
              <div>Total Amount</div>
              <div style={{ color: '#2D3DDF' }}>{formatNumber(mock_data_amount.total, 2)}</div>
            </div>
          </div>
          <div style={{ marginLeft: '3rem', width: '100%', padding: '1rem', boxShadow: " rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px" }}>
            <div style={{ fontSize: '16px', fontFamily: 'Poppins-SemiBold' }}>
              Cancellation Charges
            </div>
            <div style={{ fontSize: '14px', fontFamily: 'Poppins-SemiBold' }}>
              Non Refundable
            </div>
            <br />
            <div style={{ fontSize: '14px', color: '#00000080' }}>
              Penalty may be charged by the airline & by MMT based on how close to departure date you cancel. View fare rules to know more.
            </div>
            <br />
            <div style={{ fontSize: '15px', color: '#00000080' }}>
              VIEW POLICY
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo<Props>(confirm)
