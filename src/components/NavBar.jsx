import theme from '@/config/theme'
import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

const NavBar = () => {
  return (
    <Stack direction = {"column"} borderBottom={"2px solid #F3F4F6"}>
      <Stack direction = {"row"} justifyContent={"space-between"} sx={{padding:"16px 40px 16px 40px"}} gap={2}>
        <Stack direction = {"row"} alignItems={"center"} gap={2}>
            <img src={"/Logo.png"}></img>
            <Typography sx={theme.typography.body2}>Your Projects</Typography>
        </Stack>
        <Stack direction = {"row"} alignItems={"center"} gap={1} >
            <Typography sx={{...theme.typography.body2,color:theme.palette.primary.light}} > 
              Photos left:
            </Typography>
              <Typography sx={{...theme.typography.body2,color:theme.palette.primary.dark}} >
                960
              </Typography>
            <Typography sx={{...theme.typography.body2,color:theme.palette.primary.light}} > Zoom level </Typography>
            <Stack direction={'row'} alignItems={'center'} gap={0.5} sx={{border:"1px solid #F3F4F6", borderRadius:'8px',padding:"4px 8px"}}>
              <Typography sx={{...theme.typography.body2,color:theme.palette.primary.dark, }} >
                90%    
              </Typography>
              <img height={'14px'} width={'14px'} src={"/chevron-down.png"}></img>
            </Stack>
            
            <Stack direction={'row'} alignItems={'center'} gap={0.5} >
              <Typography sx={theme.typography.body2} > Nitin M </Typography>
              <img height={'14px'} width={'14px'} src={"/chevron-down.png"}></img>
            </Stack>
        </Stack>
      </Stack>
    </Stack >
  )
}

export default NavBar