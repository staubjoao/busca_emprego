import { Box, Button, Typography } from '@mui/material';

type PropsHeader = {
  titleHeader: string;
  subtitle?: string;
};

export const Header = ({ titleHeader, subtitle }: PropsHeader) => {
  return (
    <Box
      display={'flex'}
      flexDirection="column"
      width="100%"
      bgcolor="#5E80BB"
      sx={{
        paddingBlock: '3.6rem',
      }}
      justifyContent="center"
      alignItems="center"
    >
      <Box width="630px">
        <Typography variant="h5" color="#fff" maxWidth="32rem" textAlign="left">
          {titleHeader}
        </Typography>
        {subtitle && (
          <Typography
            alignSelf={'flex-start'}
            variant="h6"
            color="#ccc"
            marginTop={'10px'}
          >
            {subtitle}
          </Typography>
        )}
      </Box>
    </Box>
  );
};
