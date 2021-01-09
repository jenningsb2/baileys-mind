import React from 'react';
import { ExpansionProvider, useExpansion } from '@/context/expansion';
import { styled } from 'stitches.config';
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';

const ExpansionTrigger = styled('button', {});

const Header: React.FC = ({ children }) => {
  const { dispatch } = useExpansion();
  return (
    <motion.div layout>
      <ExpansionTrigger onClick={() => dispatch({ type: 'TOGGLE' })}>
        {children}
      </ExpansionTrigger>
    </motion.div>
  );
};

const Body: React.FC = ({ children }) => {
  const { state } = useExpansion();
  return (
    <AnimatePresence exitBeforeEnter>
      {state.status === 'closed' ? (
        <motion.div layout />
      ) : (
        <motion.div
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}>
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Item: React.FC = ({ children }) => {
  return (
    <ExpansionProvider>
      <motion.div layout>{children}</motion.div>
    </ExpansionProvider>
  );
};

interface IExpansionComposed {
  Header: React.FC<any>;
  Body: React.FC<any>;
  Item: React.FC<any>;
}

const Expansion: React.FC & IExpansionComposed = ({ children }) => {
  return <AnimateSharedLayout>{children}</AnimateSharedLayout>;
};

Expansion.Header = Header;
Expansion.Body = Body;
Expansion.Item = Item;

export { Expansion };
