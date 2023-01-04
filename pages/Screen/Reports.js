import React, { useState } from "react";
import Footer from "../footer";
import Sidebaar from "./Sidebaar";
import {
  mapStateToProps,
  mapDispatchToProps,
} from "../constants/contextProvider.js";
import MainContainer from "../components/Container";
import { connect, useSelector } from "react-redux";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Button from "@mui/material/Button";

const Reports = () => {
  const open = useSelector((state) => state.projectR.sideClick);
  return (
    <MainContainer>
      <Sidebaar />
      <div className={open ? "content-page3" : "content-page1"}>
        <div className="container-fluid">
          <div className="row mt-">
            <div className="col-12">
              <div className="card py-3 mb-1">
                <div className="row">
                  <div className="col-md-12 col-12 d-flex  mt-1">
                    <div className="flitter_size mx-4">
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          Date
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          // value={age}
                          label="Age"
                          // onChange={handleChange}
                        >
                          <MenuItem value={10}>Ten</MenuItem>
                          <MenuItem value={20}>Twenty</MenuItem>
                          <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                      </FormControl>
                    </div>

                    <div className="flitter_size mx-4">
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          Comoalins
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          // value={age}
                          label="Age"
                          // onChange={handleChange}
                        >
                          <MenuItem value={10}>Ten</MenuItem>
                          <MenuItem value={20}>Twenty</MenuItem>
                          <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                    <div className="flitter_size mx-4">
                      <Button
                        variant="contained"
                        className=" one h_90 me-1 fs_10 w-100 px-5 rounded-pill text-capitalize"
                      >
                        Apply
                      </Button>
                    </div>
                    {/* <div className="flitter_size">
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          Cycle
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          // value={age}
                          label="Age"
                          // onChange={handleChange}
                        >
                          <MenuItem value={10}>Ten</MenuItem>
                          <MenuItem value={20}>Twenty</MenuItem>
                          <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                    <div className="flitter_size">
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          Region
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          // value={age}
                          label="Age"
                          // onChange={handleChange}
                        >
                          <MenuItem value={10}>Ten</MenuItem>
                          <MenuItem value={20}>Twenty</MenuItem>
                          <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                    <div className="flitter_size">
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          State
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          // value={age}
                          label="Age"
                          // onChange={handleChange}
                        >
                          <MenuItem value={10}>Ten</MenuItem>
                          <MenuItem value={20}>Twenty</MenuItem>
                          <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                    <div className="flitter_size">
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          City
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          // value={age}
                          label="Age"
                          // onChange={handleChange}
                        >
                          <MenuItem value={10}>Ten</MenuItem>
                          <MenuItem value={20}>Twenty</MenuItem>
                          <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                      </FormControl>
                    </div> */}
                  </div>
                </div>
              </div>

              <div className="card mb-4">
                <div className="card-body p-2 px-3">
                  <div className="row justify-content-between align-items-center">
                    <div className="col-sm-12 col-md-5 col-lg-5 col-xl-4">
                      <input
                        class="input-grey-rounded fs_10 "
                        type="text"
                        placeholder="Search by store id,  store code..."
                      ></input>
                    </div>
                    <div className="col-auto">
                      <div className="text-lg-end my-1 my-lg-0 h_90">
                        {/* <button
                          type="button"
                          class="btn btn-primary waves-effect waves-light px-4 rounded-pill"
                        >
                         
                        </button> */}

                        <Button
                          variant="contained"
                          className="h_90 me-1 fs_10 w-100 px-4 one rounded-pill"
                        >
                          {" "}
                          Export
                        </Button>

                        {/* <ul className="list-unstyled listInline m-0">
                          
                          <li className="dropdown  ">
                            <a
                              className="btn btn-outline-blue rounded-pill fs_12 waves-effect nav-link dropdown-toggle waves-effect waves-light"
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
                        </ul> */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 table-responsive px-3 ">
                  <table className="table table-bordered" id="dataTable">
                    <thead>
                      <tr>
                        <th>Date</th>
                        <th>Camppalin</th>
                        <th>Count</th>
                        <th>Start Time</th>
                        <th>End Time</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>14/11/2022</td>
                        <td>Piyush general Store</td>
                        <td>30</td>
                        <td>12:30</td>
                        <td>4:40</td>
                      </tr>
                      <tr>
                        <td>14/11/2022</td>
                        <td>Piyush general Store</td>
                        <td>30</td>
                        <td>12:30</td>
                        <td>4:40</td>
                      </tr>
                      <tr>
                        <td>14/11/2022</td>
                        <td>Piyush general Store</td>
                        <td>30</td>
                        <td>12:30</td>
                        <td>4:40</td>
                      </tr>

                      <tr>
                        <td>14/11/2022</td>
                        <td>Piyush general Store</td>
                        <td>30</td>
                        <td>12:30</td>
                        <td>4:40</td>
                      </tr>
                      <tr>
                        <td>14/11/2022</td>
                        <td>Piyush general Store</td>
                        <td>30</td>
                        <td>12:30</td>
                        <td>4:40</td>
                      </tr>
                      <tr>
                        <td>14/11/2022</td>
                        <td>Piyush general Store</td>
                        <td>30</td>
                        <td>12:30</td>
                        <td>4:40</td>
                      </tr>
                      <tr>
                        <td>14/11/2022</td>
                        <td>Piyush general Store</td>
                        <td>30</td>
                        <td>12:30</td>
                        <td>4:40</td>
                      </tr>
                      <tr>
                        <td>14/11/2022</td>
                        <td>Piyush general Store</td>
                        <td>30</td>
                        <td>12:30</td>
                        <td>4:40</td>
                      </tr>
                      <tr>
                        <td>14/11/2022</td>
                        <td>Piyush general Store</td>
                        <td>30</td>
                        <td>12:30</td>
                        <td>4:40</td>
                      </tr>
                    </tbody>
                  </table>
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
                        <h6 className="fs_10">Showing 1–12 of 75 results</h6>
                        {/* <div className="input-group mb-3">
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
                        </div> */}
                      </div>
                    </div>
                  </form>
                </div>
                <div className="col-auto">
                  <div className="text-lg-end my-1 my-lg-0">
                    <nav aria-label="Page navigation example">
                      <ul className="pagination">
                        <li className="page-item">
                          <a
                            className="page-link btn-outline-blue fs_10"
                            href="#"
                          >
                            Previous
                          </a>
                        </li>
                        <li className="page-item">
                          <a
                            className="page-link btn-outline-blue fs_10"
                            href="#"
                          >
                            1
                          </a>
                        </li>
                        <li className="page-item">
                          <a
                            className="page-link btn-outline-blue fs_10"
                            href="#"
                          >
                            2
                          </a>
                        </li>
                        <li className="page-item">
                          <a
                            className="page-link btn-outline-blue fs_10"
                            href="#"
                          >
                            3
                          </a>
                        </li>
                        <li className="page-item">
                          <a
                            className="page-link btn-outline-blue fs_10"
                            href="#"
                          >
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
      {/* <Footer /> */}
    </MainContainer>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Reports);
