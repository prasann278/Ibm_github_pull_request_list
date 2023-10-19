import React, { useState } from "react";
import axios from "axios";
import "./PullRequestList.css";

function PullRequestList() {
  const [repoUrl, setRepoUrl] = useState("");
  const [pullRequests, setPullRequests] = useState([]);
  const [error, setError] = useState(null);

  const fetchPullRequests = async () => {
    try {
      setError(null);
      const response = await axios.get(
        // as url is same for each and every request
        `https://api.github.com/repos/${repoUrl}/pulls`
      );
      setPullRequests(response.data);
      console.log(response.data);
    } catch (error) {
      setError("Fetching pull requests. Please check the repository details.");
    }
  };

  return (
    <div className="main_Container">
      <h1 className="title">Github's Pull Requests Viewer</h1>
      {/* need to enter owner and repo name owner/user in the input box */}
      <div className="input_Container">
        <input
          className="input"
          type="text"
          placeholder="eg: facebook/react"
          value={repoUrl}
          onChange={(e) => setRepoUrl(e.target.value)}
        />
        <button className="button" onClick={fetchPullRequests}>
          Fetch
        </button>
      </div>
      {/* if owner/repo is not correct it will show you error 
      with status code or directly show you reponse  */}
      {error ? (
        <p style={{ color: "red" }}>Error: {error}</p>
      ) : (
        <>
          {pullRequests.map((pull) => (
            <div className="card" key={pull.id}>
              <h2>{pull.title}</h2>
              <p>Author :{pull.user.login}</p>
              <p>Comments: {pull.comments}</p>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default PullRequestList;
