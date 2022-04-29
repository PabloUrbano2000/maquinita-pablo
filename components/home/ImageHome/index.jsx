import React, { useEffect, useRef, useState } from 'react';
import Box from '@mui/material/Box';
import Image from 'next/image';

const ImageHome = ({ mediaQuerySm }) => {
  const container = useRef();
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (container) {
      if (mediaQuerySm) {
        setWidth((container.current.clientWidth * 80) / 100);
      } else {
        setWidth(container.current.clientWidth);
      }
      setHeight(container.current.clientHeight);
    }
  }, [container]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100%',
        width: '100%'
      }}
      ref={container}
    >
      <Image
        src={'/img/img_home.svg'}
        alt="img-slot-t"
        width={width}
        height={height}
      />
    </Box>
  );
};

export default ImageHome;
