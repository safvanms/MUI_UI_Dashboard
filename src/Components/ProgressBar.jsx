import React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

const BlueProgressBar = ({ percentage }) => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" mt={2}>
      <Box width="100%" maxWidth={400}>
        <LinearProgress variant="determinate" value={percentage} style={{borderRadius:"4px"}}  color="primary" />
      </Box>
    </Box>
  );
};

export default BlueProgressBar;
