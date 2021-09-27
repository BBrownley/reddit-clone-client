import axios from "axios";

let storedToken = null;

const setToken = token => {
  storedToken = token;
};

// const getAllBookmarks = async () => {
//   const config = {
//     headers: {
//       "Content-Type": "application/json",
//       "Access-Control-Allow-Origin": "*",
//       Authorization: storedToken
//     }
//   };

//   const req = await axios.get(`http://localhost:5000/bookmarks/`, config);
//   return req.data;
//   // return req.data.map(bookmark => {
//   //   return {
//   //     ...bookmark,
//   //     type: "bookmark"
//   //   };
//   // });
// };

const getAllBookmarks = async () => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      Authorization: storedToken
    }
  };

  const req = await axios.get(`http://localhost:5000/bookmarks/`, config);
  return req.data.map(bookmark => {
    return {
      ...bookmark,
      type: "bookmark"
    };
  });
};

const getBookmarksByPostId = async postId => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      Authorization: storedToken
    }
  };

  console.log(config);

  const req = await axios.get(
    `http://localhost:5000/bookmarks/post/${postId}`,
    config
  );
  return req.data;
};

const addBookmark = async commentId => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      Authorization: storedToken
    }
  };

  const body = { commentId };

  const req = await axios.post("http://localhost:5000/bookmarks", body, config);
  return req.data;
};

const deleteBookmark = commentId => {
  const headers = {
    Authorization: storedToken
  };

  axios.delete("http://localhost:5000/bookmarks", {
    data: {
      commentId
    },
    headers
  });
};

const bookmarkService = {
  setToken,
  getAllBookmarks,
  getBookmarksByPostId,
  addBookmark,
  deleteBookmark
};

export default bookmarkService;
