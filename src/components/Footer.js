import logo from '../logo.svg';

function Footer(props){
  return(
    <div>
        {/* <button type="button" className="btn btn-outline-success">
            Get in touch
        </button> */}

        <div className="leftalignfooter"> 
        <img src={logo} className="App-logo" alt=" React.js logo rotating slowly" />

        <p className="leftalignfooter"> ©{props.year} All Rights Reserved to Natalie L. </p>
        </div>
    </div>
  )
}

export default Footer;