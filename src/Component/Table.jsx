import React from 'react'
import { FaCheck } from "react-icons/fa"
import { FcCancel } from "react-icons/fc"

function Table (props) 
{
    const {item}=props
  
    return (
            <tr key={item.id} style={{backgroundColor:item.accept=="true"?"green":item.accept=="false"?"red":"white"}}> 
                    <td>{item.name}</td> 
                    <td>{item.fathername}</td> 
                    <td>{item.course}</td>
                    <td>{item.registerno}</td> 
                    <td>{item.department}</td> 
                    <td>
                        {item.accept=="true"?"accepted":item.accept=="false"?"rejected":(
                               
                                <>                         
                                    <td>
                                        <button type="button" style={{fontSize:'25px', backgroundColor:'white', color:'green'}} onClick={()=>props.handleEdit(item,true)}><FaCheck />
                                        </button>
                                
                                        <button type="button" style={{fontSize:'25px', backgroundColor:'white', color:'white'}} onClick={()=>props.handleEdit(item,false)}><FcCancel />
                                        </button>
                                    </td>
                                </>
                                )
                            
                        }
                    </td>            
            </tr>     
  )
}

export default Table