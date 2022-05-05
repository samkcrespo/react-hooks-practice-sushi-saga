import React, { useState } from "react";

function NewSushiForm({ addSushi }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  // const [formData, setFormData] = useState({
  //   name: "",
  //   price: "",
  //   imgUrl: "",
  // });

  function submit(e) {
    e.preventDefault();
    fetch("http://localhost:3001/sushis", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, price, img_url: imgUrl }),
    })
      .then((res) => res.json())
      .then((newSushi) => {
        addSushi(newSushi);
        setName("");
        setPrice("");
        setImgUrl("");
      });
  }
  return (
    <div>
      <h2>Add Sushi to Menu </h2>
      <form onSubmit={submit}>
        <label for="name">Name:</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          name="name"
        />
        <label for="price">Price: </label>
        <input
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          name="price"
        />
        <label for="imgUrl">Image: </label>
        <input
          value={imgUrl}
          onChange={(e) => setImgUrl(e.target.value)}
          name="imgUrl"
        />
        <input type="submit" value="Add to Menu" />
      </form>
    </div>
  );
}

export default NewSushiForm;
