import "./topbar.css";

export default function Topbar() {
  const user = true;
  return (
    <>
    <div className="top">
      <div className="topLeft">
        
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fa-brands fa-instagram-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <li className="Link" to="/">
              HOME
            </li>
          </li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">CONTACT</li>
          <li className="topListItem">
            <li className="Link" to="/write">
              WRITE
            </li>
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          // <li className="Link" to="/settings">
            
               <li className="Link" to="/settings">
              <img
                className="topImg"
                src="https://images.pexels.com/photos/9952329/pexels-photo-9952329.jpeg?cs=srgb&dl=pexels-%D0%B5%D0%B2%D0%B3%D0%B5%D0%BD%D0%B8%D0%B9-%D0%BA%D0%B0%D1%87%D0%B8%D0%BD-9952329.jpg&fm=jpg"
                alt="img" />
               
           </li> 
              
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <li className="Link" to="/login">
                LOGIN
              </li>
            </li>
            <li className="topListItem">
              <button className="Link" to="/register">
                REGISTER
              </button>
            </li>
          </ul>
        )}
    {user && <li className="topListItem">LOGOUT</li>}
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
    </>
  );
}