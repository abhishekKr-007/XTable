import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const tableData = [
    { date: "2022-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-02", views: 150, article: "Article 2" },
    { date: "2023-09-02", views: 120, article: "Article 3" },
    { date: "2020-09-03", views: 200, article: "Article 4" },
  ];
  const [data, setData] = useState(tableData);
  const sortDate = () => {
    const sortedData = [...data].sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      if (dateA < dateB) return 1;
      if (dateB < dateA) return -1;
      return b.views - a.views;
    });
    setData(sortedData);
  };

  const sortView = () => {
    const sortedData = [...data].sort((a, b) => {
      if (a.views < b.views) return 1;
      if (b.views < a.views) return -1;
      return new Date(b.date) - new Date(a.date);
    });
    setData(sortedData);
  };

  return (
    <div>
      <h1>Date and Views Table</h1>
      <button onClick={sortDate}>Sort By Date</button>
      <button onClick={sortView}>Sort By Views</button>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Views</th>
            <th>Article</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.date}</td>
              <td>{item.views}</td>
              <td>{item.article}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
