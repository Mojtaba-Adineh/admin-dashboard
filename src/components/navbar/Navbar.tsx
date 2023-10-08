import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="/public/logo.svg" alt="Logo" />
        <span>Admin Dashboard</span>
      </div>

      <div className="icons">
        <img src="/public/search.svg" alt="" className="icon" />
        <img src="/public/app.svg" alt="" className="icon" />
        <img src="/public/expand.svg" alt="" className="icon" />

        <div className="notification">
            <img src="/notifications.svg" alt="" />
            <span>2</span>
        </div>

        <div className="user">
            <img src="../../../public/IMG_5284.jpg" alt="" />
            <span>Mojtaba</span>
        </div>

        <img src="/public/settings.svg" alt="" className="icon" />
      </div>
    </div>
  );
};

export default Navbar;
