<template>
    <div class="row">
        <div :class="['list-item', todo.done? 'list-item-done' : '']" v-for="todo in list.toDos" :key="todo.id">
            <span v-if="editId !== todo.id" :class="['todo-span', todo.done? 'is-done' : '']">{{todo.name}}</span>
            <input class="todo-input" v-if="editId === todo.id" v-model="todo.name">
            <div class="spacer"></div>
            <button class="icon-button" v-tooltip.left="'Редактировать'" v-if="editId === -1 || editId !== todo.id" @click="edit(todo.id)">
                <i class="mdi mdi-24px mdi-circle-edit-outline"></i>
            </button>
            <button class="icon-button" v-tooltip.left="'Сохранить'" v-if="editId !== -1 && editId === todo.id" @click="save(list, todo, todo.name)">
                <i class="mdi mdi-24px mdi-content-save"></i>
            </button>
            <button class="icon-button" v-tooltip.left="todo.done ? 'Не закончено' : 'Закончено'" @click="toggleTodo({list, todo})">
                <i :class="['mdi', 'mdi-24px', todo.done ? 'mdi-comment-remove' : 'mdi-comment-check']"></i>
            </button>
            <button class="icon-button delBtn" v-tooltip.left="'Удалить'" @click="deleteTodo({list, todo})">
                <i class="mdi mdi-24px mdi-delete"></i>
            </button>
        </div>
        <div :class="[isOpenInput ? 'list-item' : 'item']">
            <input class="todo-input" v-if="isOpenInput" v-model="newToDo"
                   @keydown.enter.prevent = "addToDo(list, newToDo)">
            <div class="spacer"></div>
            <button class="icon-button delBtn" v-tooltip.left="'Добавить новое задание'" v-if="!isOpenInput" @click="openAddToDo(false)">
                <i class="mdi mdi-24px mdi-chart-box-plus-outline"></i>
            </button>
            <ArrowComponent v-if="hints && list.toDos.length === 0 && !isOpenInput"
                            v-bind:reverse="true"
                            v-bind:message="'Создайте новое задание'"></ArrowComponent>
            <button class="icon-button delBtn" v-if="isOpenInput" v-tooltip.left="'Отмена'" @click="openAddToDo(true)">
                <i class="mdi mdi-24px mdi-close-box"></i>
            </button>
            <button class="icon-button" :disabled="newToDo.length < 1"
                    v-if="isOpenInput" v-tooltip.left="'Сохранить'" @click="addToDo(list, newToDo)">
                <i class="mdi mdi-24px mdi-content-save"></i>
            </button>
        </div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'
    import ArrowComponent from "@/components/ArrowComponent";
    export default {
        name: "ListComponent",
        props: {
            list: {
                name: String,
                toDos: []
            },
            hints: Boolean
        },
        components: {
            ArrowComponent
        },
        data() {
            return {
                isOpenInput: undefined,
                newToDo: undefined,
                editId: Number
            }
        },
        created() {
            this.editId = -1;
            this.isOpenInput = false;
            this.newToDo = '';
        },
        methods: {
            ...mapActions([
                'editTodo',
                'toggleTodo',
                'deleteTodo',
                'addTodo'
            ]),
            edit(id) {
                this.editId = id;
            },
            save(list, todo, title) {
                this.editId = -1;
                this.editTodo({list, todo, title})
            },
            openAddToDo(flag) {
                this.isOpenInput = !this.isOpenInput;
                if (flag) this.newToDo = '';
            },
            addToDo(list, title) {
                if (title.length > 1) {
                    this.addTodo({list, title});
                    // this.isOpenInput = !this.isOpenInput;
                    this.newToDo = '';
                }
            }
        }
    }
</script>

<style scoped>
    .delBtn:hover {
        color: #9e1111 !important;
    }
    .list-item {
        margin: 5px;
        border: 1px solid black;
        padding: 5px;
        text-align: left;
        display: flex;
        flex-direction: row;
    }
    .list-item:hover {
        cursor: pointer;
        background: #c6c6c6;
    }
    .list-item-done {
        border: 1px solid green;
        background: #d5efc7;
    }
    .list-item-done:hover {
        cursor: inherit;
        background: #d5efc7;
    }
    .todo-span {
        margin: auto;
        font-weight: bold;
        font-size: large;
    }
    .todo-input {
        width: -webkit-fill-available;
        font-size: inherit;
    }
    .is-done {
        text-decoration: line-through;
        font-weight: normal !important;
        font-size: medium;
    }
</style>