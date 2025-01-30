import React, { useState } from "react"

function Student () 
{
          const [formData, setFormData] = useState
          ({
            name: "",
            fathername: "",
            course: "",
            registerno: "",
            department:"",
          })

          const handleInputChange = (e) => 
          {
              const { name, value } = e.target
              setFormData({ ...formData, [name]: value })
          }

         const handleSubmit = async (e) => 
         {
          e.preventDefault()
          console.log("formdata", formData)

          try 
          {
            const response = await fetch("http://localhost:5000/submit", 
            {
              method: "POST",
              body: JSON.stringify(formData), 
              headers:{ 'Content-Type': 'application/json' } })
          
            const result = await response.json()
            console.log("Server Response:", result)
          }
           
          catch (error) 
          {
            console.error("Error submitting the form:", error)
          }
        }

  return (

    <main className="m-1 p-1 bg-success-subtle  d-flex justify-content-center" style={{height:"700px", textAlign:'right'}}>

        <div className="m-2 p-2">

            <h1 style={{ fontSize:'80px', backgroundColor:'rgba(225, 15, 43, 0.79)', color:'rgb(15, 225, 106)'}}>STUDENT'S REGISTER FORM</h1>

            <form onSubmit={handleSubmit} style={{marginLeft:'200px'}}>
                <table className="m-4">
                    <tr>
                        <td><label htmlFor="name">
                                <h4>NAME
                                <b className="m-2 p-2">:</b>
                                </h4>
                        </label></td>
                        <td><input type="text" name="name"  value={formData.name}
                        onChange={handleInputChange}
                        className="p-2 m-3 rounded-3" placeholder="Full Name" required />
                        </td>
                    </tr>

                    <tr>
                        <td><label htmlFor="name1">
                                <h4>FATHER NAME
                                <b className="m-2 p-2">:</b>
                                </h4>
                        </label></td>
                        <td><input type="text" name="fathername"  value={formData.fathername} onChange={handleInputChange}
                   className="p-2 m-3 rounded-3" placeholder="Father Name" required />
                        </td>
                    </tr>

                    <tr>
                        <td><label htmlFor="name2" id="name1">
                                <h4>COURSE
                                <b className="m-2 p-2">:</b>
                                </h4>
                        </label>
                        </td>
                        <td><select name="course" id="name1" value={formData.course} onChange={handleInputChange} className="form-select form-select-md w-75"
                                aria-label=".form-select-md">
                                <option value="-">--select--</option>
                                <option value="CS">CS</option>
                                <option value="EEE">EEE</option>
                                <option value="ECE">ECE</option>
                                <option value="CIVIL">CIVIL</option>
                            </select></td>
                    </tr>

                    <tr>
                        <td><label htmlFor="number">
                                <h4>REGISTER .NO
                                <b className="m-2 p-2">:</b>
                                </h4>
                        </label></td>
                        <td><input type="number" name="registerno"  value={formData.registerno} onChange={handleInputChange}
                   className="p-2 m-3 rounded-3" placeholder="Reg.No" required />
                        </td>
                    </tr>

                    <tr>
                        <td><label htmlFor="name3">
                                <h4>DEPARTMENT
                        <b className="m-2 p-2">:</b>
                                </h4>
                        </label></td>
                        <td><select name="department" id="name2" value={formData.department}  onChange={handleInputChange} className="form-select form-select-md w-75"
                                aria-label=".form-select-md">
                                <option value="-">--select--</option>
                                <option value="ENGINEERING">ENGINEERING</option>
                                <option value="ARTS">ARTS</option>
                                <option value="SCIENCE">SCIENCE</option>
                            </select>
                        </td>
                    </tr>
                </table>

                <div style={{marginRight:'500px'}}>
                    <button type="submit" value="button" className="p-3 m-2 rounded-3 bg-success text-white">
                        <h5>SUBMIT</h5>
                    </button>
                </div>

            </form>
        </div>
    </main>
  )
}

export default Student