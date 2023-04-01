import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import LogoHorizontal from '@/assets/icons/logo-horizontal.svg'
import Eye from '@/assets/icons/password-eye.svg'
import Pets from '@/assets/icons/pets.svg'
import { api } from '@/services/http'

import {
  Button,
  Buttons,
  Card,
  Container,
  Form,
  FormWrapper,
  InputWrapper,
  Wrapper,
} from './styles'

export function Register() {
  const [registerForm, setRegisterForm] = useState({
    name: '',
    email: '',
    address: '',
    cep: '',
    whatsappNumber: '',
    password: '',
    passwordConfirm: '',
  })

  const navigate = useNavigate()

  async function handleRegisterOrganization(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    try {
      const response = await api.post('/orgs', registerForm)
      console.log(response)
      handleLoginOrganization()
    } catch (err) {
      console.log(err)
    }
  }

  function handleRenderMapLocation() {
    // TODO
  }

  function handleLoginOrganization() {
    navigate('/login')
  }

  return (
    <Wrapper>
      <Container>
        <Card>
          <img src={LogoHorizontal} className="logo" alt="" />
          <img src={Pets} alt="" />
        </Card>
        <FormWrapper>
          <h1>Cadastre sua organização</h1>
          <Form onSubmit={(e) => handleRegisterOrganization(e)}>
            <label htmlFor="name">Nome</label>
            <InputWrapper>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="John Doe"
                value={registerForm.name}
                onChange={(e) =>
                  setRegisterForm({ ...registerForm, name: e.target.value })
                }
              />
            </InputWrapper>

            <label htmlFor="email">Email</label>
            <InputWrapper>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="mayk@email.com"
                value={registerForm.email}
                onChange={(e) =>
                  setRegisterForm({ ...registerForm, email: e.target.value })
                }
              />
            </InputWrapper>

            <label htmlFor="address">Endereço</label>
            <InputWrapper>
              <input
                type="text"
                name="address"
                id="address"
                placeholder="Rua do Meio, 1825"
                value={registerForm.address}
                onChange={(e) =>
                  setRegisterForm({ ...registerForm, address: e.target.value })
                }
              />
            </InputWrapper>

            <label htmlFor="whatsappNumber">Whatsapp</label>
            <InputWrapper>
              <input
                type="text"
                name="whatsappNumber"
                id="whatsappNumber"
                placeholder="99 99999 9999"
                value={registerForm.whatsappNumber}
                onChange={(e) =>
                  setRegisterForm({
                    ...registerForm,
                    whatsappNumber: e.target.value,
                  })
                }
              />
            </InputWrapper>

            <label htmlFor="password">Senha</label>
            <InputWrapper>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Senha"
                value={registerForm.password}
                onChange={(e) =>
                  setRegisterForm({ ...registerForm, password: e.target.value })
                }
              />
              <img onClick={() => {}} src={Eye} alt="" />
            </InputWrapper>

            <label htmlFor="passwordConfirm">Confirmar senha</label>
            <InputWrapper>
              <input
                type="password"
                name="passwordConfirm"
                id="passwordConfirm"
                placeholder="Confirme sua senha"
                value={registerForm.passwordConfirm}
                onChange={(e) =>
                  setRegisterForm({
                    ...registerForm,
                    passwordConfirm: e.target.value,
                  })
                }
              />
              <img onClick={() => {}} src={Eye} alt="" />
            </InputWrapper>

            <Buttons>
              <Button type="submit" className="primary">
                Cadastrar
              </Button>
            </Buttons>
          </Form>
        </FormWrapper>
      </Container>
    </Wrapper>
  )
}
