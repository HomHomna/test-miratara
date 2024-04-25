import React, { useCallback, useContext, useMemo, useState, useEffect } from 'react';
import { Form, DatePicker, ConfigProvider } from 'antd';
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
import dayjs from 'dayjs'
import 'dayjs/locale/th'
import 'dayjs/locale/en'
import buddistEra from 'dayjs/plugin/buddhistEra';
import type { Dayjs } from 'dayjs';
import type { CellRenderInfo } from 'rc-picker/es/interface';

dayjs.extend(buddistEra)

const { RangePicker } = DatePicker;

import { CommonProps } from './props'
import { RangePickerProps } from 'antd/lib/date-picker';

type Props = Omit<RangePickerProps, 'name' | 'onChange'> & CommonProps & {
  // type Props = RangePickerProps & CommonProps & {
  name: string
  // options: Record<string, any>[],
  onChange?: (name: string, value: any) => void
  disabled?: boolean
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
    ...propsInput
  } = props;
  const { locale } = useRouter();
  const formContext = useContext(FormContext);
  const [locale_, setLocale_] = useState<any>(null)

  useEffect(() => {
    dayjs.locale('en')
    // dayjs.locale(locale === 'th' ? 'th' : 'en')
    const loadLocale = async () => {
      // if (locale === 'th') {
      //   const locale_im = await import('antd/es/date-picker/locale/th_TH');
      //   const locale_im2 = await import('antd/es/calendar/locale/th_TH');
      //   setLocale_({ DatePicker: locale_im?.default, Calendar: locale_im2?.default })
      // } else {
      //   const locale_im = await import('antd/es/date-picker/locale/en_US');
      //   const locale_im2 = await import('antd/es/calendar/locale/en_US');
      //   setLocale_({ DatePicker: locale_im?.default, Calendar: locale_im2?.default })
      // }
      const locale_im = await import('antd/es/date-picker/locale/en_US');
      const locale_im2 = await import('antd/es/calendar/locale/en_US');
      setLocale_({ DatePicker: locale_im?.default, Calendar: locale_im2?.default })
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
    //           ...locale_.DatePicker.lang,
    //           fieldDateFormat: 'BBBB-MM-DD',
    //           fieldDateTimeFormat: 'BBBB-MM-DD HH:mm:ss',
    //           cellYearFormat: 'BBBB',
    //         },
    //         dateFormat: 'BBBB-MM-DD',
    //         dateTimeFormat: 'BBBB-MM-DD HH:mm:ss',
    //         weekFormat: 'BBBB-wo',
    //         monthFormat: 'BBBB-MM',
    //         yearFormat: 'BBBB',
    //       },
    //       Calendar: {
    //         ...locale_.Calendar!,
    //         lang: {
    //           ...locale_.Calendar.lang,
    //           yearFormat: "BBBB",
    //           dateFormat: "BBBB-M-D",
    //           fieldYearFormat: 'BBBB',
    //           dateTimeFormat: "BBBB-MM-D HH:mm:ss",
    //           cellYearFormat: 'BBBB',

    //         },
    //         dateFormat: 'BBBB-MM-DD',
    //         dateTimeFormat: 'BBBB-MM-DD HH:mm:ss',
    //         weekFormat: 'BBBB-wo',
    //         monthFormat: 'BBBB-MM',
    //         yearFormat: 'BBBB',
    //       },
    //     }
    //   )
    // } else if (locale_ && locale !== 'th') {
    //   return (
    //     {
    //       ...locale_,
    //       DatePicker:
    //       {
    //         ...locale_.DatePicker!,
    //         lang: {
    //           ...locale_.DatePicker.lang,
    //           fieldDateFormat: 'YYYY-MM-DD',
    //           fieldDateTimeFormat: 'YYYY-MM-DD HH:mm:ss',
    //           cellYearFormat: 'YYYY',
    //         },
    //         dateFormat: 'YYYY-MM-DD',
    //         dateTimeFormat: 'YYYY-MM-DD HH:mm:ss',
    //         weekFormat: 'YYYY-wo',
    //         monthFormat: 'YYYY-MM',
    //         yearFormat: 'YYYY',
    //       },
    //       Calendar: {
    //         ...locale_.Calendar!,
    //         lang: {
    //           ...locale_.Calendar.lang,
    //           yearFormat: "YYYY",
    //           dateFormat: "YYYY-M-D",
    //           fieldYearFormat: 'YYYY',
    //           dateTimeFormat: "YYYY-MM-D HH:mm:ss",
    //           cellYearFormat: 'YYYY',

    //         },
    //         dateFormat: 'YYYY-MM-DD',
    //         dateTimeFormat: 'YYYY-MM-DD HH:mm:ss',
    //         weekFormat: 'YYYY-wo',
    //         monthFormat: 'YYYY-MM',
    //         yearFormat: 'YYYY',
    //       },
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
              ...locale_.DatePicker.lang,
              fieldDateFormat: 'YYYY-MM-DD',
              fieldDateTimeFormat: 'YYYY-MM-DD HH:mm:ss',
              cellYearFormat: 'YYYY',
            },
            dateFormat: 'YYYY-MM-DD',
            dateTimeFormat: 'YYYY-MM-DD HH:mm:ss',
            weekFormat: 'YYYY-wo',
            monthFormat: 'YYYY-MM',
            yearFormat: 'YYYY',
          },
          Calendar: {
            ...locale_.Calendar!,
            lang: {
              ...locale_.Calendar.lang,
              yearFormat: "YYYY",
              dateFormat: "YYYY-M-D",
              fieldYearFormat: 'YYYY',
              dateTimeFormat: "YYYY-MM-D HH:mm:ss",
              cellYearFormat: 'YYYY',

            },
            dateFormat: 'YYYY-MM-DD',
            dateTimeFormat: 'YYYY-MM-DD HH:mm:ss',
            weekFormat: 'YYYY-wo',
            monthFormat: 'YYYY-MM',
            yearFormat: 'YYYY',
          },
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
    (date: any) => {
      const funChange = getOnChange(formContext, onChange);
      const value = date;
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
      <ConfigProvider
        theme={{
          token: {
            colorBorder: '#BEC3FF',
          },
        }}
      >
        <RangePicker
          name={name}
          value={_value}
          disabled={_disabled}
          onChange={_onChange}
          size="large"
          format={propsInput?.format || "DD/MM/YYYY"}
          {...propsInput}
          style={{ width: '100%', ...(propsInput.style || {}) }}
        />
      </ConfigProvider>
      {/* </ConfigProvider> */}
      {_errorWithLocal &&
        <span className={`${styles.error}`}>{_errorWithLocal}</span>
      }
    </div>
  );
};

export default TextInput;
