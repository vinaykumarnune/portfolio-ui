import Image from 'next/image'
import styles from './page.module.css'
import { Container, Typography } from '@mui/material'
import dynamic from 'next/dynamic';

export default function Home() {
  return (<Container>
    <Typography>
      Next JS with MUI
    </Typography>
  </Container>
  )
}
