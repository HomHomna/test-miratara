import React, { useCallback, useContext, useMemo } from 'react';
import { Form, Select, Empty } from 'antd';
import { FormContext } from '@olapat/react-useform';
import {
  getValues,
  getRequired,
  getDisabled,
  getError,
  getOnChange,
} from '@olapat/react-useform/dist/utils/field';
import PropTypes from 'prop-types';
import styles from '@/styles/components/form/Field.module.css';
import { useRouter } from 'next/router';
import { getErrorWithLocalKey } from './utils'

const { Option } = Select;

import { CommonProps } from './props'
import { SelectProps } from 'antd/lib/select';

interface Props extends Omit<SelectProps<any>, 'name' | 'options' | 'onChange'>, CommonProps {
  name: string
  options: Record<string, any>[],
  optKeys: string[]
  onChange?: (name: string, value: any) => void
}

const SelectInput = (props: Props) => {
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
    style,
    showSearch,
    ...propsInput
  } = props;
  const { locale } = useRouter();
  const formContext = useContext(FormContext);

  const selectId = `select-body-${id || name}`;

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
    (value: any) => {
      const funChange = getOnChange(formContext, onChange);
      // const value = value || ''
      funChange(name, value || null);
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
      <div id={selectId}>
        <Select
          showSearch={showSearch || true}
          getPopupContainer={() => document.getElementById(selectId) as HTMLElement}
          optionFilterProp="label"
          filterOption={(input, option) => {
            if (typeof option?.label === 'string') {
              return option?.label.toLowerCase().indexOf(input.toLowerCase()) === 0
            } else {
              return false
            }
          }}
          notFoundContent={<Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />}
          value={_value}
          disabled={_disabled}
          onChange={_onChange}
          size="large"
          style={{ width: '100%', ...style }}
          {...propsInput}
        >
          {!!options?.length &&
            options.map((item, index) => (
              <Option
                key={index}
                {...(item.props || {})}
                value={item[keys[0]]}
                label={item[keys[1]] || '-'}
                disabled={item?.disabled || false}
              >
                {item[keys[1]] || '-'}
              </Option>
            ))}
        </Select>
      </div>
      {!!_errorWithLocal &&
        <span className={`${styles.error}`}>{_errorWithLocal}</span>
      }

      {/* <Radio
        name=''
        options={[{ id: 1, name: 2}]}
        optKeys={['1', '2']}
      /> */}
    </div>
  );
};

export default SelectInput;

