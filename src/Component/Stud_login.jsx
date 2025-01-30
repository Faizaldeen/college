import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

function Stud_login() 
{
  const [name, setName] = useState("")
  const [registerno, setRegisterno] = useState("")
  const [message, setMessage] = useState("")
  
  const navigate = useNavigate() // Ensure this line is included

  const handleSubmit = async (e) => 
  {
    console.log("*")
    e.preventDefault()
    console.log("**")

    try 
    {
      console.log("***")
      const response = await fetch("http://localhost:5000/Stud_login", 
      {
        method: "POST",
        body: JSON.stringify({ name, registerno }),
        headers: { "Content-Type": "application/json" },
      })

      console.log(response)

      if (response.status === 200) 
      {
        console.log("if yes")
        navigate("/Dashboard") // Correct usage of navigate
      } 
      else 
      {
        console.log("nonedata")
        navigate("/Notselect")
      }
    }
    catch (error) 
    {
      
    }
   }


   
  return (
    <main
      className="p-2 m-2"
      style={{
        textAlign: "center",
        fontSize: "20px",
        backgroundColor: "rgba(191, 102, 19, 0.62)",
        height: "97vh",
      }}
    >
      <div>
        <h1
          style={{
            textAlign: "center",
            fontSize: "80px",
            backgroundColor: "rgba(225, 15, 54, 0.42)",
            color: "rgb(15, 225, 64)",
          }}
        >
          STUDENT LOGIN
        </h1>
        <br />
        <br />
        <br />

        <form onSubmit={handleSubmit}>
          <div className="form-group" style={{ textAlign: "center" }}>
            <p>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                style={{ textAlign: "center" }}
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </p>
          </div>

          <div className="form-group" style={{ textAlign: "center" }}>
            <p>
              <input
                type="number"
                name="regno"
                placeholder="Reg.No"
                style={{ textAlign: "center" }}
                value={registerno}
                onChange={(e) => setRegisterno(e.target.value)}
                required
              />
            </p>
          </div>

          <br />

          <div className="form-group" style={{ textAlign: "center" }}>
            <button
              type="submit"
              value="submit"
              className="btn btn-info"
              style={{ fontSize: "25px" }}
            >
              Login
            </button>
          </div>

          {message && (
            <div className="mt-4 text-center text-red-500">{message}</div>
          )}
        </form>
      </div>
    </main>
  )
}

export default Stud_login
