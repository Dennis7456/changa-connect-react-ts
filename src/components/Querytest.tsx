import React from 'react'
import {gql, useQuery} from '@apollo/client';

const USERS = gql`
query users{
users{
id
firstName
lastName
email
userName
password
dateOfBirth
}
}`

const Querytest =() => {
    const { loading, data} = useQuery(USERS);
    if(loading){
        console.log('Loading users')
    }

    console.log("Data", data);
    return(<div></div>)
}
export default Querytest;
