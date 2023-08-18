import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signin from "./components/Signin.jsx";
import Signup from "./components/Signup.jsx";
import Appbar from "./components/Appbar.jsx";
import AddCourse from './components/Addcourse.jsx';
import Courses from './components/Courses.jsx';
import Course from './components/Course.jsx';
import { RecoilRoot } from 'recoil';

function App() {

    return (
        <div style={{
            width: "100vw",
            height: "100vh",
            backgroundColor: "#eeeeee"
        }}
        >
            <RecoilRoot>
                <Router>
                    <Appbar />
                    <Routes>
                        <Route path={"/addcourse"} element={<AddCourse />} />
                        <Route path={"/course/:courseId"} element={<Course />} />
                        <Route path={"/course"} element={<Courses />} />
                        <Route path={"/signin"} element={<Signin />} />
                        <Route path={"/signup"} element={<Signup />} />
                    </Routes>
                </Router>
            </RecoilRoot>

        </div>
    );
}

export default App;