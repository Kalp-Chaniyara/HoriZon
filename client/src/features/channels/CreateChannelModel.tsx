import { useState } from "react";
import Channel from "../../types/ChannelType";

interface CreateChannelModalProps {
     setIsModalOpen: (isOpen: boolean) => void;
     user: any;
     createChannel: any;
     setChannelsByTopic: React.Dispatch<React.SetStateAction<Record<string, Channel[]>>>;
}

const CreateChannelModal: React.FC<CreateChannelModalProps> = ({ setIsModalOpen, user, createChannel, setChannelsByTopic }) => {
     const [channelName, setChannelName] = useState("");
     const [channelType, setChannelType] = useState("Addiction Support");
     const [isPublic, setIsPublic] = useState(false);

     const resetForm = () => {
          setChannelName("");
          setChannelType("Addiction Support");
          setIsPublic(false);
     };

     const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          if (!user) {
               console.error("User not found!");
               return;
          }

          const channelData = {
               author: user.id,
               name: channelName,
               description: channelType,
               isPublic,
          };

          try {
               const createdChannel = await createChannel(channelData).unwrap();
               // console.log("Created Channel: ", createdChannel);
               const channelDataa = {
                    id: createdChannel.id, // Channel ID
                    name: createdChannel.name, // Channel Name
               };
               setChannelsByTopic((prev) => ({
                    ...prev,
                    [channelData.description]: [...(prev[channelData.description] || []), channelDataa],
               }));
               resetForm();
               setIsModalOpen(false);
          } catch (error) {
               console.log("Error creating channel: ", error);
          }
     };

     return (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 text-black">
               <div className="bg-white rounded-lg p-8 w-96">
                    <h2 className="text-2xl font-bold mb-4">Create New Channel</h2>
                    <form onSubmit={handleFormSubmit}>
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
                              className="w-full p-2 border border-gray-300 rounded mb-4"
                         >
                              <option value="Addiction Support">Addiction Support</option>
                              <option value="Anxiety Support">Anxiety Support</option>
                              <option value="Habit Building">Habit Building</option>
                              <option value="Depression Support">Depression Support</option>
                         </select>
                         <div className="flex items-center mb-4">
                              <input
                                   type="checkbox"
                                   id="isPublic"
                                   checked={isPublic}
                                   onChange={(e) => setIsPublic(e.target.checked)}
                                   className="mr-2"
                              />
                              <label htmlFor="isPublic">Public Channel</label>
                         </div>
                         <div className="flex justify-end space-x-2">
                              <button
                                   type="button"
                                   onClick={() => { resetForm(); setIsModalOpen(false); }}
                                   className="px-4 py-2 text-gray-600 hover:text-gray-800"
                              >
                                   Cancel
                              </button>
                              <button
                                   type="submit"
                                   className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                              >
                                   Create
                              </button>
                         </div>
                    </form>
               </div>
          </div>
     );
};

export default CreateChannelModal;
