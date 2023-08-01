import Table from 'react-bootstrap/Table';
function UniqueKey(){
    let studentData=[
        {name:"Adam",age:101,rollNo:1,address:[
            {hn:101,city:"pune",country:"India"},
            {hn:102,city:"delhi",country:"China"}
            ,{hn:103,city:"nashik",country:"Africa"}
        ]},
        {name:"joy",age:102,rollNo:2,address:[
            {hn:10,city:"mumbai",country:"India"},
            {hn:11,city:"noida",country:"India"}
            ,{hn:12,city:"mahad",country:"India"}
        ]},
        {name:"philips",age:103,rollNo:3,address:[
            {hn:15,city:"bitoda",country:"India"},
            {hn:16,city:"waae",country:"India"}
            ,{hn:17,city:"januna",country:"India"}
        ]}
    
    ]
    return(
        <div>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <td>name</td>
                    <td>rollNo</td>
                    <td>Address</td>
                </tr>
            </thead>
            <tbody>
            {
        studentData.map((item,i)=> 
                <tr key={i}>
                    <td>{item.name}</td>
                    <td>{item.rollNo}</td>
                    <td>
                        {
                            item.address.map((data)=>{
                                <Table>
                                <thead>
                                    <tr key={i}>
                                        <td>{item.address.hn}</td>
                                        <td>City</td>
                                        <td>Country</td>
                                    </tr>
                                </thead> 
                            </Table>
                            })
                        }
                    </td>       
                </tr>
          )}  </tbody>
        </Table> 
        
        </div>
   )
}
export default UniqueKey;