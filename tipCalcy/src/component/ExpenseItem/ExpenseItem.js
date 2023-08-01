import Card from "../card/Card";
import "./ExpenseIntem.css";
export default function ExpenseItem(props){
    var totaltip=0;
   console.log("inside tip",props.id)
function calculationTip(){
    totaltip=(Number(props.expences)/Number(props.bill))*100;
    console.log("flooereg",Math.floor(totaltip))
}
calculationTip()
    return(
        <Card >
        <h5 className="Clist">{props.namee } is offering a tip of {Math.floor(totaltip)} rupee</h5>
        </Card>
    )
}