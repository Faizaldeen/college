import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

function Admin() 
{
      const [name, setName] = useState("")
      const [password, setPassword] = useState("")
      const navigate = useNavigate() 
    
      const handleSubmit = async (e) => 
      {
        e.preventDefault()

        try 
        {
          
          if (name==="admin" && password==="admin") 
          {
            navigate("/Details") 
          } 
          else 
          {
            navigate("/admin")
          }
        }
        catch (error) 
        {
          
        }
       }


    return (
        <main className="p-2 m-2" style={{ textAlign: "center", fontSize:'20px', backgroundColor:'rgba(191, 19, 19, 0.62)', height:'97vh' }}>

            <div>

                <h1 style={{textAlign:"center", fontSize:'80px', backgroundColor:'rgba(120, 15, 225, 0.42)', color:'rgb(15, 225, 187)'}} > ADMIN </h1> <br /> <br /> <br />

                <form onSubmit={handleSubmit}>

                    <div className="form-group" style={{ textAlign: "center" }}>
                        <p>
                            <input type="text" name="name" placeholder="User Name" style={{ textAlign: "center" }} value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required/>
                        </p>
                    </div>

                    <div className="form-group" style={{ textAlign: "center" }}>
                        <p>
                            <input type="password" name="password" placeholder="Password" style={{ textAlign: "center" }} value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required/>
                        </p>
                    </div>

                    <br />
                   
                    <div className="form-group" style={{ textAlign: "center" }}>
                        <button type="submit" value="submit" className="btn btn-success" style={{ fontSize: "25px" }} >Login</button>
                    </div>

                </form>
           </div>
        </main>
    )
}

export default Admin