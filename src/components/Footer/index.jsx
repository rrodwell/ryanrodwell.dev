import React from 'react'
import { Divider } from '@mui/material'
import { pxToRem } from '../../styles/utils'

import { FooterBar } from './styles'

export default function Footer() {
  return (
    <footer style={{ width: '100%' }}>
      <Divider sx={{ margin: `0 ${pxToRem(32)}` }} />
      <FooterBar>
        <div>Phone</div>
        <div>Email</div>
        <div>Follow Me</div>
        <div>Copyright</div>
      </FooterBar>
    </footer>
  )
}
