import { gql, useQuery } from '@apollo/client'
import React, { useEffect, useState } from 'react'
import SideBar from '../components/SideBar/SideBar';
import DashboardView from '../components/DashboardView/DashboardView';
import {Outlet} from 'react-router-dom';
import Main from '../components/Main';

interface UserData {
  loggedInUser: {
    id: string;
    firstName: string;
    lastName: string;
    userName: string;
    email: string;
    dateOfBirth: string
  };
}

const CURRENT_USER_QUERY = gql`
query loggedInUser{
loggedInUser{
id
firstName
lastName
userName
email
dateOfBirth
}}
`

export default function Dashboard() {

  const [sideBarOpen, setSideBarOpen] = useState(false);

    const { loading, data, error } = useQuery(CURRENT_USER_QUERY, {
        onCompleted: (data) => {
            const {currentUser} = data;
            console.log(currentUser.id);
    },
    onError: (error) => {
      console.error(error.message);

    },});
    if(loading){
        console.log('Loading data');
    }

    const [user, setUser] = useState<UserData['loggedInUser'] | null>(null);

    useEffect(()=>{
        if(loading){
            console.log('Loading data');
        }

        if(data){
            const { loggedInUser } = data;
            setUser(loggedInUser);
        }
    }, [loading, data])

    const showSideBar = () => {
      setSideBarOpen(!sideBarOpen);
    }

  return (
    <div className='flex'>
        <div className='basis-[15%] h-[100vh] border-secondary/[0.3]'>
             <SideBar/>
        </div>
        <div className='basis-[85%]  border-secondary/[0.3] h-[100vh] overflow-scroll'>
            <DashboardView/>
            <div>
                <Main/>
                <Outlet></Outlet>
            </div>
        </div>
    </div>
  )
}
