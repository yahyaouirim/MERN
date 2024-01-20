import React from 'react'
import Button from 'react-bootstrap/esm/Button'
// import 'Display.css'

function Display(props) {

    const {list, currentIndex,setList,taskDone}=props
    // function delete task 
    const handelDelete=(e)=>{
        e.preventDefault();
        const listRemove= list.filter((item, index)=> {return  index!== currentIndex} )   
        setList(listRemove);
    } 
// //Function to handle style change when the checkbox is clicked
    const handelchecked=(newtask)=> {
        const authorlist = list.map((t) => {
            if (t === newtask) {
                let updateAuthorlist = { ...t, taskDone: !t.taskDone }
                return updateAuthorlist;
            }
            else { return t;} 
        })
        setList(authorlist)
    }
  
    return (
        <div style={{display:"flex", flexDirection:"column"}}>
            {list.map((task,index)=>(
                <div>
                    < p key={index}  className={task.taskDone? "text-decoration-line-through ":""} >{task.txt} <input type="checkbox" className='mx-3' onChange={()=>handelchecked(task)}/><Button className='mx-3' onClick={handelDelete}>Delete</Button></p>
                </div>
            ))
            }    

        </div>
    )
        }

export default Display