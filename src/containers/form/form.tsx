/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { FunctionComponent, useEffect } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, InjectedFormProps, formValueSelector } from 'redux-form';
import Popup from '../../components/popup/popup';
import './form.modules.scss';

interface FormProps {
  ndfl: boolean;
}

interface FormData {
  type: 'month' | 'mrot' | 'day' | 'house';
  ndfl: boolean;
  amount: string;
}

const defaultValues: FormData = {
  type: 'month',
  ndfl: true,
  amount: '',
};

type Props = FormProps & InjectedFormProps<FormData, FormProps>;

const Form: FunctionComponent<Props> = ({ handleSubmit, ndfl }: Props) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>Сумма</div>
      <div>
        <label>
          <Field name="type" component="input" type="radio" value="month" />
          Оклад за месяц
        </label>
        <label style={{ fontSize: '2rem' }}>
          <Field name="type" component="input" type="radio" value="mrot" />
          МРОТ
          <Popup>
            <div>
              <b>МРОТ</b>
              <span>- минимальный размер оплаты труда. Разный для разных регионов.</span>
            </div>
          </Popup>
        </label>
        <label style={{ fontSize: '20px' }}>
          <Field name="type" component="input" type="radio" value="day" />
          Оплата за день
        </label>
        <label>
          <Field name="type" component="input" type="radio" value="house" />
          Оплата за час
        </label>
      </div>
      <div>
        <label htmlFor="employed">Employed</label>
        <div>
          <Field name="ndfl" id="employed" component="input" type="checkbox" />
        </div>
      </div>
      <div>
        <Field name="amount" component="input" type="text" className="form__input" />
      </div>
      {ndfl && <div>Test</div>}
      <div />
    </form>
  );
};

const FormConnected = reduxForm<FormData, FormProps>({
  initialValues: defaultValues,
  form: 'payForm',
})(Form);

const selector = formValueSelector('payForm');

export default connect((state) => {
  const ndfl = selector(state, 'ndfl');
  return {
    ndfl,
  };
})(FormConnected);
