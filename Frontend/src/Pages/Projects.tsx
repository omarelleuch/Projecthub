import React, { useState } from 'react';
import ProjectCard from '../components/UI/ProjectCard';
import { projects as initialProjects } from '../data/mockData'; // Rename to avoid conflict
import './Projects.css'; // Import the updated CSS
import { Project } from '../types/types';
import AddProjectModal from './AddProjectModal';


const Projects: React.FC = () => {
  // Use state to manage the projects array
  const [projects, setProjects] = useState<Project[]>(initialProjects);

  // State to manage modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to handle adding a new project
  const handleAddProject = (newProject: Project) => {
    setProjects([...projects, newProject]);
  };

  return (
    <div className="projects-page">
      <h1>Projects</h1>
      <div className="projects-list">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* Button to open the modal */}
      <button
        className="add-project-button"
        onClick={() => setIsModalOpen(true)}
      >
        Add New Project
      </button>

      {/* Modal for adding a new project */}
      <AddProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddProject={handleAddProject}
      />
    </div>
  );
};

export default Projects;