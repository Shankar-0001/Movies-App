import { Link } from "react-router-dom";
import './Home.css';

export function Home() {

    const handlMenuClick = () => {
        const navbar = document.querySelector('.navbarTag');
        navbar.classList.toggle('active');
    }

    return (
        <div>
            <div className="HeadTag">
                <div className='extra container p-0 my-0'>
                    <div>
                        <Link to='#' className='logo'>WebTecH</Link>
                    </div>
                    <div className='menuIcon' onClick={handlMenuClick}>&#9776;</div>
                    <ul className='navbarTag'>
                        <li><Link to='#' className='link'>Home</Link></li>
                        <li><Link to='#' className='link'>About</Link></li>
                        <li><Link to='#' className='link'>Programs</Link></li>
                        <li><Link to='#' className='link'>Blogs</Link></li>
                        <li><Link to='#' className='link'>Contact</Link></li>
                    </ul>
                    <ul className='navbarTag'>
                        <li><Link to='#' className='link'><span className='bi bi-instagram'></span></Link></li>
                        <li><Link to='#' className='link'><span className='bi bi-instagram'></span></Link></li>
                        <li><Link to='#' className='link'><span className='bi bi-instagram'></span></Link></li>
                        <li><Link to='#' className='link'><span className='bi bi-instagram'></span></Link></li>
                        <li><Link to='#' className='link'><span className='bi bi-instagram'></span></Link></li>
                    </ul>
                </div>
            </div>
            <div className='bgImage' style={{
                height: "100vh",
                width: "100%",
                backgroundImage: 'url("h1_hero1.jpg")',
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}>

            </div>
        </div>
    )
}