import {useContext,useState,useEffect} from "react"
import {EntriesContext} from '@/context/entries';
import { Card, CardContent, CardHeader, Grid, Typography } from '@mui/material';
import { Layout } from '@/components/layout';
import { EntryList,NewEntry } from '@/components/ui';

import entriesApi from "@/apis/entriesApi";

export default function Home() {
  
 
  
  return (
    <Layout title='Open Jira'>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12}  lg={4}>
          <Card sx={{
            // height:'calc(100vh - 100px)'
          }}>
            <CardHeader title='Pendientes'  sx={{
              textAlign: 'center'
            }}/>

            <CardContent>
            <NewEntry/>
            <EntryList status='pending'/>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} lg={4}>
        <Card sx={{
            // height:'calc(100vh - 100px)'
          }}>
            <CardHeader title='En Proceso' sx={{
              textAlign: 'center'
            }}/>
             <CardContent>
              <EntryList status='progress'/>
              </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12}  lg={4}>
        <Card sx={{
            // height:'calc(100vh - 100px)'
          }}>
            <CardHeader title='Finalizadas' sx={{
              textAlign: 'center'
            }} />
             <CardContent>
              <EntryList status='completed'/>
             </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  )
}
