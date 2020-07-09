/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { FunctionComponent } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, InjectedFormProps, formValueSelector } from 'redux-form';
import Popup from '../../components/popup/popup';
import InfoBox from '../../components/info-box/info-box';
import Input from '../../components/input/input';
import typePay from '../../constants/type-pay';
import './form.modules.scss';

type TypeSalary = 'month' | 'mrot' | 'day' | 'house';
interface FormProps {
  typeSalary: TypeSalary;
  ndfl: boolean;
  salary: string;
}

interface FormData {
  typeSalary: TypeSalary;
  ndfl: boolean;
  salary: string;
}

const defaultValues: FormData = {
  typeSalary: 'month',
  ndfl: true,
  salary: '',
};

type Props = FormProps & InjectedFormProps<FormData, FormProps>;

const Form: FunctionComponent<Props> = ({ handleSubmit, ndfl, typeSalary, salary }: Props) => {
  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__title">Сумма</div>
      <div className="form__radio-box">
        <label className="form__radio-item">
          <Field name="typeSalary" component="input" type="radio" value="month" />
          Оклад за месяц
        </label>
        <div className="form__radio-item">
          <label className="form__radio">
            <Field name="typeSalary" component="input" type="radio" value="mrot" />
            МРОТ
          </label>
          <Popup>
            <div>
              <b>МРОТ</b>
              <span>- минимальный размер оплаты труда. Разный для разных регионов.</span>
            </div>
          </Popup>
        </div>
        <label className="form__radio-item">
          <Field name="typeSalary" component="input" type="radio" value="day" />
          Оплата за день
        </label>
        <label className="form__radio-item">
          <Field name="typeSalary" component="input" type="radio" value="house" />
          Оплата за час
        </label>
      </div>
      <div className="form__switch-box">
        <div className={`form__title${ndfl ? '' : ' form__title--active'}`}>Указать с НДФЛ</div>
        <label className="form__switch">
          <Field name="ndfl" id="employed" component="input" type="checkbox" />
          <span className="form__slider" />
        </label>
        <div className={`form__title${!ndfl ? '' : ' form__title--active'}`}>без НДФЛ</div>
      </div>
      {typeSalary !== 'mrot' && (
        <div className="form__input-box">
          <Field name="salary" component={Input} className="form__input" />
          <div>{typePay[typeSalary] || '₽'}</div>
        </div>
      )}
      {typeSalary === 'month' && <InfoBox salary={salary} ndfl={ndfl} />}
      <div />
    </form>
  );
};

export const FormConnected = reduxForm<FormData, FormProps>({
  initialValues: defaultValues,
  form: 'payForm',
})(Form);

const selector = formValueSelector('payForm');

export default connect((state) => {
  const ndfl = selector(state, 'ndfl');
  const salary = selector(state, 'salary');
  const typeSalary = selector(state, 'typeSalary');
  return {
    ndfl,
    salary,
    typeSalary,
  };
})(FormConnected);
