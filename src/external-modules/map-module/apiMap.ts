import API from '../../api/API';

import { TNodeData,InfraData } from './typesDepositsMap';

const getInfra = () => {
    
  return API.get('');
  
};

export { getInfra };
