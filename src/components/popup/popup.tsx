import React, { useState, useCallback, FunctionComponent, ReactNode } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import './popup.modules.scss';

interface PopupProps {
  children: ReactNode;
}

const Popup: FunctionComponent<PopupProps> = ({ children }: PopupProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [handleMouseIsOpen, handleCancel] = useDebouncedCallback(() => {
    setIsOpen(true);
  }, 300);
  const handleChangeIsOpen = useCallback(() => {
    handleCancel();
    setIsOpen(!isOpen);
  }, [setIsOpen, isOpen, handleCancel]);

  return (
    <div className="popup">
      <button
        className="popup__button"
        type="button"
        onClick={() => handleChangeIsOpen()}
        onMouseEnter={handleMouseIsOpen}
        onMouseLeave={handleCancel}
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
