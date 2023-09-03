<template>
  <div
    class="container mx-auto flex flex-col justify-center items-center h-full"
  >
    <h1 class="text-4xl font-bold mb-5 text-primaryDarker">Sign In</h1>
    <form class="flex-col justify-center items-center">
      <input
        type="email"
        placeholder="E-mail"
        class="w-full text-sm mb-4 pl-3 rounded border py-2 shadow-md"
      />
      <input
        type="password"
        placeholder="Password"
        class="text-sm w-full mb-4 pl-3 rounded border py-2 shadow-md"
      />
      <button
        type="submit"
        class="font-bold text-white bg-primary w-full py-2 rounded-md shadow-2xl hover:bg-azul-hover duration-150"
      >
        Sign In
      </button>
    </form>
  </div>
</template>

<style>
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
}
</style>
