import React, { createContext, useContext, useState } from 'react'         ////////     not completed

const Usercontext = createContext('')
export default function UseParentContext() {
    const [user] = useState("Kavippiriyan S")
    return (
        <Usercontext.Provider value={user}>
            <div>ParentComponent</div>
            <Componenet1 />
        </Usercontext.Provider>
    )
}
function Componenet1() {
    return (
        <>
            <p>Componenet1</p>
            <Componenet2 />
        </>
    )
}
function Componenet2() {
    return (
        <>
            <p>Componenet2</p>
            <Componenet3 />
        </>
    )
}
function Componenet3() {
    return (
        <>
            <p>Componenet3</p>
            <Componenet4 />
        </>
    )
}
function Componenet4() {
    return (
        <>
            <p>Componenet4</p>
            <Componenet5 />
        </>
    )
}
function Componenet5() {
    const user = useContext(Usercontext)
    return (
        <>
            <>Component 5</>
            <div>user name is {user}</div>
        </>
    )
}