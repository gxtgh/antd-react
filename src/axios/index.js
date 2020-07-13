import axios from 'axios';
// import qs from 'qs';
import { Component } from 'react';

let fetch = axios.create({
  baseURL: '',
  timeout:10000
});

fetch.interceptors.request.use(config =>{
  return config;
}, error => {
  Promise.reject(error);
});

fetch.interceptors.response.use(async res =>{
  return res.data.data;
}, err =>{
  return Promise.reject(err);
});

const get = ( url, params) => {
  return fetch({
    method: 'GET',
    url: url,
    data: params
  });
}
const post = ( url, params) => {
  return fetch({
    method: 'POST',
    url: url,
    data: params
  });
}


Component.prototype.$get = get;
Component.prototype.$post = post;