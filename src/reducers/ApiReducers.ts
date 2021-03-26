import { API_FAIL, API_SUCCESS, CatType, CatDispatchType } from "../actions/ApiActionTypes";

interface InitialState {
    success: boolean
    cat?: CatType
}

const initialState: InitialState = {
    success: false
}

const ApiReducer = (state = initialState, action: CatDispatchType) : InitialState => {
    switch (action.type) {
        case API_FAIL:
            return {
                ...state,
                success:false
            }
        case API_SUCCESS:
            const {url} = action.payload
            return {
                ...state,
                success:true,
                cat: {
                    url: url
                }
            }
        default:
            return state;
    }
}

export default ApiReducer