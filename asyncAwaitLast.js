/*
JS can be used to behave syncronous for asyncronous functions
when there's a async we need to wait.
since js is non blocking it by default so it doesn't waits for async to be resolved and moves on.
by using await we can stop the compiler to wait for the results for function in saync and then move on, 
this can be used to keep things in place even if the server is responding at different times. 
*/

/*
Before async await: 
 output: 1,2,4,5,3  (Queue not in line)
 after Await : 
 output will be : 1,2,3,4,5 as async will wait for 3 till it resolved with either solution or error.
*/


console.log('person1: show ticket')
console.log('person2: show ticket')

const promiseWifeBringingTicks = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('ticket')
    }, 3000);
})

const getPopcorn = promiseWifeBringingTicks.then((t) => {
    console.log('wife: I have the tics')
    console.log('husband: we should go in!')
    console.log('wife: no Im hungry')
    return new Promise((resolve, reject) => resolve(`${t} popcorn`))
});

const getButter = getPopcorn.then((t) => {
    console.log('husband: i got some popcorn')
    console.log('husband: we should go in!')
    console.log('wife: no Im need butter on my Popcorn')
    return new Promise((resolve, reject) => resolve(`${t} butter`))
})

getButter.then((t) => console.log(t))
console.log('person4: show ticket')
console.log('person5: show ticket')