const axios = require('axios').default;

export function makeHttpRequest(method, url, dto) {
  return axios({
    method,
    url,
    data: dto,
  });
}

export const HOST_IP = 'http://localhost:8080';

export const getAllNotGroupedTraineesUrl = `${HOST_IP}/trainees?grouped=false`;
export const addNewTraineeUrl = `${HOST_IP}/trainees`;
export const deleteTraineeUrl = (id) => `${HOST_IP}/trainees/${id}`;

export const getAllNotGroupedTrainersUrl = `${HOST_IP}/trainers?grouped=false`;
export const addNewTrainerUrl = `${HOST_IP}/trainers`;
export const deleteTrainerUrl = (id) => `${HOST_IP}/trainers/${id}`;

export const assignGroupUrl = `${HOST_IP}/groups/auto-grouping`;
export const getAssignedGroupsUrl = `${HOST_IP}/groups/`;
export const renameTeamNameUrl = `${HOST_IP}/group-api/rename-team`;
