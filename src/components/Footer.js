import logo from '../logo.svg';

function Footer(props){
  return(
    <div>
        {/* <button type="button" className="btn btn-outline-success">
            Get in touch
        </button> */}
        <div> 
          <footer>
        <img src={logo} className="App-logo" alt= "React.js logo rotating slowly" />

        <p> ©{props.year} All rights reserved to Natalie L. </p>
        </footer>
        </div>
    </div>
  )
}

export default Footer;