import React, { useCallback, useContext, useMemo } from 'react'
import { Form, Input } from 'antd'
import { FormContext } from '@olapat/react-useform'
import {
  getValues,
  getRequired,
  getDisabled,
  getError,
  getOnChange,
} from '@olapat/react-useform/dist/utils/field'
import PropTypes from 'prop-types'
import styles from '@/styles/components/form/Field.module.css'
import { useRouter } from 'next/router'
import { getErrorWithLocalKey } from './utils'
import { CommonProps } from './props'
import { InputProps } from 'antd/lib/input';

interface Props extends Omit<InputProps, 'name' | 'onChange' | 'required'>, CommonProps {
  name: string
  notThai?: boolean
  onChange?: (name: string, value: any) => void
}

const TextInput = (props: Props) => {
  const {
    name,
    label,
    value,
    required,
    error,
    disabled,
    onChange,
    maxLength,
    notThai,
    ...propsInput
  } = props
  const { locale } = useRouter()
  const formContext = useContext(FormContext)

  const _value = useMemo(() => {
    return getValues(formContext, name, value)
  }, [formContext, name, value])

  const _required = useMemo(() => {
    return getRequired(formContext, name, required)
  }, [formContext, name, required])

  const _error = useMemo(() => {
    return getError(formContext, name, error)
  }, [formContext, name, error])

  const _errorWithLocal = useMemo(() => {
    return getErrorWithLocalKey(formContext, name, error)
  }, [formContext, name, error])

  const _disabled = useMemo(() => {
    return getDisabled(formContext, name, disabled)
  }, [formContext, name, disabled])

  const _onChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      let value
      const funChange = getOnChange(formContext, onChange)

      if (notThai) {
        let regex = /([ก-๙\s])/g
        if (!regex.test(event?.target?.value)) {
          value = event?.target?.value || ''
          funChange(name, value)
        }
      } else {
        value = event?.target?.value || ''
        funChange(name, value)
      }
    },
    [formContext, name, onChange, notThai]
  )

  return (
    <div className={`${styles.container} ${_error ? 'a-error' : ''}`}>
      {!!label && (
        <label className={`${styles.label}`} htmlFor={name} title={label as string}>
          {!!_required && <span className={`${styles.star}`}>{label !== " " ? <>*&nbsp;</> : <>&nbsp;</>}</span>}
          {label}
        </label>
      )}
      <Input
        name={name}
        value={_value}
        disabled={_disabled}
        onChange={_onChange}
        size="large"
        maxLength={maxLength || 255}
        {...propsInput}
      />
      {!!_errorWithLocal &&
        <span className={`${styles.error}`}>{_errorWithLocal}</span>
      }
    </div>
  )
}

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  value: PropTypes.any,
  required: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.func,
  ]),
  disabled: PropTypes.bool,
  type: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  hasStar: PropTypes.bool
}

export default TextInput
