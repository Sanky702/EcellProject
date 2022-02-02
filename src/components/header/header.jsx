import "./header.css";

export default function Header() {
    return (
        <>
            {/* <div className="header"> */}
            <div className="headerTitles">
                <span className="headerTitleSm">Wake & Run</span>
                <span className="headerTitleLg">BLOG</span>

                {/* </div> */}
                <img
                    className="headerImg"
                    src="https://images.pexels.com/photos/1785493/pexels-photo-1785493.jpeg?cs=srgb&dl=pexels-kasuma-1785493.jpg&fm=jpg"
                    alt="img"
                />
                {/* <button className="btn btn-danger dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown button
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a className="dropdown-item" href="/">Action</a></li>
                    <li><a className="dropdown-item" href="/">Another action</a></li>
                    <li><a className="dropdown-item" href="/">Something else here</a></li>
                </ul>
            </div>
            <div className="dropdown"> */}
            </div>
        </>
    );
}
