function ReuseComponent(){
    let studentData=[
        {name:"Adam",age:101,rollNo:1,address:"Singapur"},
        {name:"joy",age:102,rollNo:2,address:"Paris"},
        {name:"philips",age:103,rollNo:3,address:"Japan"}

    ]
    return(
studentData.map(item=>{
    <h1>{item}</h1>
})
    )
}