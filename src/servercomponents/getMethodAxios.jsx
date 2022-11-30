import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";

const GetMethodAxios = () => {
  const [postsData, setPostsData] = useState([]);
  useEffect(() => {
    fetchPostsData();
  });
  const fetchPostsData = () => {
    try {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts`)
        .then((response) => response.data)
        .then((data) => {
          setPostsData(data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Axios to get the data for fake API</h1>
      <Table striped bordered hover variant="dark" cmd>
        <thead>
          <tr>
            <th>id</th>
            <th>userId</th>
            <th>title</th>
            <th>body</th>
          </tr>
        </thead>
        <tbody>
          {postsData.length > 0 ? (
            postsData.map((post) => (
              <tr>
                <td>{post.id}</td>
                <td>{post.userId}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4} style={{ textAlign: "center" }}>
                <h1>No data found</h1>
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};
export default GetMethodAxios;
