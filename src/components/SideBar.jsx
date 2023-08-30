import theme from '@/config/theme'
import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

const SideBar = () => {
  return (
    <Stack direction={"column"} sx={{padding:"20px 28px 20px 28px"}} gap={2} borderRight={"2px solid #F3F4F6"}>
         <Stack direction={'column'} alignItems={'center'} justifyContent={'center'} gap={1}
          sx={{borderRadius:'10px', backgroundColor:'#FDF7FE', color:theme.palette.primary.main, padding:'8px'}} >
              <img height={'20px'} width={'20px'} src={"/folder-icon.png"}></img>
              <Typography sx={theme.typography.body1} > Project </Typography>
          </Stack>

          <Stack direction={'column'} alignItems={'center'} justifyContent={'center'} gap={1}
          sx={{borderRadius:'10px', color:theme.palette.primary.light, padding:'8px'}} >
              <img height={'20px'} width={'20px'} src={"/image-plus.png"}></img>
              <Typography sx={theme.typography.body1} > Create </Typography>
          </Stack>

    </Stack>
  )
}

export default SideBar