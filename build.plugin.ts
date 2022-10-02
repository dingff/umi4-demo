import { IApi } from 'umi';
import open from 'open';

export default (api: IApi) => {
  console.log(api.name);
  api.describe({
    key: 'devPublicPath',
    config: {
      schema(joi) {
        return joi.string();
      },
    },
  });
  if (api.name === 'dev') {
    api.onStart((v) => {
      setTimeout(() => {
        open(`http://localhost:8000${api.userConfig.devPublicPath}`)
      }, 2000)
    })
    api.modifyConfig((memo)=>{
      memo.publicPath = api.userConfig.devPublicPath;
      return memo;
    });
  }
};