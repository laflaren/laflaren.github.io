import polly from '../assets/pollypockets.mp4'
import {useState} from 'react';

const DEFAULT_VISIBILITY = {
  gooder: false,
  playdae: false,
  dote1: false,
  dote2: false,
  polly: false
};

function Work(){
  let [visibility, setVisibility] = useState(DEFAULT_VISIBILITY); 

  return(
    <div className='work'>
      
      <div 
        onMouseOver={() => setVisibility({...DEFAULT_VISIBILITY, gooder: true})} 
        onMouseLeave={() => setVisibility(DEFAULT_VISIBILITY)}
        className="work-item"> 
        <a href='https://github.com/laflaren/ZWAustin'>

        <div className={`cover ${visibility.gooder ? "" : "hidden"}`}>
          <p> Gooder Co. </p>
        </div>
          <img className="projects" src='https://i.pinimg.com/564x/23/24/d7/2324d7de8d4c71b739b5cb3524c60815.jpg' alt='Gooder Co - a zero waste company' />
        </a>
      </div>

      <div 
      onMouseOver={() => setVisibility({...DEFAULT_VISIBILITY, playdae: true})} 
      onMouseLeave={() => setVisibility(DEFAULT_VISIBILITY)}
      className="work-item"> 

      <a href="http://playdae.herokuapp.com/"> 
        <div className={`cover ${visibility.playdae ? "" : "hidden"}`}>
          <p> Playdae </p>
        </div>
        <img className="projects" src='https://i.ibb.co/q9Cn8ZS/Screen-Shot-2022-08-04-at-5-11-12-PM.png' alt='Playdae, an offline social media' />
      </a>
      </div>

      <div 
      onMouseOver={() => setVisibility({...DEFAULT_VISIBILITY, dote1: true})} 
      onMouseLeave={() => setVisibility(DEFAULT_VISIBILITY)}
      className="work-item"> 

      <a href='https://www.figma.com/file/lVGuG4aq32pY9JwAIohoCq/D%C3%B6te?node-id=0%3A1'>
        <div className={`cover ${visibility.dote1 ? "" : "hidden"}`}>
          <p> Dote </p>
        </div>
        <img className="doteproject" src='https://i.ibb.co/Yhd3BQB/Screen-Shot-2022-08-05-at-9-10-40-AM.png' alt='Döte, a redistribution project' />
      </a>
      </div>

      <div 
      onMouseOver={() => setVisibility({...DEFAULT_VISIBILITY, dote2: true})} 
      onMouseLeave={() => setVisibility(DEFAULT_VISIBILITY)}
      className="work-item"> 

      <a href='https://docs.google.com/presentation/d/1LYarMgynbX7iO-xfJGA7HtgOiCpxF7-09lF-Iyd1uOI/edit#slide=id.p'>
        <div className={`cover ${visibility.dote2 ? "" : "hidden"}`}>
          <p> Dote </p>
        </div>
      <img className="projects" src='https://i.ibb.co/7YjD6zG/Screen-Shot-2022-08-04-at-5-07-47-PM.png' alt='Döte, a redistribution project' />
      </a>
      </div>

      <div 
        onMouseOver={() => setVisibility({...DEFAULT_VISIBILITY, polly: true})} 
        onMouseLeave={() => setVisibility(DEFAULT_VISIBILITY)}
      className="work-item"> 

      <a href='https://www.figma.com/file/ORdANGByPNucVm9qOffAcQ/Polly-Pocket-App?node-id=0%3A1'>
        <div className={`cover ${visibility.polly ? "" : "hidden"}`}>
          <p> Polly Pocket </p>
        </div>
        <video className='projects' autoPlay muted loop alt='short clip of a polly pocket app concept'> 
      <source src={polly} type="video/mp4" />      
      </video>
      </a>
      </div>

    </div>
  )
}

export default Work;