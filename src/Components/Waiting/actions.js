import axios from 'axios';

export const setWaitingStatus = status =>
({
  type: 'SERVER_WAITING',
  payload: status,
  });

export function generateActionForCheckingAdmin(userId) {
  return {
    type: 'CHECK_IF_ADMIN',
    payload: axios.get(`/api/players/isAdmin?id=${userId}`)
                  .then(({ data }) => data)
  }
};
