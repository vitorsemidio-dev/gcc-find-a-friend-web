import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import logo from '@/assets/icons/logo.svg'
import searchIcon from '@/assets/icons/search.svg'
import dogHero from '@/assets/images/dog-hero.png'
import { Button } from '@/components/Button'
import { Select } from '@/components/Select'
import { api } from '@/services/http'

import {
  AsideRight,
  Container,
  Content,
  Footer,
  Header,
  HeaderText,
  HeroText,
  Text,
  Wrapper,
} from './styles'

interface ISelectOptions {
  value: string | number
  label: string
}

interface IState {
  nome: string
  sigla: string
}

interface ICity {
  name: string
  code: string
}

interface IResponseState {
  states: IState[]
}

interface IResponseCity {
  citys: ICity[]
}

export function Home() {
  const [state, setState] = useState('')
  const [city, setCity] = useState('')
  const [states, setStates] = useState<ISelectOptions[]>([])
  const [citys, setCitys] = useState<ISelectOptions[]>([])

  const navigate = useNavigate()

  function handleSearchPets() {
    const queryParams = new URLSearchParams({
      state,
      city,
    })
    navigate(`/map?${queryParams.toString()}`)
  }

  async function handleChangeState(e: any) {
    const newState = e.target.value
    setState(newState)
    const { data } = await api.get<IResponseCity>(`/location/citys/${newState}`)
    const dataMapped = data.citys
      .map((city) => ({
        label: city.name,
        value: city.name,
      }))
      .sort((a, b) => a.label.localeCompare(b.label))
    setCitys(dataMapped)
  }

  function handleChangeCity(e: any) {
    setCity(e.target.value)
  }

  useEffect(() => {
    const loadStates = async () => {
      const { data } = await api.get<IResponseState>('/location/states')
      const dataMapped = data.states
        .map((state) => ({
          label: state.sigla,
          value: state.sigla,
        }))
        .sort((a, b) => a.label.localeCompare(b.label))
      setStates(dataMapped)
    }
    loadStates()
  }, [])

  return (
    <Container>
      <Wrapper>
        <Header>
          <img src={logo} alt="" />
          <HeaderText>FindAFriend</HeaderText>
        </Header>
        <Content>
          <HeroText>Leve a felicidade para o seu lar</HeroText>
          <img src={dogHero} alt="" />
        </Content>
        <Footer>
          <Text>
            Encontre o animal de estimação ideal para seu estilo de vida!
          </Text>
          <AsideRight>
            <Text size="small">Busque um amigo:</Text>
            <Select
              name="UF"
              label=""
              options={states}
              onChange={handleChangeState}
            ></Select>
            <Select
              name="Cidade"
              label=""
              options={citys}
              onChange={handleChangeCity}
            ></Select>
            <Button onClick={handleSearchPets} disabled={!state || !city}>
              <img src={searchIcon} alt="" />
            </Button>
          </AsideRight>
        </Footer>
      </Wrapper>
    </Container>
  )
}
