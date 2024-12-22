import React, { useState } from "react";
import {v4 as uuid} from 'uuid';
import toast from 'react-hot-toast'

const Home = () => {

    const[roomId, setRoomId] = useState('');


    const createNewRoom = (e) => {
        e.preventDefault();
        const id =uuid();
        console.log(id);
        setRoomId(id);
        toast.success("New Room Created");

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
                    value={roomId} />

                    <input type="text" 
                    className="inputBox" 
                    placeholder="USER NAME" />

                    <button className="btn joinBtn">JOIN</button>

                    <span className="creatInfo">
                        If you dont have an invite then create &nbsp;
                        <a onClick={createNewRoom} href="" className="createNewBtn">New Room</a>
                    </span>
                </div>
            </div>
            <footer className="footer">
                <h4>buit with love by &nbsp; <a href="">github</a></h4>
            </footer>
        </div>
    )
}

export default Home;