(function(t){function e(e){for(var n,l,r=e[0],a=e[1],d=e[2],u=0,p=[];u<r.length;u++)l=r[u],Object.prototype.hasOwnProperty.call(o,l)&&o[l]&&p.push(o[l][0]),o[l]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n]);c&&c(e);while(p.length)p.shift()();return s.push.apply(s,d||[]),i()}function i(){for(var t,e=0;e<s.length;e++){for(var i=s[e],n=!0,r=1;r<i.length;r++){var a=i[r];0!==o[a]&&(n=!1)}n&&(s.splice(e--,1),t=l(l.s=i[0]))}return t}var n={},o={app:0},s=[];function l(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,l),i.l=!0,i.exports}l.m=t,l.c=n,l.d=function(t,e,i){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(l.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)l.d(i,n,function(e){return t[e]}.bind(null,n));return i},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/todo-vue-test/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],a=r.push.bind(r);r.push=e,r=r.slice();for(var d=0;d<r.length;d++)e(r[d]);var c=a;s.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"034f":function(t,e,i){"use strict";i("85ec")},1613:function(t,e,i){},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("2b0e"),o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("div",{staticClass:"nav-panel"},[t._l(t.lists,(function(e){return i("button",{key:e.id,class:["tab-button",{active:t.currentList===e}],on:{click:function(i){return t.clickOnList(e)}}},[t._v(" "+t._s(e.title)+" ")])})),t.isInputOpen?i("input",{directives:[{name:"model",rawName:"v-model",value:t.newListTitle,expression:"newListTitle"}],attrs:{id:"listInput",placeholder:"Новый список"},domProps:{value:t.newListTitle},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:(e.preventDefault(),t.editingCompleted(t.newListTitle))},dblclick:t.editList,input:function(e){e.target.composing||(t.newListTitle=e.target.value)}}}):t._e(),t.isInputOpen?i("button",{directives:[{name:"tooltip",rawName:"v-tooltip.left",value:"Добавить список",expression:"'Добавить список'",modifiers:{left:!0}}],staticClass:"icon-button add-list-button",attrs:{disabled:t.newListTitle.length<1},on:{click:function(e){return t.editingCompleted(t.newListTitle)}}},[i("i",{staticClass:"mdi mdi-24px mdi-content-save"})]):t._e(),i("button",{directives:[{name:"tooltip",rawName:"v-tooltip.left",value:t.isInputOpen?"Отмена":"Добавить список",expression:"isInputOpen ? 'Отмена' : 'Добавить список'",modifiers:{left:!0}}],class:["icon-button",t.isInputOpen?"delete-list-button":"add-list-button"],on:{click:function(e){return t.openInput()}}},[i("i",{class:["mdi","mdi-24px",t.isInputOpen?"mdi-close-box":"mdi-folder-plus"]})]),i("div",{staticClass:"spacer"}),i("button",{directives:[{name:"tooltip",rawName:"v-tooltip.left",value:t.hints?"Скрыть подсказки":"Показать подсказки",expression:"hints ? 'Скрыть подсказки' : 'Показать подсказки'",modifiers:{left:!0}}],class:["icon-button","hints-button",t.hints?"delete-list-button":"add-list-button"],on:{click:function(e){return t.changeHints()}}},[i("i",{class:["mdi","mdi-24px",t.hints?"mdi-help-circle":"mdi-help-circle-outline"]})]),!t.hints||0!==t.lists.length&&null!=t.currentList?t._e():i("ArrowComponent",{attrs:{reverse:!1,message:0===t.lists.length?"Создайте новый список":"Выберите список"}})],2),i("div",{staticClass:"item"},[i("div",{staticClass:"spacer"}),null!=t.currentList?i("button",{directives:[{name:"tooltip",rawName:"v-tooltip.left",value:"Удалить список",expression:"'Удалить список'",modifiers:{left:!0}}],staticClass:"icon-button delete-list-button",on:{click:function(e){return t.deleteList(t.currentList)}}},[i("i",{staticClass:"mdi mdi-24px mdi-delete-sweep"})]):t._e()]),null!=t.currentList?i("ListComponent",{staticClass:"list",attrs:{list:t.currentList,hints:t.hints}}):t._e()],1)},s=[],l=(i("d81d"),i("d3b7"),i("ac1f"),i("1276"),i("ddb0"),i("5530")),r=i("b85c"),a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"row"},[t._l(t.list.toDos,(function(e){return i("div",{key:e.id,class:["list-item",e.done?"list-item-done":""]},[t.editId!==e.id?i("span",{class:["todo-span",e.done?"is-done":""]},[t._v(t._s(e.name))]):t._e(),t.editId===e.id?i("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"todo.name"}],staticClass:"todo-input",domProps:{value:e.name},on:{input:function(i){i.target.composing||t.$set(e,"name",i.target.value)}}}):t._e(),i("div",{staticClass:"spacer"}),-1===t.editId||t.editId!==e.id?i("button",{directives:[{name:"tooltip",rawName:"v-tooltip.left",value:"Редактировать",expression:"'Редактировать'",modifiers:{left:!0}}],staticClass:"icon-button",on:{click:function(i){return t.edit(e.id)}}},[i("i",{staticClass:"mdi mdi-24px mdi-circle-edit-outline"})]):t._e(),-1!==t.editId&&t.editId===e.id?i("button",{directives:[{name:"tooltip",rawName:"v-tooltip.left",value:"Сохранить",expression:"'Сохранить'",modifiers:{left:!0}}],staticClass:"icon-button",on:{click:function(i){return t.save(t.list,e,e.name)}}},[i("i",{staticClass:"mdi mdi-24px mdi-content-save"})]):t._e(),i("button",{directives:[{name:"tooltip",rawName:"v-tooltip.left",value:e.done?"Не закончено":"Закончено",expression:"todo.done ? 'Не закончено' : 'Закончено'",modifiers:{left:!0}}],staticClass:"icon-button",on:{click:function(i){return t.toggleTodo({list:t.list,todo:e})}}},[i("i",{class:["mdi","mdi-24px",e.done?"mdi-comment-remove":"mdi-comment-check"]})]),i("button",{directives:[{name:"tooltip",rawName:"v-tooltip.left",value:"Удалить",expression:"'Удалить'",modifiers:{left:!0}}],staticClass:"icon-button delBtn",on:{click:function(i){return t.deleteTodo({list:t.list,todo:e})}}},[i("i",{staticClass:"mdi mdi-24px mdi-delete"})])])})),i("div",{class:[t.isOpenInput?"list-item":"item"]},[t.isOpenInput?i("input",{directives:[{name:"model",rawName:"v-model",value:t.newToDo,expression:"newToDo"}],staticClass:"todo-input",domProps:{value:t.newToDo},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:(e.preventDefault(),t.addToDo(t.list,t.newToDo))},input:function(e){e.target.composing||(t.newToDo=e.target.value)}}}):t._e(),i("div",{staticClass:"spacer"}),t.isOpenInput?t._e():i("button",{directives:[{name:"tooltip",rawName:"v-tooltip.left",value:"Добавить новое задание",expression:"'Добавить новое задание'",modifiers:{left:!0}}],staticClass:"icon-button delBtn",on:{click:function(e){return t.openAddToDo(!1)}}},[i("i",{staticClass:"mdi mdi-24px mdi-chart-box-plus-outline"})]),t.hints&&0===t.list.toDos.length&&!t.isOpenInput?i("ArrowComponent",{attrs:{reverse:!0,message:"Создайте новое задание"}}):t._e(),t.isOpenInput?i("button",{directives:[{name:"tooltip",rawName:"v-tooltip.left",value:"Отмена",expression:"'Отмена'",modifiers:{left:!0}}],staticClass:"icon-button delBtn",on:{click:function(e){return t.openAddToDo(!0)}}},[i("i",{staticClass:"mdi mdi-24px mdi-close-box"})]):t._e(),t.isOpenInput?i("button",{directives:[{name:"tooltip",rawName:"v-tooltip.left",value:"Сохранить",expression:"'Сохранить'",modifiers:{left:!0}}],staticClass:"icon-button",attrs:{disabled:t.newToDo.length<1},on:{click:function(e){return t.addToDo(t.list,t.newToDo)}}},[i("i",{staticClass:"mdi mdi-24px mdi-content-save"})]):t._e()],1)],2)},d=[],c=(i("a9e3"),i("2f62")),u=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{class:["arrow-container",t.reverse?"arrow-container-reverse":""]},[i("div",{class:["arrow",t.reverse?"arrow-reverse":""]},[i("div",{staticClass:"point"})]),i("span",{class:["span-message",t.reverse?"span-message-reverse":""]},[t._v(t._s(t.message))])])},p=[],f={name:"ArrowComponent",props:{message:String,reverse:Boolean}},m=f,v=(i("66d4"),i("2877")),h=Object(v["a"])(m,u,p,!1,null,"636d2beb",null),b=h.exports,g={name:"ListComponent",props:{list:{name:String,toDos:[]},hints:Boolean},components:{ArrowComponent:b},data:function(){return{isOpenInput:void 0,newToDo:void 0,editId:Number}},created:function(){this.editId=-1,this.isOpenInput=!1,this.newToDo=""},methods:Object(l["a"])(Object(l["a"])({},Object(c["b"])(["editTodo","toggleTodo","deleteTodo","addTodo"])),{},{edit:function(t){this.editId=t},save:function(t,e,i){this.editId=-1,this.editTodo({list:t,todo:e,title:i})},openAddToDo:function(t){this.isOpenInput=!this.isOpenInput,t&&(this.newToDo="")},addToDo:function(t,e){e.length>1&&(this.addTodo({list:t,title:e}),this.newToDo="")}})},w=g,O=(i("e097"),Object(v["a"])(w,a,d,!1,null,"713b5789",null)),y=O.exports,T={name:"App",components:{ArrowComponent:b,ListComponent:y},data:function(){return{currentList:void 0,isInputOpen:void 0,newListTitle:void 0}},created:function(){this.isInputOpen=!1,this.newListTitle=""},computed:{hints:function(){return this.$store.state.hints},keys:function(){return this.$store.state.keys},lists:function(){var t,e=[],i=Object(r["a"])(this.keys);try{for(i.s();!(t=i.n()).done;){var n=t.value,o=window.localStorage.getItem(n),s=[];null!==o&&""!=o&&(s=o.split(";"),s=s.map((function(t){return JSON.parse(t)}))),e.push({id:n.split("!")[0],title:n.split("!")[1],toDos:s})}}catch(l){i.e(l)}finally{i.f()}return this.changeLists(e),e}},methods:Object(l["a"])(Object(l["a"])({},Object(c["b"])(["addList","editList","changeLists","deletedList","changeHints"])),{},{clickOnList:function(t){null!=this.currentList?this.currentList=this.currentList.id===t.id?void 0:t:this.currentList=t},openInput:function(){this.isInputOpen=!this.isInputOpen},editingCompleted:function(t){t.length>1&&(this.addList({title:t}),this.isInputOpen=!1,this.newListTitle="")},deleteList:function(t){this.deletedList(t),this.currentList=null}})},L=T,k=(i("034f"),Object(v["a"])(L,o,s,!1,null,null,null)),x=k.exports;i("7db0"),i("c975"),i("a15b"),i("a434"),i("b0c0"),i("25f0");function I(t,e,i){var n=e.toDos.find((function(t){return t.id==i.id}));if(null!=n){e.toDos[e.toDos.indexOf(n)]=i;var o=t.lists.find((function(t){return t.id==e.id}));null!=o&&(t.lists[t.lists.indexOf(o)]=e)}}n["a"].use(c["a"]);var C=new c["a"].Store({state:{keys:window.localStorage.getItem("keys")?window.localStorage.getItem("keys").split(","):[],hints:!window.localStorage.getItem("hints")||"true"===window.localStorage.getItem("hints"),lists:void 0,unique_key:Number},actions:{addTodo:function(t,e){var i=t.commit,n=e.list,o=e.title;i("addTodo",{list:n,title:o}),console.log},addList:function(t,e){var i=t.commit,n=e.title;i("addList",{title:n}),console.log},changeLists:function(t,e){var i=t.commit;i("changeLists",{lists:e}),console.log},toggleTodo:function(t,e){var i=t.commit,n=e.list,o=e.todo;i("toggleTodo",{list:n,todo:o})},editList:function(t,e){var i=t.commit,n=e.list,o=e.title;i("editList",{list:n,title:o})},editTodo:function(t,e){var i=t.commit,n=e.list,o=e.todo,s=e.title;i("editTodo",{list:n,todo:o,title:s})},deleteTodo:function(t,e){var i=t.commit,n=e.list,o=e.todo;i("deleteTodo",{list:n,todo:o})},deletedList:function(t,e){var i=t.commit;i("deletedList",{list:e})},changeHints:function(t){var e=t.commit;e("changeHints")}},mutations:{toggleTodo:function(t,e){var i=e.list,n=e.todo;n.done=!n.done,I(t,i,n)},editList:function(t,e){var i=e.list,n=e.title;i.name=n},editTodo:function(t,e){var i=e.list,n=e.todo,o=e.title;n.title=o,I(t,i,n)},deleteTodo:function(t,e){var i=e.list,n=e.todo,o=i.toDos.indexOf(n);i.toDos.splice(o,1);var s=t.lists.find((function(t){return t.id===i.id}));null!=s&&(t.lists[t.lists.indexOf(s)]=i)},addTodo:function(t,e){var i=e.list,n=e.title;i.toDos.push({id:i.id+""+(i.toDos.length+1),name:n,done:!1});var o=t.lists.find((function(t){return t.id===i.id}));null!=o&&(t.lists[t.lists.indexOf(o)]=i)},addList:function(t,e){var i=e.title;t.unique_key=t.keys.length+1,t.keys.push(t.unique_key+"!"+i),t.lists.push({id:t.unique_key,title:i,toDos:[]})},changeLists:function(t,e){var i=e.lists;t.lists=i},deletedList:function(t,e){var i=e.list;t.keys.splice(t.keys.indexOf(i.id+"!"+i.title),1),t.lists.splice(t.lists.indexOf(i),1)},changeHints:function(t){t.hints=!t.hints}},plugins:[function(t){t.subscribe((function(t,e){var i=e.hints;"changeHints"==t.type&&window.localStorage.setItem("hints",i.toString())})),t.subscribe((function(t,e){var i=e.keys;window.localStorage.removeItem("keys");var n=i.join(",");window.localStorage.setItem("keys",n)})),t.subscribe((function(t,e){var i,n=e.lists,o=Object(r["a"])(n);try{for(o.s();!(i=o.n()).done;){var s,l=i.value,a="",d=Object(r["a"])(l.toDos);try{for(d.s();!(s=d.n()).done;){var c=s.value;a+=JSON.stringify(c)+";"}}catch(p){d.e(p)}finally{d.f()}var u=a.split("");u.splice(a.length-1,1),a=u.join(""),window.localStorage.setItem(l.id+"!"+l.title,a)}}catch(p){o.e(p)}finally{o.f()}}))}]}),_=i("e37d");i("5363");n["a"].use(_["a"]),n["a"].config.productionTip=!1,new n["a"]({store:C,ArrowComponent:b,render:function(t){return t(x)}}).$mount("#app")},"66d4":function(t,e,i){"use strict";i("e71b")},"85ec":function(t,e,i){},e097:function(t,e,i){"use strict";i("1613")},e71b:function(t,e,i){}});
//# sourceMappingURL=app.385dd5c1.js.map