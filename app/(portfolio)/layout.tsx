'use client'
import { Avatar, Grid, styled } from '@mui/material'
import { AppBar, Badge, Box, IconButton,  Typography } from "@mui/material";
import NotificationsIcon from '@mui/icons-material/Notifications';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import PopOverMenu from '../components/PopOverMenu/PopOverMenu';
import {MenuList} from './helpers/TopNavMenu';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

  return (
    <html lang="en">
      <body >
      <Box >
      <Grid container>
        <Grid item xs={12}>
          <AppBar position="fixed" color='primary'>
          <Grid container ml={4} display={"flex"} justifyContent={"space-evenly"} p={2}> 
            <Grid item xs={5} display={"flex"} alignItems={'center'} columnGap={2}>
              <Avatar >NV</Avatar>
              <Typography
              component="h1"
              variant="h6"              
              >
              Nune Vinay Kumar
            </Typography>
            </Grid>
            <Grid item xs={6} display={"flex"} alignItems={'center'} justifyContent={"space-between"} >
              <Box display={"flex"} justifyContent={"space-between"} columnGap={3} mr={6}>
                {MenuList.map((menu,index)=><PopOverMenu key={index} menu={menu}/>)}
              </Box>
              <IconButton color="inherit">
                <TwitterIcon/>
              </IconButton>
              <IconButton color="inherit">
                <InstagramIcon/>
              </IconButton>
              <IconButton color="inherit">
                <LinkedInIcon/>
              </IconButton>
              <IconButton color="inherit">
                <GitHubIcon/>
              </IconButton>
            </Grid>

          </Grid>
          
          </AppBar>
          <Offset/>
      </Grid>
      <Grid item xs={12} display={"flex"} justifyContent={"center"} alignItems={"center"}>
              {children}
        </Grid>
      </Grid>
    
    </Box>
        </body>
    </html>
  )
}
