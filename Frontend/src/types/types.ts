// types.ts
export interface User {
  id: number;
  name: string;
  role: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  status: string;
  dueDate: string;
  progress: number;
  users: User[];
}
export interface Task {
  id: number;
  projectId: number;
  title: string;
  description: string;
  priority: 'low' | 'medium' | 'high';
  status: 'todo' | 'in-progress' | 'completed';
  dueDate: string;
  assignedTo: number[]; // Array of user IDs

}

export interface ProjectCardProps {
  project: Project;
  onClick?: () => void;
}

export interface AddProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddProject: (project: Project) => void;
}