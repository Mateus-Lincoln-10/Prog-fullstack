import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as C from "./styles";
import api from '../../services/api'
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const Signin = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
    setError(validateEmail(value));
  };

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
    setError(validatePassword(value));
  };

  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return value && !emailRegex.test(value) ? 'Email Inválido' : '';
  };

  const validatePassword = (value) => {
    return value && value.length < 6 ? 'Senha deve possuir pelo menos 6 caracteres' : '';
  };

  const handleLogin = async () => {
    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);
    if (!emailError && !passwordError) {
      try {
        await login(email, password);
        navigate("/home");
      } catch (error) {
        console.log(error);
        setError(error.message)
      }
    }
  };

  return (
    <C.Container>
      <C.Label>SISTEMA DE LOGIN</C.Label>
      <C.Content>
        <Input
          type="email"
          placeholder="Digite seu E-mail"
          value={email}
          onChange={handleEmailChange}
        />
        <Input
          type="password"
          placeholder="Digite sua senha"
           value={password} 
           onChange={handlePasswordChange} 
        />
        <C.labelError>{error}</C.labelError>
        <Button Text="Entrar" onClick={handleLogin} />
        <C.LabelSignup>
          Não tem uma conta?
          <C.Strong>
            <Link to="/signup">&nbsp;Registre-se</Link>
          </C.Strong>
        </C.LabelSignup>
      </C.Content>
    </C.Container>
  );
};
export default Signin;