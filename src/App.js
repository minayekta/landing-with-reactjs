import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ProductDesign from './components/ProductDesign/ProductDesign';
import CourseExperience from './components/CourseExp/CourseExperience';
import Sessions from './components/Sessions/Sessions';
import Masters from './components/Masters/Masters';
import AskedQ from './components/AskQ/AskedQ';
import CourseFee from './components/CouresFee/CouresFee';
import ReqListHeading from './components/ReqListHeading/ReqListHeading';
import './App.css'
function App() {
  return (
    <div className="App">
      <Header/>
      <ProductDesign/>
        <CourseExperience/>
        <Sessions/>
        <Masters/>
        <AskedQ/>
        <CourseFee/>
        <ReqListHeading/>
      <Footer/>
    </div>
  );
}

export default App;
