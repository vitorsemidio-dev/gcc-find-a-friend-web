import { useCallback, useEffect, useState } from 'react'

import { api } from '@/services/http'

type PetGallery = {
  id: string
  image: string
  petId: string
  photo_url: string
}

export function usePetGallery(petId?: string) {
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

export function usePetDetail(petId?: string) {
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

type PetRequirement = {
  id: string
  title: string
  petId: string
}

export function usePetRequirements(petId?: string) {
  const [requirements, setRequirements] = useState<PetRequirement[]>([])

  const fetchPetRequirements = useCallback(async () => {
    if (!petId) return
    const { data } = await api.get<{ adoption_requirements: PetRequirement[] }>(
      `/pets/adoption-requirements/${petId}`,
    )
    setRequirements(data.adoption_requirements)
  }, [petId])

  useEffect(() => {
    fetchPetRequirements()
  }, [petId, fetchPetRequirements])

  return requirements
}
