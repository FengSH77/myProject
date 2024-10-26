import server from '@/utils/request';

export  const getModule = () => server.get('/license/module');

export const licenseInit = (data:any) =>server.post('/license/init',data, {}, {
  headers: {
    'Content-Type': 'text/plain;charset=UTF-8'
  }
});

export const getLicense = () => server.get('/license');

export const initPage = () => server.get('/user/settings/init');