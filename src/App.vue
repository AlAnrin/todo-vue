<template>
  <div id="app">
    <div class="nav-panel">
      <button v-for="list in lists"
              v-bind:key="list.id"
              v-bind:class="['tab-button', { active: currentList === list }]"
              v-on:click="clickOnList(list)">
        {{ list.title }}
      </button>
      <input id="listInput" placeholder="Новый список" v-if="isInputOpen"
             v-model="newListTitle"
             @keydown.enter.prevent = "editingCompleted(newListTitle)"
             @dblclick= "editList">
      <button :disabled="newListTitle.length < 1" v-tooltip.left="'Добавить список'"
              class="icon-button add-list-button" v-if="isInputOpen" @click="editingCompleted(newListTitle)">
        <i class="mdi mdi-24px mdi-content-save"></i>
      </button>
      <button v-tooltip.left="isInputOpen ? 'Отмена' : 'Добавить список'"
              :class="['icon-button', isInputOpen ? 'delete-list-button' : 'add-list-button']"
              @click="openInput()">
        <i :class="['mdi', 'mdi-24px', isInputOpen ? 'mdi-close-box' : 'mdi-folder-plus']"></i>
      </button>
      <div class="spacer"></div>
      <button v-tooltip.left="hints ? 'Скрыть подсказки' : 'Показать подсказки'"
              :class="['icon-button', 'hints-button', hints ? 'delete-list-button' : 'add-list-button']"
              @click="changeHints()">
        <i :class="['mdi', 'mdi-24px', hints ? 'mdi-help-circle' : 'mdi-help-circle-outline']"></i>
      </button>
      <ArrowComponent v-if="hints && (lists.length === 0 || currentList == null)"
                      v-bind:reverse="false"
                      v-bind:message="lists.length === 0 ? 'Создайте новый список' : 'Выберите список'"></ArrowComponent>
    </div>
    <div class="item">
      <div class="spacer"></div>
      <button v-tooltip.left="'Удалить список'" v-if="currentList != null" class="icon-button delete-list-button" @click="deleteList(currentList)">
        <i class="mdi mdi-24px mdi-delete-sweep"></i>
      </button>
    </div>
    <ListComponent v-if="currentList != null" v-bind:list="currentList"
                   v-bind:hints="hints" class="list"></ListComponent>
  </div>
</template>

<script>
  import ListComponent from './components/ListComponent.vue'
  import ArrowComponent from './components/ArrowComponent';
  import {mapActions} from "vuex";

  export default {
    name: 'App',
    components: {
      ArrowComponent,
      ListComponent
    },
    data() {
      return {
        currentList: undefined,
        isInputOpen: undefined,
        newListTitle: undefined
      };
    },
    created() {
      this.isInputOpen = false;
      this.newListTitle = '';
    },
    computed: {
      hints() {
        return this.$store.state.hints
      },
      keys() {
        return this.$store.state.keys
      },
      lists() {
        let res = [];
        for (const key of this.keys) {
          const listStr = window.localStorage.getItem(key);
          let list = [];
          if (listStr !== null && listStr != "") {
            list = listStr.split(';');
            list = list.map(item => JSON.parse(item));
          }
          res.push({id: key.split('!')[0], title: key.split('!')[1], toDos: list});
        }
        this.changeLists(res);
        return res;
      }
    },
    methods: {
      ...mapActions([
        'addList',
        'editList',
        'changeLists',
        'deletedList',
        'changeHints'
      ]),
      clickOnList(list) {
        if (this.currentList != null) {
          this.currentList = this.currentList.id === list.id ? undefined : list;
        }
        else this.currentList = list;
      },
      openInput() {
          this.isInputOpen = !this.isInputOpen;
      },
      editingCompleted (title) {
        if (title.length > 1) {
          this.addList({title});
          this.isInputOpen = false;
          this.newListTitle = '';
        }
      },
      deleteList(list) {
        this.deletedList(list);
        this.currentList = null;
      }
    }
  }
</script>

