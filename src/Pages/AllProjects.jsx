// fetch all projects and Link to navigate to One component

import React, { useEffect, useState } from "react";

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
      } catch (err) {}
    };
    fetchData();
  }, []);

  return (
    <div>
      <h3>all projects</h3>
      {allProjects.map((project, index) => (
        <div key={index}>
          <h1>Title : {project.title}</h1>
        </div>
      ))}
    </div>
  );
}

export default AllProjects;
