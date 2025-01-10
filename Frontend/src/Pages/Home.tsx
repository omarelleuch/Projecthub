import { Link } from 'react-router-dom';
import './Home.css'; // Import the CSS file

export function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to ProjectHub</h1>
      <p className="home-description">
        Your central hub for project management. Track projects, manage tasks, and
        collaborate with your team - all in one place press the button bellow to start.
      </p>
      <div className="features-grid">
        {[
          {
            title: 'Project Tracking',
            description:
              'Keep track of all your projects in one place with detailed progress monitoring.',
          },
          {
            title: 'Task Management',
            description:
              'Break down projects into manageable tasks and track their completion.',
          },
          {
            title: 'Progress Analytics',
            description:
              'Get insights into project progress with visual analytics and reports.',
          },
        ].map((feature, index) => (
          <div key={index} className="feature-card">
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
      <Link to="/projects" className="get-started-button">
        Get Started
      </Link>
    </div>
  );
}