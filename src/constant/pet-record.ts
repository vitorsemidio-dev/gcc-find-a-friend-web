type LabelValueType = {
  label: string
  valueAsNumber: number
}

export const energyRecord: Record<number, LabelValueType> = {
  1: { label: 'Muito baixa', valueAsNumber: 1 },
  2: { label: 'Baixa', valueAsNumber: 2 },
  3: { label: 'Média', valueAsNumber: 3 },
  4: { label: 'Alta', valueAsNumber: 4 },
  5: { label: 'Muito alta', valueAsNumber: 5 },
}

export const sizeRecord: Record<string, LabelValueType> = {
  small: {
    label: 'Pequenino',
    valueAsNumber: 1,
  },
  medium: {
    label: 'Médio',
    valueAsNumber: 2,
  },
  big: {
    label: 'Grande',
    valueAsNumber: 3,
  },
}
