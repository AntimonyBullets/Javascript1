// fetch() using async-await.
async function getAllusers() {
    try {
        const response = await fetch("https://api.github.com/users/AntimonyBullets"); // fetch() retrieves the data from the link passed as it's first parameter and it returns a Promise object which can be handled by then()-catch() or async-await.
        const data = await response.json(); // such a task also takes time and needs to be awaited.
        console.log(data);
    }
    catch (error) {
        console.log(error);
    }
}
getAllusers();

//fetch() using then()-catch()
fetch("https://dummyjson.com/c/4952-0acf-4886-adb0").
then((response)=> response.json()).
then((response)=> console.log(response));