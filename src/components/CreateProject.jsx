import theme from '@/config/theme'
import { Button, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { v4 as uuidv4 } from "uuid";
import { supabase } from "../lib/supabase";

const CreateProject = () => {
  const [projectName,setProjectName] = useState('')
  const [file, setFile] = useState(null);

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

    //move form to this component
  return (
   <Stack direction={'column'} padding={'20px'} gap={2} minWidth={400} borderRight={"2px solid #F3F4F6"}>
    <Typography sx={theme.typography.title1}> Start a new Project</Typography>
    <Typography sx={{...theme.typography.body1, color:theme.palette.primary.light}}> Select and browse your product image and start experimenting</Typography>

    <Typography sx={{...theme.typography.body1, color:theme.palette.primary.light}}> Step 1 </Typography>
     <form onSubmit={handleSubmit}>
      <input style = {{...theme.typography.body1,width:'250px',border:"1px solid #EAECF0", borderRadius:'10px', padding : "10px 12px", marginBottom:'16px', 
          outline:'none',color:theme.palette.primary.light
        }}
        placeholder={'Your Project name'}
        onChange={(e)=>setProjectName(e.target.value)}
        onClick={()=>setProjectName('assad ')}
      >
      </input>

    <Typography sx={{...theme.typography.body1, color:theme.palette.primary.light, marginBottom:'20px'}}> Step 2 </Typography>

    <div style={{marginBottom:"32px"}}>
      <label htmlFor="filePicker" 
      style = {{...theme.typography.body1,display:'block',width:'250px',border:"1px solid #EAECF0", 
       borderRadius:'10px', padding : "10px 12px", outline:'none',color:theme.palette.primary.light
      }}
      >
        Upload your Product image
      </label>
      <input 
      style={{visibility:"hidden",}}
      
        placeholder='Your Project name'
        id="filePicker"
        type='file'
        accept=".svg, .png, .jpeg, .jpg"
        onChange={handleFileSelected}
      >
      </input>
    </div>
        <Button
          fullWidth
          type="submit"
          variant="contained"
          style={{ backgroundColor: '#6938EF', color: 'white', padding:'10px 12px', borderRadius:'10px', width:'141px', height:'40' }}
        >
          Submit
        </Button>    
    </form>


  </Stack>
  )
}

export default CreateProject