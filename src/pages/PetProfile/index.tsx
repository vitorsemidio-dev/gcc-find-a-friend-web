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

export function PetProfile() {
  const petImages = Array(6)
    .fill({
      url: 'http://localhost:3333/images/yoda.jpeg',
    })
    .map((image, index) => {
      return {
        ...image,
        id: String(index),
      }
    })

  const requireds = [
    'Local grande para o animal correr e brincar.',
    'Proibido apartamento.',
    'Ambiente frio, pois possui muito pelo.',
    'Cão com intolerância a lactose.',
  ]

  return (
    <Container>
      <Content>
        <Header>
          <p>Seu novo melhor amigo</p>
        </Header>
        <ProfileContainer>
          <SectionImages>
            <ImageFullCardContainer>
              <img
                src="http://localhost:3333/images/yoda.jpeg"
                alt="Gato Yoda"
              />
            </ImageFullCardContainer>
            <ul>
              {petImages.map((image) => {
                return (
                  <li key={image.id}>
                    <img src={image.url} alt="Gato Yoda" />
                  </li>
                )
              })}
            </ul>
          </SectionImages>

          <SectionPet>
            <h1>Alfredo</h1>
            <p>
              Eu sou um lindo doguinho de 3 anos, um jovem bricalhão que adora
              fazer companhia, uma bagunça mas também ama uma soneca.
            </p>
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
              <h2>Seu Cãopanheiro</h2>
              <p>Rua do meio, 123 , Boa viagem, Recife - PE</p>
            </div>
            <div className="contact-info">
              <button>
                <img src={whatsappFill} alt="" />
                <span> 81 1234.4567</span>
              </button>
            </div>
          </SectionContact>

          <SectionRequired>
            <header>
              <h2>Requesitos para adoção</h2>
            </header>
            <ul>
              {requireds.map((required) => {
                return (
                  <li key={required}>
                    <img src={alertOutline} alt="" />
                    {required}
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
