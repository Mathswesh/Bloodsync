import {createSlice , createAsyncThunk} from "@reduxjs/toolkit"

export const fetchhospitaldata = createAsyncThunk(
    'fetchhospitaldata',
    async() => {
        const response = await fetch("http://localhost:3000/hospital/get")
        return await response.json()
    }
)

const hospitalslice = createSlice({
    name:"hospitaldata",
    initialState:{
        isLoading:false,
        data:null,
        isError:false,
    },
    reducers:{
        showhospital: (action,state) => {
            console.log(action.payload,"hospital slice")
            state.showhospital.push(action.payload)
        }
    },
    extraReducers:(builder) => {
        builder.addCase(fetchhospitaldata.pending,(state,action) =>{
            state.isLoading =true
        })
        builder.addCase(fetchhospitaldata.fulfilled,(state,action) => {
            state.isLoading=false
            state.data = action.payload
        })
        builder.addCase(fetchhospitaldata.rejected,(state,action)=>{
            console.log("Error",action.payload)
            state.isError = true
        })

    },
})

export default hospitalslice.reducer