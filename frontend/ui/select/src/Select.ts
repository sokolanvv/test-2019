import { createElement, ChangeEvent } from 'react'
import styled from '@emotion/styled'

interface SelectProps {
  color?: string
  borderColor?: string
  disabled?: boolean
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void
}

const Select = ({
  color,
  borderColor,
  disabled,
  onChange,
  ...props
}: SelectProps) => createElement('select', {
  color,
  borderColor,
  disabled,
  onChange: ({ target }) => onChange(target.value),
  ...props
})

export default Select