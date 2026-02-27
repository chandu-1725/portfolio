import { motion } from "framer-motion";

function Skills() {
    const skills = [
        { name: "React", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "Python", level: 75 },
        { name: "SQL", level: 70 },
        { name: "Machine Learning", level: 65 }
    ];

    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
                padding: "80px 20px",
                textAlign: "center"
            }}
        >
            <h2
                style={{
                    fontSize: "32px",
                    marginBottom: "50px",
                    background: "linear-gradient(90deg, #38bdf8, #a78bfa)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent"
                }}
            >
                My Technical Skills
            </h2>

            <div
                style={{
                    maxWidth: "700px",
                    margin: "0 auto",
                    display: "flex",
                    flexDirection: "column",
                    gap: "30px"
                }}
            >
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        style={{
                            background: "rgba(255,255,255,0.05)",
                            padding: "20px",
                            borderRadius: "15px",
                            border: "1px solid rgba(255,255,255,0.1)",
                            backdropFilter: "blur(10px)"
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                marginBottom: "10px"
                            }}
                        >
                            <span style={{ fontWeight: "500" }}>{skill.name}</span>
                            <span>{skill.level}%</span>
                        </div>

                        <div
                            style={{
                                width: "100%",
                                height: "10px",
                                background: "rgba(255,255,255,0.1)",
                                borderRadius: "5px",
                                overflow: "hidden"
                            }}
                        >
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${skill.level}%` }}
                                transition={{ duration: 1 }}
                                style={{
                                    height: "100%",
                                    background:
                                        "linear-gradient(90deg, #38bdf8, #a78bfa)"
                                }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </motion.section>
    );
}

export default Skills;