import {Box, Input, Typography} from '@mui/material'
import React from 'react'

type HeaderProps = {
  title: string
  week: string
  setWeek: (week: string) => void,
  day: string,
  setDay: (day: string) => void,
  month: string,
  setMonth: (month: string) => void,
}

export const Header = ({
                          title,
                          week,
                          setWeek,
                          day,
                          setDay,
                          month,
                          setMonth
                        }: HeaderProps) => {
  return (
    <Box sx={styles.header}>
      <Box sx={{flex: '1'}}>
        <Typography variant="h1" component="h1" sx={styles.title}>
          {title}
        </Typography>
      </Box>
      <Box sx={styles.date}>
        <Box sx={styles.dateContainer}>
          <Box sx={styles.week}>
            <Input
              disableUnderline={true}
              value={week}
              onChange={(e) => setWeek(e.target.value)}
              sx={styles.inputWeek}
            />
          </Box>
          <Box sx={styles.day}>
            <Input
              disableUnderline={true}
              value={day}
              onChange={(e) => setDay(e.target.value)}
              sx={styles.inputDay}
            />
          </Box>
          <Box sx={styles.month}>
            <Input
              disableUnderline={true}
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              sx={styles.inputMonth}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

const styles = {
  header: {
    position: 'relative',
    zIndex: 1,
    mb: 2,
    mt: 2,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  title: {
    fontWeight: 'bold',
    fontSize: '4rem',
    width: '100px'
  },
  date: {
    flex: '2',
    display: 'flex',
    flexDirection: 'row-reverse'
  },
  dateContainer: {
    width: '30%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
  },
  week: {
    flex: 1,
    background: '#0CC1DF',
  },
  inputWeek: {
    color: 'black',
    width: '100%',
    height: '100%',
    fontSize: '2rem',
    position: 'relative',
    textAlignLast: 'center'
  },
  day: {
    flex: 1,
    alignContent: 'flex-end',
  },
  inputDay: {
    color: 'white',
    width: '100%',
    height: '50%',
    fontSize: '1.2rem',
    position: 'relative',
    textAlignLast: 'center',
  },
  month: {
    flex: 2,
  },
  inputMonth: {
    color: 'white',
    width: '100%',
    height: '50%',
    fontSize: '1.2rem',
    position: 'relative',
    textAlignLast: 'center'
  }
}