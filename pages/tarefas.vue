<template>
  <div class="grid p-4 place-items-center">
    <h1 class="text-4xl font-bold">Tarefas</h1>

    <img
      v-if="waiting"
      src="~/assets/img/loader.svg"
      class="w-12 mt-6"
    />

    <template v-else>
      <form
        class="flex w-full max-w-screen-xl mt-6 space-x-2"
        @submit.prevent="addTask"
      >
        <input
          v-model="inputText"
          type="text"
          placeholder="O que precisa ser feito?"
          class="w-full px-2 py-1 transition-all border border-gray-500 rounded outline-none focus:ring focus:ring-blue-300 hover:border-blue-900"
        >
        <button
          class="px-3 py-1 text-sm font-semibold text-white uppercase transition-all bg-blue-800 rounded outline-none hover:bg-blue-900 focus:outline-none focus:ring focus:ring-blue-300"
        >
          Adicionar
        </button>
      </form>

      <ul
        v-if="tasks.length"
        class="w-full max-w-screen-xl py-2 mt-6 bg-white border border-gray-400 divide-y divide-gray-300 shadow-lg rounded-xl"
      >
        <li
          v-for="task of sortedTasks"
          :key="task._id"
          tabindex="0"
          class="flex items-center px-4 py-2 transition-all outline-none cursor-pointer hover:bg-blue-200 focus:ring focus:ring-blue-300"
          :class="{
            'line-through text-gray-400': task.done
          }"
          @click.left="toggleTask(task)"
          @click.prevent.right="deleteTask(task)"
          @keydown.enter="toggleTask(task)"
          @keydown.delete="deleteTask(task)"
        >
          <span class="flex-1">{{ task.text }}</span>

          <small
            :class="{
              'text-gray-700': !task.done,
              'text-gray-400': task.done
            }"
          >
            {{ task.createdAt | dateFormat }}
          </small>
        </li>
      </ul>
    </template>
  </div>
</template>

<script>
import io from 'socket.io-client'

export default {
  data() {
    return {
      waiting: false,
      inputText: '',
      tasks: []
    }
  },

  mounted() {
    const socket = io('http://localhost:8080')

    socket.on('todo-created', created => {
      this.tasks.push(created)
    })

    socket.on('todo-updated', updated => {
      const task = this.tasks.find(t => t._id === updated._id)
      task.done = updated.done
    })

    socket.on('todo-removed', removed => {
      this.tasks = this.tasks.filter(t => t._id !== removed._id)
    })
  },

  async fetch() {
    try {
      this.waiting = true
      this.tasks = await this.$axios.$get('http://localhost:8080/todos')
    } catch {
      alert('Opa, deu pau no carregamento.')
    } finally {
      this.waiting = false
    }
  },

  filters: {
    dateFormat(value) {
      if (typeof value === 'string') value = new Date(value)
      return value.toLocaleString('pt-BR')
    }
  },

  computed: {
    sortedTasks() {
      // Se quiser ordenar em ordem alfabética:
      // return this.tasks.sort((a, b) => a.text.localeCompare(b.text))

      // Se quiser ordenar por data de criação:
      return this.tasks.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    }
  },

  methods: {
    async addTask() {
      try {
        this.waiting = true
        const task = { text: this.inputText }
        await this.$axios.$post('http://localhost:8080/todos', task)
        this.inputText = ''
      } catch {
        alert('Opa, deu pau no envio.')
      } finally {
        this.waiting = false
      }
    },

    async toggleTask(task) {
      try {
        this.waiting = true
        await this.$axios.$put(`http://localhost:8080/todos/${task._id}`, {
          text: task.text,
          createdAt: task.createdAt,
          updatedAt: new Date(),
          done: !task.done
        })
      } catch {
        alert('Opa, deu pau na atualização.')
      } finally {
        this.waiting = false
      }
    },

    async deleteTask(task) {
      try {
        this.waiting = true
        await this.$axios.$delete(`http://localhost:8080/todos/${task._id}`)
      } catch {
        alert('Opa, deu pau na exclusão.')
      } finally {
        this.waiting = false
      }
    }
  }
}
</script>
