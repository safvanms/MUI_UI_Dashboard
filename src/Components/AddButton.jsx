import styled from '@emotion/styled'
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded'
import { Button } from '@mui/material'

const StyledButton = styled(Button)({
     backgroundColor:"lightgrey",
     borderRadius:"10px",
     margin:"20px 10px",
     width:"91%",
     textTransform:"none",
     color:"black",
     fontFamily: 'poppins',
     fontSize:"12px"
})

export default function AddButton() {
  return (
    <>
      <StyledButton startIcon={<AddCircleRoundedIcon style={{color:"#00B3FF"}} />}>
        Add Card
      </StyledButton>
    </>
  )
}
