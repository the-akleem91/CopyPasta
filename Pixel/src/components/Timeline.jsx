import React from 'react'
import './Timeline.css'
import { getevents } from '../apireq/getrequests';
import { useState, useEffect } from 'react';

const Timeline = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    let mounted = true;
    getevents()
      .then(edata => {
        if (mounted) {
          setEvents(edata)
        }
      })
    return () => mounted = false;
  }, [])

  const convertToDDMMYYYY = (isoDate) => {
    const date = new Date(isoDate);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }


  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <div className='containerEvent'>
      <h1>Event Timeline</h1>
      <br></br>
      {events.map((edata, i) => {
        return (
          <div className='timebox' key={i}>
            <h2 className='timeline-heading'>{capitalizeFirstLetter(edata.title)}</h2>
            <p style={{opacity: "80%"}}>{convertToDDMMYYYY(edata.date)}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Timeline;
