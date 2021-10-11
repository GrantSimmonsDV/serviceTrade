import React, {useEffect, useState} from 'react'
import axios from 'axios';


export default function ChatList(props) {
    const [username, setUsername] = useState([]);

    useEffect(() => {
        function getChatsList() {
        if(props.user_id_1 === props.userId) { 
            let otherUser = props.user_id_2
            axios.get(`/chat/user/${otherUser}`).then((res) => {
                setUsername(res.data);
                console.log(res.data)
            })
        }else if(props.user_id_2 === props.userId) {
            let otherUser = props.user_id_1
            axios.get(`/chat/user/${otherUser}`).then((res) => {
                setUsername(res.data);
                console.log(res.data)
            })
        } else if(props.user_id_1 === props.userId && props.user_id_2 === props.userId){
            let otherUser = "Error: Cannot chat with yourself"
            axios.get(`/chat/user/${otherUser}`).then((res) => {
                setUsername(res.data);
                console.log(res.data)
            })
            }
        }
        return () => {
            getChatsList()}
    },[props.userId]);

    return (
        <div className="ChatList">
           <p>Chat with {username[0].full_name}</p> 

        </div>
    )
}
