import React from 'react'
import { TextField, Button, Grid, Box, Stack } from '@mui/material';

const Project = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

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
          required
        />
        {/* Photo Input */}
        <TextField
          fullWidth
          type="file"
          accept=".svg, .png, .jpeg, .jpg"
          variant="outlined"
          name="photo"
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
      </Stack>
    </form>
  );
};

export default Project