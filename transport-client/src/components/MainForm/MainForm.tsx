import React, { useState, useEffect } from 'react';

import './MainForm.css';

interface MainFormProps {
  submitForm: (...args: any) => void;
}

const MainForm: React.FC<MainFormProps> = ({ submitForm }) => {
  const [from, setFrom] = useState<string>('');
  const [to, setTo] = useState<string>('');
  const [formError, setFormError] = useState<boolean>(false);

  const setFromInputField = (fromValue: string) => {
    removeFormError();
    setFrom(fromValue);
  };

  const setToInputField = (toValue: string) => {
    removeFormError();
    setTo(toValue);
  };

  const removeFormError = () => {
    if (validateForm() && formError) {
      setFormError(false);
    }
  };

  const validateForm = () => {
    if (from.trim() && to.trim()) {
      return true;
    }
    return false;
  };

  const submit = async (e: KeyboardEvent) => {
    if (e.keyCode !== 13) {
      return;
    }
    if (!validateForm()) {
      setFormError(true);
      return;
    }
    submitForm({ from, to });
  };

  useEffect(() => {
    window.addEventListener('keydown', submit);
    return () => {
      window.removeEventListener('keydown', submit);
    };
  });

  return (
    <div className="main-form">
      <form>
        <div className="input-fields">
          <label htmlFor="from">
            From
            <input
              type="text"
              name="from"
              value={from}
              onChange={(e) => {
                setFromInputField(e.target.value);
              }}
            />
          </label>
        </div>
        <div className="input-fields">
          <label htmlFor="to">
            To
            <input
              type="text"
              name="to"
              value={to}
              onChange={(e) => {
                setToInputField(e.target.value);
              }}
            />
          </label>
        </div>
        {formError && <p className="form-error">Please fill out all fields</p>}
      </form>
    </div>
  );
};

export default MainForm;
