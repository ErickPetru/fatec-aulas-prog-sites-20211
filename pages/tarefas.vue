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
          v-for="task of tasks"
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
export default {
  data() {
    return {
      waiting: false,
      inputText: '',
      tasks: []
    }
  },

  async fetch() {
    try {
      this.waiting = true
      this.tasks = await this.$axios.$get('http://localhost:8080/todos')
      this.tasks.forEach(t => t.createdAt = new Date(t.createdAt))
    } catch {
      alert('Opa, deu pau no carregamento.')
    } finally {
      this.waiting = false
    }
  },

  filters: {
    dateFormat(value) {
      return value.toLocaleString('pt-BR')
    }
  },

  methods: {
    async addTask() {
      try {
        this.waiting = true
        const task = {
          text: this.inputText,
          createdAt: new Date()
        }

        await this.$axios.$post('http://localhost:8080/todos', task)
        this.$fetch()
        this.inputText = ''
      } catch {
        alert('Opa, deu pau no envio.')
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
        this.$fetch()
      } catch {
        alert('Opa, deu pau na atualização.')
        this.waiting = false
      }
    },

    async deleteTask(task) {
      try {
        this.waiting = true
        await this.$axios.$delete(`http://localhost:8080/todos/${task._id}`)
        this.$fetch()
      } catch {
        alert('Opa, deu pau na exclusão.')
        this.waiting = false
      }
    }
  }
}
</script>
