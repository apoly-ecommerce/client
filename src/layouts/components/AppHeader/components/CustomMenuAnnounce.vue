<template>
  <li class="NavBar_CustomMenu__item DropdownMenu">
    <a href="javascript:;" class="NavBar_CustomMenu__link DropdownMenu__btn NavBar_MenuLink"
      @click.prevent="activeDropdownMenu(tabName)"
    >
      <i class="NavBar_CustomMenu__icon fas fa-bullhorn"></i>
    </a>
    <ul class="DropdownMenu__table"
      v-if="dropdownName && dropdownName===tabName"
    >
      <i
        class="fas fa-times DropdownMenu__btn--close"
        @click="activeDropdownMenu('')"
      />
      <li class="DropdownMenu__title">You have 0 unread Announce</li>
      <li class="DropdownMenu__divider"></li>
      <li class="DropdownMenu__footer">
        <a href="" class="DropdownMenu__link">See All Announce</a>
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  name: 'custom-menu-announce',
  props: {
    dropdownName: { type: String, default: '' }
  },
  data() {
    return {
      tabName: 'announce'
    };
  },
  methods: {
    activeDropdownMenu(name) {
      this.$emit('eventActiveDropdownMenu', name);
    }
  }
}
</script>