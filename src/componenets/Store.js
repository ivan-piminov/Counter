import React from "react";
import {createStore} from "redux";

export const ON_MAX_VALUE = "ON-MAX-VALUE";
export const ON_MIN_VALUE = "ON-MIN-VALUE";
export const SETTINGS_VALUE = " SETTINGS-VALUE";
export const FUNCTION_UP_NUMBER = "FUNCTION-UP-NUMBER";
export const FUNCTION_RESET_NUMBER = "FUNCTION-RESET-NUMBER";


const initialState = {
    maxNumber: 0,
    displayNumber: "",
    minNumber: 0,
    disableClick: true,
    disableReset: true,
    disableSettings: true
};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ON_MAX_VALUE:
            if (action.onNewMaxValue > 0
                && action.onNewMaxValue !== state.minNumber
                && state.minNumber < state.maxNumber + 1
            )
                return {
                    ...state,
                    maxNumber: action.onNewMaxValue,
                    displayNumber: "enter values and press Set",
                    disableSettings: false,
                    disableClick: true,
                    disableReset: true
                };
            else
                return {
                    ...state,
                    maxNumber: action.onNewMaxValue,
                    disableSettings: true,
                    disableClick: true,
                    disableReset: true
                };
        case ON_MIN_VALUE:
            if (action.onNewMinValue >= 0
                && action.onNewMinValue !== state.maxNumber
                && state.minNumber < state.maxNumber
            ) {
                return {
                    ...state,
                    minNumber: action.onNewMinValue,
                    displayNumber: "enter values and press SET",
                    disableSettings: false,
                    disableClick: true,
                    disableReset: true
                }
            } else {
                return {
                    ...state,
                    minNumber: action.onNewMinValue,
                    disableSettings: true,
                    disableClick: true,
                    disableReset: true
                }
            }
        case  SETTINGS_VALUE:
            return {
                ...state,
                displayNumber: state.minNumber,
                disableClick: false,
                disableReset: false,
                disableSettings: true

            };
        case FUNCTION_UP_NUMBER:

            if (state.displayNumber < state.maxNumber && state.displayNumber + 1 !== state.maxNumber) {
                return {
                    ...state,
                    displayNumber: state.displayNumber + 1,
                }
            } else
                return {
                    ...state,
                    displayNumber: state.displayNumber + 1,
                    disableClick: true
                };


        case FUNCTION_RESET_NUMBER:
            return {
                ...state,
                disableClick: false,
                displayNumber: state.minNumber
            }
    }
    return state;
};

const store = createStore(reducer);
export default store;

export const onMaxValueAC = (e) => {
    return {
        type: ON_MAX_VALUE,
        onNewMaxValue: +e.currentTarget.value
    };
};
export const onMinValueAC = (e) => {
    return {
        type: ON_MIN_VALUE,
        onNewMinValue: +e.currentTarget.value
    };
};

export const SettingsValueAC = (e) => {
    return {
        type: SETTINGS_VALUE,
        SettingsValue: e
    };
};
export const FunctionUpNumberAC = (e) => {
    return {
        type: FUNCTION_UP_NUMBER,
        FunctionUpNumber: e
    };
};
export const FunctionResetNumberAC = (e) => {
    return {
        type: FUNCTION_RESET_NUMBER,
        FunctionResetNumber: e
    };
};