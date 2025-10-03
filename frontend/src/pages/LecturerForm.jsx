import React, {useState} from 'react'

export default function LecturerForm(){
  const [form, setForm] = useState({
    facultyName:'Faculty of ICT',
    className:'',
    week:'',
    dateLecture:'',
    courseName:'',
    courseCode:'',
    lecturerName:'',
    present:0,
    registered:0,
    venue:'',
    time:'',
    topic:'',
    outcomes:'',
    recommendations:''
  })
  const [msg, setMsg] = useState('')

  function update(e){
    const {name, value} = e.target
    setForm(prev => ({...prev, [name]: value}))
  }

  async function submit(e){
    e.preventDefault()
    try{
      const res = await fetch('/api/reports', {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify(form)
      })
      if(res.ok){
        setMsg('Report submitted')
        setForm({...form, className:'', week:'', dateLecture:'', courseName:'', courseCode:'', lecturerName:'', present:0, registered:0, venue:'', time:'', topic:'', outcomes:'', recommendations:''})
      } else {
        const text = await res.text()
        setMsg('Error: '+text)
      }
    }catch(err){
      setMsg('Network error: '+err.message)
    }
  }

  return (
    <div>
      <h3>Lecturer Reporting Form</h3>
      {msg && <div className="alert alert-info">{msg}</div>}
      <form onSubmit={submit}>
        <div className="mb-3">
          <label>Faculty Name</label>
          <input name="facultyName" value={form.facultyName} onChange={update} className="form-control" />
        </div>
        <div className="row">
          <div className="col">
            <label>Class Name</label>
            <input name="className" value={form.className} onChange={update} className="form-control" required />
          </div>
          <div className="col">
            <label>Week</label>
            <input name="week" value={form.week} onChange={update} className="form-control" required />
          </div>
        </div>
        <div className="mb-3">
          <label>Date of Lecture</label>
          <input type="date" name="dateLecture" value={form.dateLecture} onChange={update} className="form-control" />
        </div>
        <div className="mb-3">
          <label>Course Name</label>
          <input name="courseName" value={form.courseName} onChange={update} className="form-control" />
        </div>
        <div className="mb-3">
          <label>Course Code</label>
          <input name="courseCode" value={form.courseCode} onChange={update} className="form-control" />
        </div>
        <div className="mb-3">
          <label>Lecturer Name</label>
          <input name="lecturerName" value={form.lecturerName} onChange={update} className="form-control" />
        </div>
        <div className="row">
          <div className="col">
            <label>Actual Number Present</label>
            <input type="number" name="present" value={form.present} onChange={update} className="form-control" />
          </div>
          <div className="col">
            <label>Total Registered Students</label>
            <input type="number" name="registered" value={form.registered} onChange={update} className="form-control" />
          </div>
        </div>
        <div className="mb-3">
          <label>Venue</label>
          <input name="venue" value={form.venue} onChange={update} className="form-control" />
        </div>
        <div className="mb-3">
          <label>Scheduled Time</label>
          <input name="time" value={form.time} onChange={update} className="form-control" />
        </div>
        <div className="mb-3">
          <label>Topic Taught</label>
          <input name="topic" value={form.topic} onChange={update} className="form-control" />
        </div>
        <div className="mb-3">
          <label>Learning Outcomes</label>
          <textarea name="outcomes" value={form.outcomes} onChange={update} className="form-control"></textarea>
        </div>
        <div className="mb-3">
          <label>Lecturer Recommendations</label>
          <textarea name="recommendations" value={form.recommendations} onChange={update} className="form-control"></textarea>
        </div>
        <button className="btn btn-primary">Submit Report</button>
      </form>
    </div>
  )
}
