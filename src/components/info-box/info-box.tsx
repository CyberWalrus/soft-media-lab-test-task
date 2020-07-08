import React, { useState, useEffect, FunctionComponent } from 'react';
import './info-box.modules.scss';

interface InfoBoxProps {
  salary: string;
  ndfl: boolean;
}

const defaultValues = {
  salary: '0',
  salaryNdfl: '0',
  salaryEmployee: '0',
};

const InfoBox: FunctionComponent<InfoBoxProps> = ({ salary, ndfl }: InfoBoxProps) => {
  const [value, setValues] = useState(defaultValues);

  useEffect(() => {
    const amount = Number(salary.replace(/ /g, ''));
    if (amount > 0) {
      const salaryNdfl = ndfl ? amount / 0.87 - amount : amount * 0.13;
      const newValues = {
        salary: ndfl ? (amount + salaryNdfl).toFixed(0) : amount.toFixed(0),
        salaryNdfl: salaryNdfl.toFixed(0),
        salaryEmployee: ndfl ? amount.toFixed(0) : (amount - salaryNdfl).toFixed(0),
      };
      setValues(newValues);
    } else {
      setValues(defaultValues);
    }
  }, [ndfl, salary]);
  return (
    <div className="info-box">
      <div>
        <b className="info-box__amount">{value.salaryEmployee}</b>
        <span className="info-box__text">₽ сотрудник будит получать на руки</span>
      </div>
      <div>
        <b className="info-box__amount">{value.salaryNdfl}</b>
        <span className="info-box__text">₽ НДФЛ, 13% от оклада</span>
      </div>
      <div>
        <b className="info-box__amount">{value.salary}</b>
        <span className="info-box__text">₽ за сотрудника в месяц</span>
      </div>
    </div>
  );
};

export default InfoBox;
