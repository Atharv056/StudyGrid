import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import BranchSelection from './pages/BranchSelection.jsx'
import SemesterSelection from './pages/SemesterSelection.jsx'
import SubjectSelection from './pages/SubjectSelection.jsx'
import SubjectDashboard from './pages/SubjectDashboard.jsx'
import Bookmarks from './pages/Bookmarks.jsx'
import Viewer from './pages/Viewer.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout><Home /></Layout>} />
      <Route path="/branch" element={<Layout><BranchSelection /></Layout>} />
      <Route path="/branch/:branchId" element={<Layout><SemesterSelection /></Layout>} />
      <Route path="/branch/:branchId/semester/:semId" element={<Layout><SubjectSelection /></Layout>} />
      <Route path="/branch/:branchId/semester/:semId/subject/:subjectId" element={<Layout><SubjectDashboard /></Layout>} />
      <Route path="/bookmarks" element={<Layout><Bookmarks /></Layout>} />
      <Route path="/viewer" element={<Layout><Viewer /></Layout>} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
