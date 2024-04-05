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
import { ViewPilgrim } from './Admin/ViewPilgrim';
import { ViewReport } from './Admin/ViewReport';
import { AdminInstDetailPage } from './Admin/AdminInstDetailPage';
import { AdminDeptDetailPage } from './Admin/AdminDeptDetailPage';
import { AdminPilgDetailPage } from './Admin/AdminPilgDetailPage';
import { AdminTaxBypass } from './Admin/AdminTaxBypass';
import { AdminDonationTax } from './Admin/AdminDonationTax';
import { AdminBookingTax } from './Admin/AdminBookingTax';

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
import { InstDonationList } from './Institution/InstDonationList';
import { InstProfile } from './Institution/InstProfile';
import { InstProfileEdit } from './Institution/InstProfileEdit';
import { InstPreachList } from './Institution/InstPreachList';
import { InstFestival } from './Institution/InstFestival';
import { InstFestivalList } from './Institution/InstFestivalList';
import { InstFestivalEvents } from './Institution/InstFestivalEvents';
import { InstFestivalEventsList } from './Institution/InstFestivalEventsList';
import { InstArchHeritage } from './Institution/InstArchHeriatage';
import { InstArchHeritageCertified } from './Institution/InstArchHeritageCertified';
import { InstArchBypass } from './Institution/InstArchBypass';
import { InstIncomeTaxProperties } from './Institution/InstIncomeTaxProperties';
import { InstIncomeTaxBypass } from './Institution/InstIncomeTaxBypass';
import { InstIncomeTaxPropertiesList } from './Institution/InstIncomeTaxPropertiesList';


import { IncomeLayout } from './IncomeTax/IncomeLayout'
import { IncomeTransReq } from './IncomeTax/IncomeTransReq'
import { IncomeTaxInst } from './IncomeTax/IncomeTaxInst'
import { IncomeWarning } from './IncomeTax/IncomeWarning';
import { IncomeAction } from './IncomeTax/IncomeAction';
import { IncomeTaxReport }  from './IncomeTax/IncomeTaxReport';
import { IncomeEmployee } from './IncomeTax/IncomeEmployee';
import { IncomeDuty } from './IncomeTax/IncomeDuty';
import { IncomeTaxInst2 } from './IncomeTax/IncomeTaxInst2';
import { IncomeProfile } from './IncomeTax/IncomeProfile';
import { IncomeProfileEdit } from './IncomeTax/IncomeProfileEdit';
import { IncomeEmployeeList } from './IncomeTax/IncomeEmployeeList';

