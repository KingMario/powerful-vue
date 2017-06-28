<template>
  <div class="dropdown" :class="[{open: opened}, clrPosition]" @click="clicked">
    <button class="dropdown-toggle btn" :class="toggleClass" type="button" @click.stop="toggleClicked">
      <slot name="toggle"></slot>
      <clr-icon-vue
        shape="caret"
        :dir="subordinate ? 'right' : opened ? 'up' : 'down'">
      </clr-icon-vue>
    </button>
    <div class="dropdown-menu" v-show="opened" @click="itemClicked">
      <slot :clickedItem="clickedItem" :opened="opened"></slot>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { hyphenate } from '@/js/utils'

  export default {
    name: 'clrDropdown',
    data () {
      return {
        clickedItem: undefined
      }
    },
    props: {
      opened: {
        type: Boolean,
        required: true
      },
      parentOpened: {
        type: Boolean,
        required: false
      },
      siblingClicked: {
      },
      toggleClass: {
        type: String,
        default: 'btn-primary'
      },
      position: {
        type: String,
        default: 'bottom-left'
      },
      closeOnOutsideClick: {
        type: Boolean,
        default: true
      },
      closeOnItemClick: {
        type: Boolean,
        default: true
      }
    },
    computed: {
      clrPosition () {
        let position = hyphenate(this.position)

        return !this.subordinate
          ? [
            'bottom-left',
            'bottom-right',
            'top-left',
            'top-right',
            'left-bottom',
            'left-top',
            'right-bottom',
            'right-top'
          ].indexOf(position) > -1 ? position : 'bottom-left'
          : [
            'left-bottom',
            'left-top',
            'right-bottom',
            'right-top'
          ].indexOf(position) > -1 ? position : 'right-top'
      },
      subordinate () {
        return this.$parent && this.$parent.$options.name === this.$options.name
      }
    },
    methods: {
      updateOpened (val) {
        this.$emit('update:opened', val)
      },
      close () {
        this.updateOpened(false)
      },
      clicked (ev) {
        if (!this.closeOnItemClick ||
          !this.subordinate) {
          ev.stopPropagation()
        }
      },
      toggleClicked () {
        if (this.subordinate) {
          this.$parent.clickedItem = this
        }
        this.updateOpened(!this.opened)
      },
      itemClicked () {
        this.clickedItem = 'Line Item'
        this.closeOnItemClick && this.close()
      }
    },
    watch: {
      opened (val) {
        if (val) {
          this.clickedItem = undefined
        }
      },
      siblingClicked (val) {
        if (val !== this && this.opened) {
          this.close()
        }
      },
      parentOpened (val) {
        if (!val && this.opened) {
          this.close()
        }
      }
    },
    created () {
      if (this.closeOnOutsideClick) {
        document.addEventListener('click', this.close)
      }
    },
    destroyed () {
      if (this.closeOnOutsideClick) {
        document.removeEventListener('click', this.close)
      }
    }
  }
</script>

<style scoped>
  .dropdown-toggle.btn-link:focus, .dropdown-toggle.btn-outline:focus, .dropdown-toggle[class*=btn-outline-]:focus {
    outline: none;
  }
</style>
