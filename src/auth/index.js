export default async function (to, from, next) {
  const userInfo = await localStorage.getItem("user");
  console.log("entrou");
  console.log(to.path);
  if (userInfo && to.path === "/SignIn") {
    next("/feed-videos");
    return;
  }

  if (!userInfo) {
    next("/SignIn");
  } else {
    next();
  }
}
