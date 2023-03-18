import { ChangeEvent, useState } from 'react'

import logo from '@/assets/icons/logo.svg'
import search from '@/assets/icons/search.svg'
import { Button } from '~/Button'
import { Select } from '~/Select'

import {
  AsideContent,
  AsideHeader,
  Container,
  ContentFilters,
  ContentHeader,
  HeaderInput,
} from './styles'

const ageOptions = [
  {
    label: 'Filhote',
    value: 'cub',
  },
  {
    label: 'Adolescente',
    value: 'adolescent',
  },
  {
    label: 'Idoso',
    value: 'elderly',
  },
]
const energyOptions = [
  {
    label: 'Muito baixa',
    value: 1,
  },
  {
    label: 'Baixa',
    value: 2,
  },
  {
    label: 'Média',
    value: 3,
  },
  {
    label: 'Alta',
    value: 4,
  },
  {
    label: 'Muito alta',
    value: 5,
  },
]
const sizeOptions = [
  {
    label: 'Pequenino',
    value: 'small',
  },
  {
    label: 'Médio',
    value: 'medium',
  },
  {
    label: 'Grande',
    value: 'big',
  },
]

const independenceOptions = [
  {
    label: 'Baixo',
    value: 'low',
  },
  {
    label: 'Médio',
    value: 'medium',
  },
  {
    label: 'Alto',
    value: 'high',
  },
]

type SearchFilters = {
  age: string
  city: string
  energy: string
  size: string
  independence: string
}

interface AsideProps {
  city: string
  onSearchPets: (searchFilters: Partial<SearchFilters>) => Promise<void>
}
export function Aside({ city, onSearchPets }: AsideProps) {
  const [searchFilters, setSearchFilters] = useState({
    age: '',
    city,
    energy: '',
    size: '',
    independence: '',
  })

  async function handleSearchPets() {
    await onSearchPets(searchFilters)
  }

  async function handleChangeSearchFilters(
    e: ChangeEvent<HTMLSelectElement | HTMLInputElement>,
  ) {
    const { name: field, value } = e.target
    setSearchFilters((state) => ({ ...state, [field]: value }))
    await onSearchPets({ ...searchFilters, [field]: value })
  }

  return (
    <Container>
      <AsideHeader>
        <div>
          <img src={logo} alt="" />
          <HeaderInput>
            <input
              name="city"
              type="text"
              placeholder="Insira uma cidade"
              onChange={(e) => handleChangeSearchFilters(e)}
              value={searchFilters.city}
            />
            <Button onClick={handleSearchPets} disabled={!searchFilters.city}>
              <img src={search} alt="ícone de lupa" />
            </Button>
          </HeaderInput>
        </div>
      </AsideHeader>
      <AsideContent>
        <ContentHeader>Filtros</ContentHeader>
        <ContentFilters>
          <Select
            name="age"
            label="Idade"
            options={ageOptions}
            onChange={(e) => handleChangeSearchFilters(e)}
            value={searchFilters.age}
          />

          <Select
            name="energy"
            label="Nível de energia"
            options={energyOptions}
            onChange={(e) => handleChangeSearchFilters(e)}
            value={searchFilters.energy}
          />

          <Select
            name="size"
            label="Porte do animal"
            options={sizeOptions}
            onChange={(e) => handleChangeSearchFilters(e)}
            value={searchFilters.size}
          />

          <Select
            name="independence"
            label="Nível de independência"
            options={independenceOptions}
            onChange={(e) => handleChangeSearchFilters(e)}
            value={searchFilters.independence}
          />
        </ContentFilters>
      </AsideContent>
    </Container>
  )
}
