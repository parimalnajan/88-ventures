import React, { useEffect, useState } from "react"
import { TextField, Button, Grid, Box, Stack } from "@mui/material"

import { formatDate } from "@/utils"
import NavBar from "@/components/NavBar"
import RecentProjects from "@/components/RecentProjects"
import SideBar from "@/components/SideBar"
import theme from "@/config/theme"
import CreateProject from "@/components/CreateProject"

const Project = () => {
  return (
    <Box fontFamily={theme.typography}>
      <NavBar />
      <Stack direction={"row"}>
        <SideBar />
        <CreateProject />
        <RecentProjects />
      </Stack>
    </Box>
  )
}

export default Project
