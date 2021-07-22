// import {utils} from '@common';
import fetcher from '@app/api/fetcher';
import getApis from '@app/api/getApis';

const apiList={};

/* const {userApis,routerApis,authApis,layoutApis,projectApis,handleApis,pageApis}=require('@configs/apis');
export const getList1=async ()=>{
  return [...userApis,...routerApis,...authApis,...layoutApis,...projectApis,...handleApis,...pageApis];
}; */

export const getList=async ()=>{
  const {result}=await getApis();
  return result?.list??[];
};

export const getApiFn=async ()=>{
  const apis=await getList();
  apis.map(api=>{
    const {name,type,...rest}=api;
    const funcName=`${name}Fn`;
    const paramsKey=type||(rest.method==='post'?'data':'params');
    apiList[funcName]=data=>fetcher({...rest,[paramsKey]:data});
  });
  return apiList;
};

export default apiList;