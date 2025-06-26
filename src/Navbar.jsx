
export function Navbar(props) {
    const { pageType,setPageType}= props
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          ANISH KUMAR SINHA
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item" onClick={()=>setPageType("home")}>
              <a className={`nav-link ${pageType==="home"?"active":""}`} aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item" onClick={()=>setPageType("about")}>
              <a className={`nav-link ${pageType==="about"?"active":""}`}  href="#" >
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Resume
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>

            <li className="nav-item d-flex flex-column align-items-center justify-center">
              {true ? (
                <img src="/icons/dark.svg" alt="darkmode" height={25} />
              ) : (
                <img src="/icons/light.svg" alt="lightmode" />
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  );
}
