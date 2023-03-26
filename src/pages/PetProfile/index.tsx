import { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import alertOutline from '@/assets/icons/alert-outline.svg'
import boltDuotone from '@/assets/icons/bolt-duotone.svg'
import boltOutline from '@/assets/icons/bolt-outline.svg'
import circleDuotone from '@/assets/icons/circle-duotone.svg'
import circleFill from '@/assets/icons/circle-fill.svg'
import logoImg from '@/assets/icons/logo.svg'
import maximize from '@/assets/icons/maximize.svg'
import whatsappFill from '@/assets/icons/ri_whatsapp-fill.svg'
import whatsappWhite from '@/assets/icons/whatsapp.svg'
import { RateCard } from '@/components/RateCard'
import { api } from '@/services/http'
import { formatPhoneNumber } from '@/utils/format-phone-number'

import {
  CharacteristicsList,
  Container,
  Content,
  FooterActions,
  Header,
  ImageFullCardContainer,
  ProfileContainer,
  SectionContact,
  SectionImages,
  SectionPet,
  SectionRequired,
  SquashIcon,
} from './styles'

type PetProfileParams = {
  id: string
}

type PetGallery = {
  id: string
  image: string
  petId: string
  photo_url: string
}

function usePetGallery(petId?: string) {
  const [petGallery, setPetGallery] = useState<PetGallery[]>([])

  const fetchPetGallery = useCallback(async () => {
    if (!petId) return
    const { data } = await api.get<{ pet_gallery: PetGallery[] }>(
      `/pets/gallery/${petId}`,
    )
    setPetGallery(data.pet_gallery)
  }, [petId])

  useEffect(() => {
    fetchPetGallery()
  }, [petId, fetchPetGallery])

  return petGallery
}

type PetDetail = {
  id: string
  name: string
  description: string
  city: string
  age: string
  energy: number
  size: string
  independence: string
  type: string
  photo: string
  orgId: string
  org: {
    id: string
    nome: string
    address: string
    cep: string
    whatsappNumber: string
  }
  photo_url: string
}

function usePetDetail(petId?: string) {
  const [petDetail, setPetDetail] = useState<PetDetail>({} as PetDetail)

  const fetchPetDetail = useCallback(async () => {
    if (!petId) return
    const { data } = await api.get<{ pet: PetDetail }>(`/pets/show/${petId}`)
    setPetDetail(data.pet)
  }, [petId])

  useEffect(() => {
    fetchPetDetail()
  }, [petId, fetchPetDetail])

  return petDetail
}

type Requirements = {
  id: string
  title: string
  petId: string
}

function usePetRequirements(petId?: string) {
  const [requirements, setRequirements] = useState<Requirements[]>([])

  const fetchPetRequirements = useCallback(async () => {
    if (!petId) return
    const { data } = await api.get<{ adoption_requirements: Requirements[] }>(
      `/pets/adoption-requirements/${petId}`,
    )
    setRequirements(data.adoption_requirements)
  }, [petId])

  useEffect(() => {
    fetchPetRequirements()
  }, [petId, fetchPetRequirements])

  return requirements
}

export function PetProfile() {
  const params = useParams<PetProfileParams>()

  const petDetail = usePetDetail(params.id)
  const petImages = usePetGallery(params.id)
  const requirements = usePetRequirements(params.id)

  return (
    <Container>
      <Content>
        <Header>
          <p>Seu novo melhor amigo</p>
        </Header>
        <ProfileContainer>
          <SectionImages>
            <ImageFullCardContainer>
              <img src={petDetail.photo_url} alt={petDetail.name} />
            </ImageFullCardContainer>
            <ul>
              {petImages.map((image) => {
                return (
                  <li key={image.id}>
                    <img src={image.photo_url} alt="" />
                  </li>
                )
              })}
            </ul>
          </SectionImages>

          <SectionPet>
            <h1>{petDetail.name}</h1>
            <p>{petDetail.description}</p>
            <CharacteristicsList>
              <RateCard
                initialRate={4}
                maxRate={5}
                label={'Muita energia'}
                rateOffSymbol={boltDuotone}
                rateOnSymbol={boltOutline}
              />
              <RateCard
                initialRate={1}
                maxRate={1}
                label={'Ambiente amplo'}
                rateOffSymbol={maximize}
                rateOnSymbol={maximize}
              />
              <RateCard
                initialRate={1}
                maxRate={3}
                label={'Pequenino'}
                rateOffSymbol={circleDuotone}
                rateOnSymbol={circleFill}
              />
            </CharacteristicsList>
          </SectionPet>

          <SectionContact>
            <SquashIcon>
              <img src={logoImg} alt="Face cachorro" />
            </SquashIcon>
            <div>
              <h2>{petDetail.org?.nome}</h2>
              <p>{petDetail.org?.address}</p>
            </div>
            <div className="contact-info">
              <button>
                <img src={whatsappFill} alt="" />
                <span>{formatPhoneNumber(petDetail.org?.whatsappNumber)}</span>
              </button>
            </div>
          </SectionContact>

          <SectionRequired>
            <header>
              <h2>Requisitos para adoção</h2>
            </header>
            <ul>
              {requirements.map((requirement) => {
                return (
                  <li key={requirement.id}>
                    <img src={alertOutline} alt="" />
                    {requirement.title}
                  </li>
                )
              })}
            </ul>
          </SectionRequired>

          <FooterActions>
            <button>
              <img src={whatsappWhite} alt="" />
              <span>Entrar em Contato</span>
            </button>
          </FooterActions>
        </ProfileContainer>
      </Content>
    </Container>
  )
}
