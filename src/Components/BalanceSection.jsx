import styled from '@emotion/styled'
import { Box, Typography } from '@mui/material'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'

const MainBox = styled(Box)({
  marginInline: '10px',
  border: '1px solid lightgrey',
  borderRadius: '15px',
  width: '85%',
  padding: '10px',
})

const StyledBox = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '10px',
  paddingBottom: '10px',
  margin: ' 10px 0',
  borderBottom: '1px solid lightgrey',
})

const Heading = styled(Typography)({
  color: 'grey',
  fontFamily: 'poppins',
  padding:"5px 0"
})

const InnerBox1 = styled(Box)({
  color: 'green',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

const InnerBox2 = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'red',
})

const StyledText = styled(Typography)({
  fontFamily: 'poppins',
  fontWeight: '700',
})

export default function BalanceSection() {
  return (
    <MainBox>
      {/* top section */}
      <Heading>Your Balance</Heading>
      <StyledBox>
        <StyledText variant="h6">$123,234</StyledText>
        <InnerBox1>
          <ArrowUpwardIcon />
          <span>53.88%</span>
        </InnerBox1>
        <InnerBox2>
          <ArrowUpwardIcon />
          <span>23.12%</span>
        </InnerBox2>
      </StyledBox>
      {/* Bottom section */}
      <StyledBox style={{border:"none"}}>
          <Box>
               <Heading>Currency</Heading>
               <StyledText>USD/US Doller</StyledText>
          </Box>
          <Box>
               <Heading>Status</Heading>
               <StyledText>Active</StyledText>
          </Box>
      </StyledBox>
    </MainBox>
  )
}
