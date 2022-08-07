import {Link} from 'react-router-dom';

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
      {/* <ul> */}
        <button type="button" className='workbtn'> Work
        </button>
        {/* <div className='work'>
        </div>
        <div className='about'>
        </div> */}
      <button type="button" className='aboutbtn'> About
      </button>
      
       {/* </ul> */}

       </div>
    </div>
  );
}

export default Header;