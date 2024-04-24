import React, { memo } from 'react'
import styles from '@/styles/components/form/Field.module.css'

type Props = {
  children: React.ReactNode
  styleField?: React.CSSProperties
}

const FiledLayout = (props: Props) => {
  const { children, styleField } = props
  return (
    <div
      className={`${styles.container} `}
      style={styleField}
    >
      <label className={`${styles.label}`}>
        &nbsp;
      </label>
      {children}
    </div>
  )
}

FiledLayout.defaultProps = {
  labelAlign: 'left',
  styleField: {},
  styleLabel: {},
  noStar: false
}

export default memo(FiledLayout)
