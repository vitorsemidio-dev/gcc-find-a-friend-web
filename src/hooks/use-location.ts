import { api } from '@/services/http'
import { useCallback, useEffect, useState } from 'react'

export function useCoordinates(cep?: string) {
  const [coordinates, setCoordinates] = useState<{
    latitude: number
    longitude: number
  }>({} as any)

  const getCoordinatesByCep = useCallback(async () => {
    if (!cep) return
    const { data } = await api.get<{
      coordinates: { latitude: string; longitude: string }
    }>(`/location/coordinates/${cep}`)

    setCoordinates({
      latitude: Number(data.coordinates.latitude),
      longitude: Number(data.coordinates.longitude),
    })
  }, [cep])

  useEffect(() => {
    getCoordinatesByCep()
  }, [cep, getCoordinatesByCep])

  return coordinates
}
