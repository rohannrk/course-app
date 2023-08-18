import { Card } from "@mui/material";
import { useEffect, useState } from "react"
import { Typography} from "@mui/material";

function Courses() {
    const [courses, setCourses] = useState([]);
    
    useEffect(() => {
        function callback2(data) {
            setCourses(data.courses);
        }
        function callback1(res) {
            res.json().then(callback2)
        }
        fetch("http://localhost:3000/admin/courses/", {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("token")
            }
        }).then(callback1)
    }, []);

    return <div style={{display: "flex" , flexWrap: "wrap", justifyContent: "center"}}>
        {courses.map(course => {
        return <CourseCard course={course}/>
        }
        )}
    </div>
}

function CourseCard(props) {
    const course = props.course;
    return <div >
    <div>
     <Card style={{
        margin: 10,
        width: 300,
        minHeight: 200
    }}>

        <Typography textAlign={"center"} variant="h5">{course.title}</Typography>
        <Typography textAlign={"center"} variant="subtitle1">{course.description}</Typography>
        <img src={course.imageLink} style={{width: 300}} ></img>
    </Card>
    </div>
    </div>
}

export default Courses;