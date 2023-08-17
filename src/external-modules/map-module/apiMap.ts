import API from '../../api/API';

export const getDataInfra = () => {
    
  return API.get('/upng');
  
};

export const getTNodeData = () => {
    
  return API.get('/tl');
  
};
export const getGsuData = () => {
    
  return API.get('/gsu');
  
};

export const getRelatedObjects = () => {
    
  return API.get('/related_objects');
  
};