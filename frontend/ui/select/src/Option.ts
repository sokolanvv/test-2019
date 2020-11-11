import styled from "@emotion/styled"

interface OptionElement {
  color?: string
  backgroundColor?: string
}

const Option = styled('option', {})<OptionElement>()

export default Option