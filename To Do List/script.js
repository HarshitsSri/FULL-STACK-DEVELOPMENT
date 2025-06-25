

    var newTask=document.getElementById('add-task');
    var btn=document.getElementById('btn');
    var taskContainer=document.getElementById('taskes');

    btn.addEventListener('click',()=>{
        var newTaskText=newTask.value.trim();
        if(newTaskText==""){
            alert("Add new Task");
            return;
        }
        var taskdiv=document.createElement('div');

        var taskSpan=document.createElement('span');
        taskSpan.textContent=newTaskText;

        var doneButton=document.createElement('button');
        doneButton.textContent='Done';
        doneButton.addEventListener('click',()=>{
            taskSpan.style.textDecoration='line-through';
        });
        
        var clearButton=document.createElement('button');
        clearButton.textContent='Clear';
        clearButton.addEventListener('click',function (){
            this.parentElement.remove();
        });

        taskdiv.appendChild(taskSpan);
        taskdiv.appendChild(doneButton);
        taskdiv.appendChild(clearButton);
        taskContainer.appendChild(taskdiv);
        newTask.value ='';
        
    });