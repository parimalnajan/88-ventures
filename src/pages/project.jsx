import React, { useEffect, useState } from 'react'
import { TextField, Button, Grid, Box, Stack } from '@mui/material';
import { v4 as uuidv4 } from "uuid";

import { supabase } from "../lib/supabase";
import { formatDate } from '@/utils';


const Project = () => {
  const [projectName,setProjectName] = useState('')
  const [file, setFile] = useState(null);
  const [projectsData,setProjectsData] = useState([])

  function formDataToJson(formData) {
    const obj = {};
    formData.forEach((value, key) => { 
        obj[key] = value
    });
    return JSON.stringify(obj);
}

  const handleSubmit = async (e) => {
    e.preventDefault();
    const filename = `${uuidv4()}-${file.name}`;
    const { data, error } = await supabase.storage
      .from("88-images")
      .upload(filename, file, {
        cacheControl: "3600",
        upsert: false,
      });
    if (error) {
      console.log( "Image upload failed with error", error, );
    }
    console.log(data)
    const filepath = data.path;
    // const filepath = "88-images/ad65fe36-56fc-4e09-b197-a9231c429b8a-typing.png"
    const formData = new FormData();
    formData.append("project_name",projectName)
    formData.append("image_path", filepath)

    try {
      const response = await fetch("/api/createproject", {
        method: "POST",
        // body: {project_name:projectName, image_path:filepath},
        body:formDataToJson(formData)
      });
      if (response.ok) {
        console.log("Image uploaded successfully");
      } else {
        console.error("Image upload failed");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleFileSelected = (e) => {
    setFile(e.target.files[0]);
    console.log(e.target.files[0])
    console.log(JSON.stringify(e.target.files[0]))
    
  };

  const getData = async ()=>{
    try {
      const response = await fetch("/api/getprojects", {
        method: "GET",
      });
      if (response.ok) {
        const data = await response.json();
        setProjectsData(data.data)
      } else {
        console.error("fetch failed");
      }
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <form onSubmit={handleSubmit}>
    <Stack
        width={660}
        spacing={2}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '100vh' }}
      >
        {/* Project Name Input */}
        <TextField
          fullWidth
          label="Project Name"
          variant="outlined"
          name="projectName"
          value={projectName}
          onChange={(e)=>setProjectName(e.target.value)}
          required
        />
        {/* Photo Input */}
        <TextField
          fullWidth
          type="file"
          accept=".svg, .png, .jpeg, .jpg"
          variant="outlined"
          name="photo"
          onChange={handleFileSelected}
          required
        />
        {/* Submit Button */}
        <Button
          fullWidth
          type="submit"
          variant="contained"
          style={{ backgroundColor: '#F3F4F6', color: 'black' }}
          
        >
          Submit
        </Button>    
      <Stack direction={"row"} gap={4}>
      {
          projectsData.map((project)=>
          <div key={project.id}>
            <div>{project.project_name}</div>
            <img src={`${project.image.publicUrl}`} height={'200px'} width={'200px'}></img>
            <caption>{formatDate(project.created_at)}</caption>

          </div>
          )
        }
      </Stack>
      </Stack>
    </form>
  );
};

export default Project