<template>
  <div class="grid p-4 mt-4 place-items-center">
    <PageTitle>{{ $t('tasks') }}</PageTitle>

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
          :placeholder="$t('whatNeedToBeDone')"
          class="w-full px-2 py-1 transition-all border border-gray-500 rounded outline-none focus:ring focus:ring-blue-300 hover:border-blue-900"
        >
        <button
          class="px-3 py-1 text-sm font-semibold text-white uppercase transition-all bg-blue-800 rounded outline-none hover:bg-blue-900 focus:outline-none focus:ring focus:ring-blue-300"
        >
          {{ $t('add') }}
        </button>
      </form>

      <ul
        v-if="sortedTasks.length"
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
            {{ $d(new Date(task.createdAt), 'dateTime') }}
          </small>
        </li>
      </ul>

      <p class="mt-6 text-sm text-gray-800">
        {{ $tc('taskCount', sortedTasks.length) }}
      </p>
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
      alert(this.$t('operationError'))
    } finally {
      this.waiting = false
    }
  },

  computed: {
    sortedTasks() {
      // Filtrando tasks pelo idioma atual...
      const tasksFiltered = this.tasks.filter((t) => t.locale === this.$i18n.locale || !t.locale)

      // Se quiser ordenar em ordem alfabética:
      // return this.tasks.sort((a, b) => a.text.localeCompare(b.text))

      // Se quiser ordenar por data de criação:
      return tasksFiltered.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    }
  },

  methods: {
    async addTask() {
      try {
        this.waiting = true
        const task = { text: this.inputText, locale: this.$i18n.locale }
        await this.$axios.$post('http://localhost:8080/todos', task)
        this.inputText = ''
      } catch {
        alert(this.$t('operationError'))
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
        alert(this.$t('operationError'))
      } finally {
        this.waiting = false
      }
    },

    async deleteTask(task) {
      try {
        this.waiting = true
        await this.$axios.$delete(`http://localhost:8080/todos/${task._id}`)
      } catch {
        alert(this.$t('operationError'))
      } finally {
        this.waiting = false
      }
    }
  }
}
</script>
