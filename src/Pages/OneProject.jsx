// all details and delete functions plus Link to update component

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function OneProject() {
  const [oneProject, setOneProject] = useState(null);
  const url = import.meta.env.VITE_BASE_URL;
  const { id } = useParams();
  useEffect(() => {
    const fetchOneData = async () => {
      try {
        const response = await fetch(`${url}/Projects/${id}`);
        const data = await response.json();
        if (data.success) {
          setOneProject(data.payload);
        } else {
          console.error("Erroor fetching one project", data);
        }
      } catch (err) {
        console.error("Error internal", err);
      }
    };
    fetchOneData();
  }, [id]);

  return (
    <div>
      {oneProject ? (
        <div>
          {" "}
          <h3>title: {oneProject.title}</h3>
          <h3>Description: {oneProject.description}</h3>
          <a href={oneProject.production_link} target="_blank">
            Live here
          </a>
          <img src={oneProject.image} alt="" />
          <br />
          <a href={oneProject.github_repo_back} target="_blank">
            Backend Repo
          </a>
          <br />
          <a href={oneProject.github_repo_front} target="_blank">
            Front Repo
          </a>
        </div>
      ) : (
        <p>no project</p>
      )}
    </div>
  );
}

export default OneProject;