import React, { useEffect, useState } from "react"
import Table from './Table'

function Details ()  
{
  const [users, setUsers] = useState([])

  const fetchUsers = async () => 
  {
    try 
    {
      const response = await fetch("http://localhost:5000/users")
      const data = await response.json()
      setUsers(data)
    }
    catch (error) 
    {
      console.error("Error fetching users:", error)
    }
  }

  useEffect(() => 
  {
    fetchUsers()
  }, [])


  const handleEdit = async (item,accept) => 
  {
    console.log(item,accept)
  
    const data=
    {
      name: item.name,
              fathername: item.fathername,
              course: item.course,
              registerno: item.registerno,
              department:item.department,
              accept:accept
    }
      console.log(data)

    try 
    {
      const response = await fetch(`http://localhost:5000/users/${item._id}` ,
        {
          method: "PUT",
          body: JSON.stringify(data), 
          headers:{ 'Content-Type': 'application/json' } 
        })
    
      const result = await response.json()
      console.log("Server Response:", result)
      fetchUsers()
    }
    catch (error) 
    {
      console.error("Error submitting the form:", error);
    }
  }

  return (
    <div>
        <h1 style={{textAlign:'center', marginRight:'600px', marginTop:'20px'}}>Details</h1>
        <table style={{textAlign:'center', marginLeft:'150px', marginTop:'50px'}}>
            <tr>
                <th>NAME</th>
                <th>FATHER NAME</th>
                <th>COURSE</th>
                <th>REGISTER.NO</th>
                <th>DEPARTMENT</th>
                <th>Action</th>
            </tr>

            {users.map((item)=> (<Table item={item}
                                        handleEdit={handleEdit}
                                />)
            )}
        </table>
    </div>
  )
}

export default Details