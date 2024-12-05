import { useContext } from "react";
import "./stories.css"
import { AuthContext } from "../../context/authContext"

const Stories = () => {

  const {currentUser} = useContext(AuthContext)

  //TEMPORARY
  const stories = [
    {
      id: 1,
      name: "John Doe",
      img: "https://images.pexels.com/photos/26087617/pexels-photo-26087617/free-photo-of-the-hike-to-hoodoos-in-banff-national-park.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",
    },
    {
      id: 2,
      name: "John Doe",
      img: "https://images.pexels.com/photos/12918996/pexels-photo-12918996.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",
    },
    {
      id: 3,
      name: "John Doe",
      img: "https://images.pexels.com/photos/18177344/pexels-photo-18177344/free-photo-of-a-table-with-autumnal-decorations.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",
    },
    {
      id: 4,
      name: "John Doe",
      img: "https://images.pexels.com/photos/26347464/pexels-photo-26347464/free-photo-of-side-view-of-a-woman-in-a-striped-dress.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",
    },
  ];

  return (
    <div className="stories">
      <div className="story">
          <img src={currentUser.profilePic} alt="" />
          <span>{currentUser.name}</span>
          <button>+</button>
        </div>
      {stories.map(story=>(
        <div className="story" key={story.id}>
          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  )
}

export default Stories