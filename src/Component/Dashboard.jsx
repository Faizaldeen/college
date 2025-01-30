import React from 'react'

function Dashboard ()
{
  return (
    <div className="p-2 m-2" style={{ textAlign: "center", fontSize:'20px', backgroundColor:'rgba(191, 102, 19, 0.62)', height:'97vh' }}>

      <h1 className="text-warning bg-danger">Fee Details</h1>

        <ul className='lis' style={{fontSize:'40px', listStyleType:'none', margin:'100px', fontFamily:'monospace', display:'grid', gridRow:'auto', gridGap:'2px'}} >
            <li className='text-secondary bg-warning '> Tution fee <br /> 25,000</li> <br />
            <li className='text-primary bg-light '>Bus fare <br /> Free</li> <br />
            <li className='text-danger bg-dark '>Exam fee <br /> Each sem (2,000)</li> <br />
        </ul>
    </div>
  )
}

export default Dashboard