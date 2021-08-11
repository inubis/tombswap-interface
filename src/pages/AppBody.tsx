import React from 'react'
import styled from 'styled-components/macro'

export const BodyWrapper = styled.div<{ margin?: string; maxWidth?: string }>`
  position: relative;
  margin-top: ${({ margin }) => margin ?? '0px'};
  max-width: ${({ maxWidth }) => maxWidth ?? '480px'};
  width: 100%;
  background: ${({ theme }) => theme.bg0};
  box-shadow: 0 0 17px 3px #ffe50b, 0 0 4px 2px #ffe50b;
  border-radius: 24px;
  margin-top: 1rem;
`

/**
 * The styled container element that wraps the content of most pages and the tabs.
 */
export default function AppBody({ children, ...rest }: { children: React.ReactNode }) {
  return <BodyWrapper {...rest}>{children}</BodyWrapper>
}
