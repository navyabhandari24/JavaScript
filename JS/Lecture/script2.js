function compressing(upload){
    setTimeout(()=>{
        console.log("Compressing the video...");
        upload(taskCompleted)
    },3000)
}

function uploading(taskComplete){
    setTimeout(()=>{
        console.log("Uploading the video..");
        taskComplete()
    },3000)
}

function taskCompleted(){
    setTimeout(() => {
        console.log("Task Completed!!");
    }, 3000);
}

compressing(uploading)