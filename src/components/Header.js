import { Link } from 'react-router-dom';

function Header(){
  return(
    <div className='header'>
      
      <div className='logo-and-title'> 
      <div className='titleimg'>
        <img className="title" src="https://i.postimg.cc/156qzZCM/bb242041c756ea75024fabb5326310b8.png" alt='Natalie L. written in colorful Gilbert Color' />
      </div>
      <div className='frontendeng'>
        <p> Frontend Engineer </p>
      </div>
      </div>
        
          
    <div className='menubutton'> 
    <ul>
    <div className='work'>
      <Link to='/'> 
        <button type="button" className="btn btn-outline-success"> Work
        </button>
      </Link>
    </div>

    <div className='about'>
      <Link to='/about'>
        <button type="button" className="btn btn-outline-success"> About
        </button>
      </Link>
    </div>

      
       </ul>

       </div>
    </div>
  );
}

export default Header;