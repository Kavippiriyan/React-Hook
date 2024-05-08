import { useEffect, useState } from "react"

export default function UseEffect() {

    const [count1, setCount1] = useState(0)
    const [count2, setCount2] = useState(0)

    useEffect(() => {
        console.log("Hi");

    },[])
    return (
        <div>
            <p>{count1}</p>
            <button onClick={() => setCount1(count1 + 1)}>Count 1</button>

            <p>{count2}</p>
            <button onClick={() => setCount2(count2 + 1)}>Count 2</button>
        </div>
    )
}
