import React ,{use, useState} from "react";
import './style.css';


function SubmissionForm(){
    const[employeeName,setEmployeeName]=useState('');
    const[email,setEmail]=useState('');
    const[employeeId,setEmployeeId]=useState('');
    const[reasonForSuspension,setReasonForSuspension]=useState('');
    const[dateOfSuspension,setdateOfSuspension]=useState('');
    const[durationOfSuspension,setDurationOfSuspension]=useState('');
    const[investigationType,setInvestigationType]=useState('');
    const[investigationStartDate,setInvestigationStartDate]=useState('');
    const[investigationEndDate,setInvestigationEndDate]=useState('');
    const[supportingDocuments,setSupportingDocuments]=useState(null);
    const [errors, setErrors] = useState({});

    const handleSubmit=(e)=>{
        e.preventDefault();

        const newErrors = {};
        if (!employeeName) newErrors.employeeName = 'Employee Name is required';
        if (!employeeId) newErrors.employeeId = 'Employee ID is required';
        // if (!reasonForSuspension) newErrors.reasonForSuspension = 'Reason for Suspension is required';
        if (!dateOfSuspension) newErrors.dateOfSuspension = 'Date of Suspension is required';
        // if (!durationOfSuspension) newErrors.durationOfSuspension = 'Duration of Suspension is required';
        // if (!investigationType) newErrors.investigationType = 'Investigation Type is required';
        if (!investigationStartDate) newErrors.investigationStartDate = 'Investigation Start Date is required';
        if (!investigationEndDate) newErrors.investigationEndDate = 'Investigation End Date is required';
        setErrors(newErrors);
        if(Object.keys(newErrors).length===0){
            
        }
    
    };
    const handleFileChange=(e)=>{
        const file= e.target.files[0];
            console.log(file);
    };

    const handleReset = () => {
        setEmployeeName('');
        setEmail('');
        setEmployeeId('');
        setReasonForSuspension('');
        setdateOfSuspension('');
        setDurationOfSuspension('');
        setInvestigationType('');
        setInvestigationStartDate('');
        setInvestigationEndDate('');
        setSupportingDocuments(null);
        setErrors({});
      };

    return(
        <div>
        <h1>Suspension Submission Form</h1>
        <form onSubmit={handleSubmit}>
            <label class = "required">Employee Name:</label>
            <input type="text" required value={employeeName} onChange={(e)=>setEmployeeName(e.target.value)}></input>
            {errors.employeeName && <div className="error-message">{errors.employeeName}</div>}
            <br/>
            <label class="required">Employee Id:</label>
            <input type="text" required value={employeeId} onChange={(e)=>setEmployeeId(e.target.value)}></input>
            {errors.employeeId && <div className="error-message">{errors.employeeId}</div>}
            <br/>
            <label>Reason For Suspension:</label>
            <input type="text" value={reasonForSuspension} onChange={(e)=>setReasonForSuspension(e.target.value)}></input>
            <br/>
            <label class="required">Date of Suspension:</label>
            <input type="date" required value={dateOfSuspension} onChange={(e)=>setdateOfSuspension(e.target.value)}></input>
            {errors.dateOfSuspension && <div className="error-message">{errors.dateOfSuspension}</div>}
            <br/>
            <br/>
            <label>Duration of Suspension:</label>
            <input type="text" value={durationOfSuspension} onChange={(e)=>setDurationOfSuspension(e.target.value)}></input>
            <br/>
            <label>Investigation Type</label>
            <input type="text" value={investigationType} onChange={(e)=>setInvestigationType(e.target.value)}></input>
            <br/>
            <label class="required">investigation Start Date:</label>
            <input type="date" required value={investigationStartDate} onChange={(e)=>setInvestigationStartDate(e.target.value)}></input>
            {errors.investigationStartDate && <div className="error-message">{errors.investigationStartDate}</div>}
            <br/>
            <br/>
            <label class="required">investigation End Date:</label>
            <input type="date" required value={investigationEndDate} onChange={(e)=>setInvestigationEndDate(e.target.value)}></input>
            {errors.investigationEndDate && <div className="error-message">{errors.investigationEndDate}</div>}
            <br/>
            <br/>
            <label class="required">supporting Documents:</label>
            <input type="file" required multiple onChange={handleFileChange}></input>
            <br/>
            <button type="submit"className="button">Submit</button>
            <button type="reset"className="button" onClick={handleReset}>Clear</button>
        </form>
        </div>
    );
}
export default SubmissionForm