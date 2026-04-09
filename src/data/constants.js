import {
  Cpu,
  Cog,
  HardHat,
  Zap,
  BookOpen,
  FlaskConical,
  FileQuestion,
  History,
  ClipboardList,
  Video,
  Network,
  Brain,
} from 'lucide-react'

export const BRANCHES = [
  { id: 'computer', name: 'Computer Engineering', icon: Cpu, color: 'from-blue-500 to-cyan-500' },
  { id: 'iot', name: 'Computer Science (IoT)', icon: Network, color: 'from-indigo-500 to-blue-500' },
  { id: 'aids', name: 'AI and Data Science (AIDS)', icon: Brain, color: 'from-purple-500 to-pink-500' },
  { id: 'mechanical', name: 'Mechanical Engineering', icon: Cog, color: 'from-amber-500 to-orange-500' },
  { id: 'civil', name: 'Civil Engineering', icon: HardHat, color: 'from-stone-500 to-amber-700' },
  { id: 'electrical', name: 'Electrical Engineering', icon: Zap, color: 'from-yellow-500 to-red-500' },
]

export const SEMESTERS = [
  { id: '1', name: 'Semester 1', number: 1 },
  { id: '2', name: 'Semester 2', number: 2 },
  { id: '3', name: 'Semester 3', number: 3 },
  { id: '4', name: 'Semester 4', number: 4 },
  { id: '5', name: 'Semester 5', number: 5 },
  { id: '6', name: 'Semester 6', number: 6 },
]

export const RESOURCE_TYPES = [
  { id: 'theory_notes', label: 'Theory Notes', icon: BookOpen, color: 'from-indigo-500 to-purple-500' },
  { id: 'practical_notes', label: 'Practical Notes', icon: FlaskConical, color: 'from-emerald-500 to-teal-500' },
  { id: 'question_bank', label: 'Question Bank', icon: FileQuestion, color: 'from-rose-500 to-pink-500' },
  { id: 'previous_papers', label: 'Previous Year Questions', icon: History, color: 'from-amber-500 to-orange-500' },
  { id: 'assignments', label: 'Assignments', icon: ClipboardList, color: 'from-cyan-500 to-blue-500' },
  { id: 'lecture_videos', label: 'Lecture Videos', icon: Video, color: 'from-red-500 to-rose-500' },
]

