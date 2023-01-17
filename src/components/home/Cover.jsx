import React, { useEffect, useState } from 'react';
import moment from 'moment/moment';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'moment/locale/es';
moment.locale('es');
const schedules = [
  {
      "id":"0",
      "shift": "1",
      "activity": "Preparación",
      "colleagues": "S-Rafa ME-Leydi",
      "start": "2023-01-02",
      "finish": "2023-01-15"
  },
  {
      "id":"1",
      "shift": "2",
      "activity": "Siembra",
      "colleagues": "ME-Gerardo P-Aracelli V",
      "start": "2023-01-16",
      "finish": "2023-01-29"
  },
  {
      "id":"2",
      "shift": "1",
      "activity": "Preparación",
      "colleagues": "S-Gerardo ME-Aracelli V",
      "start": "2023-01-30",
      "finish": "2023-02-12"
  },
  {
      "id":"3",
      "shift": "3",
      "activity": "Material de Empaque",
      "colleagues": "S-Gerardo",
      "start": "2023-02-13",
      "finish": "2023-02-26"
  },
  {
      "id":"4",
      "shift": "2",
      "activity": "Siembra",
      "colleagues": "ME-Leydi P-Gerardo",
      "start": "2023-02-27",
      "finish": "2023-03-12"
  },
  {
      "id":"5",
      "shift": "1",
      "activity": "Material de Empaque",
      "colleagues": "S-Leydi ME-Gerardo",
      "start": "2023-03-13",
      "finish": "2023-03-26"
  },
  {
      "id":"6",
      "shift": "2",
      "activity": "Siembra",
      "colleagues": "ME-Aracelli V P-Aracelli A",
      "start": "2023-03-27",
      "finish": "2023-04-09"
  },
  {
      "id":"7",
      "shift": "1",
      "activity": "preparacion",
      "colleagues": "S-Aracelli A ME-Aracelli V",
      "start": "2023-04-10",
      "finish": "2023-04-23"
  },
  {
      "id":"8",
      "shift": "3",
      "activity": "Siembra",
      "colleagues": "ME-Aracelli A",
      "start": "2023-04-24",
      "finish": "2023-05-07"
  },
  {
      "id":"9",
      "shift": "2",
      "activity": "Material de Empaque",
      "colleagues": "P-Leydi S-Aracelli A",
      "start": "2023-05-08",
      "finish": "2023-05-21"
  },
  {
      "id":"10",
      "shift": "1",
      "activity": "Preparacion",
      "colleagues": "S-Aracelli A ME-Leydi",
      "start": "2023-05-22",
      "finish": "2023-06-04"
  },
  {
      "id":"11",
      "shift": "3",
      "activity": "Siembra",
      "colleagues": "ME-Leydi",
      "start": "2023-06-05",
      "finish": "2023-06-18"
  },
  {
      "id":"12",
      "shift": "2",
      "activity": "Material de Empaque",
      "colleagues": "P-Leydi S-Rafa",
      "start": "2023-06-19",
      "finish": "2023-07-02"
  },
  {
      "id":"13",
      "shift": "1",
      "activity": "Preparacion",
      "colleagues": "S-Leydi ME-Johana",
      "start": "2023-07-03",
      "finish": "2023-07-16"
  },
  {
      "id":"14",
      "shift": "2",
      "activity": "Material de empaque",
      "colleagues": "P-Aracelli A S-Aracelli V",
      "start": "2023-07-17",
      "finish": "2023-07-30"
  },
  {
      "id":"15",
      "shift": "1",
      "activity": "Preparacion",
      "colleagues": "S-Aracelli A ME-Araceli V",
      "start": "2023-07-31",
      "finish": "2023-08-13"
  },
  {
      "id":"16",
      "shift": "3",
      "activity": "Material de Empaque",
      "colleagues": "S-Araceli A",
      "start": "2023-08-14",
      "finish": "2023-08-27"
  },
  {
      "id":"17",
      "shift": "2",
      "activity": "Preparacion",
      "colleagues": "ME-Rafa S-Araceli A",
      "start": "2023-08-28",
      "finish": "2023-09-10"
  },
  {
      "id":"18",
      "shift": "1",
      "activity": "Siembra",
      "colleagues": "P-Rafa ME-Araceli A",
      "start": "2023-09-11",
      "finish": "2023-09-24"
  },
  {
      "id":"19",
      "shift": "3",
      "activity": "Siembra",
      "colleagues": "ME-Rafa",
      "start": "2023-09-25",
      "finish": "2023-10-08"
  },
  {
      "id":"20",
      "shift": "2",
      "activity": "Material de Empaque",
      "colleagues": "P-Rafa S-Gerardo",
      "start": "2023-10-09",
      "finish": "2023-10-22"
  },
  {
      "id":"21",
      "shift": "1",
      "activity": "Preparacion",
      "colleagues": "S-Rafa ME-Gerardo",
      "start": "2023-10-23",
      "finish": "2023-11-05"
  },
  {
      "id":"22",
      "shift": "2",
      "activity": "Siembra",
      "colleagues": "ME-Araceli A P-Araceli V",
      "start": "2023-11-06",
      "finish": "2023-11-19"
  },
  {
      "id":"23",
      "shift": "1",
      "activity": "Material de Empaque",
      "colleagues": "P-Araceli A S-Araceli V",
      "start": "2023-11-20",
      "finish": "2023-12-03"
  },
  {
      "id":"24",
      "shift": "3",
      "activity": "Material de Empaque",
      "colleagues": "S-Areceli A",
      "start": "2023-12-04",
      "finish": "2023-12-17"
  },
  {
      "id":"25",
      "shift": "2",
      "activity": "Preparacion",
      "colleagues": "ME-Areceli A S-RAFA",
      "start": "2023-12-18",
      "finish": "2023-12-31"
  }
]

