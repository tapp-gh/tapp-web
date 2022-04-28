import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface authState {
    token : string,
    isAuthenticated : boolean,
    isLoading : boolean
    user: {
        name:string,
        email:string
    } | null
}

const initialState : authState = {
    token:'',
    isAuthenticated:false,
    isLoading:true,
    user: null
}

export const authSlice = createSlice({
    name : 'auth',
    initialState,
    reducers: {
        setToken: (state, action : PayloadAction<string>) => {
            state.token = action.payload
        },
        setIsAuthenticated: (state, action : PayloadAction<boolean>) =>{
            state.isAuthenticated = action.payload
        },
        setIsLoading: (state, action : PayloadAction<boolean>) =>{
            state.isLoading = action.payload
        },
        setUser: (state, action : PayloadAction<{name:string, email:string}>) =>{
            state.user = {
                name:action.payload.name,
                email:action.payload.email
            }
        }
    }
})

export const { setToken, setIsAuthenticated, setIsLoading, setUser } = authSlice.actions

export default authSlice.reducer