import { useEffect, useState } from "react";
import axios from "axios";

function GitHubStats() {
    const [data, setData] = useState(null);

    useEffect(() => {
        axios
            .get("https://api.github.com/users/chandu-1725")
            .then((res) => setData(res.data))
            .catch((err) => console.log(err));
    }, []);

    if (!data) return <p style={{ textAlign: "center" }}>Loading GitHub Data...</p>;

    return (
        <div style={{ padding: "80px 20px", textAlign: "center" }}>
            <h2 style={{ fontSize: "30px" }}>GitHub Stats</h2>

            <div
                style={{
                    marginTop: "40px",
                    display: "flex",
                    justifyContent: "center",
                    gap: "40px",
                    flexWrap: "wrap"
                }}
            >
                <div style={cardStyle}>
                    <h3>{data.public_repos}</h3>
                    <p>Repositories</p>
                </div>

                <div style={cardStyle}>
                    <h3>{data.followers}</h3>
                    <p>Followers</p>
                </div>

                <div style={cardStyle}>
                    <h3>{data.following}</h3>
                    <p>Following</p>
                </div>
            </div>
        </div>
    );
}

const cardStyle = {
    backgroundColor: "#1e293b",
    padding: "20px 40px",
    borderRadius: "12px",
    minWidth: "150px"
};

export default GitHubStats;