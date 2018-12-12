import { TEST_ACTION_TYPE } from './types';

export const testAction = () => ({
  type: TEST_ACTION_TYPE,
  payload: 'Data',
});
