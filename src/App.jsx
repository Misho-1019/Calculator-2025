import { useState } from 'react';
import './App.css'

function App() {
    const [input, setInput] = useState('')
    const [result, setResult] = useState('')

    const clickHandler = (value) => {
        setInput(input + value)
    }

    const clearHandler = () => {
        setInput('')
        setResult('')
    }

    const minusHandler = () => {
        if (input) {
            setInput(-input)
        }
    }

    const resultHandler = () => {
        const equal = eval(input)
        setResult(equal)
        setInput(equal)
    }

    const buttons = [
        "C", "+/-", "%", "/",
        "7", "8", "9", "*",
        "4", "5", "6", "-",
        "1", "2", "3", "+",
        "0", ".", "="
    ];

    const getButtonClass = (btn) => {
        if (btn === "C") return "bg-red-400 text-white";
        if (btn === "+/-" || btn === "%") return "bg-purple-300 text-white";
        if (/[\/|*|\- |\+]/.test(btn)) return "bg-gradient-to-tr from-pink-400 to-yellow-400 text-white";
        if (btn === "=") return "col-span-1 bg-green-500 text-white";
        if (btn === "0") return "col-span-2 bg-blue-100 text-blue-900";
        if (btn === ".") return "bg-blue-100 text-blue-900";
        return "bg-white text-gray-800";
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-100 flex items-center justify-center p-4">
            <div className="w-full max-w-xs bg-white rounded-3xl shadow-2xl p-6 ring-4 ring-purple-100">
                {/* Display */}
                <div className="bg-gray-900 text-right text-white text-5xl p-6 rounded-2xl mb-6 h-28 flex items-end justify-end shadow-inner">
                    {input}
                </div>

                {/* Buttons */}
                <div className="grid grid-cols-4 gap-3">
                    {buttons.map((btn, index) => (
                        <button
                            key={index}
                            className={`text-xl font-bold py-4 rounded-2xl shadow-md hover:scale-105 transition-transform ${getButtonClass(btn)}`}
                            onClick={() => {
                                if (btn === '=') return resultHandler()
                                if (btn === '+/-') return minusHandler()
                                if (btn === 'C') return clearHandler()
                                clickHandler(btn)
                            }}
                        >
                            {btn}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App
