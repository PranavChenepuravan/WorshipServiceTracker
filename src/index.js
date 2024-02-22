import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Nav from './Nav';
import LoadPic from './LoadPic';
import Login from './Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Registeration}  from './Regisetration';
import { AdminLayout } from './Admin/AdminLayout';
import { ViewInstitution } from './Admin/ViewInstitution';
import { Navbar } from './Component/Navbar';
import { ViewIncomeTax } from './Admin/ViewIncomeTax';
import { ViewArchaeology } from './Admin/ViewArchaeology';
import { ViewReport } from './Admin/ViewReport';
import { RegisterCommon } from './RegisterCommon';
import { RegInst } from './RegInst';
import { RegIncome } from './RegIncome';
import { RegArchae } from './RegArchae';
import { RegPilgrim } from './RegPilgrim';
import { InstLayout } from './Institution/InstLayout'
import { InstInstruction } from './Institution/InstInstruction';
import { InstPreach } from './Institution/InstPreach';
import { InstVisit } from './Institution/InstVisit'
import { InstIncomeTax } from './Institution/InstIncomeTax'
import { InstArchaeology } from './Institution/InstArchaeology'
import { InstDonation } from './Institution/InstDonation'
import { InstRating } from './Institution/InstRating'
import { InstPhoto } from './Institution/InstPhoto'
import './App.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<LoadPic />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Registeration />}/>  
        </Route>
        <Route path="/regcommon" element={<RegisterCommon/>}>
          <Route path="reginst" element={<RegInst />}/> 
          <Route path="regincome" element={<RegIncome />}/>
          <Route path="regarchae" element={<RegArchae />}/>
          <Route path="regpilgrim" element={<RegPilgrim />}/>
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="component" element={<Component/>}></Route>
          <Route path="viewinst" element={<ViewInstitution/>}/>
          <Route path="viewincometax" element={<ViewIncomeTax/>}/>
          <Route path="viewarchaeology" element={<ViewArchaeology/>}/>
          <Route path="viewreport" element={<ViewReport/>}/>
        </Route>
        <Route path="/instlayout" element={<InstLayout />}>
          <Route path="instinstruction" element={<InstInstruction/>}/>
          <Route path="instpreach" element={<InstPreach/>}/>
          <Route path="instvisit" element={<InstVisit/>}/>
          <Route path="instincometx" element={<InstIncomeTax/>}/>
          <Route path="instarch" element={<InstArchaeology/>}/>
          <Route path="instdon" element={<InstDonation/>}/>
          <Route path="instrating" element={<InstRating/>}/>
          <Route path="instphoto" element={<InstPhoto/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
