import './App.css';
import {profileData} from './Helper';
import {useState} from "react";

const App = () => {

  const [postVisible, setPostVisible] = useState(true);

  const togglePostVisibility = () => {
    setPostVisible(!postVisible);
  }

  return (
    <div className="interface">
      <div className="header">
        <div className="leftpart">
          <img src="https://www.terriblytinytales.com/img/home/ttt.svg" alt="logo"></img>
          <p>STORIES</p>
        </div>
        <div className="rightpart">
          <button style={{cursor:"pointer"}}>Courses</button>
        </div>
      </div>
      <div className="middlesection">
        <img src={profileData.bgImage} alt="background" className="bgImage"></img>
        <div className="upper">
          <img src={profileData.profileImage} alt="profile" className="profileImage"></img>
          <div className="impdata">
            <div className="name">
              <p>{profileData.name}</p>
              <img src="https://img.icons8.com/fluency/48/test-account--v1.png" alt="male" style={{width:"20px", height:"20px"}}></img>
              <img src="https://img.icons8.com/color/48/000000/tiktok-verified-account.png" alt="verified" style={{width:"20px", height:"20px"}}></img>
            </div>
            <div className="follow">
              <div className="followers">
                <p>{profileData.followers}</p>
                <p>Followers</p>
              </div>
              <div className="following">
                <p>{profileData.following}</p>
                <p>Following</p>
              </div>
            </div>
          </div>
        </div>
        <div className="middle">
          <p>{profileData.bio}</p>
          <p><a href={profileData.external}>{profileData.external}</a></p>
          <div className="icons">
            <img width="20" height="20" src="https://img.icons8.com/plasticine/100/star--v1.png" alt="star--v1"/>
            <p>{profileData.star}</p>
            <img width="20" height="20" src="https://img.icons8.com/emoji/48/thumbs-up.png" alt="thumbs-up"/>
            <p>{profileData.likes}</p>
            <img width="20" height="20" src="https://img.icons8.com/external-glyph-silhouettes-icons-papa-vector/78/external-Seen-interface-glyph-silhouettes-icons-papa-vector.png" alt="seen"/>
            <p>{profileData.seen}</p>
            <img width="20" height="20" src="https://img.icons8.com/fluency/48/like.png" alt="like"/>
            <p>{profileData.heart}</p>
          </div>
        </div>
      </div>
        <div className="lower" onClick={togglePostVisibility}>
          <p>{profileData.nofposts}</p>
        </div>
        {postVisible && (
          <>
            {profileData.posts.map(post => (
              <div key={post.id} className="lowersection">
                <div className="upperportion">
                  <p className="title">{post.title}</p>
                  <img width="20" height="20" src="https://img.icons8.com/emoji/48/thumbs-up.png" alt="thumbs-up"/>
                </div>
                <p className="content">{post.text}</p>
                <div className="lowerportion">
                  <div className="leftpart">
                    <p>{post.signing}</p>
                  </div>
                  <div className="rightpart">
                    <p>{post.date}</p>
                    <p>~</p>
                    <p>{post.read}</p>
                    <p>~</p>
                    <p>{post.views}</p>
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
    </div>
  )
}

export default App;
