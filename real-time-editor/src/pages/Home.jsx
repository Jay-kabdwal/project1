import React, { useState } from "react";
import {v4 as uuid} from 'uuid';
import toast from 'react-hot-toast';
import { useNavigate } from "react-router-dom";

const Home = () => {

    const nevigate =useNavigate();
    const[roomId, setRoomId] = useState('');
    const[username, setUsername] = useState('');
    


    const createNewRoom = (e) => {
        e.preventDefault();
        const id =uuid();
        setRoomId(id);
        toast.success("New Room Created");

    };

    const joinRoom = () =>{
        if(!roomId || !username) {
            toast.error("ROOM ID & USERNAME REQUIRED");
            return;
        }

        // redirect
        nevigate(`/editor/${roomId}`,
            {
                state:{
                    username,
                },
            }
        )
    }

    const handleInputEnter = (e) =>{
        if(e.code === 'Enter'){
            joinRoom();
        }
    }

    return (
        <div className="homePageWrapper">
            <div className="formWrapper">
                <img className= "homePagelogo" src="" alt="" />
                <h4 className="mainLabel"> Paste invitation room id</h4>
                <div className="inputGroup">

                    <input type="text" 
                    className="inputBox" 
                    placeholder="ROOM ID"
                    onChange={(e) => setRoomId(e.target.value)}
                    value={roomId} 
                    onKeyUp={handleInputEnter}
                    />

                    <input type="text" 
                    className="inputBox" 
                    placeholder="USER NAME" 
                    onChange={(e) => setUsername(e.target.value)}
                    value={username} 
                    onKeyUp={handleInputEnter}
                    />

                    <button className="btn joinBtn" onClick={joinRoom}>JOIN</button>

                    <span className="creatInfo">
                        If you dont have an invite then create &nbsp;
                        <a onClick={createNewRoom} href="" className="createNewBtn">New Room</a>
                    </span>
                </div>
            </div>
            <footer className="footer">
                <h4>built by &nbsp; <a href="https://github.com/Jay-kabdwal">Jay Kabdwal</a></h4>
            </footer>
        </div>
    )
}

export default Home;