import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

function Skills() {

    const skillData = [
        { name: "React", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "Python", level: 75 },
        { name: "SQL", level: 70 },
    ];

    return (
        <div style={{ padding: "80px 20px", textAlign: "center" }}>
            <h2 style={{ fontSize: "30px" }}>Skills Analytics</h2>

            <div style={{ width: "100%", height: 400, marginTop: "40px" }}>
                <ResponsiveContainer>
                    <BarChart data={skillData}>
                        <XAxis dataKey="name" stroke="white" />
                        <YAxis stroke="white" />
                        <Tooltip />
                        <Bar dataKey="level" fill="#38bdf8" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}

export default Skills;