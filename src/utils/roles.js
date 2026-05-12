export const getRoles = (role) => {
  switch (role) {
    case "user":
      return "/dashboard/user";
    case "admin":
      return "/dashboard/admin";
    default:
      return "/login";
  }
};
