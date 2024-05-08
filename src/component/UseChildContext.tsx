import React, { useState } from 'react'        ////////     not completed

export default function UseContext() {

    const [user] = useState("Kavippiriyan S")
    return (
        <>
            <div>ParentComponent</div>
            <Componenet1 user={user} />
        </>
    )
}

function Componenet1({ user }: any) {
    return (
        <>
            <p>Componenet1</p>
            <Componenet2 user={user} />
        </>
    )
}
function Componenet2({ user }: any) {
    return (
        <>
            <p>Componenet2</p>
            <Componenet3 user={user} />
        </>
    )
}
function Componenet3({ user }: any) {
    return (
        <>
            <p>Componenet3</p>
            <Componenet4 user={user} />
        </>
    )
}
function Componenet4({ user }: any) {
    return (
        <>
            <p>Componenet4</p>
            <Componenet5 user={user} />
        </>
    )
}
function Componenet5({ user }: any) {
    return (
        <>
            <>Component 5</>
            <div>user name is {user}</div>
        </>
    )
}