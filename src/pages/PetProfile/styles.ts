import styled from 'styled-components'

function hexToRgb(hex: string, alpha = 1): string {
  const r = parseInt(hex.substring(1, 3), 16)
  const g = parseInt(hex.substring(3, 5), 16)
  const b = parseInt(hex.substring(5, 7), 16)
  const rgba = `rgba(${r}, ${g}, ${b}, ${alpha})`

  return rgba
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 44rem;
  margin: 0 auto;
  padding: 2.5rem 0rem 4rem;
`

export const Content = styled.div``

export const Header = styled.header`
  display: flex;
  justify-content: center;
  margin-bottom: 2.5rem;

  p {
    color: ${({ theme }) => theme.colors.gray};
    font-weight: 'semibold';
    font-size: 1.125rem;
    line-height: 28px;
  }
`

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem 4.5rem;
  background-color: ${({ theme }) => theme.colors.bgCard};
  color: ${({ theme }) => theme.colors.secondary};
  border-radius: 20px;
  overflow: hidden;
`
export const SectionPet = styled.section`
  margin-top: 70px;

  h1 {
    font-weight: 800;
    font-size: 3.375rem;
    line-height: 90%;
    letter-spacing: -0.02em;
    margin-bottom: 0.5em;
  }

  p {
    font-weight: 600;
    font-size: 1.125rem;
    line-height: 28px;
    margin-bottom: 0.5em;
  }
`

export const CharacteristicsList = styled.ul`
  margin-top: 2.5rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 14px;
`

export const SectionImages = styled.section`
  ul {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 1rem;
  }

  li {
    list-style: none;
    border-radius: 15px;
    overflow: hidden;

    img {
      max-width: 100%;
      object-fit: cover;
      object-position: center;
      aspect-ratio: 1/1;
      opacity: 0.3;
      transition: opacity 300ms;
    }

    img:hover {
      opacity: 1;
      cursor: pointer;
    }
  }
`

export const ImageFullCardContainer = styled.div`
  margin-top: -1.5rem;
  margin-left: -4.5rem;
  margin-right: -4.5rem;
  height: 336px;
  background-color: ${({ theme }) => theme.colors.bgCard};

  img {
    width: 100%;
    height: 336px;
    object-fit: cover;
    object-position: center;
  }
`

export const SectionContact = styled.section`
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  margin-top: 40px;
  padding-top: 55px;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1rem;
  align-items: center;

  h2 {
    font-weight: 700;
    font-size: 2rem;
    line-height: 90%;
    letter-spacing: -0.02em;
  }

  p {
    font-weight: 600;
    font-size: 1rem;
    line-height: 28px;
  }

  .contact-info {
    grid-column-start: 2;
    button {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 12px 24px;
      border-radius: 15px;
      background-color: ${({ theme }) =>
        hexToRgb(theme.colors.secondary, 0.05)};
      border: 2px solid transparent;
    }
  }
`

export const SquashIcon = styled.div`
  width: 64px;
  height: 64px;
  background-color: #f27006;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;

  img {
    width: 28px;
    height: 28px;
  }
`

export const SectionRequired = styled.section`
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  margin-top: 55px;
  padding-top: 55px;
  header {
    h2 {
      font-weight: 700;
      font-size: 2rem;
      line-height: 90%;
      letter-spacing: -0.02em;
    }
  }

  ul {
    margin-top: 2.5rem;

    li {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 12px 40px;
      color: ${({ theme }) => theme.colors.danger};
      border: 1px solid currentColor;
      margin-bottom: 1rem;
      border-radius: 15px;
      background-image: ${() =>
        `linear-gradient(
            90deg,
            ${hexToRgb('#F75F60', 0.1)},
            ${hexToRgb('#F15156', 0)}
        )`};
    }
  }
`

export const FooterActions = styled.footer`
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  margin-top: 50px;
  padding-top: 50px;

  button {
    font-weight: 800;
    font-size: 18px;
    line-height: 26px;
    color: ${({ theme }) => theme.colors.text};
    background-color: #3cdc8c;
    border: none;
    border-radius: 15px;
    width: 100%;
    padding: 18px 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }
`
