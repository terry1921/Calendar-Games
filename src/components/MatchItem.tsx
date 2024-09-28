import {Box, InputBase, Typography} from '@mui/material'
import React from 'react'

type MatchItemProps = {
  index: number
  match: { time: string, team1: string, team2: string }
  handleMatchChange: (index: number, field: string, value: string) => void
}

export const MatchItem = ({
                            index,
                            match,
                            handleMatchChange
                          }: MatchItemProps) => {
  return (
    <Box key={index}
         sx={styles.container}>
      <Box sx={styles.date}>
        <InputBase
          value={match.time}
          onChange={(e) => handleMatchChange(index, 'time', e.target.value)}
          sx={styles.inputDate}
        />
      </Box>
      <Box sx={styles.matchContainer}>
        <InputBase
          value={match.team1}
          onChange={(e) => handleMatchChange(index, 'team1', e.target.value)}
          sx={styles.inputTeamLocal}
        />
        <Typography sx={styles.label}>vs</Typography>
        <InputBase
          value={match.team2}
          onChange={(e) => handleMatchChange(index, 'team2', e.target.value)}
          sx={styles.inputTeamVisit}
        />
      </Box>
    </Box>
  )
}

const styles = {
  container: {
    mb: 3,
    backgroundColor: '#00a0e3',
    borderRadius: 1,
    overflow: 'hidden',
    display: 'flex'
  },
  date: {
    backgroundColor: '#00a0e3',
    p: 2,
    width: '20%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputDate: {
    color: 'white',
    fontSize: '1.5rem',
    textAlign: 'center'
  },
  matchContainer: {
    backgroundColor: 'white',
    p: 2,
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  inputTeamLocal: {
    color: 'black',
    fontSize: '1.5rem',
    width: '40%'
  },
  inputTeamVisit: {
    color: 'black',
    fontSize: '1.5rem',
    width: '40%',
    textAlign: 'right'
  },
  label: {
    color: 'black',
    fontSize: '1.5rem'
  }
}