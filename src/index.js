import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import './index.css';
import './App.css';
import {Router, Route, browserHistory, Link} from "react-router";
import TodoForm from "./component/TodoForm"

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

// class TodoList extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//         names: ["syed","kashif","raza"]
//     }
    
//   }
//   render() {
//     return(
//        <ul>
//        {this.state.names.map(function(name){
//         return <TodoItem detail={this.state.firstName}>
//       })
//     }
      
//       </ul>
//     )
//   }
    
//   }


// class TodoItem extends React.Component {
//   render() {
//     return(
//       <li>
//           {this.props.detail}
//       </li>
//     )
//   }
// }

// ReactDOM.render (
//   <TodoList />
//   ,
//   document.getElementById("root")
// )
// class TodoList extends React.Component {
//   constructor() {
//     super();

//     this.state ={
//       names: ["syed","kashif","raza","syeda","bukhari",]
//     } 
//   }
//   render() {
//     return(
//       <ul>
//       {
//         this.state.names.map(function(name){
//           return <TodoItem key={name} detail={name}/>
//         })
//       }
      
      
//       </ul>

//     )
//   }
// } 
// class TodoItem extends React.Component {
//   render() {
//     return(
//       <li>
//         {this.props.detail}
//       </li>
//     )
//   }
// } 

// ReactDOM.render(
//   <TodoList />
//   ,
//   document.getElementById("root")
// )










// class TodoList1 extends React.Component {
//   constructor(props) {
//     super(props);
//     this.changStatus=this.changStatus.bind(this);
//     this.state ={
//     tasks:[{
//       name:"salman Hayder",
//       completed: false
//     },
//     {
//       name:"salman waqar",
//       completed: false
//     },
//     {
//       name:"salman qaamat",
//       completed: false
//     }]
//     } 
//   }
//   changStatus(index) {
//     console.log(this.state.tasks[index]);
//     var tasks = this.state.tasks;
//     var task = tasks[index];
//     task.completed= !task.completed;
//     this.setState({
//       tasks:tasks
//     })
  
  
// }
//   render() {
//     return(


//       //ab yaha per map k function  k sath task b likhaingai    map(function(task)) or key mai task.name q k oper pehlai yani is sai operwali misal mai sirf state mai names tha or phir is misal mai state mai task or task mai name hai

//       <ul>
//       {
//         this.state.tasks.map((task, index) =>{
//           return <TodoItem1 key={task.name} index={index} clickHandler={this.changStatus} details={task}/>
//         })
//       }
//       </ul>

//     )
//   }
// } 
// class TodoItem1 extends React.Component {
//   render() {
//     return(
//       <li noClick={() =>{this.props.clickHandler(this.props.index);
//       }} className={this.props.details.completed ? "completed" : ""}>
//         {this.props.details.name}
//       </li>
//     )
//   }
// } 

// ReactDOM.render(
//   <TodoList1 />
//   ,
//   document.getElementById("root1")
// )











// class TodoList2 extends React.Component {
//   constructor(props) {
//     super(props);
//     this.changStatus2=this.changStatus2.bind(this);
//     this.state = {
//       tasks: [{
//         name: "Bay Chize",
//         completed: false
//       },
//       {
//         name: "Bay kashmir",
//         completed: false
//       },
//       {
//         name: "Bay Banaspati",
//         completed: false
//       }
//       ]
//       }
    


//   }

//   changeStatus2(index) {
//     console.log(this.state.tasks[index]);

//   }

//   render() {
//     return(
//       <ul>
//       {this.state.tasks.map((task ,index) =>{
//         return <TodoItem2 index={index} clickHandler={this.changeStatus2} key={task.name} detail={task} />
//       })}
      
//       </ul>

//     )
//   }
// }



// class TodoItem2 extends React.Component {
//   render() {
//     return(
//       <li onClick={()=> {
//         this.props.clickHandler(this.props.index);
//       }} className={this.props.detail.completed ? "completed" : ""} >
      
//       {this.props.detail.name}
//       </li>
      
//     )
//   }
// }
// ReactDOM.render(
//   <TodoList2 />
//   ,
//   document.getElementById("root2")
// )

//  class TimeWrapper extends React.Component{
// constructor(props){
// super(props);
// this.state = {
// time: 5,
// }
// }

// render(){
    
// return <p>{setInterval(function() {
    
// return this.state({
    
// time: time - 1
// })
// },1000)
// }</p>
// }
// }


