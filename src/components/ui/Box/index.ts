import styled from "styled-components";
import { IColorsStyleProperties, IDimensionsStyleProperties, ISpacingStylesProperties } from "../common/interfaces";
import { SpacingStylesProperties } from "../common/styles";
import { ShadowThemeKeys } from '../themes/shadow';

interface IBaseBoxStyleProps {
  display?: 'flex' | 'block';
  boxShadow?: ShadowThemeKeys
};

export type IBoxStyleProps = IBaseBoxStyleProps & IColorsStyleProperties & IDimensionsStyleProperties & ISpacingStylesProperties;

const Box = styled.div<IBoxStyleProps>`
  display: ${({ display }) => display};
  background-color: ${({ background }) => background};
  height: ${({ height }) => height };
  width: ${({ width }) => width };
  box-shadow: ${( { theme , boxShadow } ) => theme[boxShadow]};

  ${SpacingStylesProperties}
`;

export default Box;