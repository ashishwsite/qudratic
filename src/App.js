import "./App.css";
import React, {useContext, useState} from 'react'

function App() {

    
    // set cofficent value
   const [descriment,setdescriment]=useState(0);
    const [coff, setcoff] = useState({a: 0, b: 0, c: 0})
    const [mess,setmess]=useState();
// to form submission
    const handleClick = (e)=>{
        e.preventDefault();
        var bs=coff.b*coff.b;
        var ac=4*(coff.a)*(coff.c);
        setdescriment(bs-ac);
        if(descriment<0) {
          setmess(`EQ: ${coff.a}X^2 + ${coff.b}X +${coff.c} =>
           d is negative so root not exist ` );
          return descriment;}
        var denomerator=2*coff.a;
        var rootdec=Math.pow(descriment,1/2);
        console.log(rootdec);
        var root1=((-1)*coff.b -rootdec)/denomerator;
        var root2=((-1)*coff.b +rootdec)/denomerator;
        console.log(root1,root2);
        setmess(` EQ: (${coff.a})X^2 + (${coff.b})X +(${coff.c}) => root are ${root1} and ${root2}`)
        // setcoff({a: "", b: "", c: ""})
    }

    const onChange = (e)=>{
        // this is syntex to set coff using input changinh data
        setcoff({...coff, [e.target.name]: e.target.value})
    }
    return (
        <div className="container my-3">
            <form className="my-3">
                <div className="mb-3">
                    <label htmlFor="a" className="form-label">cofficent of X^2 (a) </label>
                    <input type="number" className="form-control" id="a" name="a" aria-describedby="emailHelp" value={coff.a} onChange={onChange}  /> 
                </div>
                <div className="mb-3">
                    <label htmlFor="b" className="form-label">cofficent of X (b) </label>
                    <input type="number" min="-999999" className="form-control" id="b" name="b" value={coff.b} onChange={onChange}  />
                </div>
                <div className="mb-3">
                    <label htmlFor="c" className="form-label">constant term (c) </label>
                    <input type="number" min="-999999" className="form-control" id="c" name="c" value={coff.c} onChange={onChange}  />
                </div>
                <button  type="submit" className="btn btn-primary" onClick={handleClick}>GetAns</button>
            </form>
            <h3>{mess}</h3>
        </div>
    )
}

export default App;
