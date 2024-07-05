import React from 'react'

function Create() {
  return (
    <div className='d-flex justify-content-center align-items-center vh-100'>
        <div className='p-3 border border-1 w-25'>
            <h3>Create Recipe</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input type="text" placeholder='Enter Username' className='form-control'
                    onChange={(e) => setUsername(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder='Enter Password' className='form-control' 
                    onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <button className='btn btn-success w-100 mt-3'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Create