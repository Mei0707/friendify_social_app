import { useContext, useState } from "react";
import "./reviews.css";
import { AuthContext } from "../../context/authContext";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
import moment from "moment";


const Reviews = ({ imdbID }) => {
  const [desc, setDesc] = useState("");
  const { currentUser } = useContext(AuthContext);

  // const { isLoading, error, data } = useQuery(["comments"], () =>
  //   makeRequest.get("/comments?postId=" + postId).then((res) => {
  //     return res.data;
  //   })
  // );
  const { isLoading, error, data } = useQuery({
    queryKey: ['reviews'],
    queryFn: () =>
      makeRequest.get("/reviews?imdbID=" + imdbID).then(res => res.data),
  });

  const queryClient = useQueryClient();


  const mutationFunc = (newReview) => {
    return makeRequest.post("/reviews", newReview);
  };

  const mutation = useMutation({
    mutationFn: mutationFunc,
    onSuccess: () => {
      queryClient.invalidateQueries(["reviews"]);
    }
  });
  

  const handleClick = async (e) => {
    e.preventDefault();
    mutation.mutate({ desc, imdbID });
    setDesc("");
  };

  return (
    <div className="reviews">
      <div className="write">
        <img src={currentUser.profilePic} alt="" />
        <input
          type="text"
          placeholder="write a review"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <button onClick={handleClick}>Send</button>
      </div>
      {error
        ? "Something went wrong"
        : isLoading
        ? "loading"
        : data.map((review) => (
            <div className="review">
              <img src={review.profilePic} alt="" />
              <div className="info">
                <span>{review.name}</span>
                <p>{review.desc}</p>
              </div>
              <span className="date">
                {moment(review.createdAt).fromNow()}
              </span>
            </div>
          ))}
    </div>
  );
};

export default Reviews;