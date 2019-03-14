import PropTypes from 'prop-types';
import React from 'react';
import ScriptManager from './ScriptManager';

const propTypes = {
  onSubmit: PropTypes.func,
};

const defaultProps = {
  onSubmit: () => {},
};

export default function Wrapper({ onSubmit }) {
  return (
    <div className="script-manager-wrapper">
      <ScriptManager onSubmit={onSubmit} />
    </div>
  );
}

Wrapper.propTypes = propTypes;
Wrapper.defaultProps = defaultProps;
