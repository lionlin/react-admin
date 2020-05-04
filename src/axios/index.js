import { get, post } from './tools';
import * as config from './config';

export const getBbcNews = () => get({ url: config.NEWS_BBC });

const token = localStorage.getItem('token');

export const listUsers = (pageNo, pageSize) => get({
    url: `/admin/listUsers?pageSize=${pageSize}&pageNo=${pageNo}`,
    headers: { 'token': token },
});

export const listVedios = (pageNo, pageSize) => get({
    url: `/admin/listVedios?pageSize=${pageSize}&pageNo=${pageNo}`,
    headers: { 'token': token },
});

export const addVedio = (values) => post({
    url: `/admin/addVedio`,
    data: values,
    headers: { 'token': token },
});

export const listDeposits = (pageNo, pageSize, phone) => get({
    url: `/admin/listDeposits?pageSize=${pageSize}&pageNo=${pageNo}&phone=${phone}`,
    headers: { 'token': token },
});

export const listWithdraws = (pageNo, pageSize, phone) => get({
    url: `/admin/listWithdraws?pageSize=${pageSize}&pageNo=${pageNo}&phone=${phone}`,
    headers: { 'token': token },
});

export const finishWithdraws = (id) => get({
    url: `/admin/finishWithdraws?id=${id}`,
    headers: { 'token': token },
});

export const adminPayOrderCallBack = (id) => get({
    url: `/admin/adminPayOrderCallBack?id=${id}`,
    headers: { 'token': token },
});

// 管理员权限获取
export const login = (username, password) => post({
    url: `/admin/login`,
    data: {
        username: username,
        password: password,
    },
});
