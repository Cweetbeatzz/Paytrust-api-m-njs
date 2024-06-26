// const { v4: uuidv4 } = require('uuid');
import { v4 as uuidv4 } from 'uuid';

//###########################################################################################

// get UniqueId with uuid library
var GeneratedId = 'PT' + '-' + uuidv4();
var GeneratedUserId = 'USER' + '-' + uuidv4();
var GeneratedTransferId = 'TRANSFER' + '-' + uuidv4();
var GeneratedAccountId = 'ACCOUNT' + '-' + uuidv4();

export {
  GeneratedId,
  GeneratedUserId,
  GeneratedTransferId,
  GeneratedAccountId,
};
