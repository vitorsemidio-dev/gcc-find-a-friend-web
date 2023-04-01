import { Route, Routes } from 'react-router-dom'

import { Home } from '@/pages/Home'
import { Map } from '@/pages/Map'
import { PetProfile } from '@/pages/PetProfile'
import { Login } from '@/pages/Login'
import { Register } from '@/pages/Register'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/map" element={<Map />} />
      <Route path="/login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/pet-profile/:id" element={<PetProfile />} />
    </Routes>
  )
}
