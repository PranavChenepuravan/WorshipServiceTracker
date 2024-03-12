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
import { InstIncomeTaxList } from './Institution/InstIncomeTaxList';
import { InstArchaeologyList } from './Institution/InstArchaeologyList';



import { IncomeLayout } from './IncomeTax/IncomeLayout'
import { IncomeTransReq } from './IncomeTax/IncomeTransReq'
import { IncomeTaxInst } from './IncomeTax/IncomeTaxInst'
import { IncomeWarning } from './IncomeTax/IncomeWarning';
import { IncomeAction } from './IncomeTax/IncomeAction';
import { IncomeTaxReport }  from './IncomeTax/IncomeTaxReport';
import { IncomeEmployee } from './IncomeTax/IncomeEmployee';
import { IncomeDuty } from './IncomeTax/IncomeDuty';
import { IncomeTaxInst2 } from './IncomeTax/IncomeTaxInst2';

import { ArchLayout } from './Archaeology/ArchLayout';
import { ArchHeritage } from './Archaeology/ArchHeritage';
import { ArchEmployee } from './Archaeology/ArchEmployee';
import { ArchDuty } from './Archaeology/ArchDuty';
import { ArchWealth } from './Archaeology/ArchWealth';

import { PilgLayout } from './Pilgrim/PilgLayout';
import { PilgProfile } from './Pilgrim/PilgProfile';
import { PilgProfileEdit } from './Pilgrim/PilgProfileEdit';
import { PilgrimBooking } from './Pilgrim/PilgBooking';
import { PilgBookingPay } from './Pilgrim/PilgBookingPay';
import { PilgBookingList } from './Pilgrim/PilgBookingList';
import { PilgDonation } from './Pilgrim/PilgDonation';
import { PilgDonationMoney } from './Pilgrim/PilgDonationMoney';
import { PilgDonationListMoney } from './Pilgrim/PilgDonationListMoney';
import { PilgDonationOther } from './Pilgrim/PilgDonationOther';
import { PilgDonationListOther } from './Pilgrim/PilgDonationListOther';
import {PilgDonationListAll} from './Pilgrim/PilgDonationListAll';
import { PilgPhotos } from './Pilgrim/PilgPhotos';
import { PilgPhotosAdd } from './Pilgrim/PilgPhotosAdd';
import { PilgReview } from './Pilgrim/PilgReview';
import { PilgReviewAdd } from './Pilgrim/PilgReviewAdd';
import { InstDonationList } from './Institution/InstDonationList';








const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<LoadPic />} />
          <Route path="login" element={<Login />} />
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


          <Route path="instincometxlist" element={<InstIncomeTaxList/>}/>
          <Route path="instarchlist" element={<InstArchaeologyList/>}/>
          <Route path="instdonlist" element={<InstDonationList/>}/>


        </Route>

        <Route path="/incomelayout" element={<IncomeLayout />}>
          <Route path="incometransreq" element={<IncomeTransReq/>}/>
          <Route path="incometaxinst" element={<IncomeTaxInst/>}/>
          <Route path="incometaxinst2" element={<IncomeTaxInst2/>}/>
          <Route path="incomewarning" element={<IncomeWarning/>}/>
          <Route path="incomeaction" element={<IncomeAction/>}/>
          <Route path="incometaxreport" element={<IncomeTaxReport/>}/>
          <Route path="incomeemployee" element={<IncomeEmployee/>}/>
          <Route path="incomeduty" element={<IncomeDuty/>}/>
        </Route>

        <Route path="/archlayout" element={<ArchLayout/>}>
          <Route path="archheritage" element={<ArchHeritage/>}/>
          <Route path="archemployee" element={<ArchEmployee/>}/>
          <Route path="archduty" element={<ArchDuty/>}/>
          <Route path="archwealth" element={<ArchWealth/>}/>
        </Route>

        <Route path="/pilglayout" element={<PilgLayout/>}>
          <Route path="pilgprofile" element={<PilgProfile/>}/>
          <Route path="pilgprofileedit" element={<PilgProfileEdit/>}/>
          <Route path="pilgbooking" element={<PilgrimBooking/>}/>
          <Route path="pilgbookingpay" element={<PilgBookingPay/>}/>
          <Route path="pilgbookinglist" element={<PilgBookingList/>}/>
          <Route path="pilgdonation" element={<PilgDonation/>}/>
          <Route path="pilgdonationmoney" element={<PilgDonationMoney/>}/>
          <Route path="pilgdonationlistmoney" element={<PilgDonationListMoney/>}/>
          <Route path="pilgdonationother" element={<PilgDonationOther/>}/>
          <Route path="pilgdonationlistother" element={<PilgDonationListOther/>}/>
          <Route path="pilgdonationlistall" element={<PilgDonationListAll/>}/>
          <Route path="pilgphotos" element={<PilgPhotos/>}/>
          <Route path="pilgphotosadd" element={<PilgPhotosAdd/>}/>
          <Route path="pilgreview" element={<PilgReview/>}/>
          <Route path="pilgreviewadd" element={<PilgReviewAdd/>}/>

        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
