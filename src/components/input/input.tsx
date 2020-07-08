/* eslint-disable react/jsx-props-no-spreading */
import React, { FunctionComponent } from 'react';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import MaskedInput from 'react-text-mask';
import './input.modules.scss';

const numberMask = createNumberMask({
  prefix: '',
  suffix: '',
  decimalLimit: 0,
  thousandsSeparatorSymbol: ' ',
});

interface Meta {
  touched: boolean;
  error: string;
  warning: string;
}

interface InputProps {
  input?: { [key: string]: any };
  placeholder?: string;
  type?: 'number' | 'text' | 'password';
  meta?: Meta;
}

const Input: FunctionComponent<InputProps> = ({ input, placeholder, type, meta }: InputProps) => {
  return (
    <div className="input">
      <MaskedInput {...input} placeholder={placeholder} type={type} className="input__item" mask={numberMask} />
      {meta &&
        meta.touched &&
        ((meta.error && <span className="input__error">{meta.error}</span>) ||
          (meta.warning && <span className="input__warn">{meta.warning}</span>))}
    </div>
  );
};

export default Input;
