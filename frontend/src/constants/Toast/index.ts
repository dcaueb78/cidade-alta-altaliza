import { ToastMessage } from '../../hooks/ToastContext';

export const AUTH_SIGN_ERROR: Omit<ToastMessage, 'id'> = {
  type: 'error',
  title: 'Erro na autenticação',
  description: 'Ocorreu um erro ao fazer login, cheque as credenciais.',
};

export const AUTH_SIGN_SUCCESS: Omit<ToastMessage, 'id'> = {
  type: 'success',
  title: 'Logado com sucesso',
};