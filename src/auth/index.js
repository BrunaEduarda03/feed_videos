export default async function (to, from, next) {
  const userInfo = await localStorage.getItem("user");

  if (userInfo && to.path === "/SignIn") {
    next("/feed-videos");
  } else if (!userInfo && to.path !== "/SignIn") {
    next("/SignIn");
  } else {
    next();
  }
}
