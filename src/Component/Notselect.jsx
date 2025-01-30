import React from 'react'

function Notselect () 
{
  return (
    <div className='bg-info '  style={{height:'100vh'}}>
        <h1 className="text-warning bg-danger" style={{textAlign:'center'}}>NOT &nbsp; SELECT</h1>
        <p className='text-center text-capitalize fs-2 fw-semibold lh-lg font-monospace shadow-lg p-3 mb-5 bg-body-tertiary rounded '  style={{margin:'100px'}} >
            You are not eligible for our college, <br /> beacause our details not suitable for our campus <br /> so, please try again <br /> best of luck
        </p>
    </div>
  )
}

export default Notselect