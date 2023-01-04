import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/router";
import {
  mapStateToProps,
  mapDispatchToProps,
} from "./constants/contextProvider.js";
import MainContainer from "./components/Container";
import { connect } from "react-redux";
import { baseUrl } from "./constants/constants";
import { MethodNames } from "./constants/methodNames";
import sessionstorage from "sessionstorage";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Button, Input, Space } from "antd";

function Home(props) {
  const [useremail, setUseremial] = useState();
  const [userpassword, setUserpassword] = useState();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const router = useRouter();

  const handleClick = async (e) => {
    e.preventDefault();
    // router.replace("/select_project");return;
    if (!useremail) {
      return toast("Email is required");
    }
    //  else if (!new RegExp(/\S+@\S+\.\S+/).test(useremail)) {
    //   return alert("Incorrect email format");
    // }
    if (!userpassword) {
      return toast("Password is required");
    }
    // else if (userpassword.length < 8) {
    //   return toast("Maxmum 8 Digits Password");
    // }
    try {
      let postData = {
        UserName: useremail,
        Password: userpassword,
      };
      // console.log("dataaaaaaaaaa", title)

      const alldata = await axios
        .post(baseUrl + MethodNames.loginWithoutHash, postData)
        .then((res) => {
          // console.log(res.data);
          if (
            res.data &&
            res.data.loginWithoutHash &&
            res.data.loginWithoutHash[0].Result
          ) {
            toast.error(" Invalid User Name & Password");
            console.log("invalid user name $ password" )
          } else {
            sessionstorage.setItem("token", JSON.stringify(res.data));
            const token = sessionstorage.getItem("token");
            console.log("tokennnnnnnnnnn", token);
            toast.success("Login successful");
            router.replace("/select_project");
          }
        }).catch((error)=>{
          console.log("invalid user name $ password",error )
        })
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <MainContainer>
      <div className="w-100 h-100">
        <main className={styles.login_illustration}>
          <div class={`${styles.h100} container `}>
            <ToastContainer />
            <div
              className={`${styles.h100}  row justify-content-center align-items-center `}
            >
              <div class="col-sm-12 p-0">
                <div class="row justify-content-center">
                  <div
                    class={`${styles.cards} ${styles.shadow}  col-sm-12 col-md-8 col-lg-6 col-xl-4`}
                  >
                    <img src="https://mttest.parinaam.in/images/performic_logo.svg" />
                    <p class="text-center text-muted">
                      Sign in to your account
                    </p>
                    <form class="myForm mt-4 needs-validation" novalidate="">
                      <div class="form-group mb-3">
                        <label class="input w-100 ">
                          <Input
                            value={useremail}
                            type="email"
                            onChange={(e) => setUseremial(e.target.value)}
                            placeholder="input username"
                          />
                        </label>
                      </div>
                      <div class="form-group">
                        <label class="input w-100">
                          <Input.Password
                            placeholder="input password"
                            value={userpassword}
                            onChange={(e) => setUserpassword(e.target.value)}
                            visibilityToggle={{
                              visible: passwordVisible,
                              onVisibleChange: setPasswordVisible,
                            }}
                          />

                          <span class="input__label"></span>
                          <div class="invalid-feedback">
                            Please enter Password
                          </div>
                        </label>
                      </div>
                      <div class="form-group">
                        <p class="mb-0 mt-3">
                          <a href="#" class="primary_color">
                            Forgot Password?
                          </a>
                        </p>
                      </div>
                      <div class="form-group">
                        <Link href="/select_project">
                          <a
                            href="select_project.html"
                            class="btn btn-primary w-100 mt-4  "
                            type="submit"
                            onClick={handleClick}
                          >
                            Login{" "}
                          </a>
                        </Link>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </MainContainer>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
