import { styled } from '@mui/material/styles'
import { Box } from '@mui/material'
import { pxToRem } from '../../styles/utils'

export const HeaderBar = styled(Box)`
  background-color: #f5f5f5;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: ${pxToRem(64)};
  padding: 0 ${pxToRem(32)};
`
