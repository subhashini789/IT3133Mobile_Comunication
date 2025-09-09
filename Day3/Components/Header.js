import Logo from './Logo';

function Header(){
    return(
        <div style={{
            width:"100%",
            backgroundColor:"green",
            padding: "0px 20px",
            display: "flex",
            alignItems:"center",
            color:"white",
            height:"75px",
            justifyContent:"space-between",
             boxSizing: 'border-box'

        }}>
          <Logo />
          <div style={{
            display:"flex",
            gap:"10px", 
            width:"100%", 
            justifyContent:"center"
            }}>
            <button style={buttonStyle}>Home</button>
            <button style={buttonStyle}>My cart</button>
            <button style={buttonStyle}>Feedback</button>
            <button style={buttonStyle}>Order history</button>
            
            <button style={buttonStyle}>SingnUp|Login</button>
          </div>
          <div style={{
            display:"flex",
            gap:"10px", 
            width:"100%", 
            justifyContent:"right"
            }}>
           
            <button style={buttonStyle}>SingnUp|Login</button>
          </div>
        </div>
    );
}

const buttonStyle = {
    margin:"0 8px",
    padding:"8px 26px",
    border:"none",
    borderRadius:"4px",
    backgroundColor:"white",
    color:"green",
    cursor:"pointer",
    fontWeight:"bold"
  
};

export default Header;