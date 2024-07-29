import React, { useState } from "react";
import SideBar from "../components/SideBar.jsx";
import "./Workspace.css"
import NavBar from "../components/NavBar.jsx"
import Table from "../components/Table.jsx"
import TemplatesAndThemes from "../components/TemplatesAndThemes.jsx"
import TrashView from "../components/Trash.jsx";
import DashboardComponent from "../components/EveryoneAt.jsx";

const VIEWS = {
  RECENTS : "Recents",
  TEMPLATES : "Templates And Themes",
  DASHBOARD : "DashBoard",
  TRASH : "Trash",

}

function Workspace() {

  const [view, setView] = useState(VIEWS.RECENTS); 

  return (
    <div className="workspace flex">

      <SideBar onTemplateClick={() => setView(VIEWS.TEMPLATES)} onTrashClick={() => setView(VIEWS.TRASH)} onRecentClick={() => setView(VIEWS.RECENTS)} onDashBoardClick={() => setView(VIEWS.DASHBOARD)}/>

      <main className="w-full">

      {view!==VIEWS.DASHBOARD && <NavBar navTitle={view} />}

      { view===VIEWS.RECENTS && <Table /> }

      {view===VIEWS.TEMPLATES && <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <TemplatesAndThemes />
      </div>}

      {view===VIEWS.TRASH && <div className="bg-gray-100 min-h-screen p-8">
        <TrashView />
      </div>}

      {view===VIEWS.DASHBOARD && <DashboardComponent />}

      </main>

          
     
    
    </div>
  );
}

export default Workspace;
