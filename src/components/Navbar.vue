<template>
  <nav class="wrapper">
    <div class="sidebar">
      <div class="brand">
        <h3><font-awesome-icon icon="dragon" />R-Track</h3>
      </div>
      <ul>
        <li>
          <a href="#" @click="changeView('home')">
            <span class="icon"><font-awesome-icon icon="home" /></span>
            <span class="item">Home</span>
          </a>
        </li>
        <li>
          <a href="#" @click="changeView('arrests')">
            <span class="icon"><font-awesome-icon icon="fingerprint" /></span>
            <span class="item">Arrests</span>
          </a>
        </li>
        <li>
          <a href="#" @click="changeView('pursuits')">
            <span class="icon"><font-awesome-icon icon="taxi" /></span>
            <span class="item">Pursuits</span>
          </a>
        </li>
        <li>
          <a href="#" @click="changeView('complaints')">
            <span class="icon"><font-awesome-icon icon="angry" /></span>
            <span class="item">Complaints</span>
          </a>
        </li>
        <li>
          <a href="#" @click="changeView('force')">
            <span class="icon"><font-awesome-icon icon="fist-raised" /></span>
            <span class="item">Use of Force</span>
          </a>
        </li>
        <li>
          <a href="#" @click="changeView('firearm')">
            <span class="icon"><font-awesome-icon icon="fighter-jet" /></span>
            <span class="item">Firearm Discharge</span>
          </a>
        </li>
        <li>
          <a href="#" @click="changeView('incidents')">
            <span class="icon"><font-awesome-icon icon="car-crash" /></span>
            <span class="item">Incidents</span>
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>
//
<script lang="ts" scoped>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Navbar",
  setup(props, context) {
    const changeView = (view: string) => {
      context.emit("changeView", view);
    };
    return { changeView };
  },
});
</script>

<style scoped lang="scss">
body.active .sidebar {
  left: -225px;
}
body.active .section {
  margin: 0;
  width: 100%;
}
.wrapper {
  .sidebar {
    text-align: left;
    height: 100%;
    width: 225px;
    background: #fff;
    position: fixed;
    top: 0;
    left: 0;
    box-sizing: border-box;
    padding: 30px 0;
    transition: all 0.5s ease;
    border-radius: 10px;
    .brand {
      text-align: center;
      margin-bottom: 30px;
      h3 {
        font-size: 24px;
      }
    }
    ul {
      margin: 0;
      padding: 0;
      list-style-type: none;
      a {
        text-decoration: none;
        display: block;
        padding: 13px 30px;
        border-bottom: 1px solid #ececec;
        color: #666;
        font-size: 14px;
        position: relative;
        //add element before div that is not on dom
        &:before {
          content: "";
          position: absolute;
          top: 0;
          right: 0;
          width: 3px;
          height: 100%;
          background: #8d599f;
        }
        &:hover,
        &:active {
          color: #8d599f;
          background: linear-gradient(to right, #fff, #f6edfc);
        }
        .icon {
          color: #c7cfdb;
          width: 30px;
          display: inline-block;
        }
        &:hover .icon {
          color: #8d599f;
        }
      }
    }
  }
}
</style>
