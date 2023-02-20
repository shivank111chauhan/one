import {ADDITION, DELETION} from './ActionType';

export const addition = (heading, content) => ({
  type: ADDITION,
  payloadHeading: heading,
  payloadContent: content,
});

export const deletion = id => ({
  type: DELETION,
  payloadId: id,
});
