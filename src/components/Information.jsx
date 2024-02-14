import React from 'react'

export default function Information ({button_action, changeValue, success, onInput}){

return (<article>

            <header>
                <div id="circle"></div>
                <h3 id="title">
                    <span>BASE</span>
                    <span>APPAREL</span>
                </h3>
            </header>

            <section className='container'>
                <div className="left">
                    <h1>WE'RE <br /> <span>COMING</span> <br /> <span>SOON</span></h1>
                    <p id="text">
                      Lorem ipsum is simply dummy text of the printing and typesetting industry. 
                      Lorem ipsum has been the industry's standard dummy 
                      Lorem ipsum is simply dummy text of the printing and typesetting industry. 
                    </p>
                <form onSubmit={button_action} id="input-elements">

                        <input type="email" placeholder="Email Address" id="email" ref={changeValue} onInput={onInput} required/>
                        <button type='submit'>{'>'}</button>
                        {success && <h5 className='active'>Great Job! We shall get back to you</h5>}
                </form>
                </div>
                <div className="right"></div>

            </section>
</article>
    
)

}