"use client"; 

import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./article.init";
import { getArticles } from "./article.service";
import { getAllArticlesAPI } from "./article.api";


const articleThunks = [getArticles]

const status = {
    pending : 'pending',
    fullfilled : 'fullfilled',
    rejected:'rejected'
}

const handlePending =(state :any)=> {
 

}
const handleFulfilled =(state :any)=> {
 

}
const handleRejected =(state :any)=> {
 

}

export const articleSlice = createSlice({
    name : 'article',
    initialState,
    reducers:{},
    extraReducers : builder=> {
        const {pending,rejected} = status;
        builder
        .addCase('',handleFulfilled)

    }
})


export const{} = articleSlice.actions

export default articleSlice.reducer;