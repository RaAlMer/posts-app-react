import "./Post.css";

export function Post({ id, img, title, description, setPostsInsideComponent }){
    const handleDelete = () => {
        setPostsInsideComponent((previousPost) => {
            return previousPost.filter((post) => post.id !== id);
        })
    }
    
    return(
        <div className="post_container">
            <img className="img" src={img} alt={img} />
            <div className="post_info">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
            <button onClick={handleDelete} className="delBtn">Delete</button>
        </div>
    )
}