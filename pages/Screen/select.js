import React, { useEffect, useState } from "react";

import Link from "next/link";
import MainContainer from "../components/Container";
import { TiTick } from "react-icons/Ti";

import {
  mapStateToProps,
  mapDispatchToProps,
} from "../constants/contextProvider";
import Button from "@mui/material/Button";
import { connect, useSelector } from "react-redux";
import LoginNavbaar from "./LoginNavbaar";
import Sidebaar from "./Sidebaar";

import Footer from "../footer";
import { baseUrl } from "../constants/constants";
import { MethodNames } from "../constants/methodNames";
import axios from "axios";
import { Spin } from "antd";

const SelectProject = () => {
  const open = useSelector((state) => state.projectR.sideClick);
  const show = useSelector((state) => state.projectR.showProject);
  const [campaignForProject, setCampaignForProject] = useState();
  const [loding, setLoding] = useState(true);
  const [active, setActive] = useState(0);
  const handleOnClick = (index) => {
    setActive(index);
  };

  // getCampaignForProject code
  useEffect(() => {
    getProjects();
  }, []);

  const getProjects = async () => {
    const data = { ProjectId: "1" };

    const getProject = await axios
      .post(baseUrl + MethodNames.getCampaignForProject, data)
      .then((res) => {
        setLoding(false);
        if (res.data.getCampaignForProject[0].CampainId) {
          console.log("list of getCampaignForProject", res.data);

          setCampaignForProject(res.data.getCampaignForProject);
        } else {
          console.log("There is no campaign is defined for the selected project")
            .catch((error) => {
              console.log("Not campaign found", error);
            });
        }
      });
  };

  return (
    <MainContainer>
      <Sidebaar show={show} />
      <div className={open ? "content-page3" : "content-page1"}>
        <div className="container-fluid">
          <div className="row mt-">
            <div className="col-12">
              <div className="cardd py-3 mb-1 h_90vh p_l">
                <div className="row row_border">
                  <div className="col-md-12 col-12  d-flex justify-content-between p-3  ">
                    <div className="mt-1 d-flex justify-content-center h-100 align-items-center">
                      <h6 className=" heddings "> Select-Campaign</h6>
                    </div>
                    <div>
                      <Button variant="contained" className=" fs_10">
                        Add Project
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="w-100 d-flex justify-content-center  align-items-center ">
                  <div class="row justify-content-center h-50 ">
                    {loding ? (
                      <Spin className="ms-5" size="large" />
                    ) : (
                      <>
                        {campaignForProject &&
                          campaignForProject.map((i, index) => {
                            return (
                              <>
                                <div class="col-12 col-md-4 col-lg-4 col-xl-2 mb-2 select_project card-width">
                                  <a
                                    href="#"
                                    onClick={() => setActive(index)}
                                    className={
                                      active == index ? "active_project" : "-"
                                    }
                                  >
                                    <div className="card  px-3 h-100 w-100 justify-content-center">
                                      <div>
                                        {active == index ? (
                                          <TiTick className="right_icon" />
                                        ) : (
                                          ""
                                        )}
                                      </div>
                                      <div class=" ">
                                        <img
                                          src="https://mttest.parinaam.in/images/abott_logo.svg"
                                          // src="https://mttest.parinaam.in/images/nestle_logo.svg"
                                          class="img-fluid"
                                        />
                                        <h6 className="mt-4 m-0">
                                          <b>{i.Campain_Name}</b>
                                          <p className="p-0 m-0 fs_10 mt-2 ">
                                            <span className="me-2 ">
                                              CampainId -
                                            </span>
                                            {i.CampainId}
                                          </p>
                                          <p className="p-0 m-0 fs_10 ">
                                            <span className="me-2 ">
                                              CampainCode -
                                            </span>
                                            {i.CampainCode}
                                          </p>
                                        </h6>

                                        <p className=" text-dark m-0 p-0 mt-1">
                                          Online Grammar and Writing Checker To
                                          Help You Deliver Impeccable,{" "}
                                        </p>
                                      </div>
                                    </div>
                                  </a>
                                </div>
                              </>
                            );
                          })}
                      </>
                    )}

                    {/* <div class="col-12 col-md-4 col-lg-4 col-xl-2 mb-2 select_project">
                    <a
                      href="#"
                      class="w-100"
                      onClick={() => handleOnClick(1)}
                      className={active === 1 ? "active_project" : ""}
                    >
                     <div className="card  px-3 h-100 w-100 justify-content-center">
                     {active === 1 ? <TiTick className="right_icon" /> : ""}
                      <div class=" ">
                        <img
                          src="https://mttest.parinaam.in/images/abott_logo.svg"
                          class="img-fluid"
                        />
                        <h6 className="mt-4 m-0">
                          <b>Heading</b>
                        </h6>

                        <p className=" text-dark m-0 p-0">
                          Online Grammar and Writing Checker To Help You Deliver
                          Impeccable,{" "}
                        </p>
                      </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-12 col-md-4 col-lg-4 col-xl-2 mb-2 select_project">
                    <a
                      href="#"
                      class="w-100"
                      onClick={() => handleOnClick(2)}
                      className={active === 2 ? "active_project" : ""}
                    >
                         <div className="card  px-3 h-100 w-100 justify-content-center">
                         {active === 2 ? <TiTick className="right_icon" /> : ""}
                      <div class=" ">
                        <img
                          src="https://mttest.parinaam.in/images/nestle_logo.svg"
                          class="img-fluid"
                        />
                        <h6 className="mt-4 m-0">
                          <b>Heading</b>
                        </h6>

                        <p className=" text-dark m-0 p-0">
                          Online Grammar and Writing Checker To Help You Deliver
                          Impeccable,{" "}
                        </p>
                      </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-12 col-md-4 col-lg-4 col-xl-2 mb-2 select_project">
                    <a
                      href="#"
                      class="w-100"
                      onClick={() => handleOnClick(3)}
                      className={active === 3 ? "active_project" : ""}
                    >
                      <div className="card  px-3 h-100 w-100 justify-content-center">
                      {active === 3 ? <TiTick className="right_icon" /> : ""}
                      <div class=" ">
                        <img
                          src="https://mttest.parinaam.in/images/nykaa_logo.svg
                  "
                          class="img-fluid"
                        />
                        <h6 className="mt-4 m-0">
                          <b>Heading</b>
                        </h6>

                        <p className=" text-dark m-0 p-0">
                          Online Grammar and Writing Checker To Help You Deliver
                          Impeccable,{" "}
                        </p>
                        </div>
                      </div>
                    </a>
                  </div> */}
                    <div class="row m-0 text-center justify-content-center mt-5">
                      <div class="col-sm-12 col-md-4 col-lg-4 col-xl-3">
                        <Link href="./Store">
                          <Button variant="contained" className=" px-5">
                            Go
                          </Button>
                        </Link>
                      </div>
                    </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(SelectProject);
