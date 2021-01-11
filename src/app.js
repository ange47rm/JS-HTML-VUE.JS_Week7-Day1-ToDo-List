import Vue from 'vue';                          // IMPORT VUE

document.addEventListener ("DOMContentLoaded", () => {

    new Vue ({                                  // CREATE NEW VUE OBJECT

        el: "#app",                              // THIS POINTS TO THE DIV #app                           
                                                // This is where the app will run (within the div)

        data: {                                 // data IS WHERE WE DEFINE ALL THE OBJECT/VARIABLES/ARRAYS ETC
            todos: [{taskName: "Wash Car", priority: 'Low'},
                    {taskName: "Food shopping", priority: 'High'},
                    {taskName: "Finish homework", priority: 'Low'},
                    {taskName: "Pay rent", priority: 'High'}
        ],
            newTask: {taskName:'', priority: ''}
        },
        methods: {
            saveNewTask: function (){
                this.todos.push (this.newTask);
                this.newTask = {taskName:'', priority: ''};
            }
        }
    })

})