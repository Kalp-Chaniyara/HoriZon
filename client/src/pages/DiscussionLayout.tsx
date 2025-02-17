import ChannelSidebarLayout from "../features/channels/ChannelSidebarLayout"
import ChatArea from "../features/messages/ChatArea"

function DiscussionLayout() {
     return (
          <div className="flex h-screen bg-gray-100">
               <ChannelSidebarLayout />
               <div className="flex-1 flex flex-col">
                    <ChatArea />
               </div>
          </div>
     )
}

export default DiscussionLayout