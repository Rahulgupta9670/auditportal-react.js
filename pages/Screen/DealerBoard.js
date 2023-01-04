import React, { useState } from "react";
import ImageUploading from "react-images-uploading";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import Footer from "../footer";
import MainContainer from "../components/Container";
import { connect, useSelector } from "react-redux";
import Sidebaar from "./Sidebaar";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Button from "@mui/material/Button";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import { Image } from "antd";

const DealerBoard = (props) => {
  const imageList = [
    {
      id: 1,
      long_image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM16f-Ewm6_HLR2TUUYV5syxZoTxJ2ta_evg&usqp=CAU",
    },
    {
      id: 2,
      long_image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi9qYnKdeynuwRG4T9cFAB8PGuy60DLaml7Q&usqp=CAU",
    },
    {
      id: 3,
      long_image:
        "https://c8.alamy.com/comp/T0CKE4/indian-peering-out-from-counter-at-general-store-bundi-rajasthan-india-T0CKE4.jpg",
    },
  ];
  const open = useSelector((state) => state.projectR.sideClick);
  const [images, setImages] = React.useState([]);
  const maxNumber = 69;
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };
  const [visible, setVisible] = useState(false);
  // const [scaleStep, setScaleStep] = useState(0.5);
  return (
    <div className="h100">
      <MainContainer>
        <link href="/styles/dashboard.css"></link>
        <Sidebaar />
        <div className={open ? "content-page3 vh-100" : "content-page1 vh-100"}>
          <div className="content   ">
            <div className="container-fluid">
              <div className="row ">
                <div className="col-12">
                  <div className="card  px-3 mb-1">
                
                    <div className="row">
                      <div className="col-md-11 col-12 herdar_Card mt-1 p-1  m-0 p-0 px-3">
                        <div className=" detailers d-flex ">
                          <p className="headding  ">Visit Date :</p>
                          <p>10/11/2023</p>
                        </div>
                        <div className="detailers d-flex ">
                          <p className=" headding  ">Store Id :</p>
                          <p>371704</p>
                        </div>
                        <div className="detailers d-flex ">
                          <p className=" headding  ">Store Name :</p>
                          <p>Cpm india</p>
                        </div>
                        <div className="detailers d-flex ">
                          <p className=" headding  ">Store Type :</p>
                          <p>Grocery</p>
                        </div>
                        <div className="detailers d-flex ">
                          <p className=" headding  ">Region :</p>
                          <p>North</p>
                        </div>
                        <div className="detailers d-flex ">
                          <p className=" headding  ">State:</p>
                          <p>Delhi</p>
                        </div>
                        <div className="detailers d-flex ">
                          <p className=" headding  ">City :</p>
                          <p>New Delhi</p>
                        </div>
                        <div className="detailers d-flex ">
                          <p className=" headding  ">Merchandiser :</p>
                          <p>Sombir</p>
                        </div>
                        <div className="detailers d-flex ">
                          <p className=" headding  ">Supervisor Name :</p>
                          <p>Mandeep Singh</p>
                        </div>
                        <div className="detailers d-flex ">
                          <p className=" headding  ">Address :</p>
                          <p>New Delhi</p>
                        </div>
                      </div>
                      <div className="col-md-1 col-12">
                        <div
                          className="mt-1 ms-4 full_screen  "
                          onClick={() => setVisible(true)}
                        >
                          <FullscreenIcon type="primary" />

                          <Image
                            width={200}
                            style={{ display: "none" }}
                            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
                            preview={{
                              visible,

                              src: "https://c8.alamy.com/comp/T0CKE4/indian-peering-out-from-counter-at-general-store-bundi-rajasthan-india-T0CKE4.jpg",
                              onVisibleChange: (value) => {
                                setVisible(value);
                              },
                            }}
                          />
                        </div>
                      </div>
                    </div>{" "}
                  </div>
                  <div className="card  mb-1 px-3">
                    {/* <h6 className="m-3 px-4">Dealer Board</h6> */}
                    <div className="row mt-2">
                      <div className="col-md-6 col-12 mb-2 ">
                        <div className="uploadHeadding">
                          <h6>Long Short Image</h6>
                        </div>
                      </div>
                      <div className="col-md-6 col-12 ">
                        <div className="uploadHeadding p-0">
                          <h6>Close Short Image</h6>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-2 card_scroll">
                      <div className="col-md-6 col-12 d-flex justify-content-center">
                        <div className="UploadeCard">
                          <div className="wraps">
                            {imageList.map((image, index) => (
                              <div className="upload__image-wrapper">
                                <div className="uploadPictureContainer">
                                  <Image
                                    // preview={false}
                                    src={image.long_image}
                                    // src={image["data_url"]}
                                    className="uploadPicture  hover-shadow cursor"
                                    alt="preview"
                                  />
                                </div>
                                <hr />
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-12 d-flex justify-content-center">
                        <div className="UploadeCard">
                          <div className="wraps">
                            {imageList.map((image, index) => (
                              <div className="upload__image-wrapper">
                                <div className="uploadPictureContainer">
                                  <Image
                                    // preview={false}
                                    src={image.long_image}
                                    // src={image["data_url"]}
                                    className="uploadPicture  hover-shadow cursor"
                                    alt="preview"
                                  />
                                </div>
                                <hr />
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="row mt-5 mb-5">
                        <div className="col-md-12 col-12 ps-3">
                          <div className="flitter_size w-50 d-flex ms-4">
                            <label className="w-25 pt-1 fw-bold ps-1">
                              {" "}
                              Selfi with Dealer Brand :
                            </label>
                            <select
                              class="form-select w-25 bg-white ms-3"
                              aria-label="Default select example"
                            >
                              <option selected>----- select -----</option>
                              <option value="1">One</option>
                              <option value="2">Two</option>
                              <option value="3">Three</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row mt-2 mb-3">
                      <div className="col-md-12 col-12 ps-3 d-flex justify-content-between">
                        <Button
                          variant="contained"
                          className=" btn_next mx-4 px-3"
                        >
                          Back
                        </Button>
                        <Button
                          variant="contained"
                          className=" btn_next mx-4  px-3"
                        >
                          Next
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <Footer /> */}
      </MainContainer>
    </div>
  );
};
export default DealerBoard;
