import "./App.css";
import AppliedJob from "./pages/AppliedJob";
// import DefaultLayout from './components/DefaultLayout';
import Home from "./pages/Home";
import JobInfo from "./pages/JobInfo";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { redirect } from "react-router-dom";
import PostJob from "./pages/PostJob";
import Profile from "./pages/Profile";
import { useState, CSSProperties } from "react";
import FadeLoader from "react-spinners/FadeLoader";
import { useSelector } from "react-redux";
import {getAllJobs} from './redux/actions/jobActions'
import {useDispatch} from 'react-redux'
import {useEffect} from 'react'
import Login from "./pages/Login";
import Register from "./pages/Register";
import PostedJobs from "./pages/PostedJobs";
import EditJob from "./pages/EditJob";
import { getAllUsers } from "./redux/actions/userActions";
import UserInfo from "./pages/UserInfo";


function App() {
  const {loader}=useSelector((state)=>state.loaderReducer)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllJobs());
    dispatch(getAllUsers())
  }, []);
  return (
    <div className="App">
      {loader && (<div className="sweet-loading text-center">
        <FadeLoader color={'#001529'} />
      </div>)}

      <BrowserRouter>
        <Routes>

        <Route path="/login" exact Component={Login} />
        <Route path="/register" exact Component={Register} />
          <Route path="/" exact Component={Home} />
          <Route path="/jobs/:id" exact Component={JobInfo} />
          <Route path="/appliedjob" exact Component={AppliedJob} />
          <Route path="/postJob" exact Component={PostJob} />
          <Route path="/profile" exact Component={Profile} />
          <Route path="/users/:id" exact Component={UserInfo} />
          <Route path="/posted" exact Component={PostedJobs} />
          <Route path="/editjob/:id" exact Component={EditJob} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


