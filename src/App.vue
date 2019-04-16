<template>
  <div id="app" class="box">
    <div class="container">
      <div class="row outer">
        <router-view/>
      </div>
    </div>
    <div class="footer">
      <a href="https://github.com/geogor37/creative-project-5" style="color: white;">Check out my repo on Github!</a>
    </div>
  </div>
</template>

<style>
  html {
    height: 100%;
    box-sizing: border-box;
  }

  body {
    font-family: 'Arial', sans-serif;
    font-size: 16px;
    background: #f3f3f3;
    margin: 0;
    height: 100%;
  }

  .box {
    display: flex;
    flex-flow: column;
    margin: 0;
    min-height: 100%;
    /*background-color: #B3D3D6;*/
  }

  .box .container {
    margin: 0 auto;
    flex: 1 1 auto;
    display: flex;
    flex-flow: column;
    height: 100%;
  }

  .footer {
    width: 100%;
    background-color: #385153;
    padding: .5em 0;
    text-align: center;
  }

  .outer {
    flex: 1 1 auto;
    display: flex;
    margin: 20px 0;
    height: 100%;
  }
</style>
