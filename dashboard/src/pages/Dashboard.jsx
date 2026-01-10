import "./Dashboard.css";

export default function Dashboard() {
  return (
    <div className="dashboard">
      {/* Navbar */}
      <div className="navbar">
        <div className="logo">
          resume<span className="dot">.</span>
        </div>

        <div className="nav-right">
          <span className="user">Hi, Nethma charuni</span>
          <button className="logout">Logout</button>
        </div>
      </div>

      {/* Cards */}
      <div className="body">
        <div className="cards">

          <div className="card" onClick={() => alert("Create Resume")}>
            <div className="icon blue">+</div>
            <p>Create Resume</p>
          </div>

          <div className="card" onClick={() => alert("Upload Existing")}>
            <div className="icon purple">☁</div>
            <p>Upload Existing</p>
          </div>

        </div>

        <div className="line"></div>
      </div>
    </div>
  );
}
