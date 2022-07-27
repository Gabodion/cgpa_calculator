import React from 'react'

const Modal = (props) => {


  

  return (
    <div className= ' modal-wrapper'>
        <div className='modal-content'>
            <h2>Calculation Details</h2>
            <div className='modal-content-result'>
                <h3 className='modal-details'>Total course:</h3>
                <p className='modal-details'>{props.val.gradeLength}</p>
            </div>
            <div className='modal-content-result'>
                <h3 className='modal-details'>Total Credit:</h3>
                <p className='modal-details'>{props.val.totalCredit}</p>
            </div>
            <div className='modal-content-result'>
                <h3 className='modal-details'>Total grade:</h3>
                <p className='modal-details'>{props.val.totalGrade}</p>
            </div>
            <p className='modal-value'>Your CGPA score is: <span>{props.val.cgpa}</span></p>
            <button className='modal-exit' onClick={() => props.exit()}>Exit</button>
        </div>
    </div>
  )
}

export default Modal