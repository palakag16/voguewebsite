import React,{useState} from 'react'

const Fixedele = () => {
   const [state, setstate] = useState(false);

    function getScroll(){
        if(window.scrollY>=50){
            setstate(true)
        }
        else{
            setstate(false)
        }
    }
    window.addEventListener('scroll',getScroll)
    return (
        <div>
            <div id="fixedele" className={state ? 'shownone':'dnone'}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum laborum suscipit beatae dolore temporibus pariatur hic nulla, velit praesentium quo inventore modi sed voluptas magnam earum nobis nam eaque expedita.</div>
        </div>
    )
}

export default Fixedele
