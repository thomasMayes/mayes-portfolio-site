import {SocialLinks} from './components/SocialLinks'

function App() {
  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      justifyContent: 'center',
      alignItems: 'center',
      color: '#ffffffdd',
      flexDirection: 'column'

    }}>
       <h1 style={{fontFamily: 'Josefin Sans', fontSize: 72, letterSpacing: 15}}>THOMAS MAYES</h1>
       {/* <h1 style={{fontFamily: 'Josefin Sans', fontSize: 52, letterSpacing: 10}}>Full-Stack Developer</h1> */}
     <h1 style={{fontFamily: 'Josefin Sans'}}>Hi. My name is Thomas Mayes and I write code.</h1>
     <h4 style={{fontFamily: 'Josefin Sans'}}>tlmayes731@gmail.com</h4>
<SocialLinks/>
    
    
    </div>
  );
}

export default App;
