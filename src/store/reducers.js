import * as AcTypes from './actions';
import ListBuilder from '../builders/ListBuilder';

const initialState = {
    isLocked: false,
    cards: new ListBuilder().createList(5).shuffle().build(),
    isVictoryDialogOpen: false
};

const gameReducer = (state = initialState, action) => {
    switch(action.type) {
        case AcTypes.SET_MATCH: {
            const cards = state.cards.slice();
            let isVictoryDialogOpen = false;
            cards[action.index1].hasMatch = true;
            cards[action.index2].hasMatch = true;
            if (cards.every(c => c.hasMatch)) {
                isVictoryDialogOpen = true;
            }
            return { ...state, isVictoryDialogOpen, cards };
        }
        case AcTypes.OPEN_CARD: {
            const cards = state.cards.slice();
            cards[action.index].isActive = true;
            return { ...state, cards };
        }
        case AcTypes.CLOSE_CARDS: {
            const cards = state.cards.slice();
            cards[action.index1].isActive = false;
            cards[action.index2].isActive = false;
            return { ...state, cards, isLocked: false };
        }
        case AcTypes.LOCK: return { ...state, isLocked: true }
        case AcTypes.CLOSE_VICTORY_DIALOG: return { ...state, isVictoryDialogOpen: false }
        case AcTypes.START_GAME:
            return {
                ...state,
                isVictoryDialogOpen: false,
                cards: new ListBuilder().createList(5).shuffle().build(),
            }
        default: return state;
    }
}

export default gameReducer;