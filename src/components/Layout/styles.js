import { styled } from '@mui/material/styles'
import { Box, Card, CardContent } from '@mui/material'
import { pxToRem } from '../../styles/utils'

export const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  padding: ${pxToRem(32)};
  background-color: #f5f5f5;
`

export const BusinessCard = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
`

export const BusinessCardContent = styled(CardContent)`
  display: flex;
  flex-direction: row;
  flex: 1;
  width: 100%;
`
