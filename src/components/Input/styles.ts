import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const InputWrapper = styled.div`
  display: flex;
  width: 100%;

  background-color: #f5f8fa;
  border: 1px solid #d3e2e5;
  border-radius: 10px;
  padding: 18px;
`

export const ErrorMessage = styled.span`
  font-size: 0.875rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors.danger};
  margin-top: 0.25rem;
`
