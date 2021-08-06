import {
    SET_SOURCE,
    SET_DESTINATION,
    SET_CURRENT_ROUTE,
    SET_SIGNAL,
    SAVE_JOURNEY,
} from './routesTypes';

import { signal_strength } from '../../constants'

export const setSource = data => {
    return {
        type: SET_SOURCE,
        payload: data
    }
}

export const setDestination = data => {
    return {
        type: SET_DESTINATION,
        payload: data
    }
}

export const setCurrentRoute = data => {
    return {
        type: SET_CURRENT_ROUTE,
        payload: data
    }
}

export const setSignal = () => {
    return {
        type: SET_SIGNAL,
        payload: signal_strength[Math.floor(4 * Math.random())]
    }
}

export const saveJourney = (route, signal) => {
    return {
        type: SAVE_JOURNEY,
        payload: {
            route,
            signal,
        }
    }
}
