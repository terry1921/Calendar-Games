import {Frame} from '../components/Frame'
import html2canvas from 'html2canvas'
import React, {useState} from 'react'
import {Form} from '../components/Form'

const Calendar = () => {

  const [week, setWeek] = useState('Jornada 1')
  const [day, setDay] = useState('Domingo 29')
  const [month, setMonth] = useState('Septiembre')
  const [matches, setMatches] = useState([
    {time: 'Tintero 1 08:00', team1: 'Equipo 1', team2: 'Equipo 2'},
    {time: 'Tintero 1 10:00', team1: 'Equipo 3', team2: 'Equipo 4'},
    {time: 'Tintero 2 08:00', team1: 'Equipo 5', team2: 'Equipo 6'},
    {time: 'Tintero 2 10:00', team1: 'Equipo 7', team2: 'Equipo 8'},
  ])

  const handleDownload = async (calendarRef: React.RefObject<HTMLDivElement>) => {
    const element = calendarRef.current
    if (!element) {
      console.error('Calendar games element not found')
      return
    }

    try {
      const canvas = await html2canvas(element, {
        width: element.scrollWidth,
        height: element.scrollHeight,
        foreignObjectRendering: true,
        scale: 1,
      })
      const image = canvas.toDataURL('image/png')
      const link = document.createElement('a')
      link.href = image
      link.download = week + '.png'
      link.click()
    } catch (error) {
      console.error('Error generating image:', error)
      alert('There was an error generating the image. Please try again.')
    }
  }

  return (
    <Frame handleDownload={handleDownload}>
      <Form
        title="LIGA TINTERO"
        week={week}
        setWeek={setWeek}
        day={day}
        setDay={setDay}
        month={month}
        setMonth={setMonth}
        matches={matches}
        setMatches={setMatches}
      />
    </Frame>
  )
}

export default Calendar