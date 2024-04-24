import React, { useCallback, useContext, useMemo } from 'react';
import { Input } from 'antd';
import { FormContext } from '@olapat/react-useform';
import {
  getValues,
  getRequired,
  getDisabled,
  getError,
  getOnChange,
} from '@olapat/react-useform/dist/utils/field';
import styles from '@/styles/components/form/Field.module.css';
import { useRouter } from 'next/router';
import { getErrorWithLocalKey } from './utils'
import { CommonProps } from './props'
import { InputProps } from 'antd/lib/input';

type Props = InputProps & CommonProps & {
  name: string
  notThai?: boolean
}

const InputPassword = (props: Props) => {
  const {
    name,
    label,
    value,
    required,
    error,
    disabled,
    onChange,
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
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const funChange = getOnChange(formContext, onChange);
      const value = event?.target?.value || '';
      funChange(name, value);
    },
    [formContext, name, onChange]
  );

  return (
    <div className={`${styles.container} ${_error ? 'a-error' : ''}`}>
      {!!label && (
        <label className={`${styles.label}`} htmlFor={name} title={label as string}>
          {!!_required && <span className={`${styles.star}`}>*&nbsp;</span>}
          {label}
        </label>
      )}
      <div>
        <Input.Password
          name={name}
          value={_value}
          disabled={_disabled}
          onChange={_onChange}
          size="large"
          {...propsInput}
        />
      </div>
      {!!_errorWithLocal &&
        <span className={`${styles.error}`}>{_errorWithLocal}</span>
      }
    </div>
  );
};

export default InputPassword;