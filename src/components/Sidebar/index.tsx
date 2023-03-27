import logo from '@/assets/icons/logo.svg'
import arrowLeft from '@/assets/icons/arrow-left.svg'
import { Button } from '@/components/Button'

import { Container } from './styles'
import { useNavigate } from 'react-router-dom'

export function Sidebar() {
  const navigate = useNavigate()

  const handleGoBack = () => {
    navigate(-1)
  }

  return (
    <Container>
      <img src={logo} alt="" />

      <Button style={{ width: 48, height: 48 }} onClick={handleGoBack}>
        <img src={arrowLeft} alt="" />
      </Button>
    </Container>
  )
}
