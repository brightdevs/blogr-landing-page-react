import React from 'react';

const useToggle = (initialState: boolean) => {
  const [visible, setVisible] = React.useState(initialState);
  const toggle = React.useCallback(() => setVisible(!visible), [visible]);
  return [visible, toggle] as const;
};
export default useToggle;
