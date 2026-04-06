import React, { useState, useEffect } from 'react'
import "./Feed.css";
import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import InputOption from './InputOption';
import Post from './Post.js';
import { db } from "../firebase.js";
import { collection, addDoc, onSnapshot, serverTimestamp, query, orderBy } from "firebase/firestore";
import { useSelector } from 'react-redux';
import { selectUser } from '../features/users/userSlice';
import FlipMove from 'react-flip-move';

const Feed = () => {

// Import user from the Redux store
const user= useSelector(selectUser);

// Create a state for the input field and posts
const [input, setInput] = useState('');

const [posts, setPosts] = useState([]);

//Create realtime listener for Firebase so that if posts change it updates in real time
useEffect(() => {
    const postsRef = collection(db, "posts");

    const q = query(postsRef, orderBy("timestamp", "desc"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
        setPosts(snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
        })));
    });


 // Cleanup the listener when the component unmounts
    return () => unsubscribe();
}, []);

// Prevent page reload on post submission and add the post to Firebase with server timestamp for global time reference
const sendPost = async (e) => {
    e.preventDefault();
    try {
        await addDoc(collection(db, 'posts'), {
            name: user.displayName,
            description: user.email,
            message: input,
            photoUrl: user.photoUrl || '',
            timestamp: serverTimestamp(),
        });
        setInput(''); // Clear the input after sending the post
    } catch (error) {
        console.error("Error adding document: ", error);
    }
}
  return (
    <div className="feed">
<div className="feed__inputContainer">
    <div className="feed__input">
        <CreateIcon />
        <form>
            <input type="text" value={input} onChange={e => setInput(e.target.value)}/>
            <button onClick={sendPost} type="submit">Post</button>
        </form>
        </div>
        <div className="feed__inputOptions">
           <InputOption Icon={ImageIcon} title="Photo" color="#70B5f9"/>
           <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E"/>
           <InputOption Icon={EventNoteIcon} title="Event" color="C0CBCD"/>
           <InputOption Icon={CalendarViewDayIcon} title="Write article" color="7FC15E"/>
        </div>
</div>
<FlipMove>
{posts.map(({ id, data:{ name, description, message, photoUrl }}) => (
    <Post
    key={id}
    name={name}
    description={description}
    message={message}
    photoUrl={photoUrl}
    />
))}
</FlipMove>
    </div>
  )
}

export default Feed;