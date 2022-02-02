import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
         <img
          src="https://images.pexels.com/photos/5384429/pexels-photo-5384429.jpeg?cs=srgb&dl=pexels-monstera-5384429.jpg&fm=jpg"
          alt="profile"
        />
        <p>
          Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
          amet ex esse.Sunt eu ut nostrud id quis proident.
          amet ex esse.Sunt eu ut nostrud id quis proident.
          amet ex esse.Sunt eu ut nostrud id quis proident.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <li className="link" to="/posts?cat=Life">
              Life
            </li>
          </li>
          <li className="sidebarListItem">
            <li className="link" to="/posts?cat=Music">
              Music
            </li>
          </li>
          <li className="sidebarListItem">
            <li className="link" to="/posts?cat=Style">
              Style
            </li>
          </li>
          <li className="sidebarListItem">
            <li className="link" to="/posts?cat=Tech">
              Tech
            </li>
          </li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>
      </div>
    </div>
  );
}