import { useState } from 'react'

import logo from '@/assets/icons/logo.svg'
import searchIcon from '@/assets/icons/search.svg'
import dogHero from '@/assets/images/dog-hero.png'
import { Button } from '@/components/Button'
import { Select } from '@/components/Select'

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

const STATES = [
  {
    id: 11,
    sigla: 'RO',
    nome: 'Rondônia',
    regiao: {
      id: 1,
      sigla: 'N',
      nome: 'Norte',
    },
  },
  {
    id: 12,
    sigla: 'AC',
    nome: 'Acre',
    regiao: {
      id: 1,
      sigla: 'N',
      nome: 'Norte',
    },
  },
]

const CITIES = [
  {
    name: 'Alta Floresta D Oeste',
    code: '1100015',
  },
  {
    name: 'Ariquemes',
    code: '1100023',
  },
  {
    name: 'Cabixi',
    code: '1100031',
  },
  {
    name: 'Cacoal',
    code: '1100049',
  },
]

interface SelectOptions {
  value: string | number
  label: string
}

export function Home() {
  const [state, setState] = useState('')
  const [city, setCity] = useState('')
  const [states, setStates] = useState<SelectOptions[]>(() => {
    return STATES.map((state) => ({ value: state.sigla, label: state.sigla }))
  })
  const [cities, setCities] = useState<SelectOptions[]>(() => {
    return CITIES.map((city) => ({ value: city.code, label: city.name }))
  })
  function handleSearchPets() {
    // TO DO
  }

  function handleChangeState() {
    // TO DO
  }

  function handleChangeCity() {
    // TO DO
  }

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
            <Select name="UF" label="" options={states}></Select>
            <Select name="Cidade" label="" options={cities}></Select>
            <Button onClick={handleSearchPets}>
              <img src={searchIcon} alt="" />
            </Button>
          </AsideRight>
        </Footer>
      </Wrapper>
    </Container>
  )
}
