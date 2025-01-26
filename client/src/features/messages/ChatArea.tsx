

function ChatArea() {

     return (
          <div className="flex-1 flex flex-col bg-white">
               <div className="bg-gray-100 p-4 border-b border-gray-200 flex justify-between items-center">
                    <h2 className="text-xl font-semibold">#Name of the channwl</h2>
                    <div className="flex space-x-2">
                         {/* {channel.hasVoice && ( */}
                              <button
                                   // onClick={onVoiceToggle}
                                   className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                              >
                                   Join Voice
                              </button>
                         {/* )} */}
                         {/* {!channel.isGlobal && ( */}
                              <button
                                   // onClick={generateInviteLink}
                                   className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                              >
                                   Generate Invite Link
                              </button>
                         {/* )} */}
                    </div>
               </div>
               {/* {inviteLink && ( */}
                    <div className="bg-blue-100 p-4 flex items-center justify-between">
                         <span className="text-blue-800">Invite Link: "http:kalp.com"</span>
                         <button
                              onClick={() => {
                                   // navigator.clipboard.writeText(inviteLink)
                                   alert('Invite link copied to clipboard!')
                              }}
                              className="px-2 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm"
                         >
                              Copy
                         </button>
                    </div>
               {/* )} */}
               <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {/* {messages.map((message) => (
                         <div
                              key={message.id}
                              className={`max-w-xs mx-4 p-3 rounded-lg ${message.sender === 'You'
                                        ? 'ml-auto bg-blue-500 text-white'
                                        : 'bg-gray-200 text-gray-800'
                                   }`}
                         >
                              <p className="font-semibold">{message.sender}</p>
                              <p>{message.content}</p>
                              <p className="text-xs mt-1 text-gray-300">
                                   {message.timestamp.toLocaleTimeString()}
                              </p>
                         </div>
                    ))} */}
               </div>
               <form className="p-4 border-t border-gray-200">
                    <div className="flex space-x-2">
                         <input
                              type="text"
                              value="Kalp"
                              // onChange={(e) => setNewMessage(e.target.value)}
                              placeholder="Type your message..."
                              className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                         />
                         <button
                              type="submit"
                              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                         >
                              Send
                         </button>
                    </div>
               </form>
          </div>
     )
}

export default ChatArea