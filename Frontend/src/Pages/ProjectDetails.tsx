import { useParams, useNavigate } from 'react-router-dom';
import { projects, tasks } from '../data/mockData';
import './ProjectDetails.css'; // Optional CSS for styling

const ProjectDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate(); // Initialize useNavigate
  const project = projects.find((p) => p.id === parseInt(id || ''));
  const projectTasks = tasks.filter((t) => t.projectId === parseInt(id || ''));

  // Function to handle back navigation
  const handleBack = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent default link behavior
    navigate('/projects'); // Navigate back to the projects page
  };

  if (!project) {
    return <div>Project not found</div>;
  }

  // Helper function to get user details by ID
  const getUserById = (userId: number) => {
    return project.users.find((user) => user.id === userId);
  };

  return (
    <div className="project-details">
      {/* Back link */}
      <a href="/projects" onClick={handleBack} className="back-link">
        &larr; Back to Projects
      </a>

      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <div className="project-info">
        <p><strong>Status:</strong> {project.status}</p>
        <p><strong>Due Date:</strong> {project.dueDate}</p>
        <p><strong>Progress:</strong> {project.progress}%</p>
      </div>

      <h2>Tasks</h2>
      <ul className="tasks-list">
        {projectTasks.map((task) => (
          <li key={task.id} className="task-item">
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p><strong>Priority:</strong> {task.priority}</p>
            <p><strong>Status:</strong> {task.status}</p>
            <p><strong>Due Date:</strong> {task.dueDate}</p>
            <p><strong>Assigned To:</strong></p>
            <ul className="assigned-users">
              {task.assignedTo.map((userId) => {
                const user = getUserById(userId);
                return (
                  <li key={userId}>
                    {user ? `${user.name} (${user.role})` : 'Unknown User'}
                  </li>
                );
              })}
            </ul>
          </li>
        ))}
      </ul>

      <h2>Team Members</h2>
      <ul className="team-list">
        {project.users.map((user) => (
          <li key={user.id} className="team-member">
            <p><strong>{user.name}</strong> - {user.role}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectDetails;