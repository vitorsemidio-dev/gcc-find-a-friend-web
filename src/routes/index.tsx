import { Route, Routes } from 'react-router-dom'

import { Home } from '@/pages/Home'
import { Map } from '@/pages/Map'
import { PetProfile } from '@/pages/PetProfile'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/map" element={<Map />} />
      <Route path="/pet-profile/:id" element={<PetProfile />} />
    </Routes>
  )
}
