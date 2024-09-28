import {Box, Button, Typography} from '@mui/material'
import React, {PropsWithChildren, useRef} from 'react'

type FrameProps = PropsWithChildren<{
  handleDownload: (calendarRef: React.RefObject<HTMLDivElement>) => void
}>

export const Frame = ({
                        handleDownload,
                        children,
                      }: FrameProps) => {

  const calendarRef = useRef<HTMLDivElement>(null)

  return (
    <Box sx={styles.container}>
      <Box ref={calendarRef} sx={styles.imageBack}>
        <Box sx={styles.frame}>
          <Box sx={styles.imageBlue}>
            <Box sx={styles.topDecoratorLeft}/>
            <Box sx={styles.topDecoratorRight}/>
            <Box sx={styles.bottomDecoratorRight}/>
            <Box sx={styles.bottomDecoratorLeft}/>
            {children}
            <Typography variant="body2" sx={styles.contact}>
              @LIGACENTEARIOTINTERO / 442 170 7780 / 442 439 5088
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={styles.buttonBar}>
        <Button variant="contained" onClick={() => handleDownload(calendarRef)}>
          Generar y descargar imagen
        </Button>
      </Box>
    </Box>
  )
}

const styles = {
  container: {
    width: 'fit-content',
    marginInline: 'auto',
    height: '100%',
    display: 'absolute',
    flexDirection: 'column',
  },
  imageBack: {
    width: '1080px',
    height: '810px',
    alignSelf: 'center',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  frame: {
    width: '95%',
    height: '95%',
    margin: '1.5rem',
    alignSelf: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
  imageBlue: {
    width: '100%',
    height: '100%',
    backgroundColor: '#0056b3',
    color: 'white',
    position: 'relative',
    overflow: 'hidden',
    fontFamily: 'Arial, sans-serif',
  },
  topDecoratorLeft: {
    position: 'absolute',
    top: 0,
    right: '50%',
    width: '100%',
    height: '50%',
    background: 'linear-gradient(135deg, transparent 51%, #0056b3 50%), repeating-linear-gradient(-45deg, #00a0e3, #00a0e3 20px, transparent 20px, transparent 50px )',
  },
  topDecoratorRight: {
    position: 'absolute',
    top: 0,
    left: '50%',
    width: '100%',
    height: '50%',
    backgroundImage: 'radial-gradient(#00a0e3 2px, transparent 2px)',
    backgroundSize: '20px 20px',
  },
  bottomDecoratorRight: {
    position: 'absolute',
    top: '50%',
    right: 0,
    width: '50%',
    height: '100%',
    background: 'linear-gradient(135deg, #0056b3 50%, transparent 51%), repeating-linear-gradient(-45deg, #00a0e3, #00a0e3 20px, transparent 20px, transparent 50px )',
  },
  bottomDecoratorLeft: {
    position: 'absolute',
    top: '50%',
    left: 0,
    width: '50%',
    height: '100%',
    backgroundImage: 'radial-gradient(#00a0e3 2px, transparent 2px)',
    backgroundSize: '20px 20px',
  },
  contact: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    p: 0.5,
    textAlign: 'center',
    backgroundColor: '#00a0e3'
  },
  buttonBar: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    p: 2
  }
}
/*
background-color: #e5e5f7;
opacity: 0.8;
background: repeating-linear-gradient( -45deg, #00a0e3, #00a0e3 5.5px, #e5e5f7 5.5px, #e5e5f7 27.5px );

background-color: #e5e5f7;
opacity: 0.8;
background-image: radial-gradient(#00a0e3 1px, #e5e5f7 1px);
background-size: 20px 20px;

*/
