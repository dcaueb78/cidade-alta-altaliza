import React, { useCallback, useEffect } from 'react';
import {
  FiAlertCircle, FiCheckCircle, FiInfo, FiXCircle,
} from 'react-icons/fi';

import { ToastMessage, useToast } from '../../../hooks/ToastContext';

import Container from './styles';

interface ToastProps {
    message: ToastMessage;
    style: object;
}

const icons = {
  info: <FiInfo size={24} />,
  error: <FiAlertCircle size={24} />,
  success: <FiCheckCircle size={24} />,
};

const Toast: React.FC<ToastProps> = ({ message, style }) => {
  const { removeToast } = useToast();

  const handleRemoveToast = useCallback((id: string) => {
    removeToast(id);
  }, [removeToast]);

  useEffect(() => {
    const timer = setTimeout(() => {
      handleRemoveToast(message.id);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [message.id, handleRemoveToast]);

  return (

    <Container style={style} type={message.type} hasDescription={!!message.description}>
      {icons[message.type || 'info']}
      <div>
        <strong>{message.title}</strong>
        {message?.description && <p>{message.description}</p>}
      </div>

      <button onClick={() => handleRemoveToast(message.id)} type="button">
        <FiXCircle size={18} />
      </button>
    </Container>
  );
};

export default Toast;
