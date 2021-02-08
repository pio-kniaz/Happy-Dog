export const userBioSelector = (state) => ({
  id: state.userBio.id,
  email: state.userBio.email,
  firstName: state.userBio.firstName,
  lastName: state.userBio.lastName,
  updatedAt: state.userBio.updatedAt,
  createdAt: state.userBio.createdAt,
});
