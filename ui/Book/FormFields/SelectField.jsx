// 'use client';

import { useField, useFormikContext } from 'formik';
import clsx from 'clsx';

export default function SelectField(props) {
  const { label, options } = props;
  const [field, meta] = useField(props);
  const { value } = field;
  const { touched, error } = meta;
  const isError = touched && Boolean(error);
  const isSuccess = touched && !Boolean(error);
  const formikProps = useFormikContext();

  function handleChnage(e) {
    field.onChange(e);

    const removeToZip = e.target.value !== 'Moving';

    const removeDeliveryDate = e.target.value !== 'Moving with Storage';

    if (label === 'Service') {
      // if (removeToZip) {
      //   formikProps.setFieldValue(`destinationAddress`, '');
      //   formikProps.setFieldValue(`destinationCity`, '');
      //   formikProps.setFieldValue(`destinationState`, '');
      //   formikProps.setFieldValue(`destinationZip`, '');
      //   formikProps.setFieldValue(`destinationFloor`, '');
      //   formikProps.setFieldValue(`destinationApt`, '');
      // }
      if (removeDeliveryDate && removeToZip) {
        formikProps.setFieldValue(`deliveryDate`, '');
        formikProps.setFieldValue(`destinationAddress`, '');
        formikProps.setFieldValue(`destinationCity`, '');
        formikProps.setFieldValue(`destinationState`, '');
        formikProps.setFieldValue(`destinationZip`, '');
        formikProps.setFieldValue(`destinationFloor`, '');
        formikProps.setFieldValue(`destinationApt`, '');
      }
      if (removeDeliveryDate) {
        formikProps.setFieldValue(`deliveryDate`, '');
      }
    }
  }

  return (
    <>
      <label htmlFor={field} className="block text-xs font-bold text-gray-700">
        {label}
      </label>
      <select
        {...field}
        value={value}
        onChange={handleChnage}
        className={clsx(
          'mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm',
          {
            'text-gray-400': value === '',
            'border-red-500 bg-red-50': isError,
            'border-green-500 bg-green-50': isSuccess,
          }
        )}
      >
        {options.map((o) => {
          return (
            <option key={o.label} disabled={o.value === ''} value={o.value}>
              {o.label}
            </option>
          );
        })}
      </select>
    </>
  );
}
