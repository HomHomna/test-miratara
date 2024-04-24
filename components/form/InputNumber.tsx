import React, { useCallback, useContext, useMemo } from 'react';
import { FormContext } from '@olapat/react-useform';
import {
  getValues,
  getRequired,
  getDisabled,
  getError,
  getOnChange,
} from '@olapat/react-useform/dist/utils/field';
import { NumberFormatValues, NumericFormat, NumericFormatProps } from 'react-number-format';
import stylesNumber from '@/styles/components/form/Input.module.css';
import styles from '@/styles/components/form/Field.module.css';
import { useRouter } from 'next/router';
import { getErrorWithLocalKey } from './utils'
import { CommonProps } from './props'
import { Input } from 'antd'

type Props = NumericFormatProps & CommonProps & {
  name: string
  onlyNumber?: boolean
  allowInteger?: number
  unit?: string
}

const InputNumber = (props: Props) => {
  const {
    name,
    label,
    value,
    required,
    error,
    disabled,
    onChange,
    id,
    onlyNumber,
    allowInteger,
    isAllowed,
    unit,
    suffix,
    className,
    styleField,
    ...propsInput
  } = props;
  const { locale } = useRouter();
  const formContext = useContext(FormContext);

  const _value = useMemo(() => {
    return getValues(formContext, name, value);
  }, [formContext, name, value]);

  const _required = useMemo(() => {
    return getRequired(formContext, name, required);
  }, [formContext, name, required]);

  const _error = useMemo(() => {
    return getError(formContext, name, error);
  }, [formContext, name, error]);

  const _errorWithLocal = useMemo(() => {
    return getErrorWithLocalKey(formContext, name, error);
  }, [formContext, name, error]);

  const _disabled = useMemo(() => {
    return getDisabled(formContext, name, disabled);
  }, [formContext, name, disabled]);

  const _onChange = useCallback(
    (event: NumberFormatValues) => {
      const funChange = getOnChange(formContext, onChange);
      const value = event.value;
      funChange(name, value);
    },
    [formContext, name, onChange]
  );

  const isAllowedFunc = useCallback(
    (val: NumberFormatValues) => {
      const { floatValue, value } = val;
      const floatValueN = floatValue ? floatValue : 0
      if (typeof isAllowed === 'function') {
        return isAllowed(val);
      } else if (typeof allowInteger !== 'undefined' && allowInteger !== null) {
        return (floatValueN >= 0 && floatValueN <= allowInteger) || value === '';
      } else if (onlyNumber) {
        return /^\d+$/g.test(value) || value === '';
      } else if (unit === '%') {
        return (floatValueN >= 0 && floatValueN <= 100) || value === '';
      } else {
        return true;
      }
    },
    [isAllowed, allowInteger, unit, onlyNumber]
  );

  return (
    <div className={`${styles.container} ${_error ? 'a-error' : ''}`}>
      {!!label && (
        <label className={`${styles.label}`} htmlFor={name} title={label as string}>
          {!!_required && <span className={`${styles.star}`}>*&nbsp;</span>}
          {label}
        </label>
      )}
      <div className={`${stylesNumber.container}`}>
        <NumericFormat
          onValueChange={_onChange}
          isAllowed={isAllowedFunc}
          name={name}
          id={id || name}
          disabled={_disabled}
          value={_value}
          thousandSeparator
          maxLength={propsInput.maxLength || 255}
          {...propsInput}
          // customInput={(a: any) => {
          //   return <Input className={'ant-input ant-input-lg ant-input-outlined' + className} onChange={a.onChange} value={a['value']} />
          // }}
          className={`ant-input ant-input-lg ant-input-outlined ${className || ''}`}
          onChange={undefined}
        />
        {unit && (
          <label htmlFor={id || name} className={`${stylesNumber.unit}`}>
            {unit}
          </label>
        )}
        {suffix && (
          <label htmlFor={id || name} className={`${stylesNumber.suffix}`}>
            {suffix}
          </label>
        )}
      </div>
      <span className={`${styles.error}`}>{_errorWithLocal}</span>
    </div>
  );
};

export default InputNumber;
