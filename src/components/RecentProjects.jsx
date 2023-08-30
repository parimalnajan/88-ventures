import theme from "@/config/theme"
import { supabase } from "../lib/supabase"
import { formatDate } from "@/utils"
import { Box, Stack, Typography } from "@mui/material"
import React, { useEffect, useState } from "react"

const RecentProjects = () => {
  const [projectsData, setProjectsData] = useState([])

  useEffect(() => {
    const channelA = supabase
      .channel("db-changes")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "projects",
        },
        payload => getData()
      )
      .subscribe()

    return () => channelA.unsubscribe()
  }, [])

  useEffect(() => {
    getData()
  }, [])

  useEffect(() => {
    setSelectedProject(projectsData[0])
  }, [projectsData])

  const getData = async () => {
    try {
      const response = await fetch("/api/getprojects", {
        method: "GET",
      })
      if (response.ok) {
        const data = await response.json()
        setProjectsData(data.data.reverse())
      } else {
        console.error("fetch failed")
      }
    } catch (error) {
      console.error(error)
    }
  }

  const [selectedProject, setSelectedProject] = useState(null)
  //call api and render projects
  return (
    <Stack direction={"column"} gap={2} padding={2}>
      <Typography sx={theme.typography.title1}>Your recent projects</Typography>
      <Typography sx={{ ...theme.typography.body1, color: theme.palette.primary.light }}>Select and browse your project image and start experimenting</Typography>
      <div style={{ width: "800px", height: "320px" }}>
        <img src={`${selectedProject?.image?.publicUrl}`} height={"100%"} width={"100%"} style={{ objectFit: "contain" }}></img>
      </div>

      <Stack direction={"row"} paddingTop={3} gap={4} maxWidth={"900px"} sx={{ overflow: "auto" }}>
        {projectsData?.map(project => (
          <ProjectCard project={project} setSelectedProject={setSelectedProject} />
        ))}
      </Stack>
    </Stack>
  )
}

const ProjectCard = ({ project, setSelectedProject }) => {
  return (
    <div key={project.id}>
      <Stack
        direction={"column"}
        gap={1}
        justifyContent={"space-between"}
        sx={{ height: "170px", maxWidth: "180px", padding: "16px", boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
        onClick={() => setSelectedProject(project)}
      >
        <>
          <img src={`${project.image.publicUrl}`} height={"100px"} width={"180px"} style={{ objectFit: "contain", borderRadius: "8px 8px 8px 8px" }}></img>
          <Typography sx={theme.typography.body2}>{project.project_name}</Typography>
        </>
        <Typography sx={{ ...theme.typography.body1, color: theme.palette.primary.light }}>{formatDate(project.created_at)}</Typography>
      </Stack>
    </div>
  )
}

export default RecentProjects
