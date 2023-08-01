import Form from 'react-bootstrap/Form';


function BootstrapForm() {
    let val=2;
    var studentsData=["ashwini","saurabh","shivani"]
  return (
    <div>
          {
    studentsData.map((data)=><h1>{data}</h1>)
    }
    {/* this is not leagle to iterate the value inside the return intead that use for loop inside the return */}
    {/* {
        for(val==2){
            console.log("hello")
        }
    } */}
    </div>
  
  );
}

export default BootstrapForm;