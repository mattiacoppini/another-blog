import { css } from 'styled-components'
import { ISpacingStylesProperties } from './interfaces'

export const SpacingStylesProperties = css<ISpacingStylesProperties>`
  margin: ${({ margin }) => margin};
  margin-top: ${({ marginTop }) => marginTop};
  margin-bottom: ${({ marginBottom }) => marginBottom};
  margin-left: ${({ marginLeft }) => marginLeft};
  margin-right: ${({ marginRight }) => marginRight};
`