export const getAllProducts = async () => {
  return fetch("http://localhost:3001/products")
    .then((res) => res.json())
    .catch((err) => console.log(err));
};
export const addProduct = async (product) => {
  return fetch("http://localhost:3001/products", {
    method: "POST",
    body: JSON.stringify(product),
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "same-origin",
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};
export const deleteProductById = async (productId) => {
  return fetch("http://localhost:3001/products/" + productId, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "same-origin",
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};


export const getAllPosts = async () => {
  return fetch("http://localhost:3001/posts")
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

export const addPost = async (post) => {
  return fetch("http://localhost:3001/posts", {
    method: "POST",
    body: JSON.stringify(post),
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "same-origin",
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

