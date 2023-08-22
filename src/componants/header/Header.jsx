import "./Style.css";
import mane from "../assets/images/header-main-pic.svg";
import blueRight from "../assets/images/header-blueColor.svg"
import zigzag from "../assets/images/zigzag-line.svg"
const Header = () => {



  return (
    <div>
      <div class="row" >
        <nav class="navbar navbar-expand-lg nav-bg ">
          <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse navebar-text " id="navbarTogglerDemo01">
              <a class="navbar-brand text-head " href="#" >Ui/Ux Desogner</a>
              <ul class="navbar-nav me-auto mb-2 mb-lg-0 list me-5">
                <li class="nav-item">
                  <a class="nav-link " aria-current="page" href="#">About</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Pricing</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Blog</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Content</a>
                </li>
              </ul>
              <form class="d-flex" role="search">

                <button class="me-5 btn-light ps-3 pe-3 " type="submit">Join Now</button>
              </form>
            </div>
          </div>
        </nav>
      </div>
      <div class="main-div row">
        <div class="col-md-2 position-relative">
          <div class="position-absolute bottom-0 end-0"><img src={zigzag} class="img-fluid" alt="" /></div>
          <div><img src={blueRight} class="img-fluid" alt="" /></div>
        </div>

        <div class="col-md-4 pt-5 ">
          <div class="ps-2"><h1 className="ux-text">UX/UI assets <br /> for creators <br /> worldwide</h1>
            <p>Becoming a member gives you access to education,<br />
              resources, and community to help you grow your career <br />
              and your bank account.</p>
          </div>
          <button class=" btn-light mt-2 ms-3  join-free-btn " type="submit"> <b>Join For Free</b></button>
        </div>
        <div class="col-md-5">
          <img src={mane} class="img-fluid ms-5 me-5" alt="" height="" />
        </div>
        <div className="col-md-1"></div>

      </div>
    </div>
  )



};

export default Header;