import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ChannelState{
     activeChannelId : string | null
}

const initialState:ChannelState = {
     activeChannelId : null
}

const channelSlice = createSlice({
     name: "channel",
     initialState,
     reducers:{
          setActiveChannel(state,action:PayloadAction<string>){
               state.activeChannelId = action.payload
          },
     },
})

export const { setActiveChannel } = channelSlice.actions
export default channelSlice.reducer