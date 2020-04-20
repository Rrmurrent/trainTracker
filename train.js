template: `
<div class = "container">
        <div class = "row">
            <div class = "col-6">
                <h3>Add a new movie!</h3>
                <input type = "text" v-on:keyup = "changeNewInput($event)"/>
                <button v-on:click = "pushValue">Submit</button>
                
                <h3>Movie List:</h3>
                <ul class = "list-group">
                    <li class = "list-group-item list-group-item-info" v-for="title in movies">{{title}}</li>
                </ul>
            </div>