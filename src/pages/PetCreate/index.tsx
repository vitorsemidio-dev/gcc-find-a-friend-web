import { zodResolver } from '@hookform/resolvers/zod'
import { Gear, Plus } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Alert } from '@/components/Alert'
import {
  ageOptions,
  energyOptions,
  environmentsOptions,
  genderOptions,
  independenceOptions,
  sizeOptions,
} from '@/components/Aside'
import { InputSelect, InputText, InputTextArea } from '@/components/Input'
import { Sidebar } from '@/components/Sidebar'

import { SquashIcon } from '../PetProfile/styles'
import {
  AddButton,
  AdoptionRequirementList,
  Button,
  Container,
  FieldsetContainer,
  FormContainer,
  Header,
  PetCreateContainer,
} from './styles'

import logoImg from '@/assets/icons/logo.svg'
const createPetSchema = z.object({
  name: z.string().min(3).max(100),
  description: z.string().min(3).max(300),
  age: z.string().nonempty(),
  size: z.string().nonempty(),
  gender: z.string().nonempty(),
  independence: z.string().nonempty(),
  energy: z.string().nonempty(),
  environment: z.string().nonempty(),
})

type CreatePetSchema = z.infer<typeof createPetSchema>

export function PetCreate() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreatePetSchema>({
    resolver: zodResolver(createPetSchema),
  })
  console.log(errors)

  async function handleCreatePet(createPetSchema: CreatePetSchema) {
    try {
      console.log(createPetSchema)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <Container>
      <Sidebar />
      <Header>
        <SquashIcon>
          <img src={logoImg} alt="Face cachorro" />
        </SquashIcon>
        <div>
          <h2>Nome Org</h2>
          <p>Endereço org</p>
        </div>
        <button>
          <Gear size={24} weight="bold" />
        </button>
      </Header>
      <PetCreateContainer>
        <h1>Adicione um pet</h1>

        <FormContainer onSubmit={handleSubmit(handleCreatePet)}>
          <InputText
            label="Nome"
            errorMessage={errors.name?.message}
            {...register('name')}
          />
          <InputTextArea
            label="Sobre"
            labelExtraText="Máximo de 300 catacteres"
            rows={4}
            errorMessage={errors.description?.message}
            {...register('description')}
          />
          <InputSelect
            label="Idade"
            options={ageOptions}
            // onChange={(e: any) => {
            //   console.log(e)
            // }}
            errorMessage={errors.age?.message}
            {...register('age')}
          />
          <InputSelect
            label="Porte do animal"
            options={sizeOptions}
            // onChange={(e: any) => {
            //   console.log(e)
            // }}
            errorMessage={errors.size?.message}
            {...register('size')}
          />
          <InputSelect
            label="Gênero	"
            options={genderOptions}
            errorMessage={errors.gender?.message}
            {...register('gender')}
          />
          <InputSelect
            label="Nível de independência"
            options={independenceOptions}
            // onChange={(e: any) => {
            //   console.log(e)
            // }}
            errorMessage={errors.independence?.message}
            {...register('independence')}
          />
          <InputSelect
            label="Nível de energia"
            options={energyOptions}
            // onChange={(e: any) => {
            //   console.log(e)
            // }}
            errorMessage={errors.energy?.message}
            {...register('energy')}
          />
          <InputSelect
            label="Ambiente"
            options={environmentsOptions}
            // onChange={(e: any) => {
            //   console.log(e)
            // }}
            errorMessage={errors.environment?.message}
            {...register('environment')}
          />
          <div>
            <InputText label="Fotos" />
            <AddButton>
              <Plus size={20} />
            </AddButton>
          </div>

          <FieldsetContainer>
            <legend>
              <h2>Requesitos para adoção</h2>
            </legend>
            <div>
              <InputText label="Requisito" />
              <AddButton>
                <Plus size={20} />
              </AddButton>
            </div>

            {/* Requirement list */}
            <div>
              <AdoptionRequirementList>
                <Alert text="Requisito 1" showCloseButton></Alert>
                <Alert text="Requisito 2"></Alert>
              </AdoptionRequirementList>
            </div>
          </FieldsetContainer>

          <Button type="submit">Confirmar</Button>
        </FormContainer>
      </PetCreateContainer>
    </Container>
  )
}
