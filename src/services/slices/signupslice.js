import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const fetchsignupdata = createAsyncThunk(
    'fetchhospitaldata',
    async () => {
        const response = await fetch("http://")
        return await response.json()
    }
)

const signupslice = createSlice({
    name: "signupdata",
    initialState: {
        isLoading: false,
        data: null,
        isError: false,
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchsignupdata.pending, (state, action) => {
            state.isLoading = true
        })
        builder.addCase(fetchsignupdata.fulfilled, (state, action) => {
            state.isLoading = false
            state.data = action.payload
        })
        builder.addCase(fetchsignupdata.rejected, (state, action) => {
            console.log("Error", action.payload)
            state.isError = true
        })
    },
})

export default signupslice.reducer