import React, { useCallback, useContext, useMemo, useEffect, useState } from 'react';
import { Form, DatePicker as DatePickerAntd, ConfigProvider } from 'antd';
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
import { DatePickerProps } from 'antd/lib/date-picker';
import dayjs from 'dayjs'
import 'dayjs/locale/th'
import 'dayjs/locale/en'
import buddistEra from 'dayjs/plugin/buddhistEra';

dayjs.extend(buddistEra)
interface Props extends Omit<DatePickerProps<any>, 'name' | 'onChange' | 'required'>, CommonProps {
  name: string
  onChange?: (name: string, value: any) => void
}

const DatePicker = (props: Props) => {
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

  const [locale_, setLocale_] = useState<any>(null)
  useEffect(() => {
    dayjs.locale('th')
    // dayjs.locale(locale === 'th' ? 'th' : 'en')
    const loadLocale = async () => {
      // if (locale === 'th') {
      //   const locale_im = await import('antd/es/date-picker/locale/th_TH');
      //   setLocale_(locale_im?.default)
      // } else {
      //   const locale_im = await import('antd/es/date-picker/locale/en_US');
      //   setLocale_(locale_im?.default)
      // }
      const locale_im = await import('antd/es/date-picker/locale/en_US');
      setLocale_(locale_im?.default)
    };

    loadLocale();
  }, [locale])

  const datePickerTh = useMemo(() => {
    // if (locale_ && locale === 'th') {
    //   return (
    //     {
    //       ...locale_,
    //       DatePicker:
    //       {
    //         ...locale_.DatePicker!,
    //         lang: {
    //           ...locale_.lang,
    //           fieldDateFormat: 'BBBB-MM-DD',
    //           fieldDateTimeFormat: 'BBBB-MM-DD HH:mm:ss',
    //           yearFormat: 'BBBB',
    //           cellYearFormat: 'BBBB',
    //         },
    //         dateFormat: 'BBBB-MM-DD',
    //         dateTimeFormat: 'BBBB-MM-DD HH:mm:ss',
    //         weekFormat: 'BBBB-wo',
    //         monthFormat: 'BBBB-MM',
    //       }
    //     }
    //   )
    // }  else if(locale_ && locale !== 'th') {
    //   return (
    //     {
    //       ...locale_,
    //       DatePicker:
    //       {
    //         ...locale_.DatePicker!,
    //         lang: {
    //           ...locale_.lang,
    //           fieldDateFormat: 'YYYY-MM-DD',
    //           fieldDateTimeFormat: 'YYYY-MM-DD HH:mm:ss',
    //           yearFormat: 'YYYY',
    //           cellYearFormat: 'YYYY',
    //         },
    //         dateFormat: 'YYYY-MM-DD',
    //         dateTimeFormat: 'YYYY-MM-DD HH:mm:ss',
    //         weekFormat: 'YYYY-wo',
    //         monthFormat: 'YYYY-MM',
    //       }
    //     }
    //   )
    // }
    if (locale_) {
      return (
        {
          ...locale_,
          DatePicker:
          {
            ...locale_.DatePicker!,
            lang: {
              ...locale_.lang,
              fieldDateFormat: 'YYYY-MM-DD',
              fieldDateTimeFormat: 'YYYY-MM-DD HH:mm:ss',
              yearFormat: 'YYYY',
              cellYearFormat: 'YYYY',
            },
            dateFormat: 'YYYY-MM-DD',
            dateTimeFormat: 'YYYY-MM-DD HH:mm:ss',
            weekFormat: 'YYYY-wo',
            monthFormat: 'YYYY-MM',
          }
        }
      )
    }
  }, [locale_])

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
      // const value = value
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
      {/* <ConfigProvider locale={datePickerTh}> */}
        <DatePickerAntd
          name={name}
          value={_value}
          disabled={_disabled}
          onChange={_onChange}
          size="large"
          format={propsInput?.format || "DD/MM/YYYY"}
          // format={propsInput?.format || locale === 'th' ? 'DD/MM/BBBB' : "DD/MM/YYYY"}
          {...propsInput}
          style={{ width: '100%', ...(propsInput.style || {}) }}
        />
      {/* </ConfigProvider> */}
      <span className={`${styles.error}`}>{_errorWithLocal}</span>
    </div>
  );
};

export default DatePicker;
