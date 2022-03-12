import { useState } from "react";
import { v4 } from "uuid";
import "./AddPost.css";

export function AddPost({ setPostsInsideComponent }) {
    // reactive variables for the input values
    const [img, setImg] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

      // function to handle the form submit
      const handleSubmit = (e) => {
        e.preventDefault();
        setPostsInsideComponent((previousPosts) => {
          return [
            {
              id: v4(),
              img,
              title,
              description,
            },
            ...previousPosts,
          ];
        });
      };

    return (
        <form onSubmit={handleSubmit} className="post_form">
            {/* each input need a value(reactive/useState) and onChange event */}
            <input placeholder="Introduce an image link" value={img} onChange={(e) => setImg(e.target.value)} />
            <input placeholder="Introduce a title" value={title} onChange={(e) => setTitle(e.target.value)} />
            <input placeholder="Introduce a description" value={description} onChange={(e) => setDescription(e.target.value)} />
            {/* submit button only active if all inputs are filled */}
            <button disabled={!(img && title && description)} type="submit">Create post</button>
        </form>
    );
}