import Cart from "./Cart";

export default function Header() {
    return (
        <header>
           
           <div className="flex flex-row relative top-5 items-center">
                <div className="basis-1/4"><img src='way.png' className='object-center'></img></div>
                <div className="basis-1/4">ХУДИ</div>
                <div className="basis-1/2 absolute inset-y-0 right-0 w-16"><Cart /></div>
            </div>
           
        </header>
    );
    
}