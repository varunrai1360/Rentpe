import { useNavigate, useLocation } from 'react-router-dom'
import { ReactComponent as OfferIcon } from '../assets/svg/localOfferIcon.svg'
import { ReactComponent as ExploreIcon } from '../assets/svg/exploreIcon.svg'
import { ReactComponent as PersonOutlineIcon } from '../assets/svg/personOutlineIcon.svg'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Navbar() {
    const navigate = useNavigate()
    const location = useLocation()
  
    const pathMatchRoute = (route) => {
      if (route === location.pathname) {
        return true
      }
    }
  
    return (
      <nav className='navbar'>
      <div className='navbar__title navbar__item' onClick={() => navigate('/')}><strong style={{paddingLeft:"20px",fontWeight:"900",fontFamily:"OpenSans,Arial,Helvetica,sans-serif"}}><span style={{color:"#000"}}>Rent</span><span style={{color:"rgb(0, 121, 107)"}}>Pe</span></strong></div>
      <div className='navbar__item' onClick={() => navigate('/offers')} style={{fontSize:"16px",paddingLeft:"40px"}}>
      
     
      <p
      className={
        pathMatchRoute('/offers')
          ? 'navbarListItemNameActive'
          : 'navbarListItemName'
      }
    >
    
          Offers
          <OfferIcon
    fill="#576871"
    width='18px'
    height='18px'
    top="10px"
  />
          </p>
      </div>
      <div className='navbar__item' onClick={() => navigate('/profile')} style={{fontSize:"16px",marginRight:"75x"}}>
      <p
      className={
        pathMatchRoute('/profile')
          ? 'navbarListItemNameActive'
          : 'navbarListItemName'
      }
     
    >
    
      Profile
      <i class="fa fa-user" style={{paddingLeft:"5px",fontSize:"18px"}}></i>
    </p></div>
      
    
    {/*<div className='navbar__item' onClick={() => navigate('/about')} style={{fontSize:"16px",marginRight:"80px"}}>
      
      <p
      className={
        pathMatchRoute('/about')
          ? 'navbarListItemNameActive'
          : 'navbarListItemName'
      }
    >
      About us
      <i class="fa fa-group" style={{paddingLeft:"5px",fontSize:"17px"}}></i>
      </p>
    </div>  */} 
     
  </nav>
    )
  }
  
  export default Navbar