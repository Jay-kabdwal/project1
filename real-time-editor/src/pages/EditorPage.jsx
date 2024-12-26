import React, { useEffect, useRef, useState } from "react";
import Client from "../component/Client";
import Editor from "../component/Editor";
import { initsocket } from "../../../socket";
import { useLocation } from 'react-router-dom';

const EditorPage = () => {

    const socketRef = useRef(null);
    const location = useLocation();
    useEffect(() => {
        const init = async () => {
            socketRef.current = await initsocket();
            socketRef.current.emit(ACTIONS.JOIN,{
                roomId,
                username: location.state?.username,
            });
        };
        init();
    },[]);

    const [clients, setclients] = useState([
        { socketId: 1, username: 'rakesh k' },
        { socketId: 2, username: 'jay k' },
        { sockerId: 3, username:'helloworld'}
    ]);

    return (
        <div className="mainWrap">
            <div className="aside">
                <div className="asideInner">
                    <div className="logo">
                        <img className="logoImage"
                            src="/png.png"
                            alt="" />
                    </div>
                    <div>
                        <h3>connected</h3>
                        <div className="clientList">
                            {clients.map((client) => (
                                <Client
                                    key={client.socketId}
                                    username={client.username}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <button className="btn copyBtn">copy room id</button>
                <button className="btn leaveBtn">leave room</button>
            </div>
            <div className="editorWrap">
                <Editor/>
            </div>
        </div>
    )
}

export default EditorPage;