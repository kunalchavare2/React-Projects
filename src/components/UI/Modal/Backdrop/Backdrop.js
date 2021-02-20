import React from 'react';
import Styles from './Backdrop.module.css'
const backdrop = (props) => (
    props.show ? <div className={Styles.Backdrop} onClick={props.dismiss}></div> : null
);

export default backdrop;