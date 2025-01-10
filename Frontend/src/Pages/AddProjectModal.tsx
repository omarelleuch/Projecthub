import { useState } from "react";
import './AddProjectModal.css';
import { AddProjectModalProps, Project, User } from "../types/types";

const AddProjectModal: React.FC<AddProjectModalProps> = ({ isOpen, onClose, onAddProject }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [usersInput, setUsersInput] = useState(''); // Comma-separated string of user names
  const [status, setStatus] = useState('Not Started');
  const [dueDate, setDueDate] = useState('');

  // Explicitly type the event parameter
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Convert comma-separated user names into User objects
    const users: User[] = usersInput.split(',').map((name, index) => ({
      id: index + 1, // Generate a unique ID for each user
      name: name.trim(),
      role: 'Contributor', // Default role
    }));

    // Create a new project object
    const newProject: Project = {
      id: Date.now(), // Use a timestamp as a unique ID
      title,
      description,
      status,
      dueDate,
      progress: 0, // Default progress
      users,
    };

    // Pass the new project to the parent component
    onAddProject(newProject);

    // Reset form fields and close the modal
    setTitle('');
    setDescription('');
    setUsersInput('');
    setStatus('Not Started');
    setDueDate('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Add New Project</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Title:</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Description:</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Assigned Users (comma-separated names):</label>
            <input
              type="text"
              value={usersInput}
              onChange={(e) => setUsersInput(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Status:</label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              required
            >
              <option value="Not Started">Not Started</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </div>

          <div className="form-group">
            <label>Due Date:</label>
            <input
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              required
            />
          </div>

          <div className="modal-buttons">
            <button type="button" onClick={onClose}>
              Cancel
            </button>
            <button type="submit">Add Project</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProjectModal;