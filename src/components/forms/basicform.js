import React from 'react'

const BasicForm = () => {
    return (
        // <div>
        //     <h1>Hello form</h1>
        // </div>
        <>
        <form action="">
<div>
<label htmlFor="email">Email</label>
<input type="text" name="email" id="email" autoComplete="off"/>
</div>
<div>
<label htmlFor="password">Password</label>
<input type="text" name="password" id="password" autoComplete="off"/>
</div>

<button type="submit">Login</button>
        </form>
        </>
    )
}

export default BasicForm
