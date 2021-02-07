import { ExpansionProvider, useExpansion } from '@/context/expansion';
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';
import React from 'react';
import { styled } from 'stitches.config';

const TriggerButton = styled(motion.button, {
  ':focus': {
    outlineColor: '$action',
    outlineWidth: '1px',
    outlineStyle: 'auto',
  },
});

const Trigger: React.FC = ({ children }) => {
  const { dispatch } = useExpansion();
  return (
    <TriggerButton layout onClick={() => dispatch({ type: 'TOGGLE' })}>
      {children}
    </TriggerButton>
  );
};

const Body: React.FC = ({ children }) => {
  const { state } = useExpansion();
  return (
    <AnimatePresence exitBeforeEnter>
      {state.status === 'closed' ? null : (
        <motion.div layout>{children}</motion.div>
      )}
    </AnimatePresence>
  );
};

const Item: React.FC = ({ children }) => {
  return (
    <ExpansionProvider>
      <>{children}</>
    </ExpansionProvider>
  );
};

interface IExpansionComposed {
  Trigger: React.FC<any>;
  Body: React.FC<any>;
  Item: React.FC<any>;
}

const Expansion: React.FC & IExpansionComposed = ({ children }) => {
  return <AnimateSharedLayout>{children}</AnimateSharedLayout>;
};

Expansion.Trigger = Trigger;
Expansion.Body = Body;
Expansion.Item = Item;

export { Expansion };
