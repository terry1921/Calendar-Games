import {Box, Container} from '@mui/material'
import React from 'react'
import {Match} from '../types/Match'
import {MatchItem} from './MatchItem'
import {Header} from './Header'

type FormProps = {
  title: string
  week: string
  setWeek: (week: string) => void,
  day: string,
  setDay: (day: string) => void,
  month: string,
  setMonth: (month: string) => void,
  matches: Array<Match>,
  setMatches: (matches: Array<Match>) => void
}

export const Form = ({
                       title,
                       week,
                       setWeek,
                       day,
                       setDay,
                       month,
                       setMonth,
                       matches,
                       setMatches
                     }: FormProps) => {

  const handleMatchChange = (index: number, field: string, value: string) => {
    const newMatches = [...matches]
    newMatches[index] = {...newMatches[index], [field]: value}
    setMatches(newMatches)
  }

  return (
    <Container sx={styles.container}>
      <Box sx={styles.body}>
        <Header
          title={title}
          week={week}
          setWeek={setWeek}
          day={day}
          setDay={setDay}
          month={month}
          setMonth={setMonth}/>
        {matches.map((match, index) => (
          <MatchItem index={index} match={match} handleMatchChange={handleMatchChange}/>
        ))}
      </Box>
    </Container>
  )
}

const styles = {
  container: {
    height: '100%',
    width: '100%',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  body: {
    mt: 4,
    mb: 4,
    p: 4,
    alignSelf: 'center',
    borderRadius: 6,
    background: '#0056b3',
  },
}