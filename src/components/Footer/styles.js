import { styled } from '@mui/material/styles';
import { Box } from '@mui/material'
import { pxToRem } from '../../styles/utils'

export const FooterBar = styled(Box)`
  background-color: #f5f5f5;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: ${pxToRem(80)};
  padding: 0 ${pxToRem(32)};
`