function getIsSame(date,start,finish){
  if(moment(date).isSame(start)){
    return true
  }else if(moment(date).isSame(finish)){
    return true
  }
  return false
}

function getIsAfter(date,start){
  if(moment(date).isAfter(start)){
    return true
  }
  return false
}

function getIsBefore(date,finish){
  if(moment(date).isBefore(finish)){
    return true
  }
  return false
}

function resolve(date,start, finish){
  let times = 0;
  
  if(getIsSame(date,start,finish)){
    times++
  }
  if(getIsAfter(date,start)){
    times++
  }
  if(getIsBefore(date,finish)){
    times++
  }
  if(times === 2){
    return true
  }
  return false
}

function getShiftObject(date){
  return schedules.find(s => resolve(date,s.start,s.finish))
}

function getShiftPretty(shift){
  if(shift === '1'){
    return "mañana"
  }
  if(shift === '2'){
    return "tarde"
  }
  if(shift === '3'){
    return "noche"
  }
}

export const Cover = () => {

  const sysDate = moment().format("YYYY-MM-DD")

  const [date, setDate] = useState(sysDate);
  const [startDate, setStartDate] = useState(new Date());
  const [info, setInfo] = useState('');

  // console.log("De mañana", schedules.filter(s => s.shift === '1').length)
  // console.log("De tarde", schedules.filter(s => s.shift === '2').length)
  // console.log("De noche", schedules.filter(s => s.shift === '3').length)
  useEffect(() => {
    setInfo(getShiftObject(sysDate))
    
  }, []);

  const handleCalendarClose = () => {
    console.log('Close', moment(startDate).format("YYYY-MM-DD"))
    
    setInfo(getShiftObject(moment(startDate).format("YYYY-MM-DD")))
  }

  return (
    <div>
      <div>
        <div className='hero-content text-center text-neutral-content'>
          <div className='max-wh-md'>
            {info === undefined ? <h1 className='mb-5 text-5xl font-bold'>No hay datos para esa fecha</h1>:  
            <div>
              <h1 className='mb-5 text-5xl font-bold'>
                El {moment(startDate).format('LL')} el turno es de {getShiftPretty(info.shift)}
              </h1>
              <h2 className='mb-5 text-4xl font-bold'>
                La actividad es {info.activity}
              </h2>
              <h3 className='mb-5 text-3xl font-bold'>
                Los compañeros son {info.colleagues}
              </h3>
            </div>
            }
            <div>
            <div className='mb-5 text-2xl font-bold'>
              Consultar otra fecha:
            </div>
            <DatePicker className='btn btn-primary mx-4 my-2'
             selected={startDate}
             onChange={(date) => setStartDate(date)}
             onCalendarClose={handleCalendarClose}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
