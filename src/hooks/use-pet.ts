import { useCallback, useEffect, useState } from 'react'

import { api } from '@/services/http'
import {
  PetDetail,
  PetGallery,
  PetRequirement,
  ResponsePet,
  ResponsePetGallery,
  ResponsePetRequirements,
} from '@/models/pet'

export function usePetDetail(petId?: string) {
  const [petDetail, setPetDetail] = useState<PetDetail>({} as PetDetail)

  const fetchPetDetail = useCallback(async () => {
    if (!petId) return
    const { data } = await api.get<ResponsePet>(`/pets/show/${petId}`)
    setPetDetail(data.pet)
  }, [petId])

  useEffect(() => {
    fetchPetDetail()
  }, [petId, fetchPetDetail])

  return petDetail
}

export function usePetGallery(petId?: string) {
  const [petGallery, setPetGallery] = useState<PetGallery[]>([])

  const fetchPetGallery = useCallback(async () => {
    if (!petId) return
    const { data } = await api.get<ResponsePetGallery>(`/pets/gallery/${petId}`)
    setPetGallery(data.pet_gallery)
  }, [petId])

  useEffect(() => {
    fetchPetGallery()
  }, [petId, fetchPetGallery])

  return petGallery
}

export function usePetRequirements(petId?: string) {
  const [requirements, setRequirements] = useState<PetRequirement[]>([])

  const fetchPetRequirements = useCallback(async () => {
    if (!petId) return
    const { data } = await api.get<ResponsePetRequirements>(
      `/pets/adoption-requirements/${petId}`,
    )
    setRequirements(data.adoption_requirements)
  }, [petId])

  useEffect(() => {
    fetchPetRequirements()
  }, [petId, fetchPetRequirements])

  return requirements
}
