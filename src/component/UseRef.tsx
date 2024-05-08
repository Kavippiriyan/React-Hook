//   No Render

import { render } from "@testing-library/react"
import { useEffect, useRef, useState } from "react"

// import { useRef, useState } from "react"

// const UseRef = () => {

//     const [count, setCount] = useState(0);
//     const refCount = useRef(0);

//     const increaseCountforuseState = () => {
//         setCount(count + 1)
//     }

//     const increaseCountforuseRef = () => {
//         refCount.current++
//     }
//     console.log("Iam rendering!");

//     return (
//         <div>
//             <p>useState Count : {count}</p>
//             <button onClick={increaseCountforuseState}>useStateIncrease</button>

//             <p>useRef Count : {refCount.current}</p>
//             <button onClick={increaseCountforuseRef}>useRefIncrease</button>

//         </div>
//     )
// }

// export default UseRef


// Input Focus


// export default function InputFocus() {

//     const textRef = useRef<HTMLInputElement>(null)

//     useEffect(() => {
//         textRef.current?.focus()
//     }, [])

//     const handleInput = () => {
//         const newvalue = textRef.current?.value
//         console.log(newvalue);

//     }
//     return (
//         <>
//             <input ref={textRef} type="text" onChange={handleInput}></input>

//         </>
//     )
// }



// SetPrevious State

function PreviousState() {

    const [inputvalue, setInputvalue] = useState('')
    const previousRef = useRef('')

    const handleInputChange = (e: any) => {
        setInputvalue(e.target.value)
    }

    useEffect(() => {
        previousRef.current = inputvalue
    })
    return (
        <div>

            <input type="text" value={inputvalue} onChange={handleInputChange}></input>
            <p>Input Value: {inputvalue}</p>
            <p>PrevRefValue: {previousRef.current}</p>
        </div>
    )
}

export default PreviousState
