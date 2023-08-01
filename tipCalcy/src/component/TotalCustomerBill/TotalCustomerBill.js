import "./TotalCustomerBill.css"
function TotalCustomerBill(props){
    console.log("inside total cu bill",props.tBill.length);
    let totalTip=0;
    let totalCustomer=0;
    props.tBill.map((item,i)=>{  
        let per=(Number(item.Experence)/Number(item.bill))*100;
        totalTip+=per;
        console.log("value of per"+totalTip)
        totalCustomer+=Number(i);
        console.log(typeof i)
    })
    console.log("t"+totalTip)
    return (
        <div className="total-bill-container">
        <h3><span className="head-tip">calculate tip and Customer</span></h3>
        <div className="bill-content">
            <div className="main">
                <h4>total customer</h4>
                <h6>{props.tBill.length}</h6>
            </div>
            <div className="main">
                <h4>total Tip</h4>
                <h6>{Math.floor(totalTip)}</h6>
            </div>
        </div>
       
        </div>
    )
}
export default TotalCustomerBill;