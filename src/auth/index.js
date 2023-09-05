export default function (to, from, next) {
  const userInfo = localStorage.getItem("user");

  if (!userInfo) {
    next("/SignIn");
  } else {
    next();
  }
}
