import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom'; // Import HashRouter for SPA routing
import './App.css';
import Home from './homecomponent/home';
import Android from './androidcomponent/android';
import Angular from './angularcomponent/angular';
import Contactjs from './contactcomponent/contact';
import Cybersecurityjs from './cybercomponent/cyber';
import Azure from './azurecomponent/azure';
import Data from './datafuncomponent/data';
import Devopsjs from './devopscomponent/devops';
import Github from './gitcomponent/git';
import Iconic from './iconiccomponent/iconic';
import Infra from './infrastructurecomponent/infra';
import Java from './javacomponent/java';
import Microsoftinfrastructure from './microsoftcomponent/microsoft';
import Node from './nodecomponent/node';
import Python from './pythoncomponent/python';
import Testing from './testingcomponent/testing';
import Sql from './sqlcomponent/sql';
import Soft from './softcomponent/soft';
import Reactcom from './reactcomponent/react';
import Powerbi from './powecomponent/power';

function App() {
  return (
    <>
      {/* Use HashRouter for proper routing */}
      <HashRouter>
        <Routes>
          {/* Define routes for different components */}
          <Route path="/" element={<Home />} />
          <Route path="/android" element={<Android />} />
          <Route path="/angular" element={<Angular />} />
          <Route path="/contact" element={<Contactjs />} />
          <Route path="/cybersecurity" element={<Cybersecurityjs />} />
          <Route path="/microsoft-azure" element={<Azure />} />
          <Route path="/microsoft-data-fundamental" element={<Data />} />
          <Route path="/devops" element={<Devopsjs />} />
          <Route path="/github" element={<Github />} />
          <Route path="/ionic-hybrid" element={<Iconic />} />
          <Route path="/microsoft-infrastructure" element={<Infra />} />
          <Route path="/java" element={<Java />} />
          <Route path="/microsoft" element={<Microsoftinfrastructure />} />
          <Route path="/nodejs" element={<Node/>} />
          <Route path="/python" element={<Python />} />
          <Route path="/testing" element={<Testing />} />
          <Route path="/sql" element={<Sql />} />
          <Route path="/microsoft-power" element={<Soft />} />
          <Route path="/react" element={<Reactcom />} />
          <Route path="/powerbi" element={<Powerbi />} />
          
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
