// import Travelcomponent from './components/Travel/travelcomponent';
// import Sidebar from './components/Sidebar/sidebar';


// function Travel(){
//     return (
//         <>
//             <Travelcomponent />
//             <Sidebar />
//         </>
//     )
// }
// export default Travel;



// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Travelcomponent from './components/Travel/travelcomponent';
// import Sidebar from './components/Sidebar/sidebar';
// import ItalyPage from './components/Travel/ItalyPage';
// import FrancePage from './components/Travel/FrancePage'; 

// function Travel() {
//   return (
//     <Router>
//       <Switch>
//         <Route path="/" exact>
//           <div>
//             <Travelcomponent />
//             <Sidebar />
//           </div>
//         </Route>
//         <Route path="/italy">
//           <ItalyPage />
//         </Route>
//         <Route path="/france">
//           <FrancePage />
//         </Route>
//       </Switch>
//     </Router>
//   );
// }

// export default Travel;

// import { Routes, Route } from 'react-router-dom';
// import Travelcomponent from './components/Travel/travelcomponent';
// import Sidebar from './components/Sidebar/sidebar';
// import ItalyPage from './components/Travel/ItalyPage';
// import FrancePage from './components/Travel/FrancePage'; 

// function Travel() {
//   return (
//     <Routes>
//       <Route path="/" element={<div><Travelcomponent /><Sidebar /></div>} />
//       <Route path="/italy" element={<ItalyPage />} />
//       <Route path="/france" element={<FrancePage />} />
//     </Routes>
//   );
// }

// export default Travel;


import { Routes, Route } from 'react-router-dom';
import Travelcomponent from './components/Travel/travelcomponent';
import Sidebar from './components/Sidebar/sidebar';
import ItalyPage from './components/Travel/ItalyPage';
import FrancePage from './components/Travel/FrancePage';

function Travel() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<div><Travelcomponent /><Sidebar /></div>} />
       
      </Routes>
    </div>
  );
}

export default Travel;
