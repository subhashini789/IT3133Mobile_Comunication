
function Logo(){
    return(
        <div>
            <img 
  src={require('../Image/logo.jpg')} 
  alt='myapp logo' 
  className='Logo'
  style={{ 
    width: "70px",
    height:"70px" ,
    mixBlendMode: "lighten",
    backgroundColor: "white",   
    borderRadius: "8px", 
    zindex: 1000
             }}
/>


            
        </div>
    )
}

export default Logo;