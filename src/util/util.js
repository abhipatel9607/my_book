const getPostRequest = (post, userData) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/JSON");
  const requestOption = {
    method: "POST",
    headers: myHeaders,
    body: userData,
    redirect: "follow",
  };
  fetch(`https://mybooks-an3b.onrender.com/api/user/${post}`, requestOption)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log(error));
};

module.exports = { getPostRequest };
