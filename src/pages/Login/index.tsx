import { FormEvent, useState } from 'react'

import LogoHorizontal from '@/assets/icons/logo-horizontal.svg'
import Pets from '@/assets/icons/pets.svg'
import Eye from '@/assets/icons/password-eye.svg'

import {
  Wrapper,
  Container,
  Card,
  FormWrapper,
  Form,
  InputWrapper,
  Buttons,
  Button,
} from './styles'
import { api } from '@/services/http'
import { useNavigate } from 'react-router-dom'

export function Login() {
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: '',
  })
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  const navigate = useNavigate()

  async function handleLogin(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    try {
      const response = await api.post('/auth/sessions', loginForm)
      console.log(response)
    } catch (err) {
      console.log(err)
    }
  }

  function handleRegisterOrganization() {
    // TO DO
    navigate('/register')
  }

  return (
    <Wrapper>
      <Container>
        <Card>
          <img src={LogoHorizontal} className="logo" alt="" />
          <img src={Pets} alt="" />
        </Card>
        <FormWrapper>
          <h1>Boas-vindas!</h1>
          <Form onSubmit={handleLogin}>
            <label htmlFor="email">Email</label>
            <InputWrapper>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Email"
                value={loginForm.email}
                onChange={(e) =>
                  setLoginForm({ ...loginForm, email: e.target.value })
                }
              />
            </InputWrapper>

            <label htmlFor="password">Senha</label>
            <InputWrapper>
              <input
                type={isPasswordVisible ? 'text' : 'password'}
                name="password"
                id="password"
                placeholder="Senha"
                value={loginForm.password}
                onChange={(e) =>
                  setLoginForm({ ...loginForm, password: e.target.value })
                }
              />
              <img
                onClick={() => setIsPasswordVisible((prev) => !prev)}
                src={Eye}
                alt=""
              />
            </InputWrapper>

            <Buttons>
              <Button type="submit" onClick={() => {}} className="primary">
                Login
              </Button>
              <Button
                type="button"
                onClick={handleRegisterOrganization}
                className="secondary"
              >
                Cadastrar minha organização
              </Button>
            </Buttons>
          </Form>
        </FormWrapper>
      </Container>
    </Wrapper>
  )
}
