<template>
  <div class="hello">
    <div>
      <label>
        <input type="checkbox" v-model="showMenu"> Show the Menu
      </label>
    </div>
    <clr-dropdown position="bottomLeft"
                  v-if="showMenu"
                  :opened.sync="opened"
                  toggleClass="btn-outline"
                  :closeOnOutsideClick="false">
      <template slot="toggle">
        Hello Clarity-Vue
      </template>
      <template scope="scope">
        <clr-dropdown-header>
          Header is here
        </clr-dropdown-header>
        <clr-dropdown-item v-for="i in 6" :key="i">
          Item {{i}}
        </clr-dropdown-item>
        <clr-dropdown-divider></clr-dropdown-divider>
        <clr-dropdown position="rightBottom"
                      :opened.sync="subMenuOpened"
                      :closeOnItemClick="false"
                      :closeOnOutsideClick="false"
                      :siblingClicked="scope.clickedItem">
          <span slot="toggle">Sub Menu</span>
          <template scope="scope">
            <clr-dropdown position="leftBottom"
                          :opened.sync="subSubMenuOpened"
                          :siblingClicked="scope.clickedItem">
              <span slot="toggle">Sub Sub Menu</span>
              <template scope="scope">
                <clr-dropdown-header>
                  Sub menu header is here
                </clr-dropdown-header>
                <clr-dropdown position="rightBottom"
                              :opened.sync="lastSubMenuOpened"
                              :closeOnOutsideClick="false"
                              :siblingClicked="scope.clickedItem">
                  <span slot="toggle">Last Sub Menu</span>
                  <clr-dropdown-item v-for="i in 2" :key="i">
                    Last Sub Item {{i}}
                  </clr-dropdown-item>
                </clr-dropdown>
                <clr-dropdown-item v-for="i in 2" :key="i">
                  Sub Sub Item {{i}}
                </clr-dropdown-item>
                <clr-dropdown-divider></clr-dropdown-divider>
                <clr-dropdown-item v-for="i in 2" :key="i" @click="subSubclickedItem(i)">
                  Sub Sub Item {{i + 2}}
                </clr-dropdown-item>
              </template>
            </clr-dropdown>
            <clr-dropdown-item v-for="i in 3" :key="i">
              Sub Item {{i}}
            </clr-dropdown-item>
            <clr-dropdown position="rightBottom"
                          :opened.sync="last2ndSubMenuOpened"
                          :closeOnOutsideClick="false"
                          :siblingClicked="scope.clickedItem">
              <span slot="toggle">Last 2nd Sub Menu</span>
              <clr-dropdown-item v-for="i in 2" :key="i">
                Last 2nd Sub Item {{i}}
              </clr-dropdown-item>
            </clr-dropdown>
          </template>
        </clr-dropdown>
      </template>
    </clr-dropdown>
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
  import ClrDropdown from './dropdown/ClrDropdown'
  import ClrDropdownDivider from './dropdown/ClrDropdownDivider'
  import ClrDropdownItem from './dropdown/ClrDropdownItem'
  import ClrDropdownHeader from './dropdown/ClrDropdownHeader'

  export default {
    name: 'hello',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        showMenu: true,
        opened: false,
        subMenuOpened: false,
        subSubMenuOpened: false,
        lastSubMenuOpened: false,
        last2ndSubMenuOpened: false
      }
    },
    methods: {
      subSubclickedItem (idx) {
        console.log(idx)
      }
    },
    components: {
      ClrDropdown,
      ClrDropdownHeader,
      ClrDropdownItem,
      ClrDropdownDivider
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
