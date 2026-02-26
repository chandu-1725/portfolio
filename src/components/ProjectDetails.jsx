import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const projectData = {
    "complaint-system": {
      title: "Complaint Management System",
      description:
        "Full-stack complaint tracking app built using React and Firebase.",
      tech: "React, Firebase"
    },
    "churn-analysis": {
      title: "Customer Churn Analysis",
      description:
        "Machine learning model predicting customer churn using real datasets.",
      tech: "Python, Pandas, Scikit-Learn"
    },
    "restaurant-system": {
      title: "Restaurant Recommendation System",
      description:
        "Content-based filtering system recommending restaurants based on user preferences.",
      tech: "Machine Learning"
    }
  };

  const project = projectData[id];

  if (!project) return <h2 style={{ textAlign: "center" }}>Project Not Found</h2>;

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        padding: "80px 20px",
        maxWidth: "800px",
        margin: "0 auto",
        textAlign: "center"
      }}
    >
      {/* 🔙 Back Button */}
      <button
        onClick={() => navigate("/projects")}
        style={{
          background: "none",
          border: "none",
          color: "#38bdf8",
          fontSize: "18px",
          cursor: "pointer",
          marginBottom: "30px",
          display: "flex",
          alignItems: "center",
          gap: "8px"
        }}
      >
        ← Back to Projects
      </button>

      <h2 style={{ fontSize: "32px" }}>{project.title}</h2>

      <p style={{ marginTop: "20px", opacity: 0.8 }}>
        {project.description}
      </p>

      <p style={{ marginTop: "15px", fontWeight: "bold" }}>
        Tech Used: {project.tech}
      </p>
    </motion.div>
  );
}

export default ProjectDetails;