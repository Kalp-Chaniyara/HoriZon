import { useEffect, useState } from "react";
import { useUser } from "@clerk/clerk-react";

function ChannelSidebarLayout() {

     const {user} = useUser();

     const [isModalOpen, setIsModalOpen] = useState(false);
     const [channelName, setChannelName] = useState(""); // State for channel name
     const [channelType, setChannelType] = useState("Addiction Support"); // State for channel type

     const handleSubmit = async(e:React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          console.log("Form submitted!");
          await createANewChannel(); // Call the function to create a new channel
          setIsModalOpen(false); // Close modal after submission
     };

     const createANewChannel = async () => {

          console.log("User: ", user);

          console.log("Channel Name: ", channelName);
          console.log("Channel Type: ", channelType);

          if (!user) {
               console.error("User not found!");
               return;
          }

          const channelData = {
               author: user.id,
               name: channelName,
               description: channelType,
          }

          try {
               const res = await fetch("http://localhost:3000/api/channel/create-channel",{
                    method: "POST",
                    headers: {
                         "Content-Type": "application/json",
                    },
                    body: JSON.stringify(channelData),
               })

               if(!res.ok) {
                    throw new Error("Failed to create channel!");
               }

               console.log("Channel created successfully!");

          } catch (error) {
               console.log("Error creating channel: ", error);
          }
     };

     useEffect(() => {
          document.body.style.overflow = isModalOpen ? "hidden" : "auto";
     }, [isModalOpen]);

     return (
          <div className="w-64 bg-blue-600 text-white p-4 flex flex-col h-full">
               <h2 className="text-2xl font-bold mb-4">Channels</h2>
               {/* <form onSubmit={handleSearch} className="mb-4">
                    <div className="relative">
                         <Input
                              type="text"
                              placeholder="Search channels..."
                              value={searchQuery}
                              onChange={(e) => setSearchQuery(e.target.value)}
                              className="w-full pl-10 bg-blue-700 text-white placeholder-blue-300 border-blue-500"
                         />
                         <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-300" size={18} />
                    </div>
               </form> */}
               <div className="flex-grow overflow-y-auto space-y-4">
                    <div>
                         <h3 className="text-lg font-semibold mb-2">Addiction Support</h3>
                         {/* <ChannelList
                              channels={channels.filter(c => c.type === 'addiction' && (c.isGlobal || c.isPublic))}
                              activeChannel={activeChannel}
                              setActiveChannel={setActiveChannel}
                              type="addiction"
                              limit={5}
                         /> */}
                    </div>

                    <div>
                         <h3 className="text-lg font-semibold mb-2">Habit Building</h3>
                         {/* <ChannelList
                              channels={channels.filter(c => c.type === 'habit' && (c.isGlobal || c.isPublic))}
                              activeChannel={activeChannel}
                              setActiveChannel={setActiveChannel}
                              type="habit"
                              limit={5}
                         /> */}
                    </div>

                    <div>
                         <h3 className="text-lg font-semibold mb-2">General</h3>
                         {/* <ChannelList
                              channels={channels.filter(c => c.type === 'general' && (c.isGlobal || c.isPublic))}
                              activeChannel={activeChannel}
                              setActiveChannel={setActiveChannel}
                              type="general"
                              limit={5}
                         /> */}
                    </div>

                    <div>
                         <h3 className="text-lg font-semibold mb-2">Your Private Channels</h3>
                         {/* <ChannelList
                              channels={channels.filter(c => !c.isGlobal && !c.isPublic)}
                              activeChannel={activeChannel}
                              setActiveChannel={setActiveChannel}
                              type={activeChannel.type}
                              limit={5}
                         /> */}
                    </div>
               </div>
               <button
                    onClick={() => setIsModalOpen(true)}
                    className="mt-4 w-full bg-white text-blue-600 hover:bg-blue-100 transition duration-300"
               >
                    Create New Channel
               </button>

               {isModalOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 text-black">
                         <div className="bg-white rounded-lg p-8 w-96">
                              <h2 className="text-2xl font-bold mb-4">Create New Channel</h2>
                              <form onSubmit={handleSubmit}>
                                   <input
                                        type="text"
                                        placeholder="Channel name"
                                        value={channelName}
                                        onChange={(e) => setChannelName(e.target.value)}
                                        className="w-full p-2 border border-gray-300 rounded mb-4"
                                        required
                                   />
                                   <select
                                   value={channelType}
                                   onChange={(e) => setChannelType(e.target.value)}
                                   className="w-full p-2 border border-gray-300 rounded mb-4">
                                        <option value="Anxiety Support">Anxiety Support</option>
                                        <option value="Addiction Support">Addiction Support</option>
                                        <option value="habit building">habit building</option>
                                        <option value="Depression Support">Depression Support</option>
                                   </select>
                                   <div className="flex justify-end space-x-2">
                                        <button
                                             type="button"
                                             onClick={() => setIsModalOpen(false)}
                                             className="px-4 py-2 text-gray-600 hover:text-gray-800"
                                        >
                                             Cancel
                                        </button>
                                        <button
                                             // onClick={() => createANewChannel()}
                                             type="submit"
                                             className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                                        >
                                             Create
                                        </button>
                                   </div>
                              </form>
                         </div>
                    </div>
               )}
          </div>
     )
}

export default ChannelSidebarLayout