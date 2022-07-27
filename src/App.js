import React, { useEffect, useState } from 'react';
// import './App.css';
import Inputbox from './components/Inputbox';
import Modal from './components/Modal';

function App() {

  const [result, setResult] = useState(false)

  const [creditData, setCreditData] = useState([])
  const [selectData, setSelectData] = useState([])
  const [finalResult, setFinalResult] = useState([{
    totalGrade: "",
    cgpa: "",
    totalCredit: "",
    gradeLength: ""
  }])



// reset data
  const [reset, setReset] = useState(true)

  // starting course input
  const [addCourse, setAddCourse] = useState([])



  // calculate cgpa
  const handleResult = () => {
    if(creditData || selectData) {
      setCreditData([])
      setSelectData([])
    }
    setResult(true)
  
    const allCredits = document.querySelectorAll(".credit-box");
    const allSelect = document.querySelectorAll(".grade-box");
  
    // get all credit values
    allCredits.forEach(credit => {
      const newCredit = credit.getAttribute("value")
      setCreditData(prev => {
        return [...prev, parseInt(newCredit)]
      })  
    })  
    // get all selected grade values
    allSelect.forEach(select => {
      let data = select.options[select.selectedIndex].value
      if (data === "A"){
        data = 5
      }
      else if(data ==="B"){
        data = 4
      }
      else if(data ==="C"){
        data = 3
      }
      else if(data ==="D"){
        data = 2
      }
      else if(data ==="E"){
        data = 1
      }
      else if(data ==="F"){
        data = 0
      }
      setSelectData(prev => {
        return [...prev, data]
      })  
    })

  }

  // calculate CGPA

  const CGPA = ()=> {
    let counter = 0;
    if(creditData || selectData) {
      // filter for nan values and loop through array
     creditData.filter((num) => !Number.isNaN(num)).forEach((items, index)=>{
        console.log("incoming data ", items, selectData[index])
        counter += parseInt(items) * parseInt(selectData[index]);
      })
      // console.log("counter", counter)
    }

    // // filter for nan values and calculate sum of array
    let totalcredit = creditData.filter((num) => !Number.isNaN(num)).reduce((a, b) => a + b, 0);

    // // filter for empty grade values and calculate sum of array
    let filtergrade = selectData.filter((num) => num !== "")
    
    let totalgrade = filtergrade.reduce((a, b) => a + b, 0);
    // console.log(totalgrade)
    // console.log(totalcredit)

    // round to two decimal place
    let CGPA = (counter /  totalcredit).toFixed(2);
    // console.log(CGPA)
    
    // set final Cgpa Result
    setFinalResult({
      totalGrade: totalgrade,
      cgpa: CGPA,
      totalCredit: totalcredit,
      gradeLength: filtergrade.length
    })
  }

  useEffect(()=>{
    CGPA();
  }, [creditData])


  // exit modal
  const handleExit = () => {
    
    setResult(false)
    setCreditData([])
    setSelectData([])
  }

  // add neww courses
  const handleCourse = () => {
    setReset(false)
    setAddCourse(prev => {
      return [...prev, <Inputbox />]
    })
  }

  // reset course
  const handleReset = () => {
    setReset(true)
    setAddCourse([])
  
  }
    

  return (
    <div className="main">
      <h1 className='main-heading'>CGPA<br />CALCULATOR</h1>
      <div className='main-content'>
        <div className='main-content-box'>
          <div className='main-content-head'>
            <h4 className='main-code'>Course code</h4>
            <h4>Credit</h4>
            <h4>Grade</h4>
          </div>
          {reset? <h2 className='class-add'>No Courses Added</h2>:addCourse.map(course => {
            return (<div key={addCourse.indexOf(course)} className='grade-input'>
              {course}

            </div>)
          })
          }
          <div className='grade-action'>
            <button className='grade-action-btn' onClick={handleReset}>Reset</button>
            <button className='grade-action-btn' onClick={handleCourse}>Add Course</button>

          </div>
        </div>
        <div className='grade-calculate'>
          <button className='grade-calculate-btn' onClick={handleResult}>Calculate</button>
        </div>
        {result ? <Modal val={finalResult} exit={handleExit} /> : null}
      </div>

    </div>
  );
}

export default App;
