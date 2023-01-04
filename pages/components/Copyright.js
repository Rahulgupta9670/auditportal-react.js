import React,{useState} from "react";
import styles from '../../styles/style.module.css'
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://www.cpm-int.com/">
          CPM India
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  