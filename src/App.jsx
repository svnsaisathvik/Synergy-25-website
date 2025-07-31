import React,{lazy,Suspense} from 'react'
import {Routes,Route,BrowserRouter} from "react-router-dom";

const EventPage = lazy(()=>import("./events/components/EventsPage"));
const TeamsPage = lazy(()=>import("./team/components/TeamPage"));
const HomePage  = lazy(()=>import("./home/HomePage1"));
const ErrorPage = lazy(()=>import("./events/components/Error"));


function LoadingPage(){
  return <>
        <h1 style={{fontFamily:"CyberAlert"}}>Page under progress....</h1>
        <h2 style={{fontFamily:"CyberAlert"}}>Loading...</h2>
  </>
}

function App() {
  return (
    <>
      <Suspense fallback={<LoadingPage/>}></Suspense>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}></Route>
          <Route path="/events" element={<EventPage/>}></Route>
          <Route path="/teams" element={<TeamsPage/>}></Route>
          <Route path="*" element={<ErrorPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
