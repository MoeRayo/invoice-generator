<template>
  <div>
    <section class="bg-dark-blue bb b--white bw2">
      <div class="vh-40 center flex justify-between ph4 w-100-sm w-80-m w-70-l">
        <a class="link black hover-white no-underline" href="/">
          <h1 class="fw1 f2 white hover-light-blue mt--1">Invoice Generator</h1>
        </a>
        <div class="items-center flex ml2">
          <img
            src="../assets/user_icon.svg"
            class="ma center w2 h2 pointer"
            alt=""
            />
          <p class="ttc f5 pointer white"> {{$route.params.id}}</p>
        </div>
      </div>
    </section>
    <section class="vh-100 bg-black-05 relative">

    </section>
    
  </div>
</template>

<style>
  .vh-40 {
    height: 10vh;
  }
  
</style>