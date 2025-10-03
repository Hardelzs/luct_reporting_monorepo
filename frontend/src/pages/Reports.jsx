import React, {useEffect, useState} from 'react'

export default function Reports(){
  const [reports, setReports] = useState([])

  async function load(){
    try{
      const res = await fetch('/api/reports')
      const data = await res.json()
      setReports(data)
    }catch(e){
      console.error(e)
    }
  }

  useEffect(()=>{load()},[])

  return (
    <div>
      <h3>Submitted Reports</h3>
      <table className="table">
        <thead><tr><th>Date</th><th>Course</th><th>Lecturer</th><th>Present</th><th>Registered</th></tr></thead>
        <tbody>
          {reports.map((r,i)=>(
            <tr key={i}>
              <td>{r.dateLecture}</td>
              <td>{r.courseName} ({r.courseCode})</td>
              <td>{r.lecturerName}</td>
              <td>{r.present}</td>
              <td>{r.registered}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
