import React, { useState, useEffect } from "react";
import { Album } from "./Album";
import Right_content from "./Dashboard";
import { Store } from "./Store";
import Footer from "../footer";
import MainContainer from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
// import logos from "../../"

const Sidebaar = (props) => {
  // const [open, setOpen] = useState(false);
  //  let  functions={[open, setOpen]}
  const dispatch = useDispatch();
  const open = useSelector((state) => state.projectR.sideClick);
  const showProject = useSelector((state) => state.projectR.sideClick);
  let usshow = props.show || false;
  console.log("project.show................", showProject);

  useEffect(() => {
    console.log("openSidebar---", open);
  }, [open]);
  useEffect(() => {
    let arrow = document.querySelectorAll(".arrow");
    for (var i = 0; i < arrow.length; i++) {
      arrow[i].addEventListener("click", (e) => {
        let arrowParent = e.target.parentElement.parentElement; //selecting main parent of arrow
        arrowParent.classList.toggle("showMenu");
      });
    }
  });

  return (
    <MainContainer>
      <div id="wrapper">
        <div className="navbar-custom">
          <div className="container-fluid">
            <ul className="list-unstyled topnav-menu float-end mb-0 ">
              <li className="d-none d-lg-block">
                <form className="app-search">
                  <div className="app-search-box dropdown">
                    <div
                      className="dropdown-menu dropdown-lg"
                      id="search-dropdown"
                    >
                      <div className="dropdown-header noti-title">
                        <h5 className="text-overflow mb-2">Found 22 results</h5>
                      </div>
                      <a className="dropdown-item notify-item">
                        <i className="fe-home me-1" />
                        <span>Analytics Report</span>
                      </a>
                      <a className="dropdown-item notify-item">
                        <i className="fe-aperture me-1" />
                        <span>How can I help you?</span>
                      </a>
                      <a className="dropdown-item notify-item">
                        <i className="fe-settings me-1" />
                        <span>User profile settings</span>
                      </a>
                      <div className="dropdown-header noti-title">
                        <h6 className="text-overflow mb-2 text-uppercase">
                          Users
                        </h6>
                      </div>
                      <div className="notification-list">
                        <a className="dropdown-item notify-item">
                          <div className="d-flex align-items-start">
                            <img
                              className="d-flex me-2 rounded-circle"
                              src="images/user-2.jpg"
                              alt="Generic placeholder image"
                              height={32}
                            />
                            <div className="w-100">
                              <h5 className="m-0 font-14">Erwin E. Brown</h5>
                              <span className="font-12 mb-0">UI Designer</span>
                            </div>
                          </div>
                        </a>
                        <a className="dropdown-item notify-item">
                          <div className="d-flex align-items-start">
                            <img
                              className="d-flex me-2 rounded-circle"
                              src="images/user-5.jpg"
                              alt="Generic placeholder image"
                              height={32}
                            />
                            <div className="w-100">
                              <h5 className="m-0 font-14">Jacob Deo</h5>
                              <span className="font-12 mb-0">Developer</span>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </form>
              </li>
              <li className="dropdown d-inline-block d-lg-none">
                <a
                  className="nav-link dropdown-toggle arrow-none waves-effect waves-light"
                  data-bs-toggle="dropdown"
                  href="#"
                  role="button"
                  aria-haspopup="false"
                  aria-expanded="false"
                >
                  <i className="fe-search noti-icon" />
                </a>
                <div className="dropdown-menu dropdown-lg dropdown-menu-end p-0">
                  <form className="p-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search ..."
                      aria-label="Recipient's username"
                    />
                  </form>
                </div>
              </li>
              {/*
          
              <li className="dropdown d-none d-lg-inline-block">
                <a
                  className="nav-link dropdown-toggle arrow-none waves-effect waves-light"
                  data-toggle="fullscreen"
                  href="#"
                >
                  <span className="material-icons">fullscreen</span>
                </a>
              </li>
              <li className="dropdown d-none d-lg-inline-block topbar-dropdown">
                <a className="nav-link dropdown-toggle arrow-none waves-effect waves-light">
                  <span className="material-icons">work_outline</span>
                </a>
                <div className="dropdown-menu dropdown-lg dropdown-menu-end">
                  <div className="p-lg-1">
                    <div className="row g-0">
                      <div className="col">
                        <a className="dropdown-icon-item" href="#">
                          <img src="images/nestle_logo.svg" alt="slack" />
                          <span>Nestle</span>
                        </a>
                      </div>
                      <div className="col">
                        <a className="dropdown-icon-item" href="#">
                          <img src="images/abott_logo.svg" alt="Github" />
                          <span>Abbott</span>
                        </a>
                      </div>
                      <div className="col">
                        <a className="dropdown-icon-item" href="#">
                          <img src="images/nestle_logo.svg" alt="dribbble" />
                          <span>Kellogges</span>
                        </a>
                      </div>
                    </div>
                    <div className="row g-0">
                      <div className="col">
                        <a className="dropdown-icon-item" href="#">
                          <img src="images/nykaa_logo.svg" alt="bitbucket" />
                          <span>Nykaa</span>
                        </a>
                      </div>
                      <div className="col">
                        <a className="dropdown-icon-item" href="#">
                          <img src="images/nestle_logo.svg" alt="dropbox" />
                          <span>Kellogges</span>
                        </a>
                      </div>
                      <div className="col">
                        <a className="dropdown-icon-item" href="#">
                          <img src="images/abott_logo.svg" alt="G Suite" />
                          <span>Abbott</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="dropdown notification-list topbar-dropdown">
                <a className="nav-link dropdown-toggle waves-effect waves-light">
                  <span className="material-icons">file_download</span>
                  <span className="badge bg-danger rounded-circle noti-icon-badge">
                    9
                  </span>
                </a>
                <div className="dropdown-menu dropdown-menu-end dropdown-lg">
                  <div className="dropdown-item noti-title">
                    <h5 className="m-0">
                      <span className="float-end">
                        <a href="#" className="text-dark">
                          <small>Clear All</small>
                        </a>
                      </span>
                      Downloads
                    </h5>
                  </div>
                  <div className="noti-scroll" data-simplebar>
                    <div className="dropdown-item notify-item active">
                      <p className="m-0 fw-semibold">
                        Task completed: <span className="float-end">70/95</span>
                      </p>
                      <p className="mb-2 ">
                        <small>Date and Time</small>
                      </p>
                      <div className="progress mb-1" style={{ height: "7px" }}>
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow={68}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          style={{ width: "68%" }}
                        ></div>
                      </div>
                      <a href="#">
                        <div className="avatar-sm btn-light rounded-circle">
                          <span
                            className="material-icons"
                            style={{ margin: "8px" }}
                          >
                            pause
                          </span>
                        </div>
                      </a>
                    </div>
                    <div className="dropdown-item notify-item">
                      <p className="m-0 fw-semibold">
                        Task completed: <span className="float-end">95/95</span>
                      </p>
                      <p className="mb-2 ">
                        <small>Date and Time</small>
                      </p>
                      <div className="progress mb-1" style={{ height: "7px" }}>
                        <div
                          className="progress-bar bg-success"
                          role="progressbar"
                          aria-valuenow={68}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          style={{ width: "100%" }}
                        ></div>
                      </div>
                      <a href="#">
                        <div className="avatar-sm btn-light rounded-circle">
                          <span
                            className="material-icons"
                            style={{ margin: "8px" }}
                          >
                            file_download
                          </span>
                        </div>
                      </a>
                    </div>
                    <div className="dropdown-item notify-item">
                      <p className="m-0 fw-semibold">
                        Task completed: <span className="float-end">70/95</span>
                      </p>
                      <p className="mb-2 ">
                        <small>Date and Time</small>
                      </p>
                      <div className="progress mb-1" style={{ height: "7px" }}>
                        <div
                          className="progress-bar bg-danger"
                          role="progressbar"
                          aria-valuenow={68}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          style={{ width: "68%" }}
                        ></div>
                      </div>
                      <a href="#">
                        <div className="avatar-sm btn-light rounded-circle">
                          <span
                            className="material-icons"
                            style={{ margin: "8px" }}
                          >
                            play_arrow
                          </span>
                        </div>
                      </a>
                    </div>
                    <div className="dropdown-item notify-item">
                      <p className="m-0 fw-semibold">
                        Task completed: <span className="float-end">70/95</span>
                      </p>
                      <p className="mb-2 ">
                        <small>Date and Time</small>
                      </p>
                      <div className="progress mb-1" style={{ height: "7px" }}>
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow={68}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          style={{ width: "68%" }}
                        ></div>
                      </div>
                      <a href="#">
                        <div className="avatar-sm btn-light rounded-circle">
                          <span
                            className="material-icons"
                            style={{ margin: "8px" }}
                          >
                            pause
                          </span>
                        </div>
                      </a>
                    </div>
                    <div className="dropdown-item notify-item">
                      <p className="m-0 fw-semibold">
                        Task completed: <span className="float-end">70/95</span>
                      </p>
                      <p className="mb-2 ">
                        <small>Date and Time</small>
                      </p>
                      <div className="progress mb-1" style={{ height: "7px" }}>
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow={68}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          style={{ width: "68%" }}
                        ></div>
                      </div>
                      <a href="#">
                        <div className="avatar-sm btn-light rounded-circle">
                          <span
                            className="material-icons"
                            style={{ margin: "8px" }}
                          >
                            pause
                          </span>
                        </div>
                      </a>
                    </div>
                    <div className="dropdown-item notify-item">
                      <p className="m-0 fw-semibold">
                        Task completed: <span className="float-end">70/95</span>
                      </p>
                      <p className="mb-2 ">
                        <small>Date and Time</small>
                      </p>
                      <div className="progress mb-1" style={{ height: "7px" }}>
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow={68}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          style={{ width: "68%" }}
                        ></div>
                      </div>
                      <a href="#">
                        <div className="avatar-sm btn-light rounded-circle">
                          <span
                            className="material-icons"
                            style={{ margin: "8px" }}
                          >
                            pause
                          </span>
                        </div>
                      </a>
                    </div>
                  </div>
                  <a className="dropdown-item text-center text-primary notify-item notify-all">
                    View all
                    <i className="fe-arrow-right" />
                  </a>
                </div>
              </li>
                */}
              {usshow ? (
                <li className="dropdown notification-list d-flex">
                  <a className="nav-link  nav-user me-0 waves-effect waves-light">
                    <img
                      src="https://mttest.parinaam.in/images/nykaa_logo.svg"
                      alt="user-image"
                      className="rounded-circle bg-white"
                    />
                  </a>

                  <select
                    class="form-selects form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Nyakaa</option>
                    <span class="navbar-toggler-icon"></span>
                    <option value="1">
                      <a class="dropdown-item text-center" href="#">
                        Nestle
                      </a>
                    </option>
                    <option value="2">
                      <a class="dropdown-item text-center" href="#">
                        Abbott
                      </a>
                    </option>
                    <option value="3">
                      <a class="dropdown-item text-center" href="#">
                        Nyakaa
                      </a>
                    </option>
                  </select>
                </li>
              ) : null}
              <li className="dropdown notification-list topbar-dropdown">
                <a
                  className="nav-link dropdown-toggle nav-user me-0 waves-effect waves-light"
                  data-bs-toggle="dropdown"
                  href="#"
                  role="button"
                  aria-haspopup="false"
                  aria-expanded="false"
                >
                  <img
                    src="https://mttest.parinaam.in/images/user-1.jpg"
                    alt="user-image"
                    className="rounded-circle"
                  />
                  <span className="pro-user-name ms-1">
                    Mohsin Ansari
                    {/* <span className="material-icons">expand_more</span> */}
                  </span>
                </a>
                <div className="dropdown-menu dropdown-menu-end profile-dropdown ">
                  <div className="dropdown-header noti-title">
                    <h6 className="text-overflow m-0">Welcome !</h6>
                  </div>
                  <a className="dropdown-item notify-item">
                    <span className="material-icons me-2">person</span>
                    <span className="fs_12">My Account</span>
                  </a>
                  <a className="dropdown-item notify-item">
                    <span className="material-icons me-2">settings</span>
                    <span className="fs_12">Settings</span>
                  </a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item notify-item">
                    <span className="material-icons fs_12 me-2">logout</span>
                    <span className="fs_12">Logout</span>
                  </a>
                </div>
              </li>
              {/* <li className="dropdown notification-list">
                <a className="nav-link waves-effect waves-light">
                  <span className="material-icons">dark_mode</span>
                </a>
              </li> */}
            </ul>
            <div className={open ? "width_0" : "logo-box"}>
              <a href="#" className="logo logo-dark text-center">
                <span className="logo-sm">
                  <img
                    src="https://mttest.parinaam.in/images/nestle_logo.svg"
                    alt=""
                    height={22}
                  />
                </span>
                <span className="logo-lg">
                  <img
                    src="https://mttest.parinaam.in/images/nestle_logo.svg"
                    alt=""
                    height={20}
                  />
                </span>
              </a>
              <a href="#" className="logo logo-light text-center">
                <span className="logo-sm">
                  <img src="../images/logo-sm.png" alt="" height={22} />
                </span>
                <span className="logo-lg logo-lgs ">
                  <img
                    className={open ? "logo_none" : "logo-bos"}
                    // src="https://mttest.parinaam.in/images/nestle_logo.svg"
                    src={"/assets/images/parinaam_tag_line.png"}
                    alt=""
                    height={40}
                  />
                </span>
              </a>
            </div>
            <ul className="list-unstyled topnav-menu topnav-menu-left m-0">
              <li>
                <button
                  className="button-menu-mobile waves-effect waves-light"
                  onClick={() => {
                    dispatch({
                      type: "SIDE_CLICK",
                      payload: !open,
                    });
                  }}
                >
                  <span className="material-icons">menu</span>
                </button>
              </li>
              <li className=" d-none d-xl-block">
                <span className="nav-link waves-effect waves-light">
                  Dashboard
                  <i className="mdi mdi-chevron-down" />
                </span>
              </li>
              <li>
                <a
                  className="navbar-toggle nav-link"
                  data-bs-toggle="collapse"
                  data-bs-target="#topnav-menu-content"
                >
                  <div className="lines">
                    <span />
                    <span />
                    <span />
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={open ? "sidebar close" : "sidebar"}>
          {/* <div class="logo-details">
            <i class="bx bxl-bitcoin"></i>
            <span class="logo_name">Menu</span>
          </div> */}
          <ul class="nav-links mt-5">
            <li>
              <a href="./Dashboard">
                <i class="bx bx-home"></i>
                <span class="link_name"> Dashboard</span>
              </a>
              <ul class="sub-menu blank">
                <li>
                  <a class="link_name" href="./Dashboard">
                    Dashboard
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="./select">
              <i class="bx bx-news"></i>
                <span class="link_name"> Compliance</span>
              </a>
              <ul class="sub-menu blank">
                <li>
                  <a class="link_name" href="./select">
                    Compliance
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="./DealerBoard">
              <i class="bx bx-file-find"></i>
                <span class="link_name">  Album</span>
              </a>
              <ul class="sub-menu blank">
                <li>
                  <a class="link_name" href="./DealerBoard">
                     Album
                  </a>
                </li>
              </ul>
            </li>
            
            <li>
              <div class="icon-link">
                <a href="#">
                  <i class="bx bx-news"></i>
                  <span class="link_name">Posts</span>
                </a>
                <i class="bx bxs-chevron-down arrow"></i>
              </div>
              <ul class="sub-menu">
                <li>
                  <a class="link_name" href="#">
                    Posts
                  </a>
                </li>
                <li>
                  <a href="#">Recent</a>
                </li>
                <li>
                  <a href="#">Trending</a>
                </li>
                <li>
                  <a href="#">Most Visited</a>
                </li>
              </ul>
            </li>
            {/* <li>
              <div class="icon-link">
                <a href="#">
                  <i class="bx bx-file-find"></i>
                  <span class="link_name">Insights</span>
                </a>
                <i class="bx bxs-chevron-down arrow"></i>
              </div>
              <ul class="sub-menu">
                <li>
                  <a class="link_name" href="#">
                    Insights
                  </a>
                </li>
                <li>
                  <a href="#">Money Movement</a>
                </li>
                <li>
                  <a href="#">Enterprise Spotlight</a>
                </li>
                <li>
                  <a href="#">Financial Burnout</a>
                </li>
              </ul>
            </li>
            <li>
              <div class="icon-link">
                <a href="#">
                  <i class="bx bx-bulb"></i>
                  <span class="link_name">Solutions</span>
                </a>
                <i class="bx bxs-chevron-down arrow"></i>
              </div>
              <ul class="sub-menu">
                <li>
                  <a class="link_name" href="#">
                    Solutions
                  </a>
                </li>
                <li>
                  <a href="#">Payments API</a>
                </li>
                <li>
                  <a href="#">Accounts APi</a>
                </li>
                <li>
                  <a href="#">Finance API</a>
                </li>
              </ul>
            </li> */}

          {/*   <li>
              <a href="#" className="mx-3 my-2 ">
                <i class='bx bxs-credit-card' ></i>
                <span class="link_name text-muted"> Recruitment</span>
              </a>
            </li>

            <li>
              <a href="#">
                <i class="bx bx-bar-chart"></i>
                <span class="link_name">Chart</span>
              </a>
              <ul class="sub-menu blank">
                <li>
                  <a class="link_name" href="#">
                    Chart
                  </a>
                </li>
              </ul>
            </li>
            
            <li>
              <a href="#">
                <i class="bx bx-compass"></i>
                <span class="link_name">Explore</span>
              </a>
              <ul class="sub-menu blank">
                <li>
                  <a class="link_name" href="#">
                    Explore
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">
                <i class="bx bx-cog"></i>
                <span class="link_name">Setting</span>
              </a>
              <ul class="sub-menu blank">
                <li>
                  <a class="link_name" href="#">
                    Setting
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#" className="mx-3 my-2 ">
                <i class='bx bxs-credit-card' ></i>
                <span class="link_name text-muted"> Oragaranation</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="bx bxs-credit-card"></i>
                <span class="link_name">Pricing</span>
              </a>
              <ul class="sub-menu blank">
                <li>
                  <a class="link_name" href="#">
                    Pricing
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">
                <i class="bx bx-bar-chart"></i>
                <span class="link_name">Chart</span>
              </a>
              <ul class="sub-menu blank">
                <li>
                  <a class="link_name" href="#">
                    Chart
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">
                <i class="bx bx-compass"></i>
                <span class="link_name">Explore</span>
              </a>
              <ul class="sub-menu blank">
                <li>
                  <a class="link_name" href="#">
                    Explore
                  </a>
                </li>
              </ul>
            </li> */}
            <li>
              <div class="profile-details">
                <div class="profile-content">
                  <img
                    src="https://github.com/Sacsam005/dropdown-menu/blob/master/image/profile.png?raw=true"
                    alt="profileImg"
                  />
                </div>
                <div class="name-job ms-1">
                  <div class="profile_name">Rahul Gupta</div>
                  <div class="job">React Developer</div>
                </div>
                {/* <i class='bx bx-log-out w-25'></i> */}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </MainContainer>
  );
};

export default Sidebaar;
