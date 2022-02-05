<template>
  <div class="home">
    <Navbar class="side-nav" @changeView="changeView"></Navbar>
    <div class="section">
      <div class="top_navbar">
        <div class="hamburger" @click="toggleActive">
          <a id="hamburger" href="#"><font-awesome-icon icon="bars" /></a>
        </div>
      </div>
      <div class="content">
        <div v-if="view === 'home'">
          <div class="container">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, animi
            tenetur voluptas dolores facilis, placeat unde blanditiis ea et
            iusto modi illum ipsam? Adipisci modi minima mollitia nulla. Id,
            quo?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
            obcaecati explicabo maiores impedit unde libero modi aspernatur eum
            recusandae laudantium eaque, alias similique deserunt commodi saepe
            accusantium consequatur, officia ratione! Lorem ipsum, dolor sit
            amet consectetur adipisicing elit. Ea, neque quia perspiciatis
            provident, distinctio quos esse delectus aperiam ex laudantium, id
            deserunt ducimus laborum amet laboriosam animi nemo doloremque
            tenetur? Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Voluptas accusamus mollitia consequatur nobis, iste quam reiciendis
            commodi, expedita natus ratione fugit omnis cupiditate aperiam.
            Voluptatum sed provident hic ea illum. Lorem ipsum dolor Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Explicabo maiores quam
            rem maxime nulla provident. Sequi, adipisci vitae aliquid, laborum
            dolor perferendis odio soluta similique dolorum perspiciatis officia
            quaerat ad.
          </div>
        </div>
        <div v-if="view === 'arrests'">
          <div class="container">hello</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { onMounted } from "vue";
import Navbar from "@/components/Navbar.vue";

export default defineComponent({
  name: "Home",
  components: { Navbar },
  setup() {
    onMounted(() => {
      view.value = "home";
      console.log(view.value);
    });
    const body = document.querySelector("body");
    let view = ref("");

    const toggleActive = () => {
      body?.classList.toggle("active");
    };
    const changeView = (newView: string) => {
      console.log("newViewuuu", newView);
      view.value = newView;
      console.log("valueuu", view.value);
    };

    return { toggleActive, changeView, view };
  },
});
</script>
<style scoped lang="scss">
body.active .section {
  margin: 0;
  width: 100%;
}
.home {
  height: 100%;
  .side-nav {
    height: 100%;
    display: flex;
  }
  //width minus the width of sidebar
  .section {
    width: calc(100% - 225px);
    margin-left: 225px;
    transition: all 0.5s ease;
    .top_navbar {
      background: #fff;
      height: 50px;
      display: flex;
      align-items: center;
      padding: 0 30px;
      border: 1px solid #f5f6fa;
      .hamburger {
        a {
          font-size: 24px;
          color: #8d599f;
          &:hover {
            color: #cbaede;
          }
        }
      }
    }
    .container {
      margin: 30px;
      background: #fff;
      padding: 50px;
      line-height: 28px;
    }
  }
}
</style>
