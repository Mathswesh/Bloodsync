import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const fetchuserformdata = createAsyncThunk(
    'fetchuserformdata',
    async () => {
        const response = await fetch("http://localhost:3000/userformprofile")
        return await response.json()
    }
)

const userformslice = createSlice({
    name: "userformdata",
    initialState: {
        isLoading: false,
        data: null,
        isError: false,
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchuserformdata.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(fetchuserformdata.fulfilled, (state, action) => {
            state.isLoading = false
            state.data = action.payload
        })
        builder.addCase(fetchuserformdata.rejected, (state, action) => {
            console.log("Error", action.payload)
            state.isError = true
        })
    },
})

export default userformslice.reducer