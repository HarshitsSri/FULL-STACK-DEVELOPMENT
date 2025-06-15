    var new_task=document.getElementById('add-task');
    const add_btn=document.getElementById('btn');
    add_btn.addEventListener('click',()=>{
        var newTaskText=new_task.value.trim();
        if(newTaskText==""){
            alert("Add new Task");
            return;
        }
        new_task.value ="";
    })