<style>
  @media screen and (max-width: 800px) {
    .arrow-container-reverse {
      left: 70% !important;
    }
  }
  @media screen and (max-width: 700px) {
    .arrow-container-reverse {
      left: 60% !important;
    }
  }
  @media screen and (max-width: 600px) {
    .arrow-container-reverse {
      left: 50% !important;
    }
  }
  @media screen and (max-width: 500px) {
    .arrow-container-reverse {
      left: 40% !important;
    }
  }
  @media screen and (max-width: 400px) {
    .arrow-container-reverse {
      left: 20% !important;
    }
  }
  body {
    margin: 0;
  }
  input, button {
    outline: none;
  }
  .teach {
    position: absolute;
    z-index: 999;
    top: 30px;
    left: 30px;
  }
  .spacer {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  #listInput {
    margin-left: 5px
  }
  .nav-panel {
    background: #43528b;
    text-align: left;
    align-items: stretch;
    display: flex;
  }
  .tab-button {
    background: transparent;
    color: #8fd6ff;
    border: none;
    cursor: pointer;
    font-size: large;
    font-weight: bold;
    margin: 0;
    padding: 10px;
    box-shadow: none !important;
  }
  .tab-button:hover {
    background: #90a3d0;
    color: #00014c;
    box-shadow: none !important;
  }
  .tab-button.active {
    background: #040e2d;
    color: #ffffff;
    box-shadow: none !important;
  }
  .icon-button {
    background: transparent;
    color: #0091e4;
    border: none;
    cursor: pointer;
    padding: 5px;
    box-shadow: none !important;
    outline: none;
  }
  .hints-button {
    padding: 5px 10px 5px 5px;
    margin: 10px;
  }
  .icon-button:enabled:hover {
    color: #325cf1;
  }
  .icon-button:disabled {
    color: gray;
  }
  .add-list-button:enabled:hover {
    color: #73ec73;
  }
  .div-delete-list-button {
    display: flex;
  }
  delete-list-button {
    margin: 5px 10px;
  }
  .delete-list-button:hover {
    color: #9e1111 !important;
  }

  .item {
    display: flex;
    flex-direction: row;
    margin: 5px;
    padding: 5px;
  }

  .tooltip {
    display: block !important;
    z-index: 10000;
  }

  .tooltip .tooltip-inner {
    background: black;
    color: white;
    border-radius: 16px;
    padding: 5px 10px 4px;
  }

  .tooltip .tooltip-arrow {
    width: 0;
    height: 0;
    border-style: solid;
    position: absolute;
    margin: 5px;
    border-color: black;
    z-index: 1;
  }

  .tooltip[x-placement^="right"] {
    margin-left: 5px;
  }

  .tooltip[x-placement^="right"] .tooltip-arrow {
    border-width: 5px 5px 5px 0;
    border-left-color: transparent !important;
    border-top-color: transparent !important;
    border-bottom-color: transparent !important;
    left: -5px;
    top: calc(50% - 5px);
    margin-left: 0;
    margin-right: 0;
  }

  .tooltip[x-placement^="left"] {
    margin-right: 5px;
  }

  .tooltip[x-placement^="left"] .tooltip-arrow {
    border-width: 5px 0 5px 5px;
    border-top-color: transparent !important;
    border-right-color: transparent !important;
    border-bottom-color: transparent !important;
    right: -5px;
    top: calc(50% - 5px);
    margin-left: 0;
    margin-right: 0;
  }

  .tooltip.popover .popover-inner {
    background: #f9f9f9;
    color: black;
    padding: 24px;
    border-radius: 5px;
    box-shadow: 0 5px 30px rgba(black, .1);
  }

  .tooltip.popover .popover-arrow {
    border-color: #f9f9f9;
  }

  .tooltip[aria-hidden='true'] {
    visibility: hidden;
    opacity: 0;
    transition: opacity .15s, visibility .15s;
  }

  .tooltip[aria-hidden='false'] {
    visibility: visible;
    opacity: 1;
    transition: opacity .15s;
  }
</style>
