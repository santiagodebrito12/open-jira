import { Box } from "@mui/material"
import Head from "next/head"
import {NavBar} from "@/components/ui"
import {SideBar} from "@/components/ui"

interface LayoutProps {
  title?: string,
  children?: React.ReactNode,
}


export const Layout = ({title="Open jira",children}:LayoutProps) => {
  return (
    <Box sx={{flexFlow:1}}>
        <Head>
          <title>{title}</title>
        </Head>
    <NavBar/>
    <SideBar/>
    <Box sx={{
      padding:'10px 20px',
      margin:'40px 0px',
  }}>
      {children}
    </Box>
    </Box>
  )
}

