<template>
  <div class="home">

    <div class="columns">
      <div class="column">
        <h3 class="title is-1">To-Do</h3>
        <draggable class="list-group" :list="todoList" group="people" @change="log">
          <div
            class="list-group-item"
            v-for="(element, index) in todoList"
            :key="element.name">
            <p> Tarea: {{ element.name }}</p>
            <p> Index: {{ index }}</p>
            <p> Prioridad: {{ element.priority }}</p>
            <p> Id: {{ element.id }}</p>
          </div>
      </draggable>
      </div>
      <div class="column">
         <h3  class="title is-1">Doing</h3>
        <draggable class="list-group" :list="doingList" group="people" @change="log">
          <div
            class="list-group-item"
            v-for="(element, index) in doingList"
            :key="element.name">
              {{ element.name }} {{ index }}
          </div>
        </draggable>
      </div>
       <div class="column">
         <h1 class="title is-1">Done</h1>
        <draggable class="list-group" :list="doneList" group="people" @change="log">
          <div
            class="list-group-item"
            v-for="(element, index) in doneList"
            :key="element.name">
              {{ element.name }} {{ index }}
          </div>
        </draggable>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import draggable from 'vuedraggable'
import data from '../utils/data'

export default {
  name: 'home',
  components: {
    draggable
  },
  mounted () {
    this.todoList = data
  },
  data () {
    return {
      todoList: [],
      doingList: [],
      doneList: []
    }
  },
  methods: {
    add: function () {
    },
    replace: function () {
    },
    log: function (evt) {
      console.log(evt)
    }
  }
}
</script>
