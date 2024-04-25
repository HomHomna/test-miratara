import React from 'react'
import { Field, Form, useForm } from '@/components/form'
import styles from '../styles/screen.module.css'
import { ConfigProvider } from 'antd'
import SearchSection from '../components/SearchSection'

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
    </div>
  )
}

export default React.memo<Props>(index)
