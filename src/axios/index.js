import { get, post } from './tools';
import * as config from './config';

export const getBbcNews = () => get({ url: config.NEWS_BBC });


export const listUsers = (pageNo, pageSize) => get({
    url: `/admin/listUsers?pageSize=${pageSize}&pageNo=${pageNo}`,
    headers: { 'token': localStorage.getItem('token') },
});

export const getSystemConfig = () => get({
    url: `/admin/getSystemConfig`,
    headers: { 'token': localStorage.getItem('token') },
});

export const updateSystemConfig = (values) => post({
    url: `/admin/updateSystemConfig`,
    data: values,
    headers: { 'token': localStorage.getItem('token') },
});

export const listDepositChannels = (pageNo, pageSize) => get({
    url: `/admin/listDepositChannels?pageSize=${pageSize}&pageNo=${pageNo}`,
    headers: { 'token': localStorage.getItem('token') },
});

export const updateDepositChannel = (values) => post({
    url: `/admin/updateDepositChannel`,
    data: values,
    headers: { 'token': localStorage.getItem('token') },
});

export const listVedios = (pageNo, pageSize) => get({
    url: `/admin/listVedios?pageSize=${pageSize}&pageNo=${pageNo}`,
    headers: { 'token': localStorage.getItem('token') },
});

export const addVedio = (values) => post({
    url: `/admin/addVedio`,
    data: values,
    headers: { 'token': localStorage.getItem('token') },
});

export const listLiveVedios = (pageNo, pageSize) => get({
    url: `/admin/listLiveVedios?pageSize=${pageSize}&pageNo=${pageNo}`,
    headers: { 'token': localStorage.getItem('token') },
});

export const updateLiveVedio = (values) => post({
    url: `/admin/updateLiveVedio`,
    data: values,
    headers: { 'token': localStorage.getItem('token') },
});

export const addLiveVedio = (values) => post({
    url: `/admin/addLiveVedio`,
    data: values,
    headers: { 'token': localStorage.getItem('token') },
});

export const deleteLiveVedio = (id) => get({
    url: `/admin/deleteLiveVedio?id=${id}`,
    headers: { 'token': localStorage.getItem('token') },
});

export const listVedioTypes = (pageNo, pageSize) => get({
    url: `/admin/listVedioTypes?pageSize=${pageSize}&pageNo=${pageNo}`,
    headers: { 'token': localStorage.getItem('token') },
});

export const updateVedioType = (values) => post({
    url: `/admin/updateVedioType`,
    data: values,
    headers: { 'token': localStorage.getItem('token') },
});

export const addVedioType = (values) => post({
    url: `/admin/addVedioType`,
    data: values,
    headers: { 'token': localStorage.getItem('token') },
});

export const deleteVedioType = (id) => get({
    url: `/admin/deleteVedioType?id=${id}`,
    headers: { 'token': localStorage.getItem('token') },
});

export const listDeposits = (pageNo, pageSize, phone) => get({
    url: `/admin/listDeposits?pageSize=${pageSize}&pageNo=${pageNo}&phone=${phone}`,
    headers: { 'token': localStorage.getItem('token') },
});

export const listWithdraws = (pageNo, pageSize, phone) => get({
    url: `/admin/listWithdraws?pageSize=${pageSize}&pageNo=${pageNo}&phone=${phone}`,
    headers: { 'token': localStorage.getItem('token') },
});

export const finishWithdraws = (id) => get({
    url: `/admin/finishWithdraws?id=${id}`,
    headers: { 'token': localStorage.getItem('token') },
});

export const advisedVedio = (id) => get({
    url: `/admin/advisedVedio?id=${id}`,
    headers: { 'token': localStorage.getItem('token') },
});

export const deleteVedio = (id) => get({
    url: `/admin/deleteVedio?id=${id}`,
    headers: { 'token': localStorage.getItem('token') },
});

export const adminPayOrderCallBack = (id) => post({
    url: `/admin/adminPayOrderCallBack?id=${id}`,
    headers: { 'token': localStorage.getItem('token') },
});

// 管理员权限获取
export const login = (username, password) => post({
    url: `/admin/login`,
    data: {
        username: username,
        password: password,
    },
});
