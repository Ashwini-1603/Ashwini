import ExpenseItem from "../ExpenseItem/ExpenseItem";
import CustomerFormContainer from "../CustomerFormContainer/CustomerFormContainer";
export default function Expenses(props){
 console.log( props.customerData);
    return(
        <>
         
    
    <table class="table">
    <thead>
      <tr>
        <th scope="col">Sr.No</th>
        <th scope="col">Customer List</th>
      </tr>
    </thead>
    <tbody>
    {props.customerData.map((item,i)=> 
      <tr>
        <th scope="row">{i+1}</th>
        <td><ExpenseItem key={i} id={i} namee={item.Cname} bill={item.bill} expences={item.Experence}/></td>
      </tr>
      )}
    </tbody>
  </table>
         
           
            
            
        </>
    )
}