import React from "react";
import "./Display.css";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import {useState} from "react";



function Display ({name, student_id, cohort}){
    const [formData, setFormData] = useState({
        name:'',
        student_id:'',
        cohort:'',
        
      });
    return (
        <div className="Display">
            <form>
                <div className="details">
                <section>
                    <h3>Name:</h3>
                    <h3>Student_Id:</h3>
                    <h3>Cohort:</h3>
                    
                </section>
                <section>
                <img src="https://image.shutterstock.com/image-photo/ugali-stew-260nw-784234852.jpg" alt="img" height="100px"/>
                </section>
                </div>
                
                
                
                <div className="buttons">
                <Button>Post Student</Button>
                <Button>Edit Student</Button>
                <Button>Delete Student</Button>
                </div>
        
            </form>
            

        </div>
    )
}

export default Display;