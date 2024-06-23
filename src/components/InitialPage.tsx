import { useCallback } from 'react';

const InitialPage = (custom: () => void) => {
  const load = useCallback(() => {
    console.log(1);
    custom();
    console.log(1);
  }, [custom]);

  return { load };
};

export default InitialPage;