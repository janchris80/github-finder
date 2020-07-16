import React from 'react';
import { useContext } from 'react';
import AlertContext from '../../context/alert/AlertContext';

const Alert = (props) => {
  const alertContext = useContext(AlertContext);
  const { alert } = alertContext;
  return (
    alert !== null && (
      <div className={`alert alert-${alert.type}`}>
        <i className='fas fa-info-circle'>{alert.message}</i>
      </div>
    )
  );
};

export default Alert;
