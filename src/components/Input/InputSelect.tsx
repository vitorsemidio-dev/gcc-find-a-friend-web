import chevron from '@/assets/icons/chevron-bottom.svg'
import { ChangeEvent, ComponentProps, forwardRef } from 'react'

import {
  Filter,
  FilterLabel,
  FilterInput,
  FilterInputOption,
  FilterWrapper,
  ErrorMessage,
} from './styles'

type SelectProps = ComponentProps<typeof FilterInput> & {
  label: string
  name: string
  options: {
    value: string | number
    label: string
  }[]
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void
  errorMessage?: string
}

export const InputSelect = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, name, options, errorMessage, onChange }, ref) => {
    return (
      <Filter>
        {label && <FilterLabel htmlFor={name}>{label}</FilterLabel>}
        <FilterWrapper>
          <FilterInput name={name} id={name} onChange={onChange} ref={ref}>
            <FilterInputOption value="">Selecione</FilterInputOption>
            {options.map((option) => {
              return (
                <FilterInputOption key={option.value} value={option.value}>
                  {option.label}
                </FilterInputOption>
              )
            })}
          </FilterInput>
          <img src={chevron} alt="" />
        </FilterWrapper>
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </Filter>
    )
  },
)

InputSelect.displayName = 'InputSelect'
