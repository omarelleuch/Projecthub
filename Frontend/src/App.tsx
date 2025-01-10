import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import { Home } from './Pages/Home';
import { Dashboard } from './Pages/Dashboard';
import { Tasks } from './Pages/Tasks';
import Footer from './components/Layout/Footer';
import Projects from './Pages/Projects';
import ProjectDetails from './Pages/ProjectDetails';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="max-w-7xl mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/project/:id" element={<ProjectDetails />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;