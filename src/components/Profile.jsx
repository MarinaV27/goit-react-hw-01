export default function Profile(){
    const userData = {
        username: "Jacques Gluke",
        tag: "jgluke",
        location: "Ocho Rios, Jamaica",
        avatar: "https://cdn-icons-png.flaticon.com/512/2922/2922506.png",
        stats: {
          followers: 5603,
          views: 4827,
          likes: 1308
        }
      };
      
    return (
        <div>
 <div>
  <img 
   src={userData.avatar}
   alt="User avatar"
  />
  <p>{userData.username}</p>
  <p>@{userData.tag}</p>
  <p>{userData.location}</p>
 </div>

 <ul>
  <li>
   <span>Followers</span>
   <span>{userData.stats.followers}</span>
  </li>
  <li>
   <span>Views</span>
   <span>{userData.stats.views}</span>
  </li>
  <li>
   <span>Likes</span>
   <span>{userData.stats.likes}</span>
  </li>
 </ul>
</div>

    )
}