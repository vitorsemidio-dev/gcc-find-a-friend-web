import { ChangeEvent, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import chevron from '@/assets/icons/chevron-bottom-blue.svg'
import { api } from '@/services/http'
import { Aside } from '~/Aside'
import { Card } from '~/Card'

import {
  Container,
  Content,
  Display,
  Header,
  HeaderSelect,
  SelectWrapper,
} from './styles'

type PetTypeSearchOptions = 'all' | 'cat' | 'dog'

interface IPet {
  id: string
  name: string
  description: string
  city: string
  age: string
  energy: number
  size: string
  independence: string
  type: 'dog' | 'cat'
  photo: string
  orgId: string
  photo_url: string
}

interface IPetResponse {
  pets: IPet[]
}

type SearchFilters = {
  age: string
  city: string
  energy: string
  independence: string
  size: string
  type: PetTypeSearchOptions
}

const INITIAL_SEARCH_FILTERS: SearchFilters = {
  age: '',
  city: '',
  energy: '',
  independence: '',
  size: '',
  type: 'all',
}

function getQueryParams(search: string) {
  const searchParams = new URLSearchParams(search)
  const city = searchParams.get('city') || ''
  return { city }
}

export function Map() {
  const { search } = useLocation()
  const city = getQueryParams(search).city || 'Rio De Janeiro'
  const [filters, setFilters] = useState<Partial<SearchFilters>>({
    ...INITIAL_SEARCH_FILTERS,
    city,
  })
  const [pets, setPets] = useState<IPet[]>([])

  useEffect(() => {
    handleSearchPets(filters)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  async function handleSearchPets(params: Partial<SearchFilters>) {
    setFilters((state) => ({ ...state, ...params }))
    const { city, ...queryParamsPayload } = { ...filters, ...params }
    const queryParams = new URLSearchParams({ ...queryParamsPayload })
    const response = await api.get<IPetResponse>(`/pets/${city}`, {
      params: queryParams,
    })
    setPets(response.data.pets)
  }

  async function handleFilterByPetType(e: ChangeEvent<HTMLSelectElement>) {
    const type = e.target.value as PetTypeSearchOptions
    await handleSearchPets({ ...filters, type })
  }

  return (
    <Container>
      <Aside city={city} onSearchPets={handleSearchPets} />

      <Content>
        <Header>
          <p>
            Encontre <span>{pets.length} amigos</span> na sua cidade
          </p>
          <SelectWrapper>
            <HeaderSelect
              id="type"
              name="type"
              onChange={handleFilterByPetType}
              value={filters.type}
            >
              <option value="all">Gatos e Cachorros</option>
              <option value="cat">Gatos</option>
              <option value="dog">Cachorros</option>
            </HeaderSelect>
            <img src={chevron} alt="" />
          </SelectWrapper>
        </Header>
        <Display>
          {pets.map((pet) => (
            <Link key={pet.id} to={`/pet-profile/${pet.id}`}>
              <Card path={pet.photo_url} type={pet.type} name={pet.name} />
            </Link>
          ))}
        </Display>
      </Content>
    </Container>
  )
}
