import React from "react";
import "./Display.css";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import {useState} from "react";
import userEvent from "@testing-library/user-event";



function Display ({name, id, course_id, lecturer_id}){
  
    // const StudentTableRow = ({ onDelete}) => {
    // const { name, student_id, course } = student;

    // const deleteStudent = () => {	
    //     fetch(`https://kimeu-api.herokuapp.com/students/${id}`,{		
    //     method: "DELETE",	})	
    //     .then(res => res.json())	
    //     .then(() => {		
    //     onDelete(id)		
    //     alert("Student successfully deleted!")	})}
    return (
        <>
        
        <div className="Display">
            <form>
            <div class="card">
            <div class="card-body">
            <div className="details">
                <section>
                    <h3>Name:{name}</h3>
                    <h3>Student_Id:{id}</h3>
                    <h3>Course:{course_id}</h3>
                    <h3>Lecturer:{lecturer_id}</h3>
                    
                </section>
                </div>
                <div className="buttons">
                <Button>Post Student</Button>
                <Button>Edit Student</Button>
                <Button >Delete Student</Button>
                </div>

    
    
  </div>
</div>
                {/* <div className="details">
                <section>
                    <h3>Name:{name}</h3>
                    <h3>Student_Id:{id}</h3>
                    <h3>Course:{course_id}</h3>
                    
                </section>
                </div>
                
                
                
                <div className="buttons">
                <Button>Post Student</Button>
                <Button>Edit Student</Button>
                <Button>Delete Student</Button>
                </div>
         */}
            </form>
            

        </div>
        </>
    )
}


export default Display;