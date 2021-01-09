import React from 'react';

export type ExpansionState =
  | {
      status: 'opened';
    }
  | {
      status: 'closed';
    };

export type ExpansionActions =
  | {
      type: 'OPEN';
    }
  | {
      type: 'CLOSE';
    }
  | {
      type: 'TOGGLE';
    };

const initialExpansionState: ExpansionState = { status: 'closed' };

interface IExpansionContext {
  state: ExpansionState;
  dispatch: React.Dispatch<ExpansionActions>;
}

function handleOpenedState(
  state: ExpansionState,
  action: ExpansionActions,
): ExpansionState {
  switch (action.type) {
    case 'TOGGLE':
    case 'CLOSE': {
      return {
        ...state,
        status: 'closed',
      };
    }

    case 'OPEN':
    default:
      return {
        ...state,
      };
  }
}
function handleClosedState(
  state: ExpansionState,
  action: ExpansionActions,
): ExpansionState {
  switch (action.type) {
    case 'TOGGLE':
    case 'OPEN': {
      return {
        ...state,
        status: 'opened',
      };
    }

    case 'CLOSE':
    default:
      return {
        ...state,
      };
  }
}

function expansionReducer(
  state: ExpansionState = initialExpansionState,
  action: ExpansionActions,
): ExpansionState {
  switch (state.status) {
    case 'opened':
      return handleOpenedState(state, action);

    case 'closed':
      return handleClosedState(state, action);

    default:
      throw new Error('Unhandled state in `expansionReducer`');
  }
}
const ExpansionContext = React.createContext({} as IExpansionContext);

function useExpansion(): IExpansionContext {
  const context = React.useContext(ExpansionContext);
  if (context === undefined) {
    throw new Error('`useExpansion` must be used within a `ExpansionProvider`');
  }
  return context;
}

const ExpansionProvider: React.FC = ({ children }) => {
  const [state, dispatch] = React.useReducer(
    expansionReducer,
    initialExpansionState,
  );
  const value = React.useMemo(
    () => ({
      state,
      dispatch,
    }),
    [state],
  );
  return (
    <ExpansionContext.Provider value={value}>
      {children}
    </ExpansionContext.Provider>
  );
};

export { ExpansionProvider, useExpansion };
