import { useEffect, useState } from "react";
import { useUser } from "@clerk/clerk-react";
import { useCreateChannelMutation, useGetChannelMutation, useGetChannelUnderSpecificTypeMutation } from "./ChannelApi";
import SearchBar from "./SearchBar";
import CreateChannelModal from "./CreateChannelModel";
import Channel from "../../types/ChannelType";

function ChannelSidebarLayout() {

     const { user } = useUser();

     const [isModalOpen, setIsModalOpen] = useState(false);
     const [searchQuery, setSearchQuery] = useState(""); // State for search query
     const [searchResults, setSearchResults] = useState<string[]>([]); // State for search results
     const [GetChannelUnderSpecificType] = useGetChannelUnderSpecificTypeMutation();
     const [channelsByTopic, setChannelsByTopic] = useState<Record<string, Channel[]>>({});

     const [createChannel] = useCreateChannelMutation();
     const [getChannel] = useGetChannelMutation();

     const topics = ["Addiction Support", "Anxiety Support", "Habit Building", "Depression Support"];

     const handleSearch = async (query: string) => {
          if (query.trim() !== "") {
               try {
                    // console.log("Query: ", query);
                    const res = await getChannel(query).unwrap(); // Call the function to search for a channel
                    // console.log("Response: ", res);

                    if (res?.message === "Channel not found") {
                         setSearchResults(["-1"]);
                    } else {
                         setSearchResults([res.channelName]); // Set the result to the found channel name
                    }

               } catch (error) {
                    console.error("Error while searching for channel: ", error);
                    setSearchResults(["-1"]); // Handle case where there is an error in fetching data
               }
          } else {
               setSearchResults([]);
          }
     };

     useEffect(() => {
          const fetchChannelsByTopic = async () => {
               const channelsByTopic: Record<string, Channel[]> = {};
               for (const topic of topics) {
                    try {
                         const res = await GetChannelUnderSpecificType(topic).unwrap();
                         // console.log("Response: ", res);
                         channelsByTopic[topic] = res.channels.map((channel:{name:string, _id:string}) => ({ 
                              id: channel._id,
                              name: channel.name
                         }));
                         // console.log("CHANNELS BY TOPIC : ", channelsByTopic[topic]);
                    } catch (error) {
                         console.error("Error fetching channels by topic:", error);
                         channelsByTopic[topic] = [];
                    }
               }
               setChannelsByTopic(channelsByTopic);
          }

          fetchChannelsByTopic();
     }, [GetChannelUnderSpecificType, isModalOpen])

     useEffect(() => {
          document.body.style.overflow = isModalOpen ? "hidden" : "auto";
     }, [isModalOpen]);

     return (
          <div className="w-64 bg-blue-600 text-white p-4 flex flex-col h-full">
               <h2 className="text-2xl font-bold mb-4">Channels</h2>
               <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} handleSearch={handleSearch} />

               {
                    searchResults.length === 0 ? (
                         <>
                              <div className="flex-grow overflow-y-auto space-y-4">

                                   {
                                        topics.map((topic) => (
                                             <div key={topic}>
                                                  <h3 className="text-lg font-semibold mb-2">
                                                       {
                                                            topic === "private" ? "Your Private Channels" : topic
                                                       }
                                                  </h3>
                                                  <ul className="space-y-1">
                                                       {
                                                            channelsByTopic[topic]?.length > 0 ? (
                                                                 channelsByTopic[topic]?.map((channel) => (
                                                                      <li key={channel.id}>
                                                                           <button className="w-full text-left py-1 px-2 rounded flex items-center text-sm hover:bg-blue-500">
                                                                                <span className="flex-grow truncate"># {channel.name}</span>
                                                                           </button>
                                                                      </li>
                                                                 ))
                                                            ) : (
                                                                 <p className="text-sm text-gray-300">No channels found</p>
                                                            )
                                                       }
                                                  </ul>
                                             </div>
                                        ))}
                              </div>

                              <button
                                   onClick={() => setIsModalOpen(true)}
                                   className="mt-4 w-full bg-white text-blue-600 hover:bg-blue-100 transition duration-300"
                              >
                                   Create New Channel
                              </button>

                              {/* Modal */}
                              {isModalOpen && (
                                   <CreateChannelModal
                                        setIsModalOpen={setIsModalOpen}
                                        user={user}
                                        createChannel={createChannel}
                                        setChannelsByTopic={setChannelsByTopic}
                                   />
                              )}
                         </>
                    ) : (
                         <div>
                              <h3 className="text-lg font-semibold mb-2 'bg-blue-700 hover:bg-blue-500">
                                   {searchResults[0] === "-1" ? "No Channel Found" :
                                        <button>
                                             {searchResults[0]}
                                        </button>
                                   }
                              </h3>
                         </div>
                    )
               }
          </div>
     )
}

export default ChannelSidebarLayout