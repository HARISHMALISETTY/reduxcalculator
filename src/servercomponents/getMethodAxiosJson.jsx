import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";

const GetMethodAxiosJson = () => {
  const [postsData, setPostsData] = useState([]);
  useEffect(() => {
    fetchPostsData();
  });
  const fetchPostsData = () => {
    //get  data from the server and post in frontend
    try {
      axios
        .get(`http://localhost:3001/comments`)
        .then((response) => response.data)
        .then((data) => {
          setPostsData(data);
        });
    } catch (error) {
      console.log(error);
    }
  };
  const addNewCommentData = () => {
    //add the data to server and post it into frontend
    try {
      let newData = { body: "React js", postId: "2" };
      axios.post(`http://localhost:3001/comments`, newData).then((response) => {
        console.log(response);
      });
    } catch (error) {
      console.log(error);
    }
  };
  const patchPostData = (id) => {
    //modifies the selected data
    try {
      let updateBody = { body: "React js-Redux" };
      axios
        .patch(`http://localhost:3001/comments/${id}`, updateBody)
        .then((response) => {
          console.log(response);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const putPostData = (id) => {
    //removes the entire data and update with given data
    try {
      let updatePostData = {
        body: "React js-Redux-Latest",
        postId: `harish-${id}`,
      };
      axios
        .put(`http://localhost:3001/comments/${id}`, updatePostData)
        .then((response) => {
          console.log(response);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const deletePostData = (id) => {
    console.log(id);
    try {
      axios.delete(`http://localhost:3001/comments/${id}`).then((response) => {
        console.log(response);
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Axios to get the data for JSON SERVER</h1>
      <Button
        style={{ backgroundColor: "grey", border: "none" }}
        onClick={addNewCommentData}
      >
        Add a new record
      </Button>
      <br />
      <br />

      <Table striped bordered hover variant="dark" cmd>
        <thead>
          <tr>
            <th>id</th>
            <th>body</th>
            <th>postId</th>
            <th style={{ paddingLeft: "80px" }}>Operations</th>
          </tr>
        </thead>
        <tbody>
          {postsData.length > 0 ? (
            postsData.map((post) => (
              <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.body}</td>
                <td>{post.postId}</td>
                <td>
                  <button
                    onClick={() => {
                      patchPostData(`${post.id}`);
                    }}
                  >
                    PatchUpdate
                  </button>
                  <button
                    onClick={() => {
                      putPostData(`${post.id}`);
                    }}
                    style={{ marginLeft: "10px" }}
                  >
                    PutUpdate
                  </button>
                  <button
                    onClick={() => {
                      deletePostData(`${post.id}`);
                    }}
                    style={{ marginLeft: "10px" }}
                  >
                    Delete
                  </button>
                </td>
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
export default GetMethodAxiosJson;
