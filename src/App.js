import "./App.css";
import React, { useState} from 'react'

function App() {
    // set cofficent value
//    const [descriment,setdescriment]=useState(0);
    const [coff, setcoff] = useState({a:"0",b: "0", c: "0"})
    const [mess,setmess]=useState();
    const [bgcl,setbgcl]=useState('white')
    const[anscl,setanscl]=useState('none')
// to form submission
    const handleClick = (e)=>{
        e.preventDefault();
        if(bgcl==='white') setbgcl('gray')
        else setbgcl('white')
        setanscl('inline')
        setTimeout(() => {
            setanscl('none')
        }, 5000);
        var a=Number(coff.a);
        var b=Number(coff.b);
        var c=Number(coff.c);
        if(a===0 && b===0 && c===0){
            setmess("please provide coffient ")
            return ;
        }
        console.log("if all coff is 0");
    // finding b^2-4ac
        var bs=Math.pow(b,2);
        var frac=4*a*c;
        var descriment=bs-frac;
        
        // making eq 
        var nb=b;
        if(b<0) nb=(-1)*b;
        var nc=c;
        if(c<0) nc=(-1)*c;
        var eq = `${a}x²${ b<0 ? "-":"+"}${nb}x${c<0 ? "-":"+"}${nc}`
        console.log(eq)
       
        // eqaution made 
       
        if(descriment<0) {
          setmess(` ${eq} =>
           d is negative, so root not exist ` );
          return }
        var denomerator=2*a;
        var rootdec=Math.pow(descriment,1/2);
        // console.log(rootdec);
        var root1=((-1)*b -rootdec)/denomerator;
        var root2=((-1)*b +rootdec)/denomerator;
        // console.log(root1,root2);
        // var xsqure="X²";
        // var sterm;
        // if(coff.b>=0){
        //     sterm="+";
        // }
        setmess(` ${eq} => root are : ${root1} and ${root2}`)
        // setcoff({a: "", b: "", c: ""})
    }

    const onChange = (e)=>{
        // this is syntex to set coff using input changinh data
        setcoff({...coff, [e.target.name]: e.target.value})
    }
    return (
        <div className="container my-3"  style={{backgroundColor:bgcl}}>
            <h2 style={{fontSize:'27px',fontFamily:'cursive'}}>Qudratic Equation Solver</h2>
            <form className="my-3" style={{fontSize:'25px'}}>
                <div className="mb-3">
                    <label htmlFor="a"  className="form-label">cofficent of X^2 (a) </label>
                    <input style={{fontSize:'25px'}} type="text" className="form-control" id="a" name="a" aria-describedby="emailHelp" value={coff.a} onChange={onChange}  /> 
                </div>
                <div className="mb-3">
                    <label htmlFor="b" className="form-label">cofficent of X (b) </label>
                    <input type="text" style={{fontSize:'25px'}}  className="form-control" id="b" name="b" value={coff.b} onChange={onChange}  />
                </div>
                <div className="mb-3">
                    <label htmlFor="c" className="form-label">constant term (c) </label>
                    <input type="text" style={{fontSize:'25px'}}  className="form-control" id="c" name="c" value={coff.c} onChange={onChange}  />
                </div>
                <button  type="submit"  className="btn btn-primary" onClick={handleClick}>GetAns</button>
            </form>
            <h1 style={{display: anscl }}>Your Answer</h1>
            <h1>{mess}</h1>
        </div>
    )
}

export default App;
