import {useState} from "react";
import divider from './assets/pattern-divider-desktop.svg';
import buttonIcon from './assets/icon-dice.svg';
function App() {

    const [advice, setAdvice] = useState();
    const [adviceId, setAdviceId] = useState(0);

    const getRandomAdvice = () => {
        fetch('https://api.adviceslip.com/advice')
        .then((res) => res.json())
        .then((data) => {
                setAdvice(data.slip.advice);
                setAdviceId(data.slip.id);
        });

    };


    return (
        <main className=
                  "
                    sm:w-96 sm:h-64 bg-darkGrayishBlue rounded-xl
                    absolute top-1/2 left-1/2 -translate-x-1/2
                    -translate-y-1/2 flex flex-col justify-center
                    items-center px-8 shadow-lg
                    w-64 h-96
                  ">
            <h4 className="
                    text-neonGreen tracking-widest text-xs
                    absolute left-1/2 -translate-x-1/2 top-10
                    ">ADVICE #{adviceId}</h4>
            <p className="text-center text-lightCyan px-2">
                <q>{advice}</q>
            </p>{""}
            <img src={divider} alt={""} className="translate-y-10"/>
            <button onClick={getRandomAdvice}
                    className=
                        "
                            absolute w-12 h-12 bg-neonGreen rounded-full
                            shadow-lg hover:shadow-neonGreen/50
                            bottom-0 translate-y-1/2
                        ">
                <img src={buttonIcon} alt={""} className="absolute inset-0 m-auto"/>
            </button>
        </main>
    )
}

export default App
