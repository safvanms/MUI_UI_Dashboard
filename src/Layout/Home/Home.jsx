import styled from '@emotion/styled'
import { Box, useMediaQuery } from '@mui/material'
import CardSection from '../../Components/CardSection'
import Summery from '../../Components/Summery'
import Graph from '../../Assets/Images/moneyFlow.png'
import SavingsSec from '../../Components/SavingsSec'
import ExpensesSection from '../../Components/ExpensesSection'
import History from '../../Components/History'

const StyledContainer = styled('div')({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  gap: '10px',
  padding: '20px',
})

const StyledBox1 = styled(Box)({
  // backgroundColor: 'lightblue',
  // padding: '10px',
  // marginRight: '10px',
  // borderRadius: '5px',
  width: '30%',
})

const StyledBox2 = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
})

const SummeryContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  gap: '20px',
  flexWrap: 'wrap',
})

const GraphsContainer = styled(Box)({
  width: '100%',
  height: '300px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  gap: '10px',
  flexWrap: 'wrap',
  padding: '30px 0 0 0 ',
})

const StyledImage = styled('img')({
  width: '500px',
  border: '1px solid lightgrey',
  borderRadius: '10px',
})

export default function Home() {
  const isSmallScreen = useMediaQuery('(max-width:800px)');
  const mediumScreen = useMediaQuery('(max-width:1140px)')

  return (
    <>
      <StyledContainer style={{padding:isSmallScreen?"10px" : ""}}>
        {/* Card section */}
        {!isSmallScreen && (
        <StyledBox1>
          <CardSection />
        </StyledBox1>
      )}
        {/* Dashboard tables section */}
        <StyledBox2>
          {/* Summery section */}
          <SummeryContainer style={{justifyContent:isSmallScreen?"center":""}}>
            <Summery item={'My Balance'} amount={'123,320'} bg={'lightblue'} />
            <Summery
              item={'Income'}
              amount={'123,320'}
              bg={'green'}
              percentage={11.09}
            />
            <Summery
              item={'Savings'}
              amount={'123,320'}
              bg={'pink'}
              percentage={11.09}
            />
            <Summery item={'Expense'} amount={'123,320'} bg={'orange'} />
          </SummeryContainer>
          {/* Graph section */}
          <GraphsContainer style={{width:isSmallScreen||mediumScreen?"100%":''}} >
            <StyledImage src={Graph} alt="graph" />
            {/* Savings section */}
            <SavingsSec />
          </GraphsContainer>
          <GraphsContainer>
          <ExpensesSection/>
          <History/>
          </GraphsContainer>
        </StyledBox2>
      </StyledContainer>
    </>
  )
}
