

function ChannelSidebarLayout() {

     const onCreateChannel = ()  =>  {
     }

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
                    onClick={onCreateChannel}
                    className="mt-4 w-full bg-white text-blue-600 hover:bg-blue-100 transition duration-300"
               >
                    Create New Channel
               </button>
          </div>
     )
}

export default ChannelSidebarLayout