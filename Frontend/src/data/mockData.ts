import { Project, Task } from "../types/types";

export const projects: Project[] = [
  {
    id: 1,
    title: 'Website Redesign',
    description: 'Complete overhaul of company website with modern design',
    status: 'active',
    dueDate: '2024-04-15',
    progress: 65,
    users: [
      { id: 101, name: 'John Doe', role: 'Frontend Developer' },
      { id: 102, name: 'Jane Smith', role: 'UI/UX Designer' },
      { id: 103, name: 'Alice Johnson', role: 'Project Manager' },
    ],
  },
  {
    id: 2,
    title: 'Mobile App Development',
    description: 'Create a new mobile app for project management',
    status: 'active',
    dueDate: '2025-05-30',
    progress: 25,
    users: [
      { id: 104, name: 'Bob Brown', role: 'Mobile Developer' },
      { id: 105, name: 'Charlie Davis', role: 'Backend Developer' },
      { id: 103, name: 'Alice Johnson', role: 'Project Manager' },
    ],
  },
  {
    id: 3,
    title: 'Marketing Campaign',
    description: 'Q2 Digital Marketing Campaign',
    status: 'on-hold',
    dueDate: '2024-06-01',
    progress: 15,
    users: [
      { id: 106, name: 'Eve White', role: 'Marketing Specialist' },
      { id: 107, name: 'Frank Harris', role: 'Content Writer' },
    ],
  },
  {
    id: 4,
    title: 'Product Launch',
    description: 'Launch of new product line with promotional events',
    status: 'active',
    dueDate: '2024-07-15',
    progress: 10,
    users: [
      { id: 108, name: 'Grace Lee', role: 'Product Manager' },
      { id: 109, name: 'Hank Green', role: 'Event Coordinator' },
    ],
  },
  {
    id: 5,
    title: 'Customer Feedback System',
    description: 'Develop a system to collect and analyze customer feedback',
    status: 'active',
    dueDate: '2024-08-01',
    progress: 0,
    users: [
      { id: 110, name: 'Ivy Adams', role: 'Data Analyst' },
      { id: 111, name: 'Jack White', role: 'Software Engineer' },
    ],
  },
  {
    id: 6,
    title: 'Internal Training Program',
    description: 'Develop and implement a training program for new employees',
    status: 'active',
    dueDate: '2024-09-01',
    progress: 40,
    users: [
      { id: 112, name: 'Karen Smith', role: 'HR Specialist' },
      { id: 113, name: 'Leo Brown', role: 'Trainer' },
    ],
  },
];

export const tasks: Task[] = [
  // Tasks for Project 1 (Website Redesign)
  {
    id: 1,
    projectId: 1,
    title: 'Design Homepage',
    description: 'Create new homepage design with updated branding',
    priority: 'high',
    status: 'completed',
    dueDate: '2024-03-20',
    assignedTo: [101, 102], // Assigned to John Doe and Jane Smith
  },
  {
    id: 2,
    projectId: 1,
    title: 'Implement Responsive Layout',
    description: 'Ensure website works on all devices',
    priority: 'high',
    status: 'in-progress',
    dueDate: '2024-03-25',
    assignedTo: [101], // Assigned to John Doe
  },
  {
    id: 3,
    projectId: 1,
    title: 'Optimize SEO',
    description: 'Improve search engine optimization for the website',
    priority: 'medium',
    status: 'todo',
    dueDate: '2024-04-01',
    assignedTo: [103], // Assigned to Alice Johnson
  },

  // Tasks for Project 2 (Mobile App Development)
  {
    id: 4,
    projectId: 2,
    title: 'Design User Flow',
    description: 'Create user flow diagrams for mobile app',
    priority: 'medium',
    status: 'todo',
    dueDate: '2024-04-01',
    assignedTo: [102, 103], // Assigned to Jane Smith and Alice Johnson
  },
  {
    id: 5,
    projectId: 2,
    title: 'Develop Login Screen',
    description: 'Implement the login functionality for the app',
    priority: 'high',
    status: 'in-progress',
    dueDate: '2024-04-10',
    assignedTo: [104], // Assigned to Bob Brown
  },
  {
    id: 6,
    projectId: 2,
    title: 'Integrate Backend API',
    description: 'Connect the app to the backend services',
    priority: 'high',
    status: 'todo',
    dueDate: '2024-04-15',
    assignedTo: [105], // Assigned to Charlie Davis
  },

];

