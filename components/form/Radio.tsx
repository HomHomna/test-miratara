import React, { useCallback, useContext, useMemo } from 'react';
import { Form, Radio as RadioAntd, RadioChangeEvent } from 'antd';
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
import { RadioGroupProps } from 'antd/lib/radio';

type Props = Omit<RadioGroupProps, 'name' | 'options' | 'onChange'> & CommonProps & {
  name: string
  options: Record<string, any>[],
  optKeys: string[]
  onChange?: (name: string, value: any) => void
}

const Radio = (props: Props) => {
  const {
    name,
    label,
    value,
    required,
    error,
    disabled,
    onChange,
    id,
    options,
    optKeys: keys,
    styleField,
    ...propsCheckbox
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
    (event: RadioChangeEvent) => {
      const funChange = getOnChange(formContext, onChange);
      const value = event.target.value;
      funChange(name, value);
    },
    [formContext, name, onChange]
  );

  const _options = useMemo(() => {
    if (options?.length && keys?.length) {
      return options.map((item: Record<string, any>) => ({
        label: item[keys[1]],
        value: item[keys[0]],
        ...item,
      }));
    } else {
      return [];
    }
  }, [options, keys]);

  return (
    <div
      className={`${styles.container} ${_error ? 'a-error' : ''}`}
      style={styleField}
    >
      {!!label && (
        <label className={`${styles.label}`} htmlFor={name} title={label as string}>
          {!!_required && <span className={`${styles.star}`}>*&nbsp;</span>}
          {label}
        </label>
      )}
      <div className="ant-col ant-form-item-control">
        <RadioAntd.Group
          name={name}
          value={_value}
          onChange={_onChange}
          options={_options}
          disabled={_disabled}
          size={'large'}
          {...propsCheckbox}
        ></RadioAntd.Group>
      </div>
      {_errorWithLocal &&
        <span className={`${styles.error}`}>{_errorWithLocal}</span>
      }
    </div>
  );
};

export default Radio;
