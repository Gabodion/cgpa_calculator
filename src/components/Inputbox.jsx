import React, {useState} from 'react'



const Inputbox = (props) => {

  const [details, setDetails] = useState({
      courses: "",
      credits: "",
      grades: ""
    })
  // handle change
  const handleDetail = (event) => {
    const {name, value} = event.target;

  
    // console.log(name)
    setDetails(prev => {
      // console.log(prev)
       return {
        ...prev,   
          [name]: value,
        } 
       },
 
    );
  
  }
 



    return (
        <div className='grade-input-content' >
        
            <input type="text" name="courses"  onChange={handleDetail} className='input-box' value={details.courses}/>
            <input type="tel" name="credits"  onChange={handleDetail} className='input-box credit-box'   value={details.credits}/>
            <select name="grades"  onChange={handleDetail} className='input-box grade-box'  value={details.grades}>
                <option></option>
                <option>A</option>
                <option>B</option>
                <option>C</option>
                <option>D</option>
                <option>E</option>
                <option>F</option>
                <option>NE</option>
                <option>NI</option>
                <option>I</option>
            </select>
            {/* <button className="delete-btn" onClick={() => props.delete()}><i className="far fa-trash-alt"></i></button> */}
        </div>
    )
}

export default Inputbox