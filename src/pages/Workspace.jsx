import React from "react";
import SideBar from "../components/SideBar.jsx";
import "./Workspace.css"
import NavBar from "../components/NavBar.jsx"
import Table from "../components/Table.jsx"
import TemplatesAndThemes from "../components/TemplatesAndThemes.jsx"
import TrashView from "../components/Trash.jsx";
import DashboardComponent from "../components/EveryoneAt.jsx";

function Workspace() {
  return (
    <div className="workspace flex">

      <SideBar />

      <main className="w-full">

        <NavBar />

        <Table /> 

        <DashboardComponent />

      {/* <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <TemplatesAndThemes />
      </div> */}

      {/* <div className="bg-gray-100 min-h-screen p-8">
        <TrashView />
      </div> */}

      </main>

          
     
    
    </div>
  );
}

export default Workspace;
