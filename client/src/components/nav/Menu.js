
import { NavLink , Link} from "react-router-dom"
import { useAuth } from "../../context/auth"
import { useNavigate } from "react-router-dom"
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import {DingdingOutlined, UserOutlined ,UserAddOutlined,ReadOutlined} from '@ant-design/icons';
import footer from "./footer";

export default function Menu(){
    // hooks
    const [auth, setAuth] = useAuth();
    const navigate = useNavigate();

    const logout = () => {
        setAuth({...auth, token: null, user: null});
        localStorage.removeItem("auth");
        navigate("/login");
    }

    return (
        <Navbar className="nav nav-tabs bg-primary d-flex justify-content-between shadow-sm" sticky="top"  expand = "lg">
         <Container fluid>
          
         {/* <Navbar.Brand style={{color: "white"}}  to="/">Treasure-Hunt</Navbar.Brand> */}

        {!auth?.user ?  <Nav
            className="me-auto my-2 my-lg-0 nav-item "
            style={{ maxHeight: '100px' }}
           
          >
          <DingdingOutlined className=" my-2" />
            <Link className='mx-4 '  style={{color: "white" , textDecoration:"none"}} to="/">Tresure-Hunt</Link>
            <ReadOutlined className="mx-2 my-1"/> 
            <Link     style={{color: "white" , textDecoration:"none" }} to="/about">About</Link>


          </Nav> : <Nav className="nav-item ">
            <Link className='mx-4 '  style={{color: "white" , textDecoration:"none", margin: "15px"}} to="/">Tresure-Hunt</Link>
            <Link style={{color: "white" , textDecoration:"none", margin: "15px"}} to="/about">About</Link>
            <Link  style={{color: "white" , textDecoration:"none", margin: "15px"}} to={`/dashboard`}> {"Dashboard"} </Link>
            <Link  style={{color: "white" , textDecoration:"none", margin: "15px"}} to={`/score/${auth?.user?.role===1 ? "admin":"user"}`}> {auth?.user?.role===1 ? "Leaderboard" : "Your Status"} </Link>
            </Nav>}

          {!auth?.user ? (
                    <div className="nav-item ">
                    <UserOutlined />
                        <Button variant="outline-light"  className="mx-2" >
                        
                            <NavLink className="nav-link" to="/login">
                            
                            <i className="bi bi-search text-dark ">
                             LOGIN</i>
                            </NavLink>
                        </Button>
                        <UserAddOutlined />
                        <Button variant="outline-light" className="mx-2" >
                        <NavLink className="nav-link" to="/register">
                        <i className="bi bi-search text-dark">REGISTER</i>
                                
                            </NavLink>
                        </Button>
                    </div>

                      
                ): (
                    <div className="dropdown d-flex flex-column nav-item "> 
                        <>
                        
                            <a style={{color: "white" , margin: "5px"}} >
                            <UserOutlined className="mx-2 my-0 " />  { auth?.user?.username?.toUpperCase() }
                            </a>
                           
                        </>
                                {/* <NavLink className="nav-link pointer" 
                                    to={`/dashboard/${auth?.user?.role===1 ? "admin" : "user"}`}>
                                    Dashboard
                                </NavLink> */}
                            

                                    {/* <a style={{color: "white"}}  onClick={logout} >
                                        Logout
                                    </a>  */}
                                    <Button variant="outline-light" className="mx-2" onClick={logout} >
                                    <i className="bi bi-search text-dark"></i>
                                        Logout
                                    </Button>
                           
                     
                    </div>
                )}


            </Container>   
           
        </Navbar>
       
      

    );
    
}