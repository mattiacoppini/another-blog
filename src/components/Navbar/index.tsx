import React from 'react'
import styled from 'styled-components'

export const StyledNav = styled.nav`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  height: 40px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);

  font-size: 30px;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif; // TODO: Find right font-size as this sucks
`

export const NavBar = () => {
  return (
    <StyledNav>
      Another blog
    </StyledNav>
  )
}