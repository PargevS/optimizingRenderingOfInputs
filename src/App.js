import React, {useState, useEffect} from 'react';
//* import of components and developer packages
import Input from "./components/Input";
import './App.scss';
import Total from "./components/Total";

function App() {
    const [field1Value, setField1Value] = useState(0);
    const [field2Value, setField2Value] = useState(0);
    const [field3Value, setField3Value] = useState(0);
    const [field4Value, setField4Value] = useState(0);
    const [field5Value, setField5Value] = useState(0);


    const changeField1 = () => (e) => setField1Value(parseFloat(e.target.value));
    const changeField2 = () => (e) => setField2Value(parseFloat(e.target.value));
    const changeField3 = () => (e) => setField3Value(parseFloat(e.target.value));
    const changeField4 = () => (e) => setField4Value(parseFloat(e.target.value));
    const changeField5 = () => (e) => setField5Value(parseFloat(e.target.value));


    console.log('***** app component rendering ******')


    return (
        <div className="App">

            <div className="form">
                {/*<div className="total">Total: {total}</div>*/}
                <Total data={[field1Value, field2Value, field3Value, field4Value, field5Value]}/>

                <Input idName={'field-1'} elClassName='form-item' type='number' value={field1Value}
                       onInput={changeField1()} labelText='Entry field 1'/>
                <Input idName={'field-2'} elClassName='form-item' type='number' value={field2Value}
                       onInput={changeField2()} labelText='Entry field 2'/>
                <Input idName={'field-3'} elClassName='form-item' type='number' value={field3Value}
                       onInput={changeField3()} labelText='Entry field 3'/>
                <Input idName={'field-4'} elClassName='form-item' type='number' value={field4Value}
                       onInput={changeField4()} labelText='Entry field 4'/>
                <Input idName={'field-5'} elClassName='form-item' type='number' value={field5Value}
                       onInput={changeField5()} labelText='Entry field 5'/>
            </div>

        </div>
    );
}

export default App;
