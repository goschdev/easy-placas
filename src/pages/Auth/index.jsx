import React, { useContext, useEffect } from 'react';
import { ThemeContext } from 'styled-components';
import { useForm } from 'react-hook-form';

import { TEXTS } from 'logic/texts';
import { Input } from 'visual/styles/Input';
import { Button } from 'visual/styles/Button';
import { Warning } from 'visual/styles/Warning';
import { AuthContext } from 'contexts/AuthContext';

import logoImg from 'assets/img/logo-white.svg';
import { Container, Logo, Title, Content, Form, Inputs } from './styles';

export function Auth() {
  const { error, login, loading } = useContext(AuthContext);
  const { setBlue, setNotBlue } = useContext(ThemeContext);
  const { register, handleSubmit } = useForm();

  function formHandler(form) {
    login(form);
  }

  useEffect(() => {
    setBlue();

    return () => setNotBlue();
  }, [setBlue, setNotBlue]);

  return (
    <Container>
      <Content>
        <Title>{TEXTS.auth.title}</Title>
        <Logo src={logoImg} alt={TEXTS.logoAlt} />
        <Form onSubmit={handleSubmit(formHandler)}>
          <Inputs>
            <Input
              placeholder={TEXTS.auth.email.placeholder}
              type="email"
              name="email"
              ref={register}
              disabled={loading}
              required
            />
            <Input
              placeholder={TEXTS.auth.password.placeholder}
              type="password"
              name="password"
              disabled={loading}
              ref={register}
              required
            />
          </Inputs>
          {error && <Warning>{TEXTS.auth.errors.notAuthorized}</Warning>}
          <Button isLoading={loading} disabled={loading}>
            {TEXTS.auth.submit}
          </Button>
        </Form>
      </Content>
    </Container>
  );
}

export default Auth;
