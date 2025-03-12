// Fetch all projects and Link to navigate to One component
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/css/bootstrap.min.css';
function AllProjects() {
  const [allProjects, setAllProjects] = useState([]);
  const url = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${url}/Projects`);
        const data = await response.json();
        if (data.success) {
          setAllProjects(data.payload);
        } else {
          console.error("Error fetchinf data", data);
        }
      } catch (err) {
        console.error("Error fetching all projects", err);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h3>all projects</h3>
      <i className="bi bi-rocket-takeoff-fill"></i>
      {allProjects.map((project, index) => (
        <div className="card" style={{ width: "25rem" }} key={index}>
          <div className="card-body">
            <Link
              style={{ textDecoration: "none" }}
              to={`/oneProject/${project.id}`}
            >
              {""}
              <h2 className="card-title">Title : {project.title}</h2>{" "}
            </Link>
            <p>
              <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="collapseWidthExample">
                Description
              </button>
            </p>
            <div style={{minHeight : "120px"}} >
              <div className="collapse collapse-horizontal" id="collapseWidthExample">
                <div className="card card-body " style={{width:"300px"}}>
                {project.description}
                </div>
              </div>
            </div>
          
            <a href={project.production_link}>Live Here</a>
            <br />
            <a className="card-link" href={project.github_repo_back}>
              Back End Repo
            </a>
            <br />
            <a className="card-link" href={project.github_repo_front}>
              Front End Repo
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AllProjects;
