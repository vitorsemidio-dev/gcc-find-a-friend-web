import { useState } from 'react'

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
  onSearchPets: (searchFilters: SearchFilters) => void
}

export function Aside({ onSearchPets }: AsideProps) {
  const [searchFilters, setSearchFilters] = useState({
    age: '',
    city: '',
    energy: '',
    size: '',
    independence: '',
  })

  function handleSearchPets() {
    onSearchPets(searchFilters)
  }

  function handleChangeSearchFilters(
    field: keyof typeof searchFilters,
    value: string,
  ) {
    setSearchFilters({ ...searchFilters, [field]: value })
  }

  return (
    <Container>
      <AsideHeader>
        <div>
          <img src={logo} alt="" />
          <HeaderInput>
            <input
              type="text"
              placeholder="Insira uma cidade"
              onChange={(e) =>
                handleChangeSearchFilters('city', e.target.value)
              }
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
            onChange={(e) => handleChangeSearchFilters('age', e.target.value)}
          />

          <Select
            name="energy"
            label="Nível de energia"
            options={energyOptions}
            onChange={(e) =>
              handleChangeSearchFilters('energy', e.target.value)
            }
          />

          <Select
            name="size"
            label="Porte do animal"
            options={sizeOptions}
            onChange={(e) => handleChangeSearchFilters('size', e.target.value)}
          />

          <Select
            name="independence"
            label="Nível de independência"
            options={independenceOptions}
            onChange={(e) =>
              handleChangeSearchFilters('independence', e.target.value)
            }
          />
        </ContentFilters>
      </AsideContent>
    </Container>
  )
}
