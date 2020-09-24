const axios = require('axios').default;

export function makeHttpRequest(method, url, dto) {
  return axios({
    method,
    url,
    data: dto,
  });
}

export const HOST_IP = 'http://localhost:8080';
export const getAllMembersUrl = `${HOST_IP}/group-api/init-list`;
export const addNewMembersUrl = `${HOST_IP}/group-api/member`;
export const assignGroupUrl = `${HOST_IP}/group-api/assign`;
export const getCachedAssignGroupUrl = `${HOST_IP}/group-api/cached-assign`;
export const renameTeamNameUrl = `${HOST_IP}/group-api/rename-team`;
