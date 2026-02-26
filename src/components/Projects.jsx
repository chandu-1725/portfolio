import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Projects() {
  const projects = [
    {
      id: "complaint-system",
      title: "Complaint Management System",
      description: "Track and manage complaints efficiently."
    },
    {
      id: "churn-analysis",
      title: "Customer Churn Analysis",
      description: "Machine learning model to predict customer churn."
    },
    {
      id: "restaurant-system",
      title: "Restaurant Recommendation System",
      description: "Content-based restaurant recommendation system."
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      style={{
        padding: "80px 20px",
        textAlign: "center"
      }}
    >
      <h2 style={{ fontSize: "30px", marginBottom: "40px" }}>
        Projects
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "25px",
          flexWrap: "wrap"
        }}
      >
        {projects.map((project) => (
          <Link
            key={project.id}
            to={`/projects/${project.id}`}
            style={{
              textDecoration: "none",
              color: "white",
              width: "100%",
              maxWidth: "280px"
            }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 250 }}
              style={{
                background: "rgba(255,255,255,0.05)",
                padding: "25px",
                borderRadius: "15px",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.1)",
                boxShadow: "0 8px 25px rgba(0,0,0,0.4)"
              }}
            >
              <h3>{project.title}</h3>
              <p style={{ marginTop: "10px", opacity: 0.8 }}>
                {project.description}
              </p>
            </motion.div>
          </Link>
        ))}
      </div>
    </motion.section>
  );
}

export default Projects;