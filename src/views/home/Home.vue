<template>
  <div id="root-container">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside :width="isCollapse ? '64px' : '200px'">
<!--          <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">-->
<!--            <el-radio-button :label="false">open</el-radio-button>-->
<!--            <el-radio-button :label="true">close</el-radio-button>-->
<!--          </el-radio-group>-->

          <el-button type="plain" @click="toggleCollapsed" id="collapse-menu-button">
            <el-icon :name="isCollapse ? 's-unfold' : 's-fold'" />
          </el-button>




          <el-menu :default-active="$route.path" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
                   :collapse="isCollapse" router>
            <el-submenu :index="menu.path" :key="index" v-for="(menu, index) in $router.options.routes">
              <template slot="title">
                <i class="el-icon-setting"></i>
                <span slot="title">{{ menu.name }}</span>
              </template>
              <el-menu-item-group>
                <!--          <span slot="title">分组一</span>-->
                <el-menu-item :index="menu.path + '/' + menuItem.path" :key="index" v-for="(menuItem,index) in menu.children">{{
                    menuItem.name
                  }}
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-container>
          <el-main>
            <router-view></router-view>
          </el-main>
        </el-container>
      </el-container>
          <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      isCollapse: false,

    };
  },

  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    toggleCollapsed() {
      this.isCollapse = !this.isCollapse;
    },
  },


  computed: {
    menus() {
      let routes = this.$router.getRoutes();
      console.log('routes ===>',routes);
      let menus = Array.from(routes);


      let res = [];
      for (let menu of menus) {
        if (menu.parent === undefined) {
          menu.children = []
          res.push(menu)
        }
      }

      console.log('==res==', res)
      console.log('==menus==', menus)


      for (let menu of menus) {
        if (menu.parent === undefined) {
          continue
        }
        for (let re of res) {
          if (menu.parent.path === re.path) {
            menu.path = menu.parent.path + menu.path
            re.children.push(menu)
          }
        }
      }

      console.log('=======res========', res)
      return res
    }
  },

  created() {

    console.log('home was created ...');

  }


}
</script>

<style scoped>
/*.el-container:first-child {
  background: coral;
}

.el-header {
  background: cornflowerblue;
}

.el-aside {
  background: yellow;
}

.el-main {
  background: darkgreen;
}*/


.el-header {
  background: rgba(100, 149, 237, 0.6);
}


.el-aside {
  overflow: hidden;
}

.el-main {
  min-height: 100vh;
}

.el-footer {

  margin-top: 10px;
  bottom: 0;
  width: 100%;
  box-sizing: border-box;
  padding: 0 20px;
  background: rgba(150,200,150,0.3);
}

.el-submenu__title {

}

#collapse-menu-button {
  border: none;
  font-size: 24px;
}
</style>