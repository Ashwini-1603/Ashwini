export default function LiftingStateUp(props){
    let dataLifting="lifting state";
    return(
        <>
            <h1>{props.data(dataLifting)}</h1>
        </>
    )
}
