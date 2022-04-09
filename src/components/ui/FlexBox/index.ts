import styled from "styled-components";
import Box, { IBoxStyleProps } from "../Box";

interface IBaseFlexBoxStylesProps {
  alignItems?: string;
  justifyContent?: string;
}

type IFlexBoxStylesProps = IBaseFlexBoxStylesProps & IBoxStyleProps;

export const FlexBox = styled(Box).attrs(({ display: 'flex' }))<IFlexBoxStylesProps>`
  align-items: ${({ alignItems }) => alignItems };
  justify-content: ${({ justifyContent }) => justifyContent };
`

export default FlexBox;
