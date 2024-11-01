import { setAllJobs } from '@/redux/jobSlice'
import { JOB_API_END_POINT } from '@/utils/constants'
import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const useGetAllJobs = () => {
    const dispatch = useDispatch();
    const {searchQuery} = useSelector(store=>store.job)
    
 useEffect(()=>{
    const fetchAllJobs = async ()=>{
        try {
            const res = await axios.get(searchQuery ? `${JOB_API_END_POINT}/get?keyword=${searchQuery}`:`${JOB_API_END_POINT}/get`,{withCredentials:true});
            if(res.data.message){
                dispatch(setAllJobs(res.data.jobs))
            }
        } catch (error) {
            console.log(error.message);
            
        }
    }
    fetchAllJobs();
 },[dispatch])
}

export default useGetAllJobs