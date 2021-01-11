import Vue from 'vue';                          // IMPORT VUE

document.addEventListener ("DOMContentLoaded", () => {

    new Vue ({                                  // CREATE NEW VUE OBJECT

        el: "#app",                              // THIS POINTS TO THE DIV #app                           
                                                // This is where the app will run (within the div)

        data: {                                 // data IS WHERE WE DEFINE ALL THE OBJECT/VARIABLES/ARRAYS ETC
            todos: ['Wash car', 'Go food shopping', 'Go for a drive', 'Finish Codeclan MVP within reasonable time', 'Check return flight'],
            newTask: ''
        },
        methods: {
            saveNewTask: function (){
                this.todos.push (this.newTask);
                this.newTask = '';
            }
        }
    })

})