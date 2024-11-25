import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import About from './pages/About';
import News from './pages/News';
import Contact from './pages/Contact';
import Login from './pages/Login';
import ParentDashboard from './pages/dashboards/ParentDashboard';
import TeacherDashboard from './pages/dashboards/TeacherDashboard';
import AdminDashboard from './pages/dashboards/AdminDashboard';
import Signin from './pages/Signin';
import EditStudent from './pages/dashboards/EditStudentDetails';
import AddAdminOrTeacher from './pages/dashboards/AddAdminOrTeacher';
import UserManagement from './pages/dashboards/UserManagement';
import EditUser from './pages/dashboards/EditUser';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-pink-50 to-blue-50">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about" element={<About />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Signin" element={<Signin />} />
            <Route path="/dashboard/student" element={<ParentDashboard />} />
            <Route path="/dashboard/teacher" element={<TeacherDashboard />} />
            <Route path="/dashboard/admin" element={<AdminDashboard />} />
            <Route path="/dashboard/admin/editstd" element={<EditStudent />} />
            <Route path="/dashboard/admin/signin" element={<Signin />} />
            <Route path="/dashboard/admin/usermanagement" element={<UserManagement />} />
            <Route path="/dashboard/admin/usermanagement/edituser" element={<EditUser />} />
            <Route path="/dashboard/admin/adddminorteacher" element={<AddAdminOrTeacher />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;