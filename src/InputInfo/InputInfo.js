import React from 'react';
import axios from 'axios';
import Announcements from "../Announcements/Announcements";
import { Route, Link } from 'react-router-dom';
import { PromiseProvider } from 'mongoose';
// import { useEffect, useState } from "react";


async function InputInfo(data){

    // create empty array
    var newData = [{}];
    for (var info in data){
        // if things are not filled out from the form
        if (data[info] !== ''){
            // only keep what is filled out
            newData.push(`${info}: ${data[info]}`);
        }
    }
    
    console.log("newData from inputInfo:",newData);

    return (
        <Announcements previous={newData} />
    )

    
}

export default InputInfo;