export const SAMPLE_SUBJECTS = {
  computer: {
    '1': [
      { id: 'prog', name: 'Programming', teacher: 'Prof. Patil' },
      { id: 'math1', name: 'Engineering Mathematics I', teacher: 'Prof. Kulkarni' },
      { id: 'physics', name: 'Engineering Physics', teacher: 'Prof. Deshmukh' },
    ],
    '2': [
      { id: 'ds', name: 'Data Structures', teacher: 'Prof. Patil' },
      { id: 'dbms', name: 'Database Management', teacher: 'Prof. Kulkarni' },
    ],
    '3': [
      { id: 'os', name: 'Operating System', teacher: 'Prof. Kulkarni' },
      { id: 'cn', name: 'Computer Networks', teacher: 'Prof. Deshmukh' },
      { id: 'oops', name: 'Object Oriented Programming', teacher: 'Prof. Patil' },
    ],
    '4': [
      { id: 'se', name: 'Software Engineering', teacher: 'Prof. Deshmukh' },
      { id: 'toc', name: 'Theory of Computation', teacher: 'Prof. Kulkarni' },
    ],
    '5': [
      { id: 'ml', name: 'Machine Learning', teacher: 'Prof. Patil' },
      { id: 'web', name: 'Web Technologies', teacher: 'Prof. Kulkarni' },
    ],
    '6': [
      { id: 'da', name: 'Data Analytics', teacher: 'Prof. Deshmukh' },
      { id: 'project', name: 'Project', teacher: 'Prof. Patil' },
    ],
  },
  iot: {
    '1': [
      { id: 'math1', name: 'Engineering Mathematics I', teacher: 'Prof. Patil' },
      { id: 'iot_intro', name: 'Introduction to IoT', teacher: 'Prof. Kulkarni' },
      { id: 'electronics', name: 'Basic Electronics', teacher: 'Prof. Deshmukh' },
    ],
    '2': [
      { id: 'embedded', name: 'Embedded Systems', teacher: 'Prof. Patil' },
      { id: 'sensors', name: 'Sensors & Actuators', teacher: 'Prof. Kulkarni' },
    ],
    '3': [
      { id: 'micro', name: 'Microcontrollers', teacher: 'Prof. Kulkarni' },
      { id: 'cn_iot', name: 'IoT Networking', teacher: 'Prof. Deshmukh' },
    ],
    '4': [
      { id: 'iot_project', name: 'Microcontroller theory', teacher: 'Prof. Wakode Mam' },
      { id: 'edge', name: 'Intro to IoT theory', teacher: 'Prof. Chaudhari Mam' },
      { id: 'protocols', name: 'DCS & SP theory', teacher: 'Prof. Belsare Sir' },
      { id: 'iot_project', name: 'Intro to Cyber Law theory', teacher: 'Prof. Priyanka Mam' },
      { id: 'iot_project', name: '[MDM] Artificial Intelligence theory', teacher: 'Prof. Neha Mam' },
      { id: 'cloud', name: 'AAD Practical', teacher: 'Prof. Roshni Mam' },
      { id: 'iot_app', name: 'DCS & SP Practical', teacher: 'Prof. Sawarkar Mam' },
      { id: 'iot_project', name: 'DSA Practical', teacher: 'Prof. Sarad Mam' },
    ],
    '5': [
      { id: 'iot_sec', name: 'IoT Security', teacher: 'Prof. Patil' },
      { id: 'smart_city', name: 'Smart City Solutions', teacher: 'Prof. Kulkarni' },
    ],
    '6': [
      { id: 'iot_project', name: 'IoT Capstone Project', teacher: 'Prof. Deshmukh' },
    ],
  },
  aids: {
    '1': [
      { id: 'math1', name: 'Engineering Mathematics I', teacher: 'Prof. Rao' },
      { id: 'python', name: 'Python for Data Science', teacher: 'Prof. Iyer' },
      { id: 'stats', name: 'Statistical Methods', teacher: 'Prof. Verma' },
    ],
    '2': [
      { id: 'ds_aids', name: 'Data Structures & Algorithms', teacher: 'Prof. Rao' },
      { id: 'prob', name: 'Probability & Random Processes', teacher: 'Prof. Iyer' },
    ],
    '3': [
      { id: 'dbms_aids', name: 'Advanced DBMS', teacher: 'Prof. Rao' },
      { id: 'linear_algebra', name: 'Linear Algebra', teacher: 'Prof. Iyer' },
    ],
    '4': [
      { id: 'ml_intro', name: 'Foundations of ML', teacher: 'Prof. Rao' },
      { id: 'data_mining', name: 'Data Mining', teacher: 'Prof. Iyer' },
    ],
    '5': [
      { id: 'dl', name: 'Deep Learning', teacher: 'Prof. Rao' },
      { id: 'big_data', name: 'Big Data Analytics', teacher: 'Prof. Iyer' },
    ],
    '6': [
      { id: 'aids_project', name: 'AI/DS Capstone Project', teacher: 'Prof. Rao' },
    ],
  },
  mechanical: {
    '1': [
      { id: 'math1', name: 'Engineering Mathematics I', teacher: 'Prof. Sharma' },
      { id: 'mech', name: 'Engineering Mechanics', teacher: 'Prof. Singh' },
    ],
    '2': [
      { id: 'thermo', name: 'Thermodynamics', teacher: 'Prof. Gupta' },
      { id: 'materials', name: 'Engineering Materials', teacher: 'Prof. Sharma' },
    ],
    '3': [
      { id: 'fm', name: 'Fluid Mechanics', teacher: 'Prof. Singh' },
      { id: 'heat', name: 'Heat Transfer', teacher: 'Prof. Gupta' },
    ],
    '4': [
      { id: 'cad', name: 'CAD/CAM', teacher: 'Prof. Sharma' },
      { id: 'dynamics', name: 'Dynamics of Machinery', teacher: 'Prof. Singh' },
    ],
    '5': [
      { id: 'ic', name: 'Internal Combustion Engines', teacher: 'Prof. Gupta' },
      { id: 'ref', name: 'Refrigeration', teacher: 'Prof. Sharma' },
    ],
    '6': [
      { id: 'project', name: 'Project', teacher: 'Prof. Singh' },
    ],
  },
  civil: {
    '1': [
      { id: 'math1', name: 'Engineering Mathematics I', teacher: 'Prof. Rao' },
      { id: 'survey', name: 'Surveying', teacher: 'Prof. Iyer' },
    ],
    '2': [
      { id: 'mech', name: 'Mechanics of Solids', teacher: 'Prof. Rao' },
      { id: 'bldg', name: 'Building Materials', teacher: 'Prof. Iyer' },
    ],
    '3': [
      { id: 'structural', name: 'Structural Analysis', teacher: 'Prof. Rao' },
      { id: 'fluid', name: 'Fluid Mechanics', teacher: 'Prof. Iyer' },
    ],
    '4': [
      { id: 'design', name: 'RCC Design', teacher: 'Prof. Rao' },
      { id: 'transport', name: 'Transportation', teacher: 'Prof. Iyer' },
    ],
    '5': [
      { id: 'steel', name: 'Steel Structures', teacher: 'Prof. Rao' },
      { id: 'env', name: 'Environmental Engineering', teacher: 'Prof. Iyer' },
    ],
    '6': [
      { id: 'project', name: 'Project', teacher: 'Prof. Rao' },
    ],
  },
  electrical: {
    '1': [
      { id: 'math1', name: 'Engineering Mathematics I', teacher: 'Prof. Verma' },
      { id: 'circuits', name: 'Basic Electrical', teacher: 'Prof. Joshi' },
    ],
    '2': [
      { id: 'em', name: 'Electromagnetic Theory', teacher: 'Prof. Verma' },
      { id: 'measure', name: 'Measurements', teacher: 'Prof. Joshi' },
    ],
    '3': [
      { id: 'machines', name: 'Electrical Machines', teacher: 'Prof. Verma' },
      { id: 'power1', name: 'Power Systems I', teacher: 'Prof. Joshi' },
    ],
    '4': [
      { id: 'control', name: 'Control Systems', teacher: 'Prof. Verma' },
      { id: 'power2', name: 'Power Systems II', teacher: 'Prof. Joshi' },
    ],
    '5': [
      { id: 'drive', name: 'Electrical Drives', teacher: 'Prof. Verma' },
      { id: 'renewable', name: 'Renewable Energy', teacher: 'Prof. Joshi' },
    ],
    '6': [
      { id: 'project', name: 'Project', teacher: 'Prof. Verma' },
    ],
  },
}
