import { defineStore } from "pinia";

export const useKanbanStore = defineStore("kanban", {
  state: () => ({
    columns: [
      {
        title: "Yangi lidlar",
        color: '#166199',
        tasks: [
          {
            id: "1",
            name: "Xushnudbek Ayitboyev",
            phone: '+99890 036 60 09',
            date: "2023-08-01 16:32",
            type: "Telegram",
          },
          {
            id: "2",
            name: "Xushnudbek Ayitboyev",
            phone: '+99890 036 60 09',
            date: "2023-08-01 16:32",
            type: "Telegram",
          },
          {
            id: "3",
            name: "Xushnudbek Ayitboyev",
            phone: '+99890 036 60 09',
            date: "2023-08-01 16:32",
            type: "Telegram",
          },
          {
            id: "4",
            name: "Xushnudbek Ayitboyev",
            phone: '+99890 036 60 09',
            date: "2023-08-01 16:32",
            type: "Telegram",
          },

        ],
      },
      {
        title: "Saralangan",
        color: '#008E76',
        tasks: [
          {
            id: "1",
            name: "Xushnudbek Ayitboyev",
            phone: '+998900366009',
            date: "2023-08-01 16:32",
            type: "Telegram",
          },
        ],
      },
      {
        title: "Kursga yozilgan",
        color: '#FFAA00',

        tasks: [
          {
            id: "1",
            name: "Xushnudbek Ayitboyev",
            phone: '+99890 036 60 09',
            date: "2023-08-01 16:32",
            type: "Telegram",
          },
        ],
      },
      {
        title: "To'lov qilgan",
        color: '#00AEED',
        tasks: [
          {
            id: "1",
            name: "Xushnudbek Ayitboyev",
            phone: '+99890 036 60 09',
            date: "2023-08-01 16:32",
            type: "Telegram",
          },
        ],
      },
    ]
  }),
  actions: {
    addTaskToColumn(columnTitle, task) {
      const column = this.columns.find((col) => col.title === columnTitle);
      if (column) {
        column.tasks.push(task);
      } else {
        console.error(`Column "${columnTitle}" not found.`);
      }
    },
    DeleteTask(taskId) {
      for (const column of this.columns) {
        const index = column.tasks.findIndex((task) => task.id === taskId);
        if (index !== -1) {
          column.tasks.splice(index, 1);
          break;
        }
      }
    },
  },

  persist: true,
});