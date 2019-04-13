<template>
  <div id="app">
    <Header></Header>
    <div class="container">
      <div class="row main-page">

         <div class="col-md-12">
            <h4 class="text-info" id="online_users">Online User : {{onlineuser}}</h4>
            <hr>
        </div>
        <router-view></router-view>
        
      </div>
    </div>


    <Footer></Footer>
  </div>
</template>

<script>
import io from 'socket.io-client';
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'app',
  components: {
    Header,
    Footer
  },
  data: function(){
    return {
      onlineuser : '',
      socket: io("http://localhost:3000"),
    }
  },
  beforeMount() {
    this.socket.on("clientsCount", (data) => {
      this.onlineuser = data.clientsCount;
    })
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.main-page{
  margin-top: 40px;
}
</style>
