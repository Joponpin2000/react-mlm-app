import { CATEGORY_DELETE_FAIL, CATEGORY_DELETE_REQUEST, CATEGORY_DELETE_SUCCESS, CATEGORY_EDIT_FAIL, CATEGORY_EDIT_REQUEST, CATEGORY_EDIT_SUCCESS, CATEGORY_LIST_FAIL, CATEGORY_LIST_REQUEST, CATEGORY_LIST_SUCCESS, CATEGORY_SAVE_FAIL, CATEGORY_SAVE_REQUEST, CATEGORY_SAVE_SUCCESS } from '../constants/categoryConstants';

function categoryListReducer(state = { categories: [] }, action) {

    switch (action.type) {
        case CATEGORY_LIST_REQUEST:
            return {
                loading: true,
                categories: []
            };

        case CATEGORY_LIST_SUCCESS:
            return {
                loading: false,
                categories: action.payload
            };
        case CATEGORY_LIST_FAIL:
            return {
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
}

function categorySaveReducer(state = { category: {} }, action) {

    switch (action.type) {
        case CATEGORY_SAVE_REQUEST:
            return {
                loading: true
            };

        case CATEGORY_SAVE_SUCCESS:
            return {
                loading: false,
                success: true,
                category: action.payload
            };
        case CATEGORY_SAVE_FAIL:
            return {
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
}

function categoryEditReducer(state = { category: {} }, action) {
    switch (action.type) {
        case CATEGORY_EDIT_REQUEST:
            return {
                loading: true
            };

        case CATEGORY_EDIT_SUCCESS:
            return {
                loading: false,
                success: true,
                category: action.payload
            };
        case CATEGORY_EDIT_FAIL:
            return {
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
}

function categoryDeleteReducer(state = { category: {} }, action) {

    switch (action.type) {
        case CATEGORY_DELETE_REQUEST:
            return {
                loading: true
            };

        case CATEGORY_DELETE_SUCCESS:
            return {
                loading: false,
                success: true,
                category: action.payload
            };
        case CATEGORY_DELETE_FAIL:
            return {
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
}


export { categoryListReducer, categorySaveReducer, categoryEditReducer, categoryDeleteReducer };