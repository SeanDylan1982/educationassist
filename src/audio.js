import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Stack from '@mui/icons-material/stack';
import FastRewindRounded from '@mui/icons-material/FastRewindRounded';

import PauseRounded from '@mui/icons-material/PauseRounded';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import FastForwardRounded from '@mui/icons-material/FastForwardRounded';

<Card
  variant="outlined"
  sx={{
    p: 1,
    display: 'flex',
    flexDirection: { xs: 'column', sm: 'row' },
  }}
>
  <CardMedia
    component="img"
    width="124"
    height="124"
    alt="Beside Myself album cover"
    src="/static/images/cards/basement-beside-myself.jpeg"
    sx={{
      borderRadius: 0.5,
      width: 'clamp(124px, (304px - 100%) * 999 , 100%)',
    }}
  />
  <Box sx={{ alignSelf: 'center', px: { xs: 0, sm: 2 } }}>
    <Typography
      variant="body1"
      color="text.primary"
      fontWeight={600}
      sx={{
        textAlign: { xs: 'center', sm: 'start' },
        mt: { xs: 1.5, sm: 0 },
      }}
    >
      Ultraviolet
    </Typography>
    <Typography
      component="div"
      variant="caption"
      color="text.secondary"
      fontWeight={500}
      sx={{ textAlign: { xm: 'center', sm: 'start' } }}
    >
      Basement • Beside Myself
    </Typography>
    <Stack
      direction="row"
      spacing={1}
      sx={{
        mt: 2,
        justifyContent: { xs: 'space-between', sm: 'flex-start' },
      }}
    >
      <IconButton aria-label="fast rewind" disabled>
        <FastRewindRounded />
      </IconButton>
      <IconButton
        aria-label={play ? 'play' : 'pause'}
        sx={{ mx: 1 }}
        onClick={() => setPaused((val) => !val)}
      >
        {play ? <PlayArrowIcon /> : <PauseRounded />}
      </IconButton>
      <IconButton aria-label="fast forward" disabled>
        <FastForwardRounded />
      </IconButton>
    </Stack>
  </Box>
</Card>