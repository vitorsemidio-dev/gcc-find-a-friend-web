import { useState } from 'react'
import { useParams } from 'react-router-dom'

import alertOutline from '@/assets/icons/alert-outline.svg'
import boltDuotone from '@/assets/icons/bolt-duotone.svg'
import boltOutline from '@/assets/icons/bolt-outline.svg'
import circleDuotone from '@/assets/icons/circle-duotone.svg'
import circleFill from '@/assets/icons/circle-fill.svg'
import logoImg from '@/assets/icons/logo.svg'
import maximize from '@/assets/icons/maximize.svg'
import { ButtonWhatsApp } from '@/components/ButtonWhatsApp'
import { ChipPhoneNumber } from '@/components/ChipPhoneNumber'
import { RateCard } from '@/components/RateCard'
import { energyRecord, sizeRecord } from '@/constant/pet-record'
import { usePetDetail, usePetGallery, usePetRequirements } from '@/hooks/usePet'

import {
  CharacteristicsList,
  Container,
  Content,
  FooterActions,
  Header,
  Banner,
  ImageList,
  ImageListItem,
  ProfileContainer,
  RequirementList,
  RequirementListItem,
  SectionContact,
  SectionImages,
  SectionPet,
  SectionRequirement,
  SquashIcon,
} from './styles'

type PetProfileParams = {
  id: string
}

export function PetProfile() {
  const params = useParams<PetProfileParams>()

  const petDetail = usePetDetail(params.id)
  const petImages = usePetGallery(params.id)
  const requirements = usePetRequirements(params.id)
  const [imageSelected, setImageSelected] = useState<string>(
    petDetail.photo_url,
  )

  return (
    <Container>
      <Content>
        <Header>
          <p>Seu novo melhor amigo</p>
        </Header>
        <ProfileContainer>
          <SectionImages>
            <Banner>
              <img
                src={imageSelected || petDetail.photo_url}
                alt={petDetail.name}
              />
            </Banner>
            <ImageList>
              {petImages.map((image) => (
                <ImageListItem
                  key={image.id}
                  onClick={() => setImageSelected(image.photo_url)}
                >
                  <img
                    src={image.photo_url}
                    alt=""
                    className={
                      imageSelected
                        ? imageSelected === image.photo_url
                          ? 'active'
                          : ''
                        : petImages.at(0)?.photo_url === image.photo_url
                        ? 'active'
                        : ''
                    }
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </SectionImages>

          <SectionPet>
            <h1>{petDetail.name}</h1>
            <p>{petDetail.description}</p>
            <CharacteristicsList>
              <RateCard
                initialRate={energyRecord[petDetail?.energy]?.valueAsNumber}
                maxRate={5}
                label={energyRecord[petDetail?.energy]?.label}
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
                initialRate={sizeRecord[petDetail?.size]?.valueAsNumber}
                maxRate={3}
                label={sizeRecord[petDetail?.size]?.label}
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
              <ChipPhoneNumber phoneNumber={petDetail.org?.whatsappNumber} />
            </div>
          </SectionContact>

          <SectionRequirement>
            <header>
              <h2>Requisitos para adoção</h2>
            </header>
            <RequirementList>
              {requirements.map((requirement) => (
                <RequirementListItem key={requirement.id}>
                  <img src={alertOutline} alt="" />
                  {requirement.title}
                </RequirementListItem>
              ))}
            </RequirementList>
          </SectionRequirement>

          <FooterActions>
            <ButtonWhatsApp
              label="Entrar em Contato"
              whatsappNumber={petDetail.org?.whatsappNumber}
            />
          </FooterActions>
        </ProfileContainer>
      </Content>
    </Container>
  )
}
