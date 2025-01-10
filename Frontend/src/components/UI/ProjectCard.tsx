import { useNavigate } from 'react-router-dom';
import { Project } from '../../types/types';

interface ProjectCardProps {
  project: Project; // Define the prop type
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/project/${project.id}`);
  };

  return (
    <div className="project-card">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="project-details">
        <span>Status: {project.status}</span>
        <span>Due Date: {project.dueDate}</span>
        <span>Progress: {project.progress}%</span>
      </div>
      <br />
      <button onClick={handleViewDetails}>View Details</button>
    </div>
  );
};

export default ProjectCard;