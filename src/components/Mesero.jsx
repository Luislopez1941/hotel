import React from 'react'
import "./Mesero.css"

const Mesero = () => {
  return (
    <div className='mesero w-full mt-6'>
        <div className='nav__mesero w-full flex justify-between'>
            <button className="button__mesero p-4" id='cocteles'>
            <p>Cocteles</p>
            <svg xmlns="http://www.w3.org/2000/svg" className='ml-4' fill='#1f1c17' height="1.2em" viewBox="0 0 576 512"><path d="M432 240c53 0 96-43 96-96s-43-96-96-96c-35.5 0-66.6 19.3-83.2 48H296.2C316 40.1 369.3 0 432 0c79.5 0 144 64.5 144 144s-64.5 144-144 144c-27.7 0-53.5-7.8-75.5-21.3l35.4-35.4c12.2 5.6 25.8 8.7 40.1 8.7zM1.8 142.8C5.5 133.8 14.3 128 24 128H392c9.7 0 18.5 5.8 22.2 14.8s1.7 19.3-5.2 26.2l-177 177V464h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H208 120c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V345.9L7 169c-6.9-6.9-8.9-17.2-5.2-26.2z"/></svg>
            </button>
            <button className="button__mesero p-4" id='licores'>
            <p>Licores</p>
            </button>
            <button className="button__mesero p-4" id='vinos'>
            <p>Vinos</p>
            <svg xmlns="http://www.w3.org/2000/svg" className='ml-4' height="1.2em" fill='#1f1c17' viewBox="0 0 320 512"><path d="M32.1 29.3C33.5 12.8 47.4 0 64 0H256c16.6 0 30.5 12.8 31.9 29.3l14 168.4c6 72-42.5 135.2-109.9 150.6V448h48c17.7 0 32 14.3 32 32s-14.3 32-32 32H160 80c-17.7 0-32-14.3-32-32s14.3-32 32-32h48V348.4C60.6 333 12.1 269.8 18.1 197.8l14-168.4zm56 98.7H231.9l-5.3-64H93.4l-5.3 64z"/></svg>
            </button>
            <button className="button__mesero p-4">Cervezas</button>
            <button className="button__mesero p-4">Tipos de vasos</button>
            <button className="button__mesero p-4">Loremp</button>
            <button className="button__mesero p-4">Loremp</button>
            <button className="button__mesero p-4">Loremp</button>
        </div>
        <div className='container__mesero mt-6' >
            <div className='py-8 flex'>
                <div className='w-2/5 nombres-cocteles'>
                    <div>
                        <button>Margarita</button>
                        <button>Mojito</button>
                        <button>Margarita</button>
                        <button>Margarita</button>
                        <button>Margarita</button>
                    </div>
                </div>
                <div className='w-3/5 container-cocteles'>

                </div>
            </div>
            <div>

            </div>
        </div>
    </div>
  )
}

export default Mesero