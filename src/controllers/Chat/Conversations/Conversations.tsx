import { IoAddOutline, IoChevronBack } from "react-icons/io5";
import { IconButton } from "../../../components";

const conversations = [
    {
        userId:1,
        conversation:{
            id:2,
            conversationUsers:[
                {
                    id:1,
                    name:"mo",
                    image:"https://cdn1.iconfinder.com/data/icons/basic-ui-set-v5-user-outline/64/Account_profile_user_avatar_rounded-512.png"
                },
                {
                    id:3,
                    name:"Jhon Bumi",
                    image:"https://cdn1.iconfinder.com/data/icons/basic-ui-set-v5-user-outline/64/Account_profile_user_avatar_rounded-512.png"
                },
            ],
            messages:[{id:4, messageText:'This is a Message'}]
        }
    }
]



export default function Conversations() {
    return (
        <div className="fixed top-0 bottom-0 left-0 right-0 flex flex-col bg-level1 p-5 md:bottom-[unset] md:left-[unset] md:top-[76px] md:right-4 md:rounded-xl md:shadow-sm md:w-96 md:h-[540px]">
            <div className="flex items-center justify-between">
                <IconButton>
                    <IoChevronBack/>
                </IconButton>
                <p className="text-lg">Messages</p>
                <IconButton>
                    <IoAddOutline/>
                </IconButton>
            </div>
            <ul>
                {conversations.map((conversationInfo)=>{
                    const recipient = 
                        conversationInfo.conversation.conversationUsers[0]!.id === 
                           conversationInfo.userId
                           ? conversationInfo.conversation.conversationUsers[1]
                           : conversationInfo.conversation.conversationUsers[0];

                    return(
                        <li key={conversationInfo.conversation.id}>
                            <button>
                                <img
                                    alt="avatar image"
                                    src={recipient?.image}
                                    className="h-12 w-12 rounded-full"
                                />
                                <div className=" flex flex-col space-y-2">
                                    <p>{recipient?.name}</p>
                                    <p className="text-sm text-tertiartyText">
                                        {conversationInfo.conversation.messages[0]?.messageText}
                                    </p>
                                </div>
                            </button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}