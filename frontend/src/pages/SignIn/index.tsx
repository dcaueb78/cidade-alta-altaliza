import React, {
  useCallback, useRef,
} from 'react';

import { FiMail, FiLock } from 'react-icons/fi';

import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import * as Yup from 'yup';

import { useAuth } from '../../hooks/AuthContext';
import { useToast } from '../../hooks/ToastContext';

import Input from '../../components/Input';
import Button from '../../components/Button';

import getValidationErrors from '../../utils/getValidationErrors';

import { Container, Content } from './styles';
import LogoAltaliza from '../../assets/logo_altaliza.png';

import { AUTH_SIGN_ERROR, AUTH_SIGN_SUCCESS } from '../../constants/Toast';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { signIn } = useAuth();
  const { addToast } = useToast();

  const handleSubmit = useCallback(async (data: SignInFormData) => {
    try {
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        email: Yup.string().required('O e-mail é obrigatório').email('Digite um e-mail válido'),
        password: Yup.string().required('A senha é obrigatória'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      await signIn({
        email: data.email,
        password: data.password,
      });

      addToast(AUTH_SIGN_SUCCESS);
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);
        formRef.current?.setErrors(errors);
      }

      addToast(AUTH_SIGN_ERROR);
    }
  }, [signIn, addToast]);

  return (
    <Container>
      <Content>
        <img src={LogoAltaliza} alt="Logo do Altaliza" />
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Acesse sua conta</h1>
          <Input data-testid="emailInput" name="email" icon={FiMail} placeholder="E-mail" />
          <Input data-testid="passwordInput" name="password" icon={FiLock} placeholder="Senha" type="password" />

          <Button data-testid="submitButton" label="Entrar" type="submit"> </Button>
        </Form>
      </Content>
    </Container>
  );
};

export default SignIn;
