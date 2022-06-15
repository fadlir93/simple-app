import { Rating, Stack } from '@mui/material';
import React from 'react';
import { style } from './cat-list-style';

export const CatData = React.memo(() => {
  console.log('collapse');
  return (
    <Stack sx={style.collapseContainer}>
      <Stack direction="row" mb={2}>
        <Stack width="33%" mr={2}>
          Weight Imperial: 7 - 10
        </Stack>
        <Stack width="33%" mr={2}>
          Weight Matric : 7 - 10
        </Stack>
        <Stack width="33%" mr={2}>
          Lifespan : 10
        </Stack>
      </Stack>
      <Stack direction="row">
        <Stack width="33%" mr={2}>
          <Stack>Adaptability</Stack>
          <Rating readOnly value={2} />
        </Stack>
        <Stack width="33%" mr={2}>
          <Stack>Energy Level</Stack>
          <Rating readOnly value={2} />
        </Stack>
        <Stack width="33%" mr={2}>
          <Stack>Dog Friendly</Stack>
          <Rating readOnly value={2} />
        </Stack>
      </Stack>
    </Stack>
  );
});
