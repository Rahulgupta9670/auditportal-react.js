import React,{useEffect, useState} from "react";
import styles from '../../styles/globalStyle.module.css'
import Head from 'next/head';
import Script from "next/script";
import Image from 'next/image';
import {globalStyles} from '../../styles/jsStyles/globalStyle';
import { connect  } from 'react-redux';
import { mapStateToProps,mapDispatchToProps } from '../constants/contextProvider';
import classNames from "classnames";

const Container = (props) => {

  let add_style=props.style;

  useEffect(()=>{
    document.body.style.backgroundColor = "#ffffff";
  },[]);

  return (
    <div className={styles.container} style={add_style} >
        <Head>
            <title>One App Portal</title>
            <meta name="description" content="One App Portal" />
            <link rel="icon" href="/assets/images/logo.png" />
            <link href="/assets/font/SegoeUI.ttf" />
            <link
              href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
              rel="stylesheet"
              integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
              crossOrigin="anonymous"
            />
            <link href="https://fonts.googleapis.com/css2?family=Material+Icons" rel="stylesheet"/>
            <link href='https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css' rel='stylesheet'/>
        </Head>
        {props.children}
        <div className={classNames(styles.alertBox,(props.showAlert==true?styles.active:''))} id="notify">{props.alertMsg}</div>
        
    </div>
  )
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);