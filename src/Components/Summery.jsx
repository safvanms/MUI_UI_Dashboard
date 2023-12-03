import styled from '@emotion/styled'
import { Box, Typography, useMediaQuery } from '@mui/material'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'


const StyledContainer = styled(Box)({
  width: '200px',
  height: '75px',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  border: '1px solid lightgrey',
  borderRadius: '10px',
  backgroundColor:"white"
})

const InnerBox1 = styled(Box)({
  width: '7px',
  height: '100%',
  borderRadius: '10px 0px 0px 10px',
})

const InnerBox2 = styled(Box)({
  width: '193px',
  height: '100%',
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
})

const StyledText1 = styled(Typography)({
  fontSize: '11px',
  color: 'grey',
  fontFamily: 'poppins',
})

const StyledText2 = styled(Typography)({
  fontSize: '16px',
  color: 'black',
  fontFamily: 'poppins',
  fontWeight:"700"
})

const StyledText3 = styled(Typography)({
  fontSize: '10px',
  color: 'green',
  fontFamily: 'poppins',
  backgroundColor: 'lightGreen',
  borderRadius:"4px",
  padding:"4px",
})

export default function Summery({item,amount,bg,percentage}) {
  const isSmallScreen = useMediaQuery('(max-width:500px)')
  return (
    <StyledContainer style={{width:isSmallScreen?"40%":""}}>
      <InnerBox1 style={{backgroundColor:bg}} ></InnerBox1>
      <InnerBox2>
        <Box>
          <StyledText1>{item}</StyledText1>
          <StyledText2>${amount}</StyledText2>
        </Box>
        <Box>
         {percentage && <StyledText3><ArrowUpwardIcon style={{fontSize:"10px"}}/> {percentage}%</StyledText3>}
        </Box>
      </InnerBox2>
    </StyledContainer>
  )
}
