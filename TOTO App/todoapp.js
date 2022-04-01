console.log("script Started")



const app = new Vue({
    el:"#app",
    data:{
        heading : "Todo App suing Vue Js",
        id:1,
        todotext:'',
        done:false,
        todos : [],
    },
    methods:{
        reset(){
            this.id++,
            this.todotext='',
            this.done = false
        },
        // todo json object
        addTodo(){
            console.log("subitted ..................")
            let todo={
                id:this.id,
                todotext:this.todotext,
                done:this.done,
                
            }
            console.log(todo)
            this.todos.push(todo)
            this.reset()
        },
        deleteTodo(todo){
            const idx = this.todos.indexOf(todo)
            this.todos.splice(idx,1)
        }
    }
})