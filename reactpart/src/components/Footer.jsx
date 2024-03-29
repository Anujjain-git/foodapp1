import React from "react";
import { Link } from "react-router-dom";
function Footer(){
    return(
        <div className="container" style={{
          height: "100px",
          bottom: "0",
          width: "100%"}}>
  <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <div className="col-md-4 d-flex align-items-center">
      <Link to="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
        <svg className="bi" width="30" height="24"></svg>
        {/* <use xlink:to="#bootstrap"/> */}
      </Link>
      <span className="text-muted">&copy; 2021 Company, Food-Plaza Inc</span>
    </div>

    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
      {/* <li className="ms-3"><Link className="text-muted" to="#"><svg className="bi" width="24" height="24"><use xlink:to="#twitter"/></svg></Link></li>
      <li className="ms-3"><Link className="text-muted" to="#"><svg className="bi" width="24" height="24"><use xlink:to="#instagram"/></svg></Link></li>
      <li className="ms-3"><Link className="text-muted" to="#"><svg className="bi" width="24" height="24"><use xlink:to="#facebook"/></svg></Link></li> */}
    </ul>
  </footer>
</div>
    )
}
export default Footer