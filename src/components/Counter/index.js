import {useEffect, useState} from 'react';


const Counter = () => {
    const [clicks, setClicks] = useState(0);
    const [step, setStep] = useState(1);

    const showValue = () => {
        setTimeout(() => {
            alert(clicks)
        }, 3000)
    }

    useEffect(() => {
        document.title = `Component  renderes. Clicked ${clicks}`;

        setStep((prevValue) => prevValue + 1);

    }, [clicks, setStep])


    useEffect(() => {
        console.log(step);

    }, [step])

    return (
        <div>
            <div>Clicked: {clicks}</div>
            <button onClick={() => setClicks(clicks + step)}>Click</button>

            <button onClick={showValue}>Show value</button>
        
            <input name="step" value={step} onChange={(e)=> setStep(+e.target.value)} />
        </div>
    )
};

export default Counter;