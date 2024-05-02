import Profile from "./Profile"
import userData from "../userData.json"
import friends from "../friends.json"
import FriendList from "./FriendList"
import FriendListItem from "./FriendListItem"

export default function App() {
    
   return (
    <>
    <Profile 
    name={userData.username}
    tag={userData.tag}
    location={userData.location}
    image={userData.avatar}
    stats={userData.stats}
    />
    <FriendList friends={friends} />
    <FriendListItem />

    </>
   )
}