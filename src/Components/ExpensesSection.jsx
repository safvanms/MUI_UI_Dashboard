import styled from '@emotion/styled'
import { Box, Typography, useMediaQuery } from '@mui/material'
import Circle from '../../src/Assets/Images/circle.png'

const StyledContainer = styled(Box)({
  width: '42%',
  border: '1px solid lightgrey',
  borderRadius: '10px',
  padding: '20px',
  marginTop:"10px",
  backgroundColor:"white",
  height:"90%"
})

const ExpenseHeader = styled(Box)({
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
  border: '1px solid lightgrey',
  borderRadius: '10px',
  padding: '5px 10px',
})

const ExpensesBody = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
})

const SubBody = styled(Box)({
  marginTop: '12px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '4px',
})

const StyledText3 = styled(Typography)({
  fontSize: '10px',
  color: 'Grey',
  fontFamily: 'poppins',
})

const StyledText4 = styled(Typography)({
  fontSize: '13px',
  color: 'black',
  fontFamily: 'poppins',
  fontWeight: '700',
})

const StyledImage = styled('img')({
     width:"350px",
     paddingTop:"30px"
   })

export default function ExpensesSection() {
  const isSmallScreen = useMediaQuery('(min-width:370px)and(max-width:800px)')
  const mediumScreen = useMediaQuery('(max-width:1140px)')

  return (
    <>
      <StyledContainer 
      style={{
        width: isSmallScreen || mediumScreen ? '95%' : '',
        marginTop: isSmallScreen ? '200px' : mediumScreen ? '480px' : '0px',
      }}
      >
        <ExpenseHeader>
          <StyledText1>All Expenses</StyledText1>
          <StyledText2>View All</StyledText2>
        </ExpenseHeader>
        <ExpensesBody>
          <SubBody>
            <StyledText3>Daily</StyledText3>
            <StyledText4>$ 475</StyledText4>
          </SubBody>
          <SubBody>
            <StyledText3>Weekly</StyledText3>
            <StyledText4>$ 3,327</StyledText4>
          </SubBody>
          <SubBody>
            <StyledText3>Monthly</StyledText3>
            <StyledText4>$ 12,131</StyledText4>
          </SubBody>
          </ExpensesBody>
          <StyledImage src={Circle} alt='circle' />
      </StyledContainer>
    </>
  )
}
