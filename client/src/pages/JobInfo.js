import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import DefaultLayout from "../components/DefaultLayout";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { Button, Tag } from "antd";
import moment from "moment";
import { applyJob } from "../redux/actions/jobActions";

function JobInfo(match) {
  const { id } = useParams();
  const { jobs } = useSelector((state) => state.jobsReducer);
  const job = jobs.find((job) => job._id === id);

  const userid = JSON.parse(localStorage.getItem("user"))?._id;
  const appliedCandidates = job.appliedCandidates;
  const alreadyApplied = appliedCandidates.find(
    (candidate) => candidate.userid === userid
  );
  const dispatch = useDispatch();

  function applyNow() {
    dispatch(applyJob(job));
  }

  return (
    <div>
      <DefaultLayout>
        {job && (
          <div>
            <p>title : {job.title}</p>
            <p>company : {job.company}</p>
            <p>smallDescription : {job.smallDescription}</p>
            <p>Full Description : {job.fullDescription}</p>
            <p>title : {job.title}</p>
            <p>Skills Required : {job.skillsRequired}</p>
            <p>Experience : {job.experience}</p>
            <p>Minimum Qualification : {job.minimumQualification}</p>

            <hr />

            <p>
              Salary Range : {job.salaryFrom} - {job.salaryTo}
            </p>
            <p>Department : {job.department}</p>
            <p>Company Profile : {job.companyDescription}</p>
            <p>Total Candidate applied : {job.appliedCandidates.length}</p>

            <hr />
            <div className="flex justify-content-between">
              {job.postedBy === userid ? (
                <Button>
                  <Link to={`/editjob/${job?._id}`}>Edit Now</Link>
                </Button>
              ) : alreadyApplied ? (
                <Tag color="green">Already Applied</Tag>
              ) : (
                <Button onClick={applyNow}>Apply Now</Button>
              )}
              <p>
                <b>Posted on</b>
                {moment(job.createdAt).format("MMM DD yyyy")}
              </p>
            </div>
          </div>
        )}
      </DefaultLayout>
    </div>
  );
}

export default JobInfo;
