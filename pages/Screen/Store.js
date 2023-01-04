import React, { useEffect, useState } from "react";
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
// import Select, { SelectChangeEvent } from "@mui/material/Select";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";
import { default as ReactSelect } from "react-select";
import makeAnimated from "react-select/animated";
import { Popconfirm } from "antd";

import SelectDropdown from "./SelectDropdown";

import { components } from "react-select";

const MultiValue = (props) => (
  <components.MultiValue {...props}>
    <span>{props.data.label}</span>
  </components.MultiValue>
);
const customStyles = {
  control: (provided, state) => ({
    ...provided,
    // background: 'red ',
    borderColor: "#9e9e9e",
    minHeight: "30px",
    height: "30px",
    boxShadow: state.isFocused ? null : null,
  }),

  valueContainer: (provided, state) => ({
    ...provided,
    height: "30px",
    padding: "0 6px",
  }),

  indicatorsContainer: (provided, state) => ({
    ...provided,
    height: "30px",
  }),
};

const animatedComponents = makeAnimated();

const Store = (props) => {
  const colourOptions = [
    { id: 1, value: "select", label: "Select All", color: "#00B8D9" },
    { id: 2, value: "ocean", label: " Store Type", color: "#00B8D9" },
    { id: 3, value: "blue", label: "Blue", color: "#0052CC" },
    { id: 4, value: "purple", label: "Purple", color: "#5243AA" },
    { id: 5, value: "red", label: "Red", color: "#FF5630" },
    { id: 6, value: "orange", label: "Orange", color: "#FF8B00" },
    { id: 7, value: "yellow", label: "Yellow", color: "#FFC400" },
    { id: 8, value: "green", label: "Green", color: "#36B37E" },
    { id: 9, value: "forest", label: "Forest", color: "#00875A" },
    { id: 10, value: "slate", label: "Slate", color: "#253858" },
    { id: 11, value: "silver", label: "Silver", color: "#666666" },
  ];
  const [searchInput, setSearchInput] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filteredData = tableDetails.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
     
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(tableDetails);
    }
  };

  const open = useSelector((state) => state.projectR.sideClick);
  const [selectedOption, setSelectedOption] = useState("select");
  const [selectedOption1, setSelectedOption1] = useState({
    options1: "select",
    options2: "select",
    options3: "select",
    options4: "select",
    options5: "select",
    options6: "select",
    options7: "select",
    options8: "select",
  });

  useEffect(() => {
    console.log("selectedOption1................", selectedOption);
  }, [selectedOption]);

  const Option = (props) => {
    return (
      <div class="tooltips">
        <components.Option {...props}>
          <input
            style={{ backgroundColor: props.color }}
            type="checkbox"
            checked={
              selectedOption == "select"
                ? true
                : selectedOption == props.value
                ? true
                : false
            }
            onChange={(e) => {
              // console.log("props.isSelected------------1-", e.target.value)
              props.setValue(props.getValue);
              setSelectedOption(props.value);
            }}
          />
          {/* {console.log("props.isSelected-------------", props)} */}
          <label className="ms-2" key={props.id}>
            {props.label}
          </label>
          <span
            class="tooltiptexts"
            onClick={() => {
              // console.log("props.isSelected------------2-", props.value)
              setSelectedOption(props.value);
            }}
          >
            only
          </span>
        </components.Option>
        <div className="border"></div>
      </div>
    );
  };

  const tableDetails = [
    {
      id: 1,
      StoreId: "32531",
      StoreName: "	Piyush general Store",
      StoreCode: "Temp0027",
      RegionName: "West",
      CityName: "	Indore",
      DistributorName: "Vishal Enterprises",
      InactiveDate: "----",
      StoreStatus: "	Active",
      Action: "",
    },
    {
      id: 2,
      StoreId: "32531",
      StoreName: "	shubham general Store",
      StoreCode: "Temp0027",
      RegionName: "West",
      CityName: "	Indore",
      DistributorName: "Vishal Enterprises",
      InactiveDate: "----",
      StoreStatus: "	Active",
      Action: "",
    },
    {
      id: 3,
      StoreId: "32531",
      StoreName: "	nishant general Store",
      StoreCode: "Temp0027",
      RegionName: "West",
      CityName: "	Indore",
      DistributorName: "Vishal Enterprises",
      InactiveDate: "----",
      StoreStatus: "	Active",
      Action: "",
    },
    {
      id: 4,
      StoreId: "32531",
      StoreName: "	sharma general Store",
      StoreCode: "Temp0027",
      RegionName: "West",
      CityName: "	Indore",
      DistributorName: "Vishal Enterprises",
      InactiveDate: "----",
      StoreStatus: "	Active",
      Action: "",
    },
    {
      id: 5,
      StoreId: "32531",
      StoreName: "	Dharma general Store",
      StoreCode: "Temp0027",
      RegionName: "West",
      CityName: "	Indore",
      DistributorName: "Vishal Enterprises",
      InactiveDate: "----",
      StoreStatus: "	Active",
      Action: "",
    },
    {
      id: 6,
      StoreId: "32531",
      StoreName: "Pawan general Store",
      StoreCode: "Temp0027",
      RegionName: "West",
      CityName: "	Indore",
      DistributorName: "Vishal Enterprises",
      InactiveDate: "----",
      StoreStatus: "	Active",
      Action: "",
    },
    {
      id: 7,
      StoreId: "32531",
      StoreName: "	Dharma general Store",
      StoreCode: "Temp0027",
      RegionName: "West",
      CityName: "	Indore",
      DistributorName: "Vishal Enterprises",
      InactiveDate: "----",
      StoreStatus: "	Active",
      Action: "",
    },
    {
      id: 8,
      StoreId: "32531",
      StoreName: "sahil general Store",
      StoreCode: "Temp0027",
      RegionName: "West",
      CityName: "	Indore",
      DistributorName: "Vishal Enterprises",
      InactiveDate: "----",
      StoreStatus: "	Active",
      Action: "",
    },
    {
      id: 9,
      StoreId: "32531",
      StoreName: "	shubham general Store",
      StoreCode: "Temp0027",
      RegionName: "West",
      CityName: "	Indore",
      DistributorName: "Vishal Enterprises",
      InactiveDate: "----",
      StoreStatus: "	Active",
      Action: "",
    },
    {
      id: 10,
      StoreId: "32531",
      StoreName: "	rahul general Store",
      StoreCode: "Temp0027",
      RegionName: "West",
      CityName: "	Indore",
      DistributorName: "Vishal Enterprises",
      InactiveDate: "----",
      StoreStatus: "	Active",
      Action: "",
    },
    {
      id: 11,
      StoreId: "32531",
      StoreName: "	nishnat general Store",
      StoreCode: "Temp0027",
      RegionName: "West",
      CityName: "	Indore",
      DistributorName: "Vishal Enterprises",
      InactiveDate: "----",
      StoreStatus: "	Active",
      Action: "",
    },
    {
      id: 12,
      StoreId: "32531",
      StoreName: "	sharma general Store",
      StoreCode: "Temp0027",
      RegionName: "West",
      CityName: "	Indore",
      DistributorName: "Vishal Enterprises",
      InactiveDate: "----",
      StoreStatus: "	Active",
      Action: "",
    },
    {
      id: 13,
      StoreId: "32531",
      StoreName: "	Dharma general Store",
      StoreCode: "Temp0027",
      RegionName: "West",
      CityName: "	Indore",
      DistributorName: "Vishal Enterprises",
      InactiveDate: "----",
      StoreStatus: "	Active",
      Action: "",
    },
    {
      id: 14,
      StoreId: "32531",
      StoreName: "Pawan general Store",
      StoreCode: "Temp0027",
      RegionName: "West",
      CityName: "	Indore",
      DistributorName: "Vishal Enterprises",
      InactiveDate: "----",
      StoreStatus: "	Active",
      Action: "",
    },
    {
      id: 15,
      StoreId: "32531",
      StoreName: "	Dharma general Store",
      StoreCode: "Temp0027",
      RegionName: "West",
      CityName: "	Indore",
      DistributorName: "Vishal Enterprises",
      InactiveDate: "----",
      StoreStatus: "	Active",
      Action: "",
    },
    {
      id: 16,
      StoreId: "32531",
      StoreName: "sahil general Store",
      StoreCode: "Temp0027",
      RegionName: "West",
      CityName: "	Indore",
      DistributorName: "Vishal Enterprises",
      InactiveDate: "----",
      StoreStatus: "	Active",
      Action: "",
    },
    {
      id: 17,
      StoreId: "32531",
      StoreName: "	shubham general Store",
      StoreCode: "Temp0027",
      RegionName: "West",
      CityName: "	Indore",
      DistributorName: "Vishal Enterprises",
      InactiveDate: "----",
      StoreStatus: "	Active",
      Action: "",
    },
    {
      id: 18,
      StoreId: "32531",
      StoreName: "	rahul general Store",
      StoreCode: "Temp0027",
      RegionName: "West",
      CityName: "	Indore",
      DistributorName: "Vishal Enterprises",
      InactiveDate: "----",
      StoreStatus: "	Active",
      Action: "",
    },
  ];

  useEffect(() => {
    // console.log("selectedOption--------------", selectedOption)
  }, [selectedOption]);

  return (
    <MainContainer>
      <Sidebaar />
      <div className={open ? "content-page3" : "content-page1 "}>
        <div className="container-fluid">
          <div className="row mt- ">
            <div className="col-12">
              <div className="card py-2 mb-1 ">
                <div className="row">
                  <div className="col-md-12 col-12 d-flex justify-content-around mt-1">
                    <div className="flitter_size">
                      <ReactSelect
                        styles={customStyles}
                        placeholder={<div> Year</div>}
                        options={colourOptions}
                        closeMenuOnSelect={false}
                        components={{ Option, MultiValue, animatedComponents }}
                      />
                    </div>

                    <div className="flitter_size">
                      <ReactSelect
                        styles={customStyles}
                        placeholder={<div> Month</div>}
                        options={colourOptions}
                        closeMenuOnSelect={false}
                        components={{ Option, MultiValue, animatedComponents }}
                        setValue={setSelectedOption1}
                        getValue={selectedOption1}
                      />
                    </div>
                    <div className="flitter_size">
                      <ReactSelect
                        styles={customStyles}
                        placeholder={<div> Cycle</div>}
                        options={colourOptions}
                        closeMenuOnSelect={false}
                        components={{ Option, MultiValue, animatedComponents }}
                      />
                    </div>
                    <div className="flitter_size">
                      <ReactSelect
                        styles={customStyles}
                        placeholder={<div> Region</div>}
                        options={colourOptions}
                        closeMenuOnSelect={false}
                        components={{ Option, MultiValue, animatedComponents }}
                      />
                    </div>
                    <div className="flitter_size">
                      <ReactSelect
                        styles={customStyles}
                        placeholder={<div> State</div>}
                        options={colourOptions}
                        closeMenuOnSelect={false}
                        components={{ Option, MultiValue, animatedComponents }}
                      />
                    </div>

                    <div className="flitter_size">
                      <ReactSelect
                        styles={customStyles}
                        placeholder={<div> City</div>}
                        options={colourOptions}
                        closeMenuOnSelect={false}
                        components={{ Option, MultiValue, animatedComponents }}
                      />

                      {/* <FormControl fullWidth>
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
                      </FormControl> */}
                    </div>
                  </div>
                  <div className="col-md-12 col-12 d-flex justify-content-around mt-3">
                    <div className="flitter_size">
                      <ReactSelect
                        styles={customStyles}
                        placeholder={<div> Store Type</div>}
                        options={colourOptions}
                        closeMenuOnSelect={false}
                        components={{ Option, MultiValue, animatedComponents }}
                      />
                    </div>

                    <div className="flitter_size">
                      <Button
                        variant="contained"
                        className=" one h_90 me-1 fs_10 w-100 px-5 rounded-pill text-capitalize"
                      >
                        Apply
                      </Button>
                    </div>

                    <div className="flitter_size">
                      {/* <FormControl fullWidth>
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
                      </FormControl> */}
                    </div>
                    <div className="flitter_size">
                      {/* <FormControl fullWidth>
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
                      </FormControl> */}
                    </div>
                    <div className="flitter_size">
                      {/* <FormControl fullWidth>
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
                      </FormControl> */}
                    </div>
                    <div className="flitter_size">
                      {/* <FormControl fullWidth>
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
                      </FormControl> */}
                    </div>
                  </div>
                </div>
              </div>

              <div className="cardd mb-4 ">
                <div className="card-body p-2 px-3">
                  <div className="row justify-content-between align-items-center">
                    <div className="col-sm-12 col-md-5 col-lg-5 col-xl-4">
                      <input
                        class="input-grey-rounded fs_10 "
                        type="text"
                        onChange={(e) => searchItems(e.target.value)}
                        placeholder="Search ......."
                      ></input>
                      {/* <div className="searchbar">
                        <div className="searchbar-wrapper">
                          <div className="searchbar-left">
                            <div className="search-icon-wrapper">
                              <span className="search-icon searchbar-icon">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
                                </svg>
                              </span>
                            </div>
                          </div>
                          <div className="searchbar-center">
                            <div className="searchbar-input-spacer" />
                            <input
                              type="text"
                              onChange={(e) => searchItems(e.target.value)}
                              className="searchbar-input"
                              maxLength={2048}
                              name="q"
                              autoCapitalize="off"
                              autoComplete="off"
                              title="Search"
                              role="combobox"
                              placeholder="Search......"
                            />
                          </div>
                          <div className="searchbar-right">
                            <svg
                              className="voice-search"
                              role="button"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill="#4285f4"
                                d="m12 15c1.66 0 3-1.31 3-2.97v-7.02c0-1.66-1.34-3.01-3-3.01s-3 1.34-3 3.01v7.02c0 1.66 1.34 2.97 3 2.97z"
                              ></path>
                              <path fill="#34a853" d="m11 18.08h2v3.92h-2z" />
                              <path
                                fill="#fbbc05"
                                d="m7.05 16.87c-1.27-1.33-2.05-2.83-2.05-4.87h2c0 1.45 0.56 2.42 1.47 3.38v0.32l-1.15 1.18z"
                              ></path>
                              <path
                                fill="#ea4335"
                                d="m12 16.93a4.97 5.25 0 0 1 -3.54 -1.55l-1.41 1.49c1.26 1.34 3.02 2.13 4.95 2.13 3.87 0 6.99-2.92 6.99-7h-1.99c0 2.92-2.24 4.93-5 4.93z"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </div> */}
                    </div>
                    <div className="col-auto">
                      <div className="text-lg-end my-1 my-lg-0 h_90">
                        <Button
                          type="print"
                          variant="contained"
                          className="h_90 me-1 fs_10 w-100 px-4 one rounded-pill"
                        >
                          {" "}
                          Export
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 table-responsive px-3 table_h ">
                  <table className="table table-bordered mb-1" id="dataTable">
                    <thead>
                      <tr>
                        <th>Store Id</th>
                        <th>Store Name</th>
                        <th>Store Code</th>
                        <th>Region Name</th>
                        <th>City Name</th>
                        <th>Distributor Name</th>
                        <th>Inactive Date</th>
                        <th>Store Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {searchInput.length > 1
                        ? filteredResults.map((i, index) => {
                            return (
                              <tr>
                                <td>{i.StoreId}</td>
                                <td>{i.StoreName}</td>
                                <td>{i.StoreCode}</td>
                                <td>{i.RegionName}</td>
                                <td>{i.CityName}</td>
                                <td>{i.DistributorName}</td>
                                <td>{i.InactiveDate}</td>
                                <td>{i.StoreStatus}</td>
                                <td>
                                  <p className="m-0">
                                    <a href="#" className=" p-1" title="edit">
                                      <span className="material-icons link-success">
                                        edit
                                      </span>
                                    </a>
                                    <Popconfirm
                                      title="Are you sure delete this task?"
                                      okText="Yes"
                                      cancelText="No"
                                    >
                                      <a
                                        href="#"
                                        className="p-1"
                                        title="delete"
                                      >
                                        <span className="material-icons link-danger">
                                          delete
                                        </span>
                                      </a>
                                    </Popconfirm>
                                  </p>
                                </td>
                              </tr>
                            );
                          })
                        : tableDetails.map((i, index) => {
                            return (
                              <tr>
                                <td>{i.StoreId}</td>
                                <td>{i.StoreName}</td>
                                <td>{i.StoreCode}</td>
                                <td>{i.RegionName}</td>
                                <td>{i.CityName}</td>
                                <td>{i.DistributorName}</td>
                                <td>{i.InactiveDate}</td>
                                <td>{i.StoreStatus}</td>
                                <td>
                                  <p className="m-0">
                                    <a href="#" className=" p-1" title="edit">
                                      <span className="material-icons link-success">
                                        edit
                                      </span>
                                    </a>
                                    <Popconfirm
                                      title="Are you sure delete this user?"
                                      okText="Yes"
                                      cancelText="No"
                                    >
                                      <a
                                        href="#"
                                        className="p-1"
                                        title="delete"
                                      >
                                        <span className="material-icons link-danger">
                                          delete
                                        </span>
                                      </a>
                                    </Popconfirm>
                                  </p>
                                </td>
                              </tr>
                            );
                          })}
                    </tbody>
                  </table>
                </div>
                <div className="row px-3 ">
                  <div className="col-12">
                    <div className="row justify-content-between mt-1">
                      <div className="col-auto">
                        <form className="d-flex flex-wrap align-items-center">
                          <label
                            htmlFor="inputPassword2"
                            className="visually-hidden"
                          >
                            Search
                          </label>
                          <div className="w-100">
                            <div className="input-group flex-nowrap">
                              <h6 className="fs_10 mt-2">
                                Showing 1–12 of 75 results
                              </h6>
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
          </div>
        </div>
      </div>
      <Footer />
    </MainContainer>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Store);
