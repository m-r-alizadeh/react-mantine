function path(root, subLink) {
  return `${root}${subLink}`;
}

export const ROOTS_ROOT = "/";
const ROOTS_AUTH = "/auth";
const ROOTS_DASHBOARD = "/dashboard";

export const PATHS = {
  login: path(ROOTS_AUTH, "/login"),
  logout: path(ROOTS_AUTH, "/logout"),
  page404: "/404",
  page500: "/500",
  app: path(ROOTS_DASHBOARD, "/jobs/list"),
  jobDetail: path(ROOTS_DASHBOARD, "/jobs/detail"),
  history: path(ROOTS_DASHBOARD, "/history"),
};
