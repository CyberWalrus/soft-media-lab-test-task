import React, { useState, useCallback, FunctionComponent, ReactNode } from 'react';
import './popup.modules.scss';

interface PopupProps {
  children: ReactNode;
}

const Popup: FunctionComponent<PopupProps> = ({ children }: PopupProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleChangeIsOpen = useCallback(
    (value?: boolean) => {
      if (value === undefined) {
        setIsOpen(!isOpen);
      } else {
        setIsOpen(value);
      }
    },
    [setIsOpen, isOpen]
  );

  return (
    <div className="popup">
      <button
        className="popup__button"
        type="button"
        onClick={() => handleChangeIsOpen()}
        onMouseEnter={() => handleChangeIsOpen(true)}
      >
        <span className="popup__button-text">{isOpen ? 'x' : 'i'}</span>
      </button>
      {isOpen && (
        <div className="popup__content">
          <span className="popup__content-text">{children}</span>
        </div>
      )}
    </div>
  );
};

export default Popup;
