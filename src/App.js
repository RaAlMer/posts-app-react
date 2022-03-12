import { useState } from 'react';
import './App.css';
import { Post } from "./components/Post/Post";
import { AddPost } from "./components/AddPost/AddPost";

const posts_db = [
  {
    id: "1",
    img: "https://media.istockphoto.com/photos/arabic-and-middle-eastern-dinner-table-hummus-tabbouleh-salad-salad-picture-id1175505781?k=20&m=1175505781&s=612x612&w=0&h=STomby2lCtcvpl_hxK6RhknQQWrkvpkHcoDLD4zttFk=",
    title: "Food 1",
    content: "This is a content 1",
    description: "Very tasty",
  },
  {
    id: "2",
    img: "https://www.thespruceeats.com/thmb/z0Qw0MV9ySz7HvZM10_xCb0U5hU=/2738x1825/filters:no_upscale()/natto-japanese-fermented-soy-beans-with-steamed-rice-2030895-steps-05-af24a62a1e164a029321966dc05fd8b2.JPG",
    title: "Food 2",
    content: "This is a content 2",
    description: "Not so tasty",
  },
]

function App() {
  // making our data reactive with useState
  const [posts, setPosts] = useState(posts_db);
  return (
    <div className='container'>
      {/* always make the difference between the name inside the component the variable name that you are passing */}
      <AddPost setPostsInsideComponent={setPosts} />
      {/* list of posts using the map operation */}
      {posts.map((post) => {
      // return a Post component for each post object
      return (
          <Post 
            key={post.id}
            {...post}
            setPostsInsideComponent = {setPosts}
          />
      );
    })}
    </div>
  )
}

export default App;
