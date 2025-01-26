import api from "../../app/api";

interface channelData{
     author:string,
     name:string,
     description:string,
     isPublic:boolean
}

interface Channel{
     id:string|null,
     name: string,
}

export const channelApi = api.injectEndpoints({
     endpoints:(builder)=>({
          createChannel:builder.mutation({
               query:(channelData:channelData)=>({
                    url:"/channel/create-channel",
                    method:"POST",
                    headers:{
                         "Content-Type":"application/json"
                    },
                    body:JSON.stringify(channelData)
               }),
          }),
          getChannel:builder.mutation({
               query:(searchQuery:string)=>({
                    url:"/channel/get-channel",
                    method:"POST",
                    headers:{
                         "Content-Type":"application/json"
                    },
                    body:JSON.stringify({searchQuery})
               }),
          }),
          getChannelUnderSpecificType:builder.mutation({
               query:(type:string)=>({
                    url:"/channel/get-channel-under-specific-type",
                    method:"POST",
                    headers:{
                         "Content-Type":"application/json"
                    },
                    body:JSON.stringify({type})
               }),
          })
     })
})

export const { useCreateChannelMutation, useGetChannelMutation, useGetChannelUnderSpecificTypeMutation } = channelApi