// ReactDOM.render(
// <TimeWrapper />,
// document.getElementById('root')
// );



// class TodoItem extends React.Component {
//   constructor() {
//     super();
//     this.changeStatus=this.changeStatus.bind(this);
   
//     this.state = {
//        tasks: [{
//       name: "syed",
//       completed : false
//     },
//     {
//       name: "raza",
//       completed : false
//     },
//     {
//       name: "bukhari",
//       completed : false
//     }
//     ]
//     }

//   }
//   changeStatus(index) {
//     //console.log(this.state.tasks[index]);
//     var  tasks =this.state.tasks;
//     var task = tasks[index];
//     task.completed = !task.completed;
//     this.setState({
//         tasks:tasks
//     })

//   }

// render() {
//   return(
//     <ul>
//     {
//       this.state.tasks.map((task, index) =>{
//         return <TodoList key={task.name} index={index} clickHandler={this.changeStatus} details={task} />
//       })
//     }
      
//     </ul>
//   )
// }
// }

// class TodoList extends React.Component {
// render() {
//   return(
//     <li onClick={() =>{
//         this.props.clickHandler(this.props.index)
//     }} className={this.props.details.completed ? "completed" : ""}>
//     {this.props.details.name}
//     </li>
    
//   )
// }
// }

// ReactDOM.render(
//   <TodoItem />
//   ,
//   document.getElementById("root")
// )














class TodoItem extends React.Component {
    constructor() {
        super();
        this.changeStatus=this.changeStatus.bind(this);
        this.state ={
            tasks:[{name: "Ali Imran",
            completed: false
            },
            {name: "Ali Raza",
                completed: false
            },
            {name: "Ali Rakha",
                completed: false
            }

        ]
        }
    }
    changeStatus(index) {
        //console.log(this.state.tasks[index]);
        var tasks =this.state.tasks;
        var task = tasks[index];
        task.completed=!task.completed;
        this.setState({
            tasks:tasks
        })

    }


    render() {
        return(
            <section>
               <TodoForm />
                <ul>
                    {
                        this.state.tasks.map((task,index)=>{
                            return <TodoList index={index} clickHandler={this.changeStatus} key={task.name} details={task}/>
                        })
                    }
                    
                </ul>
            </section>
        )
    }
}
class TodoList extends React.Component {
    render() {
        return(
            <li onClick={()=>{
                this.props.clickHandler(this.props.index)
            }} className={this.props.details.completed ? "completed" : ""}>
                {this.props.details.name}
            </li>
        )
    }
}
// ReactDOM.render(
//     <TodoItem />
//     ,
//     document.getElementById("root")
// )
const App = () => (
    <div>
       <h2>App</h2>
       <Link to="/about"> About Component</Link><br />
       <Link to="/"> App Component</Link><br />
        <Link to="/alink">Link Component</Link><br />
        <Link to="/sport">Sport Component</Link><br />
        <Link to="/city">City Component</Link><br />
        <Link to="/pakistan">Pakistan Component</Link><br />
        <Link to="/karachi" >Karachi Component</Link><br />
        </div>
  
);
const About =() => (
    <div>
        <h2>About</h2>
        <Link to="/"> App Component</Link>
     </div>   
);
const aLink =()=> (
    <div>
    <h2>Link </h2>
        <Link to="/alink">Link Component</Link>
    </div>
);
const Sport = () => (
    <div> 
        <h2> Sport </h2>
        <Link to="/sport">Sport Component</Link>
    </div>
);
const City = () => (
    <div>
        <h2>City</h2>
        <Link to="/city">City Component</Link>
    </div>
);

const Karachi =() => (
    <div>
    <h2>Karachi</h2>
    <Link to="/karachi" >Karachi Component</Link>
    </div>
);
const Pakistan = () => (
    <div>
        <h2>Pakistan</h2>
        <Link to="/pakistan">Pakistan Component</Link>
    </div>
);
 
ReactDOM.render(
  <div>
    <TodoItem />
    <Router history={browserHistory}>
        <Route path="/" component={App} />
        <Route path="/about" component={About} />
        <Route path="/alink" component={aLink} />
        <Route path="/sport" component={Sport} />
        <Route path="/city" component={City} />
        <Route path="/karachi" component={Karachi} />
        <Route path="/pakistan" component={Pakistan} />
    </Router>      
  </div>
  ,
    document.getElementById("root")
)