import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

function changeToDo(state, list, todo) {
    const findToDo = list.toDos.find(x => x.id == todo.id);
    if (findToDo != null) {
        list.toDos[list.toDos.indexOf(findToDo)] = todo;
        const findList = state.lists.find(y => y.id == list.id);
        if (findList != null)
            state.lists[state.lists.indexOf(findList)] = list;
    }
}

export default new Vuex.Store({
    state: {
        keys: window.localStorage.getItem('keys') ? window.localStorage.getItem('keys').split(',') : [],
        hints: window.localStorage.getItem('hints') ? window.localStorage.getItem('hints') === 'true' : true,
        lists: undefined,
        unique_key: Number
    },
    actions: {
        addTodo ({ commit }, { list, title }) {
            commit('addTodo', {
                list, title
            });
            console.log
        },
        addList({ commit }, { title }) {
          commit('addList', {
              title,
          });
          console.log
        },
        changeLists({ commit }, lists) {
            commit('changeLists', {
                lists
            });
            console.log
        },
        toggleTodo ({ commit }, {list, todo}) {
            commit('toggleTodo', {
                list, todo
            })
        },
        editList({ commit }, { list, title }) {
            commit('editList', { list, title })
        },
        editTodo ({ commit }, { list, todo, title }) {
            commit('editTodo', { list, todo, title })
        },
        deleteTodo ({ commit }, {list, todo}) {
            commit('deleteTodo', {
                list, todo
            })
        },
        deletedList ({ commit }, list) {
            commit('deletedList', {
                list
            })
        },
        changeHints ({ commit }) {
            commit('changeHints')
        }
    },
    mutations: {
        toggleTodo (state, { list, todo }) {
            todo.done = !todo.done;
            changeToDo(state, list, todo);
        },
        editList (state, { list, title }) {
            list.name = title
        },
        editTodo (state, { list, todo, title }) {
            todo.title = title;
            changeToDo(state, list, todo);
        },
        deleteTodo (state, { list, todo}) {
            const todoIndex = list.toDos.indexOf(todo);
            list.toDos.splice(todoIndex, 1);
            const find = state.lists.find(x => x.id === list.id);
            if (find != null) state.lists[state.lists.indexOf(find)] = list;
        },
        addTodo (state, {list, title}) { // TODO: state not update
            list.toDos.push({
                id: list.id + '' + (list.toDos.length + 1),
                name: title,
                done: false
            })
            const find = state.lists.find(x => x.id === list.id);
            if (find != null) state.lists[state.lists.indexOf(find)] = list;
        },
        addList (state, { title }) {
            state.unique_key = state.keys.length + 1;
            state.keys.push(state.unique_key + '!' + title);
            state.lists.push({
                id: state.unique_key,
                title: title,
                toDos: []
            });
        },
        changeLists(state, { lists }) {
            state.lists = lists;
        },
        deletedList(state, { list }) {
            state.keys.splice(state.keys.indexOf(list.id + '!' + list.title), 1);
            state.lists.splice(state.lists.indexOf(list), 1);
        },
        changeHints(state) {
            state.hints = !state.hints
        }
    },
    plugins: [
        // TODO: ?
        store => {
            store.subscribe((mutation, { hints }) => {
                if (mutation.type == 'changeHints')
                    window.localStorage.setItem('hints', hints.toString());
            })
            store.subscribe((mutation, { keys }) => {
                window.localStorage.removeItem('keys')
                let strKeys = keys.join(',');
                window.localStorage.setItem('keys', strKeys);
            })
            store.subscribe((mutation, { lists }) => {
                for (let list of lists) {
                    let res = '';
                    for (let todo of list.toDos)
                        res += JSON.stringify(todo) + ';';
                    let arr = res.split('');
                    arr.splice(res.length - 1, 1);
                    res = arr.join('');
                    window.localStorage.setItem(list.id + '!' + list.title, res)
                }
            })
        }
    ]
})