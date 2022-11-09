import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const DOGS_API_KEY = 'live_6tOT4qwn9EenYHxw1zZhql1YExc3PK6Tkb0Z6DTbxlef8EkEAdtvhDv2Tmn5nsm3';


export const apiSliceCreate = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com/',
        // prepareHeaders(header) {
        //     header.set('x-api-key', DOGS_API_KEY);
        //     return header;
        // }
    }),
    endpoints: (builder) => {
        return {
            users: builder.query({
                query: (limit = 3) => '/users'

                // query(limit = 10) {
                //     `/ = ${limit}`
                // }
            })
        }
        // users: builder.query({
        //     query: () => '/users',
        // }),
    }
})


export const { useUsersQuery } = apiSliceCreate;
