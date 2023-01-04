import React, { useState } from "react";
import Footer from "../footer";
import Sidebaar from "./Sidebaar";
import {
  mapStateToProps,
  mapDispatchToProps,
} from "../constants/contextProvider.js";
import MainContainer from "../components/Container";
import { connect, useSelector } from "react-redux";
import { Image } from 'antd';
// import 'antd/dist/antd.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Album = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4
  };
  const open = useSelector((state) => state.projectR.sideClick);
  return (
    <MainContainer>
      <Sidebaar />
      <div className={open ? "content-page2" : "content-page"}>
        <div className="container-fluid">
          <div className="row mt-3">
            <div className="col-12">
              <div className="card">
                <div className="card-body p-2">
                  <div className="row justify-content-between align-items-center">
                    <div className="col-sm-12 col-md-5 col-lg-5 col-xl-4">
                      <form className="d-flex flex-wrap align-items-center">
                        <label
                          htmlFor="inputPassword2"
                          className="visually-hidden"
                        >
                          Search
                        </label>
                        <div className="w-100">
                          <div className="input-group flex-nowrap">
                            <span className="material-icons input-group-text bg-white">
                              search
                            </span>
                            <input
                              type="search"
                              className="form-control "
                              id
                              placeholder="Search by store id, store name, store code..."
                            />
                          </div>
                        </div>
                      </form>
                    </div>
                    <div className="col-auto">
                      <div className="text-lg-end my-1 my-lg-0">
                        <ul className="list-unstyled listInline m-0">
                          <li className>
                            <a
                              className="btn btn-outline-blue me-2 fs_12 waves-effect nav-link waves-effect waves-light"
                              href="#"
                            >
                              <span className="material-icons">filter_alt</span>
                              Filters
                            </a>
                          </li>
                          <li className="dropdown ">
                            <a
                              className="btn btn-outline-blue fs_12 waves-effect nav-link dropdown-toggle waves-effect waves-light"
                              data-bs-toggle="dropdown"
                              href="#"
                              role="button"
                              aria-haspopup="false"
                              aria-expanded="false"
                            >
                              <span className="material-icons">
                                file_download
                              </span>
                              Export
                            </a>
                            <div className="dropdown-menu mt-2">
                              <a
                                href="javascript:void(0);"
                                className="dropdown-item"
                              >
                                <i className="fe-briefcase me-1" />
                                <span>MS Excel</span>
                              </a>
                              <a
                                href="javascript:void(0);"
                                className="dropdown-item"
                              >
                                <i className="fe-user me-1" />
                                <span>Json</span>
                              </a>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12">
              <div className="row">
                {/*card-start*/}
                {/* <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-3 d-flex align-items-stretch">
                  <div className="card w-100">
                    <div className="card-body d-flex flex-column p-2">
                    <div className="d-flex justify-content-between">
                    <h6 className="card-title m-0">
                        Store Name : Chandu Grain Stores
                      </h6>
                      <input type="checkbox" />
                    </div>
                     
                    
                      <hr className="my-2" />
                      <ul className="list-unstyled list-inline mb-1">
                        <li className="list-inline-item">
                          <strong>Store id:</strong> <span>09</span>
                        </li>
                        <li className="list-inline-item">|</li>
                        <li className="list-inline-item">
                          <strong>Store Code:</strong> <span>10657360083</span>
                        </li>
                      </ul>
                      <ul className="list-unstyled  list-inline mb-1">
                        <li className="list-inline-item">
                          <strong>Store Type:</strong>{" "}
                          <span>Groceries - Small</span>
                        </li>
                        <li className="list-inline-item">|</li>
                        <li className="list-inline-item">
                          <strong>City:</strong> <span>Mumbai</span>
                        </li>
                      </ul>
                      <ul className="list-unstyled  list-inline mb-1">
                        <li className="list-inline-item">
                          <strong>Image Type:</strong>{" "}
                          <span>Posm - POSM Deployment Beverage</span>
                        </li>
                      </ul>
                      <div className="row m-0">
                        
                        <div className="col-md-12">
                        <Slider {...settings}>
      <div>
      <a href="#">
                            <div className="car p-1 mb-1 shadow-none">
                              <Image
                                width={80}
                                className="img-fluid hover-shadow cursor  w-100 h-100"
                                // preview={false}
                                src="https://mttest.parinaam.in/images/click_03.jpg"
                              />
                            </div>
                          </a>
      </div>
      <div>
      <a href="#">
                            <div className="car p-1 mb-1 shadow-none">
                              <Image
                                width={80}
                                className="img-fluid hover-shadow cursor  w-100 h-100"
                                // preview={false}
                                src="https://mttest.parinaam.in/images/click_03.jpg"
                              />
                            </div>
                          </a>
      </div>
      <div>  <a href="#">
                            <div className="car p-1 mb-1 shadow-none">
                              <Image
                                width={80}
                                className="img-fluid hover-shadow cursor  w-100 h-100"
                                // preview={false}
                                src="https://mttest.parinaam.in/images/click_03.jpg"
                              />
                            </div>
                          </a>
      </div>
      <div>
      <a href="#">
                            <div className="car p-1 mb-1 shadow-none">
                              <Image
                                width={80}
                                className="img-fluid hover-shadow cursor  w-100 h-100"
                                // preview={false}
                                src="https://mttest.parinaam.in/images/click_03.jpg"
                              />
                            </div>
                          </a>
      </div>
      <div>
      <a href="#">
                            <div className="car p-1 mb-1 shadow-none">
                              <Image
                                width={80}
                                className="img-fluid hover-shadow cursor  w-100 h-100"
                                // preview={false}
                                src="https://mttest.parinaam.in/images/click_03.jpg"
                              />
                            </div>
                          </a>
      </div>
      <div>
      <a href="#">
                            <div className="car p-1 mb-1 shadow-none">
                              <Image
                                width={80}
                                className="img-fluid hover-shadow cursor  w-100 h-100"
                                // preview={false}
                                src="https://mttest.parinaam.in/images/click_03.jpg"
                              />
                            </div>
                          </a>
      </div>
    </Slider>
    </div>
                      </div>
                      <ol className="mt-auto list-group">
                        <li className="list-group-item d-flex justify-content-between align-items-center p-0 border-0">
                          <div className="me-auto">
                            <strong>Visit Date:</strong> <span>11/24/2021</span>
                          </div>
                          <a
                            href="#"
                            className="btn btn-outline-success waves-effect me-2 waves-light btn-sm mr1"
                          >
                            <span className="material-icons font-17 ">
                              file_download
                            </span>
                          </a>
                          <a
                            href="#"
                            className="btn btn-outline-blue waves-effect waves-light btn-sm"
                          >
                            See All
                          </a>
                        </li>
                      </ol>
                    </div>
                  </div>
                </div> */}
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-3 d-flex align-items-stretch">
                  <div className="card w-100">
                    <div className="card-body d-flex flex-column p-2">
                      <h6 className="card-title m-0">
                        Store Name : Chandu Grain Stores
                      </h6>
                      <hr className="my-2" />
                      <ul className="list-unstyled list-inline mb-1">
                        <li className="list-inline-item">
                          <strong>Store id:</strong> <span>09</span>
                        </li>
                        <li className="list-inline-item">|</li>
                        <li className="list-inline-item">
                          <strong>Store Code:</strong> <span>10657360083</span>
                        </li>
                      </ul>
                      <ul className="list-unstyled  list-inline mb-1">
                        <li className="list-inline-item">
                          <strong>Store Type:</strong>{" "}
                          <span>Groceries - Small</span>
                        </li>
                        <li className="list-inline-item">|</li>
                        <li className="list-inline-item">
                          <strong>City:</strong> <span>Mumbai</span>
                        </li>
                      </ul>
                      <ul className="list-unstyled  list-inline mb-1">
                        <li className="list-inline-item">
                          <strong>Image Type:</strong>{" "}
                          <span>Posm - POSM Deployment Beverage</span>
                        </li>
                      </ul>
                      <div className="row m-0">
                        <div className="col-3 col-md-3 col-lg-3 p-0 card_image">
                          <a href="#">
                            <div className="car p-1 mb-1 shadow-none">
                              <img
                                src="https://mttest.parinaam.in/images/click_03.jpg"
                                className="img-fluid hover-shadow cursor"
                                onclick="openModal();currentSlide(1)"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="col-3 col-md-3 col-lg-3 p-0 card_image">
                          <a href="#">
                            <div className="car p-1 mb-1 shadow-none">
                              <img
                                //   src="https://mttest.parinaam.in/images/click_01.jpg"
                                src="https://mttest.parinaam.in/images/click_03.jpg"
                                className="img-fluid hover-shadow cursor  w-100 h-100"
                                onclick="openModal();currentSlide(2)"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="col-3 col-md-3 col-lg-3 p-0 card_image">
                          <a href="#">
                            <div className="car p-1 mb-1 shadow-none">
                              <img
                                src="https://mttest.parinaam.in/images/click_03.jpg"
                                className="img-fluid w-100 h-100 hover-shadow cursor"
                                onclick="openModal();currentSlide(3)"
                              />
                            </div>
                          </a>
                        </div>
                        <div className="col-3 col-md-3 col-lg-3 p-0 card_image">
                          <a href="#">
                            <div className="car p-1 mb-1 shadow-none">
                              <img
                                src="https://mttest.parinaam.in/images/click_03.jpg"
                                className="img-fluid hover-shadow cursor"
                                onclick="openModal();currentSlide(4)"
                              />
                            </div>
                          </a>
                        </div>
                      </div>
                      <ol className="mt-auto list-group">
                        <li className="list-group-item d-flex justify-content-between align-items-center p-0 border-0">
                          <div className="me-auto">
                            <strong>Visit Date:</strong> <span>11/24/2021</span>
                          </div>
                          <a
                            href="#"
                            className="btn btn-outline-success waves-effect me-2 waves-light btn-sm mr1"
                          >
                            <span className="material-icons font-17 ">
                              file_download
                            </span>
                          </a>
                          <a
                            href="#"
                            className="btn btn-outline-blue waves-effect waves-light btn-sm"
                          >
                            More Details
                          </a>
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="row justify-content-between">
                <div className="col-auto">
                  <form className="d-flex flex-wrap align-items-center">
                    <label htmlFor="inputPassword2" className="visually-hidden">
                      Search
                    </label>
                    <div className="w-100">
                      <div className="input-group flex-nowrap">
                        <div className="input-group mb-3">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Page No."
                            aria-label="Recipient's username"
                            aria-describedby="button-addon2"
                          />
                          <button
                            className="btn btn-outline-blue"
                            type="button"
                            id="button-addon2"
                          >
                            Go
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="col-auto">
                  <div className="text-lg-end my-1 my-lg-0">
                    <nav aria-label="Page navigation example">
                      <ul className="pagination">
                        <li className="page-item">
                          <a className="page-link btn-outline-blue" href="#">
                            Previous
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link btn-outline-blue" href="#">
                            1
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link btn-outline-blue" href="#">
                            2
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link btn-outline-blue" href="#">
                            3
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link btn-outline-blue" href="#">
                            Next
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </MainContainer>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Album);
