import "./Post.css";
import { useState } from 'react';
//import { v4 } from "uuid";

export function Post({ id, img, title, description, content, setPostsInsideComponent }){
    const [show, setShow] = useState();
    const [isEdit, setIsEdit] = useState();
    // Reactive values for the input
    const [editImg, setEditImg] = useState(img);
    const [editTitle, setEditTitle] = useState(title);
    const [editDescription, setEditDescription] = useState(description);
    const [editContent, setEditContent] = useState(content);
    
    const handleDelete = () => {
        setPostsInsideComponent((previousPost) => {
            return previousPost.filter((post) => post.id !== id);
        })
    }

    const handleShow = () => {
        setShow((previousShow) => {
            return !previousShow;
        });
    }

    const handleEdit = () => {
        setIsEdit((previousIsEdit) => {
            return !previousIsEdit;
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setPostsInsideComponent((previousPosts) => {
          return [
            {
              id,
              img: editImg,
              title: editTitle,
              description: editDescription,
            },
            ...previousPosts.filter((post) => post.id !== id),
          ];
        });
        handleEdit();

        //Another way of doing it creating a new ID
        /* e.preventDefault();
        setPostsInsideComponent((previousPosts) => {
          return [
            {
              id: v4(),
              img: editImg,
              title: editTitle,
              description: editDescription,
            },
            ...previousPosts,
          ];
        });
        handleDelete(); */
      };
    
    return(
        <div className="post_container">
            {isEdit ? (
                <>
                    {/* Form for editing the posts */}
                    <form onSubmit={handleSubmit} className="post_form">
                        <input placeholder="Introduce an image link" value={editImg} onChange={(e) => setEditImg(e.target.value)} />
                        <input placeholder="Introduce a title" value={editTitle} onChange={(e) => setEditTitle(e.target.value)} />
                        <input placeholder="Introduce a description" value={editDescription} onChange={(e) => setEditDescription(e.target.value)} />
                        <input placeholder="Introduce a content" value={editContent} onChange={(e) => setEditContent(e.target.value)} />
                        <button type="submit" className="rmBtn">Save</button>
                        <button onClick={handleEdit} className="delBtn">Cancel</button>
                    </form>
                </>
                ) : (
                <>
                    <img className="img" src={img} alt={img} />
                    <h2>{title}</h2>
                    <p>{description}</p>
                    {show && (
                        <>
                            <hr/>
                            <p>{content}</p>
                            <hr/>
                        </>
                    )}
                    <div className="btns">
                        <button onClick={handleDelete} className="delBtn">Delete</button>
                        <button onClick={handleShow} className="rmBtn">{show ? "Read less" : "Read more"}</button>
                        <button onClick={handleEdit} className="editBtn">Edit</button>
                    </div>
                </>
                )
            }
        </div>
    )
}