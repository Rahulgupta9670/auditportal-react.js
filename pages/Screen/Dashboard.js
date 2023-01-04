import React, { useState } from "react";
import Footer from "../footer";
import Sidebaar from "./Sidebaar";
import {
  mapStateToProps,
  mapDispatchToProps,
} from "../constants/contextProvider.js";

import MainContainer from "../components/Container";
import { connect, useDispatch, useSelector } from "react-redux";
import { FaBeer } from "react-icons/fa";
// import '../../styles/dashboard.module.css'
import { AiFillGoogleCircle, AiFillHome, AiFillSignal } from "react-icons/ai";
// import { useLocation } from 'react-router-dom';
import { useRouter } from 'next/router';
import { Chart } from 'react-charts'


const Dashboard = (props) => {
  const data = React.useMemo(
    () => [
      {
        label: 'Series 1',
        data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
      },
      {
        label: 'Series 2',
        data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4]]
      },
      {
        label: 'Series 3',
        data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4]]
      },
      {
        label: 'Series 4',
        data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4]]
      }
    ],
    []
  )

  const axes = React.useMemo(
    () => [
      { primary: true, type: 'linear', position: 'bottom' },
      { type: 'linear', position: 'left' }
    ],
    []
  )
  // const [show, setShow] = useState(false);
  // console.log("gupta..........", props.myAddPerson)

  const open = useSelector((state) => state.projectR.sideClick);
  const show = useSelector((state) => state.projectR.showProject);
  const router = useRouter()
  const dispatch = useDispatch();

  //   React.useEffect(() => {
  //     // Google Analytics
  //     console.log("location.pathname ---------",router.pathname )
  // if(router.pathname == "/Screen/Dashboard"){
  //   dispatch({
  //     type: "Show_Project",
  //     payload: show,
  //   });
  //   // setShow(true)

  // }
  //   }, [router]);

  return (
    <div className="h100">
      <MainContainer>
        {/* <link href="/styles/dashboard.css"></link> */}
        <Sidebaar show={show} />
        <div className={open ? "content-page2" : "content-page"}>
          <div className="content  ">
            <div className="container-fluid">

              <div className="row">
                <div className="col-md-12">
                  <main className="py-6 bg-surface-secondary">
                    <div className="container-fluid">
                      {/* Card stats */}
                      <div className="row g-6 mb-6">
                        <div className="col-xl-3 col-sm-6 col-12">
                          <div className="card  border-0">
                            <div className="card-body">
                              <div className="row">
                                <div className="col">
                                  <span className="h6 font-semibold text-muted text-sm d-block mb-2">
                                    Budget
                                  </span>
                                  <span className="h3 font-bold mb-0">
                                    $750.90
                                  </span>
                                </div>
                                <div className="col-auto">
                                  <div className="icon icon-shape bg-tertiary text-white text-lg rounded-circle">
                                    <i className="bi bi-credit-card" />
                                  </div>
                                </div>
                              </div>
                              <div className="mt-2 mb-0 text-sm">
                                <span className="badge badge-pill bg-soft-success text-success me-2">
                                  <i className="bi bi-arrow-up me-1" />
                                  13%
                                </span>
                                <span className="text-nowrap text-xs text-muted">
                                  Since last month
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-sm-6 col-12">
                          <div className="card  border-0">
                            <div className="card-body">
                              <div className="row">
                                <div className="col">
                                  <span className="h6 font-semibold text-muted text-sm d-block mb-2">
                                    New projects
                                  </span>
                                  <span className="h3 font-bold mb-0">215</span>
                                </div>
                                <div className="col-auto">
                                  <div className="icon icon-shape bg-primary text-white text-lg rounded-circle">
                                    <i className="bi bi-people" />
                                  </div>
                                </div>
                              </div>
                              <div className="mt-2 mb-0 text-sm">
                                <span className="badge badge-pill bg-soft-success text-success me-2">
                                  <i className="bi bi-arrow-up me-1" />
                                  30%
                                </span>
                                <span className="text-nowrap text-xs text-muted">
                                  Since last month
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-sm-6 col-12">
                          <div className="card  border-0">
                            <div className="card-body">
                              <div className="row">
                                <div className="col">
                                  <span className="h6 font-semibold text-muted text-sm d-block mb-2">
                                    Total hours
                                  </span>
                                  <span className="h3 font-bold mb-0">1.400</span>
                                </div>
                                <div className="col-auto">
                                  <div className="icon icon-shape bg-info text-white text-lg rounded-circle">
                                    <i className="bi bi-clock-history" />
                                  </div>
                                </div>
                              </div>
                              <div className="mt-2 mb-0 text-sm">
                                <span className="badge badge-pill bg-soft-danger text-danger me-2">
                                  <i className="bi bi-arrow-down me-1" />
                                  -5%
                                </span>
                                <span className="text-nowrap text-xs text-muted">
                                  Since last month
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-sm-6 col-12">
                          <div className="card  border-0">
                            <div className="card-body">
                              <div className="row">
                                <div className="col">
                                  <span className="h6 font-semibold text-muted text-sm d-block mb-2">
                                    Work load
                                  </span>
                                  <span className="h3 font-bold mb-0">95%</span>
                                </div>
                                <div className="col-auto">
                                  <div className="icon icon-shape bg-warning text-white text-lg rounded-circle">
                                    <i className="bi bi-minecart-loaded" />
                                  </div>
                                </div>
                              </div>
                              <div className="mt-2 mb-0 text-sm">
                                <span className="badge badge-pill bg-soft-success text-success me-2">
                                  <i className="bi bi-arrow-up me-1" />
                                  10%
                                </span>
                                <span className="text-nowrap text-xs text-muted">
                                  Since last month
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </main>
                </div>
              </div>
              <div className="row px-4">
                <div className="col-md-8">
                  <div className="graph ">

                    <div
                      style={{
                        width: " 100%",
                        height: '300px'
                      }}
                    >
                      <Chart data={data} axes={axes} />
                    </div>
                    <a href="#" className="btns">
                      See Details
                    </a>
                  </div>

                </div>
                <div className="col-md-4">
                  <div className="orders">
                    <h2>Recent Orders</h2>
                    <div className="order flex-d">
                      <FaBeer className="icon-btn" />
                      <p>Iphone</p>
                      <p className="price">$499</p>
                    </div>
                    <div className="order flex-d">
                      <AiFillGoogleCircle className="icon-btn" />
                      <p>G.Phone</p>
                      <p className="price">$1249</p>
                    </div>
                    <div className="order flex-d">
                      <AiFillHome className="icon-btn" />
                      <p>Laptop</p>
                      <p className="price">$2399</p>
                    </div>
                    <div className="order flex-d">
                      <AiFillSignal className="icon-btn" />
                      <p>Watch</p>
                      <p className="price">$500</p>
                    </div>
                  </div>
                  {/* <div className="plans flex flex-c">
                        <h2>Weekly Plan</h2>
                        <div className="progress-bar flex">49%</div>
                      </div> */}
                      <Footer  />
                </div>
              </div>
            </div>
          </div>
          
        </div>
        
      </MainContainer>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
