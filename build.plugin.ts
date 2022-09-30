import { IApi } from 'umi';
 
export default (api: IApi) => {
  console.log(api);
  api.onStart((v) => {
    console.log('hhhhhhhh', v );
    
  })
};