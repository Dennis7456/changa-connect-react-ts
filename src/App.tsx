import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
  ApolloLink,
  concat,
} from "@apollo/client";
import { setContext } from '@apollo/client/link/context';
import { onError } from "@apollo/client/link/error";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Helmet } from "react-helmet";
import { UserProvider } from "./userContext";
import "./App.css";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import LoginTest from "./components/LoginModal/Logintest";
import Querytest from "./components/Querytest";
import Dashboard from "./pages/Dashboard";
import PrivateRoutes from "./utils/PrivateRoutes";
import PageNotFound from "./pages/404NotFound";



const httpLink = new HttpLink({
  uri: "http://localhost:4000/graphql",
  fetchOptions: {
    // mode: 'cors'
  },
  headers: {
    // "Authorization": "Bearer " + token
      // 'Content-Type': 'application/json',
      // Include any other headers if needed
    },
    
});

const authLink = setContext((_, { headers}) => {
  const token = localStorage.getItem('token');
  return {
    headers: {
      ...headers, 
      authorization: token ? `Bearer ${token}`:''
    }
  }
})



// const authMiddleware = new ApolloLink((operation, forward) =>{
//   operation.setContext({
//     Headers: {
//       Authorization: token ? `Bearer ${token}`: ''
//     },
//   });
//   return forward(operation);
// })

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
  // link: from([
  //   onError((error) => {
  //     console.log('GraphQL',error);
  //   }),
  //   httpLink,
  //   //authMiddleware
  // ]),
  //credentials: "same-origin",
  credentials: 'include'
  
});

function App() {
  const token = localStorage.getItem("token");

  return (
    <ApolloProvider client={client}>
       <UserProvider>
        <div className="App">
          {/* {token !== "" ? null : (
            <section className="px-6 py-8 bg-surface">
              <NavigationBar />
            </section>
          )} */}
          <Router>
            {/* {token !== "" ? null : (
              <section className="px-6 bg-surface">
            <NavigationBar />
          </section>
            )} */}
            {token? null :(
              <section className="px-6 bg-surface">
            <NavigationBar />
          </section>
            )}
          <Routes>
            <Route element={<PrivateRoutes/>} >
              <Route path="/dashboard" element={<Dashboard/>}></Route>
            </Route>
            <Route
              path="/"
              caseSensitive
              element={
                <section className="bg-gradient-to-r to-primary from-secondary-container flex justify-around items-center p-10 h-full">
                  <div className="">
                    <p className="tracking-wider text-5xl pr-10">
                      Online <span className="text-primary">Crowd Funding Platform</span>{" "}
                    </p>
                    <p className="text-5xl tracking-wider mt-10">
                      This is an online <span className="text-tertiary">crowd funding platform</span>
                    </p>
                    <p className="text-lg py-10">
                      Register to create a group, add members and start accepting contributions.
                    </p>
                  </div>
                </section>
              }></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/test" element={<LoginTest />}></Route>
            <Route path="/testquery" element={<Querytest />}></Route>
            <Route path="*" element={<PageNotFound />} />

          </Routes>
          </Router>
        </div>
         </UserProvider>
    </ApolloProvider>
  );
}

export default App;