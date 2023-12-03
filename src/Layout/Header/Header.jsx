import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
// import ListItemText from '@mui/material/ListItemText'
import useMediaQuery from '@mui/material/useMediaQuery'
import logo from '../../Assets/Images/appLogo.png'
import { Avatar, Box, Button } from '@mui/material'
import GridViewIcon from '@mui/icons-material/GridView'
import SwapVertIcon from '@mui/icons-material/SwapVert'
import PaymentsIcon from '@mui/icons-material/Payments'
import SsidChartIcon from '@mui/icons-material/SsidChart'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import SettingsIcon from '@mui/icons-material/Settings'
import LightModeIcon from '@mui/icons-material/LightMode'
import BedtimeIcon from '@mui/icons-material/Bedtime'
import styled from '@emotion/styled'

const styles = {
  header: {
    backgroundColor: 'white',
    height: '60px',
    boxShadow: 'none',
    padding: '0',
  },
  navContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  navLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    color:'black'
  },
  navRight: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: '10px',
  },
  drawerList: {
    width: 250,
  },
}

const StyledImage = styled('img')({
  marginRight: '20px',
  width: '100px',
})

const StyledButton = styled(Button)({
  padding: '5px',
  borderRadius: '5px',
  color: 'grey',
  textTransform: 'none',
  fontSize: '11px',
  fontFamily: 'Poppins, sans-serif',
})

const IconBox = styled('div')({
  backgroundColor: '#F5F6FA',
  width: '35px',
  height: '35px',
  borderRadius: '50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'grey',
})

const ModeBox = styled('div')({
  backgroundColor: '#F5F6FA',
  width: '75px',
  height: '35px',
  borderRadius: '10px',
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  color: 'grey',
  transition: '0.5s',
})

const selected = {
  backgroundColor: '#ffff',
  width: '47%',
  height: '28px',
  borderRadius: '8px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px',
  color: '#00B3FF',
  transition: '0.5s',
}

const Header = () => {
  const isSmallScreen = useMediaQuery('(max-width:800px)')
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open)
  }

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <AppBar position="static" style={styles.header}>
      <Toolbar style={styles.navContainer}>
        <Box style={styles.navLeft}>
          {isSmallScreen && (
            <IconButton onClick={toggleDrawer(true)} color="inherit">
              <MenuIcon />
            </IconButton>
          )}
          <StyledImage src={logo} alt="logo" />
          {!isSmallScreen && (
            <>
              <StyledButton size="small" startIcon={<GridViewIcon />}>
                Overview
              </StyledButton>
              <StyledButton size="small" startIcon={<SwapVertIcon />}>
                Transaction
              </StyledButton>
              <StyledButton size="small" startIcon={<PaymentsIcon />}>
                Invoice
              </StyledButton>
              <StyledButton size="small" startIcon={<SsidChartIcon />}>
                Activity
              </StyledButton>
            </>
          )}
        </Box>
        <Box style={styles.navRight}>
          {!isSmallScreen && (
            <>
              <ModeBox onClick={toggleDarkMode}>
                <Box style={!darkMode ? selected : {}}>
                  <LightModeIcon />
                </Box>
                <Box style={darkMode ? selected : {}}>
                  <BedtimeIcon />
                </Box>
              </ModeBox>

              <IconBox>
                <NotificationsNoneIcon />
              </IconBox>
              <IconBox>
                <SettingsIcon />
              </IconBox>
              <Avatar alt="Avatar" src="/" />
            </>
          )}
        </Box>
      </Toolbar>

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        style={{ color: 'black' }}
        className='Hamburger'
      >
        <List style={styles.drawerList}>

        <StyledImage style={{marginLeft:"20px"}} src={logo} alt="logo" />
          <ListItem>
            <StyledButton size="small" startIcon={<GridViewIcon />}>
              Overview
            </StyledButton>
          </ListItem>
          <ListItem>
            <StyledButton size="small" startIcon={<SwapVertIcon />}>
              Transaction
            </StyledButton>
          </ListItem>
          <ListItem>
            <StyledButton size="small" startIcon={<PaymentsIcon />}>
              Invoice
            </StyledButton>
          </ListItem>
          <ListItem>
            <StyledButton size="small" startIcon={<SsidChartIcon />}>
              Activity
            </StyledButton>
          </ListItem>
          <ListItem>
          <NotificationsNoneIcon />
          </ListItem>
          <ListItem>
          <SettingsIcon />
          </ListItem>
          <ListItem>
          <StyledButton size="small" startIcon={<PaymentsIcon/>}>
              Card Details
            </StyledButton>
          </ListItem>
          <ListItem>
          <Typography>User's Name</Typography>
          </ListItem>
        </List>
      </Drawer>
    </AppBar>
  )
}

export default Header
