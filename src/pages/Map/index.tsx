import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

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

export function Map() {
  const [type, setType] = useState<PetTypeSearchOptions>('all')
  const [pets, setPets] = useState<IPet[]>([])
  const { search } = useLocation()
  console.log(search)

  useEffect(() => {
    api.get<IPetResponse>(`/pets/São Paulo`).then((response) => {
      setPets(response.data.pets)
    })
  }, [])

  async function handleFilterByPetType(params: any) {
    const { city, ...queryParamsPayload } = params
    const queryParams = new URLSearchParams({ ...queryParamsPayload, type })
    const response = await api.get<IPetResponse>(`/pets/${city}`, {
      params: queryParams,
    })
    setPets(response.data.pets)
  }

  return (
    <Container>
      <Aside onSearchPets={handleFilterByPetType} />

      <Content>
        <Header>
          <p>
            Encontre <span>324 amigos</span> na sua cidade
          </p>
          <SelectWrapper>
            <HeaderSelect
              name="size"
              id="size"
              onChange={(e) =>
                setType(e.target.value as unknown as PetTypeSearchOptions)
              }
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
            <Card
              key={pet.id}
              path={pet.photo_url}
              type={pet.type}
              name={pet.name}
            />
          ))}
        </Display>
      </Content>
    </Container>
  )
}