import { ArchLayout } from './Archaeology/ArchLayout';
import { ArchHeritage } from './Archaeology/ArchHeritage';
import { ArchEmployee } from './Archaeology/ArchEmployee';
import { ArchDuty } from './Archaeology/ArchDuty';
import { ArchWealth } from './Archaeology/ArchWealth';
import { ArchProfile } from './Archaeology/ArchProfile';
import { ArchProfileEdit } from './Archaeology/ArchProfileEdit';
import { ArchEmployeeList } from './Archaeology/ArchEmployeeList';

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
import { PilgDonationListAll } from './Pilgrim/PilgDonationListAll';
import { PilgPhotos } from './Pilgrim/PilgPhotos';
import { PilgPhotosAdd } from './Pilgrim/PilgPhotosAdd';
// import { PilgReview } from './Pilgrim/PilgReview';
import { PilgReviewAdd } from './Pilgrim/PilgReviewAdd';
import { PilgBookingInst } from './Pilgrim/PilgBookingInst';
import { PilgReviewInst } from './Pilgrim/PilgReviewInst';
import { PilgFestivalList } from './Pilgrim/PillgFestivalList';
import { PilgFestivalEventList } from './Pilgrim/PilgFestvalEventList';
import { PilgInstitutionHeritage } from './Pilgrim/PilgInstitutionHeritage';
















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
          <Route path="viewpilgrim" element={<ViewPilgrim/>}/>
          <Route path="viewreport" element={<ViewReport/>}/>
          <Route path="admininstdetailpage/:id" element={<AdminInstDetailPage/>}/>
          <Route path="admindeptdetailpage/:id" element={<AdminDeptDetailPage/>}/>
          <Route path="adminpilgdetailpage/:id" element={<AdminPilgDetailPage/>}/>
          <Route path="admintaxbypass" element={<AdminTaxBypass/>}/>
          <Route path="admindonationtax" element={<AdminDonationTax/>}/>
          <Route path="adminbookingtax" element={<AdminBookingTax/>}/>

        </Route>

        <Route path="/instlayout" element={<InstLayout />}>
          <Route path="instinstruction" element={<InstInstruction/>}/>
          <Route path="instpreach" element={<InstPreach/>}/>
          <Route path="instvisit/:id" element={<InstVisit/>}/>
          <Route path="instincometx" element={<InstIncomeTax/>}/>
          <Route path="instarch" element={<InstArchaeology/>}/>
          <Route path="instdon" element={<InstDonation/>}/>
          <Route path="instrating/:id" element={<InstRating/>}/>
          <Route path="instphoto" element={<InstPhoto/>}/>
          <Route path="instprofile" element={<InstProfile/>}/>
          <Route path="instprofileedit" element={<InstProfileEdit/>}/>


          <Route path="instincometxlist" element={<InstIncomeTaxList/>}/>
          <Route path="instarchlist" element={<InstArchaeologyList/>}/>
          <Route path="instdonlist" element={<InstDonationList/>}/>
          <Route path="instpreachlist" element={<InstPreachList/>}/>
          <Route path="instfestival" element={<InstFestival/>}/>
          <Route path="instfestivallist" element={<InstFestivalList/>}/>
          <Route path="instfestivalevents/:id" element={<InstFestivalEvents/>}/>
          <Route path="instfestivaleventslist/:id" element={<InstFestivalEventsList/>}/>
          <Route path="instarchheritage" element={<InstArchHeritage/>}/>
          <Route path="instarchheritagecertified" element={<InstArchHeritageCertified/>}/>
          <Route path="instarchbypass" element={<InstArchBypass/>}/>
          <Route path="instincometaxproperties" element={<InstIncomeTaxProperties/>}/>
          <Route path="instincometaxbypass" element={<InstIncomeTaxBypass/>}/>
          <Route path="instincometaxpropertieslist" element={<InstIncomeTaxPropertiesList/>}/>



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
          <Route path="incomeprofile" element={<IncomeProfile/>}/>
          <Route path="incomeprofileedit" element={<IncomeProfileEdit/>}/>
          <Route path="incomeemployeelist" element={<IncomeEmployeeList/>}/>

        </Route>

        <Route path="/archlayout" element={<ArchLayout/>}>
          <Route path="archheritage" element={<ArchHeritage/>}/>
          <Route path="archemployee" element={<ArchEmployee/>}/>
          <Route path="archduty" element={<ArchDuty/>}/>
          <Route path="archwealth" element={<ArchWealth/>}/>
          <Route path="archwealth" element={<ArchWealth/>}/>
          <Route path="archprofile" element={<ArchProfile/>}/>
          <Route path="archprofileedit" element={<ArchProfileEdit/>}/>
          <Route path="archemployeelist" element={<ArchEmployeeList/>}/>
          
        </Route>

        <Route path="/pilglayout" element={<PilgLayout/>}>
          <Route path="pilgprofile" element={<PilgProfile/>}/>
          <Route path="pilgprofileedit" element={<PilgProfileEdit/>}/>
          <Route path="pilgbooking/:id" element={<PilgrimBooking/>}/>
          <Route path="pilgbookingpay" element={<PilgBookingPay/>}/>
          <Route path="pilgbookinglist" element={<PilgBookingList/>}/>
          <Route path="pilgdonation/:id" element={<PilgDonation/>}/>
          <Route path="pilgdonationmoney" element={<PilgDonationMoney/>}/>
          <Route path="pilgdonationlistmoney" element={<PilgDonationListMoney/>}/>
          <Route path="pilgdonationother" element={<PilgDonationOther/>}/>
          <Route path="pilgdonationlistother" element={<PilgDonationListOther/>}/>
          <Route path="pilgdonationlistall" element={<PilgDonationListAll/>}/>
          <Route path="pilgphotos" element={<PilgPhotos/>}/>
          <Route path="pilgphotosadd" element={<PilgPhotosAdd/>}/>
          {/* <Route path="pilgreview" element={<PilgReview/>}/> */}
          <Route path="pilgreviewadd/:id" element={<PilgReviewAdd/>}/>
          <Route path="pilgbookinginst" element={<PilgBookingInst/>}/>
          <Route path="pilgreviewinst" element={<PilgReviewInst/>}/>
          <Route path="pilgfestivallist" element={<PilgFestivalList/>}/>
          <Route path="pilgfestivaleventlist/:id" element={<PilgFestivalEventList/>}/>
          <Route path="pilginstitutionheritage/:id" element={<PilgInstitutionHeritage/>}/>

        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
