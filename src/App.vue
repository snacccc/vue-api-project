<template>
  <header class="header">
 
    <div class="app">
        <RouterLink class="search" to="/">🔍</RouterLink>
        <header>|</header>
        <RouterLink class="router about" to="/about">About</RouterLink>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
.app {
    display: flex;
    flex-direction: row;
    background-color: var(--primarydark);
    font-size: 2rem;
    height: 5rem;
    align-items: center;
    margin-bottom: 2rem;
    border-bottom: 0.5rem solid;
    border-color: var(--accent);
    color: var(--accenttwo);
  }
  a {
    text-decoration: none;
    color: var(--fontcolormain);
  }

  .search {
    margin: 0 3rem;
  }
  .router {
    margin: 0 3rem;
  }
  .router:hover {
    text-decoration: underline;
  }
  .router:active {
    color: #2e2e82;
  }

</style>
