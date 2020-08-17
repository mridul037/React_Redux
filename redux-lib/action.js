//you can get state by getState meth

//action type 
export const UPDATE_USER = "UDPATE_CONTACT";
export const UPDATE_CONTACT = "UPDATE_USER";


//action creator
export const updateUser = (update) => ({
  type: UPDATE_USER,
  payload: update,
});
export const updateContact = (update) => ({
  type: UPDATE_CONTACT,
  payload: update,
});

