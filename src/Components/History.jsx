import styled from '@emotion/styled'
import { Box, Typography, useMediaQuery } from '@mui/material'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'

const histories = [
  {
    item: '1',
    content: 'Order Revenue',
    date: 'April 22, 23',
    price: '874',
  },
  {
    item: '2',
    content: 'Withdrawal Initiate',
    date: 'April 25, 23',
    price: '-2490',
  },
  {
    item: '3',
    content: 'Order Revenue',
    date: 'March 02, 23',
    price: '126',
  },
  {
    item: '6',
    content: 'order ',
    date: 'March 18, 23',
    price: '1300',
  },
]

const StyledContainer = styled(Box)({
  minWidth: '45%',
  border: '1px solid lightgrey',
  borderRadius: '10px',
  padding: '20px',
  marginTop: '10px',
  backgroundColor:"white",
  height:"90%"

})

const HistoryHeader = styled(Box)({
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
  fontSize: '10px',
  color: '#00B3FF',
  fontFamily: 'poppins',
})

const HistoryBody = styled(Box)({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  gap: '5px',
  marginTop: '15px',
})

const SubBody = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
})

const GrandChildBody = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
})

const IconContainer = styled(Box)({
  width: '40px',
  height: '35px',
  borderRadius: '10px',
  backgroundColor: 'lightBlue',
  color: '#00B3FF',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

const StyledText3 = styled(Typography)({
  fontSize: '12px',
  color: 'black',
  fontFamily: 'poppins',
  fontWeight: '700',
})

const StyledText4 = styled(Typography)({
  fontSize: '12px',
  color: 'black',
  fontFamily: 'poppins',
})

const StyledText5 = styled(Typography)({
  fontSize: '12px',
  fontFamily: 'poppins',
})

export default function History() {
  const isSmallScreen = useMediaQuery('(max-width:800px)')
  const mediumScreen = useMediaQuery('(max-width:1140px)')


  return (
    <>
      <StyledContainer style={{width:isSmallScreen||mediumScreen?"95%":''}}>
        <HistoryHeader>
          <StyledText1>History Transactions</StyledText1>
          <StyledText2>View All</StyledText2>
        </HistoryHeader>
        {histories.map(({ item, content, date, price }) => (
          <HistoryBody key={item}>
            <IconContainer>
              <ArrowUpwardIcon />
            </IconContainer>
            <SubBody>
              <GrandChildBody>
                <StyledText3>{content}</StyledText3>
                <StyledText4>{date}</StyledText4>
              </GrandChildBody>
              <GrandChildBody>
                <StyledText5 style={{ color: price < 0 ? 'red' : 'green' }}>
                  ${price}
                </StyledText5>
              </GrandChildBody>
            </SubBody>
          </HistoryBody>
        ))}
      </StyledContainer>
    </>
  )
}
