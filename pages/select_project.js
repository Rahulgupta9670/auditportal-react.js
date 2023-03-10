import React, { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Button from "@mui/material/Button";
import {
  mapStateToProps,
  mapDispatchToProps,
} from "./constants/contextProvider.js";
import MainContainer from "./components/Container";
import { connect } from "react-redux";
import LoginNavbaar from "./Screen/LoginNavbaar.js";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { baseUrl } from "./constants/constants.js";
import { MethodNames } from "./constants/methodNames.js";
import { TiTick } from "react-icons/Ti";
import { Spin } from "antd";

const SelectProject = () => {
  const [active, setActive] = useState(0);
  const [state, setState] = useState();
  const [loding, setLoding] = useState(true);

  const handleOnClick = (index) => {
    setActive(index);
  };

  //  GetUsersProject api implement
  const [GetUsersProjects, setGetUsersProject] = useState();
  useEffect(() => {
    GetUsersProject();
  }, []);

  const GetUsersProject = async () => {
    let data = { UserId: "1" };
    const GetUsersProjectApi = await axios
      .post(baseUrl + MethodNames.GetUsersProject, data)
      .then((res) => {
        setLoding(false);
        console.log("GetUsersProject", res.data.GetUsersProject);
        if (res.data.GetUsersProject[0].ProjectName) {
          setGetUsersProject(res.data.GetUsersProject);
        } else {
          console.log("No Data", res.data.GetUsersProject);
        }
      })
      .catch((error) => {
        console.log("GetUsersProjectApi failed", error);
      });
  };

  return (
    <MainContainer>
      <Head>
        <title>select_project</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <LoginNavbaar />
        <div class="container h100">
          <div class="row justify-content-center align-items-center h100">
            <div class="col-sm-12 p-0">
              <div class="row justify-content-center">
                {loding ? (
                  <Spin className="ms-5" size="large" />
                ) : (
                  <>
                    {GetUsersProjects &&
                      GetUsersProjects.map((i, index) => {
                        return (
                          <div class="col-6 col-md-4 col-lg-4 col-xl-2 mb-2 select_project">
                            <a
                              href="#"
                              onClick={() => handleOnClick(index)}
                              className={
                                active === index ? "active_project" : ""
                              }
                            >
                              <div class="card p-2 m-0 p-0 h-100 w-100 align-items-center justify-content-center">
                                <div>
                                  {active == index ? (
                                    <TiTick className="right_icon" />
                                  ) : (
                                    ""
                                  )}
                                </div>
                                <div className="projoect_card px-3    p-2">
                                  <img
                                    src={i.ProjectLogo}
                                    class="img-fluid w-100 h-100 obj_fit"
                                  />
                                </div>
                                <p className="text-center mb-3 p-0 m-0 mt-4 text-success fw-bold">
                                  {i.ProjectName}
                                </p>
                              </div>
                            </a>
                          </div>
                        );
                      })}
                  </>
                )}

                {/* <div class="col-6 col-md-4 col-lg-4 col-xl-2 mb-2 select_project">
                  <a
                    href="#"
                    class="w-100"
                    onClick={() => handleOnClick(1)}
                    className={active === 1 ? "active_project" : ""}
                  >
                    <div class="card p-2 h-100 w-100 justify-content-center">
                      <img
                        src="https://mttest.parinaam.in/images/abott_logo.svg"
                        class="img-fluid"
                      />
                    </div>
                  </a>
                </div>
                <div class="col-6 col-md-4 col-lg-4 col-xl-2 mb-2 select_project">
                  <a
                    href="#"
                    class="w-100"
                    onClick={() => handleOnClick(2)}
                    className={active === 2 ? "active_project" : ""}
                  >
                    <div class="card p-2 h-100 w-100 justify-content-center">
                      <img
                        src="https://mttest.parinaam.in/images/nestle_logo.svg"
                        class="img-fluid"
                      />
                    </div>
                  </a>
                </div>
                <div class="col-6 col-md-4 col-lg-4 col-xl-2 mb-2 select_project">
                  <a
                    href="#"
                    class="w-100"
                    onClick={() => handleOnClick(3)}
                    className={active === 3 ? "active_project" : ""}
                  >
                    <div class="card p-2 h-100 w-100 justify-content-center">
                      <img
                        src="https://mttest.parinaam.in/images/nykaa_logo.svg
                  "
                        class="img-fluid"
                      />
                    </div>
                  </a>
                </div> */}
                <div class="row m-0 text-center justify-content-center mt-5">
                  <div class="col-sm-12 col-md-4 col-lg-4 col-xl-3">
                    {/* <Link href="./Screen/select">
                      <a
                        href=""
                        class="btn btn-primary w-100 btn-lg px-5"
                        type="submit"
                      >
                        Go
                      </a>
                    </Link> */}
                    <Link href="./Screen/Dashboard">
                      <Button variant="contained" className="ms-4 me-4 px-5">
                        Go
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </MainContainer>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(SelectProject);
