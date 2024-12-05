import Post from "../post/Post";
import "./posts.css";
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../axios";

const Posts = ({userId}) => {
  const { isLoading, error, data } = useQuery({
    queryKey: ['posts'],
    queryFn: () => 
      makeRequest.get("/posts?userId="+userId).then(res => res.data), 
  });
  // const { isLoading, error, data } = useQuery(["posts"], () =>
  //   makeRequest.get("/posts").then((res) => {
  //     return res.data;
  //   }));

  return (
    <div className="posts">
      {error 
        ? "Something went wrong!" 
        : isLoading 
        ? "loading" 
        : data && Array.isArray(data) // Check if data exists and is an array
        ? data.map((post) => <Post post={post} key={post.id} />)
        : "No posts available" // Fallback if data is not an array or empty
      }
      {/* {data.map((post) => (
        <Post post={post} key={post.id} />
      ))} */}
    </div>
  );
};

export default Posts;