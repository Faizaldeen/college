import 'bootstrap/dist/css/bootstrap.min.css'
import { FaDatabase } from "react-icons/fa"
import { Link } from "react-router-dom"

function Home() 
{
    return (
            <div className="p-5 m-5" style={{backgroundColor:'rgba(26, 173, 173, 0.56)', height:'86vh'}}>

                <div className="mb-2 rounded-3">

                    <h1 style={{textAlign:"center", fontSize:'80px', backgroundColor:'orangered', color:'greenyellow'}}>Home</h1>

                    <form action="" method="">

                                <div className="form-group" style={{textAlign:"center", fontSize:'80px'}}>
                                <Link to="/admin" className="btn btn-secondary mx-2" style={{ fontSize:'35px'}}>
                                    <FaDatabase /> ADMIN
                                </Link>
                                </div>

                                <br />

                                <div className="form-group" style={{textAlign:"center", fontSize:'80px'}}>
                                <Link to="/student" className="btn btn-secondary mx-2" style={{ fontSize:'35px'}}>
                                    <FaDatabase /> STUDENT
                                </Link>
                                </div>

                            </form>
                        </div>
                    </div>
            )
}

export default Home