import React, { useState } from 'react'
import styles from '../styles/payment.module.css'
import Image from 'next/image'
import { RightOutlined } from '@ant-design/icons'
import formatNumber from '@/utils/format/formatNumber'
import { useRouter } from 'next/router'
interface Props {

}

const mock_data_amount = {
  base_fare: 1000,
  total_discount: 0,
  after_discount: 1000,
  tax: 140,
  total: 1140
}

const index: React.FC<Props> = (props) => {
  const { } = props
  const [payment, setPayment] = useState<string | null>(null)
  const { push } = useRouter()

  return (
    <div className={styles.layout}>
      <div>
        <div style={{ fontFamily: 'Poppins-SemiBold', fontSize: '24px' }}>Payment Details</div>
        <div className={styles.payment_method}>
          <div onClick={() => setPayment('Debit Card')} className={`payment_item ${payment === 'Debit Card' ? 'active' : ''}`}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <Image
                alt='Debit Card'
                width={59}
                height={59}
                // layout='fill'
                // objectFit='contain'
                src={'/images/debit_card.png'}
              />
              <div>Debit Card</div>
            </div>
            {payment === 'Debit Card' &&
              <div className='arrow'>
                <RightOutlined onClick={() => { push(`/success`) }}  style={{ color: '#2D3DDF' }} />
              </div>
            }
          </div>
          <div onClick={() => setPayment('UPI')} className={`payment_item ${payment === 'UPI' ? 'active' : ''}`}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <Image
                alt='UPI'
                width={59}
                height={59}
                // layout='fill'
                // objectFit='contain'
                src={'/images/UPI.png'}
              />
              <div>UPI</div>
            </div>
            {payment === 'UPI' &&
              <div className='arrow'>
                <RightOutlined onClick={() => { push(`/success`) }}  style={{ color: '#2D3DDF' }} />
              </div>
            }
          </div>
          <div onClick={() => setPayment('PhonePay')} className={`payment_item ${payment === 'PhonePay' ? 'active' : ''}`}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <Image
                alt='PhonePay'
                width={59}
                height={59}
                // layout='fill'
                // objectFit='contain'
                src={'/images/phone_pay.png'}
              />
              <div>PhonePay</div>
            </div>
            {payment === 'PhonePay' &&
              <div className='arrow'>
                <RightOutlined onClick={() => { push(`/success`) }}  style={{ color: '#2D3DDF' }} />
              </div>
            }
          </div>
          <div onClick={() => setPayment('Net Banking')} className={`payment_item ${payment === 'Net Banking' ? 'active' : ''}`}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <Image
                alt='Net Banking'
                width={59}
                height={59}
                // layout='fill'
                // objectFit='contain'
                src={'/images/net_banking.png'}
              />
              <div>Net Banking</div>
            </div>
            {payment === 'Net Banking' &&
              <div className='arrow'>
                <RightOutlined onClick={() => { push(`/success`) }}  style={{ color: '#2D3DDF' }} />
              </div>
            }
          </div>
          <div onClick={() => setPayment('Credit Card')} className={`payment_item ${payment === 'Credit Card' ? 'active' : ''}`}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <Image
                alt='Credit Card'
                width={59}
                height={59}
                // layout='fill'
                // objectFit='contain'
                src={'/images/credit_card.png'}
              />
              <div>Credit Card</div>
            </div>
            {payment === 'Credit Card' &&
              <div className='arrow'>
                <RightOutlined onClick={() => { push(`/success`) }}  style={{ color: '#2D3DDF' }} />
              </div>
            }
          </div>
        </div>
      </div>
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
          <div>{formatNumber(mock_data_amount.total, 2)}</div>
        </div>
      </div>
    </div >
  )
}

export default React.memo<Props>(index)
