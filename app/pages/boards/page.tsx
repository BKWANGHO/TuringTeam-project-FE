'use client'

import axios from "axios"
import { NextPage } from "next"
import { useRouter } from "next/navigation"
<<<<<<< HEAD
import { DataGrid } from '@mui/x-data-grid';
import { useState, useEffect } from "react"
import {Box, Button, Input} from '@mui/material';
import AxiosConfig from "@/app/organisms/configs/axios-config";
import { API } from "@/app/atoms/enums/API";
// import React from "react";
=======
import { stringify } from "querystring"
import { useState } from "react"
>>>>>>> dev-bkh


const NewArticlePage : NextPage = ()=> {


    return (<>
        <h2>New article</h2>



    </>)
}

export default NewArticlePage;