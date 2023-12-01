import styled from '@emotion/styled'
import { Box, Typography, useMediaQuery } from '@mui/material'
import BlueProgressBar from './ProgressBar'

const SavingsArray = [
  {
    item: 1,
    content: 'Gaming PC',
    amount: 309,
    percentage: '50',
  },
  {
    item: 2,
    content: 'New House',
    amount: 950,
    percentage: '90',
  },
  {
    item: 3,
    content: 'Summer Trip ',
    amount: 550,
    percentage: '40',
  },
  {
    item: 4,
    content: 'Wedding ',
    amount: 620,
    percentage: '60',
  },
  {
    item: 5,
    content: 'Top up game ',
    amount: 170,
    percentage: '20',
  },
]

const SavingsContainer = styled(Box)({
  borderRadius: '10px',
  border: '1px solid lightgrey',
  padding: '10px',
  minWidth: '30%',
  minHeight:"95%",
  backgroundColor:"white"
})

const SavingsHeader = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '10px',
})

const StyledText1 = styled(Typography)({
  fontSize: '16px',
  color: 'black',
  fontFamily: 'poppins',
  fontWeight: '700',
})

const StyledText2 = styled(Typography)({
  fontSize: '12px',
  color: '#00B3FF',
  fontFamily: 'poppins',
})

const SavingsBody = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginInline: '5px',
})

const StyledText3 = styled(Typography)({
  fontSize: '12px',
  color: 'black',
  fontFamily: 'poppins',
})

const ProgressBox = styled(Box)({
  marginInline: '5px',
  marginBottom:"10px"
})

export default function SavingsSec() {
  const isSmallScreen = useMediaQuery('(max-width:800px)')
  const mediumScreen = useMediaQuery('(max-width:1140px)')

  return (
    <>
      <SavingsContainer style={{width:isSmallScreen||mediumScreen?"100%":''}}>
        <SavingsHeader>
          <StyledText1>My Savings</StyledText1>
          <StyledText2>View All</StyledText2>
        </SavingsHeader>
        {SavingsArray.map(({ content, amount, percentage, item }) => (
          <>
            <SavingsBody key={item}>
              <StyledText3>{content}</StyledText3>
              <StyledText3> ${amount}</StyledText3>
            </SavingsBody>
            <ProgressBox>
              <BlueProgressBar percentage={percentage} />
            </ProgressBox>
          </>
        ))}
      </SavingsContainer>
    </>
  )
}
