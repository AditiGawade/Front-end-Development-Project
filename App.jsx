import AppName from "../components/AppName";
import AppTodo from "../components/AddTodo";

import Todoitem from "../components/Todoitem";
import "./App.css";
function App()
{
  return( < center class ="todo-container">
    <AppName/>
    <AppTodo/>

    
    <div class="container text-center">
 
  
  <div class="row">
        <div class="col-6">
          <input type="text" placeholder="Enter to do here"></input>
        </div>

    <div class="col-4">
      <input type="date"></input>
    </div>
    <div class="col-2">
      <button type="button" class="btn btn-success">Add</button>

    </div>
  </div>
</div>
<div class="row">
        <div class="col-6">
          buy milk
        </div>

    <div class="col-4">
      4-10-2025
    </div>
    <div class="col-2">
<button type="button" class="btn btn-danger">Delete</button>

    </div>
    <div class="row">
        <div class="col-6">
          Ice cream
        </div>

    <div class="col-4">
      4-11-2025
    </div>
    <div class="col-2">
<button type="button" class="btn btn-danger">Delete</button>

    </div>
  </div>
  </div>
  </center>
  );
  
}
export default App;
