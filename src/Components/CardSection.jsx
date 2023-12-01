import React from 'react'
import styled from '@emotion/styled'
import { Box, Button, TextField, Typography } from '@mui/material'
import Card from '../../src/Assets/Images/creditCard.png'
import BalanceSection from './BalanceSection'
import AddButton from './AddButton'

const StyledText = styled(Typography)({
  fontFamily: 'poppins',
  fontWeight: '700',
  padding: '0px 10px 10px 10px',
})

const StyledImage = styled('img')({
  width: '100%',
})

const StyledText2 = styled(Typography)({
  fontFamily: 'poppins',
  fontWeight: '700',
  padding: '30px 10px 10px 10px',
})

const BoxContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  overflow: 'hidden',
  gap: '10px',
  padding: '0px 10px',
})

const IconBoxes = styled(Box)({
  width: '35px',
  height: '35px',
  borderRadius: '50%',
  backgroundColor: 'lightgray',
})

const StyledText3 = styled(Typography)({
  fontFamily: 'poppins',
  color: 'grey',
  fontSize: '12px',
  padding: '10px',
})

const StyledTextField = styled(TextField)({
  border: '1px solid #00B3FF',
  width: '90%',
  borderRadius: '10px',
  marginLeft: '10px',
  fontSize: '16px',
  outline: 'none',
  '& .MuiInputBase-input': {
    padding: '6px',
  },
})

const ButtonContainer = styled(Box)({
  padding: '20px 10px 10px 10px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '10px',
  width: '90%',
})

const StyledButtons = styled(Button)({
  width: '45%',
  height: '35px',
  borderRadius: '10px',
  textTransform: 'none',
  color: 'black',
  fontFamily: 'poppins',
})

export default function CardSection() {
  return (
    <>
      <StyledText variant="h6">My Card</StyledText>
      <StyledImage src={Card} alt="logo" />
      <BalanceSection />
      <AddButton />
      <StyledText2 variant="h6">Quick Transfer </StyledText2>
      <BoxContainer>
        <IconBoxes></IconBoxes>
        <IconBoxes></IconBoxes>
        <IconBoxes></IconBoxes>
        <IconBoxes></IconBoxes>
        <IconBoxes></IconBoxes>
        <IconBoxes></IconBoxes>
        <IconBoxes></IconBoxes>
      </BoxContainer>
      <StyledText3 variant="h6">Card Number </StyledText3>
      <StyledTextField
        type="number"
        variant="outlined"
        placeholder="XXXX XXXX XXXX XXXX"
      ></StyledTextField>
      <ButtonContainer>
        <StyledButtons style={{ backgroundColor: '#00B3FF', color: '#ffff' }}>
          Send Money
        </StyledButtons>
        <StyledButtons style={{ backgroundColor: 'lightgrey' }}>
          Save as Draft
        </StyledButtons>
      </ButtonContainer>
    </>
  )
}
