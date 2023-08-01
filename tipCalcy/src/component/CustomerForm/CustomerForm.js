import { useState } from "react";
import "./CustomerForm.css"
function CunstomerForm(props) {
  const [bill, setBill] = useState("");
  const [cname, setCname] = useState("");
  const [experence, setExperence] = useState("");

  const billHandler = (e) => {
    setBill(e.target.value);
    // console.log(e)
  };
  const nameHandler = (e) => {
    setCname(e.target.value);
  };
  const ExperenceHandler = (e) => {
    setExperence(e.target.value);
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
    const InputData = {
      bill: bill,
      Cname: cname,
      Experence: experence,
    };
    console.log(InputData);
    props.onCustomerData(InputData);
    setBill("");
    setCname("");
    setExperence("");
  };
  return (
    <>
      <form onSubmit={onSubmitHandler} >
      
        <div class="row mb-4">
          <div class="col">
            <div class="form-outline">
            <label class="form-label" for="form6Example4">
           Bill
          </label>
              <input
                type="number"
                required
                value={bill}
                onChange={billHandler}
                placeholder="0"
              />
            </div>
          </div>
        </div>

      

        <div class="form-outline mb-4">
        <label class="form-label" for="form6Example1">
              How Was The Service
              </label>
          <select onChange={ExperenceHandler}>
            <option value="0">select</option>
            <option value="20">excellent</option>
            <option value="10">Moderate </option>
            <option value="5">bad</option>
          </select>
         
        </div>

        <div class="form-outline mb-4">
        <label class="form-label" for="form6Example1">
             Name
              </label>
          <input type="text" value={cname} onChange={nameHandler} />
        </div>
        <button type="submit"  class="btn btn-info mb-4">
        Add customer
        </button>
      </form>

      {/* <form onSubmit={onSubmitHandler}>
        <label>Enter your bill amount</label>
        <input type="number" required value={bill} onChange={billHandler} />
        <br />
        <label>how was the service </label>
        <select onChange={ExperenceHandler}>
          <option value="0">select</option>
          <option value="20">excellent</option>
          <option value="10">Moderate </option>
          <option value="5">bad</option>
        </select>
        <input type="text" value={cname} onChange={nameHandler} />
        <button type="submit">Add customer</button>
      </form> */}
    </>
  );
}
export default CunstomerForm;
