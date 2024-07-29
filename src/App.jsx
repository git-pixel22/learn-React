import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Workspace from './pages/Workspace.jsx';
import Invite from './pages/Invite.jsx'
import InviteSent from './pages/InviteSent.jsx';
import ManagePage from './pages/ManagePage.jsx'

// const App = () => {
//   return (
//     <div className="App">
//       {/* <Workspace /> */}
//       {/* <Invite /> */}
//       {/* <InviteSent /> */}
//       <ManagePage />

//     </div>
//   );
// };

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Workspace />} />
        <Route path="/manage-members" element={<ManagePage />} />
        <Route path="/invite" element={<Invite />} />
        <Route path="/invite-sent" element={<InviteSent />} />
      </Routes>
    </div>
  );
}

export default App;
