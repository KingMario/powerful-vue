<template>
  <h4 class="dropdown-header" @click.stop>
    <slot></slot>
  </h4>
</template>

<style rel="stylesheet/css">
  h4.dropdown-header {
    cursor: default;
  }
</style>
