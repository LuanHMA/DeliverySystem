import burguerImg from '../../assets/burger.jpg'
import { useAppSelector } from "../../hooks/useAppSelector";
import { IncrementeDecrementButton } from '../Order/ActionButtons'

export function List(){

    const productSelected = useAppSelector((state)=> state.selectedProduct)

    const product = productSelected[0];


    return(
        <div className="bg-neutral-800 rounded-lg px-4 pb-4">
            <div
            className="flex justify-between cursor-pointer transition-all pb-4"
            >
            <div className="flex items-start">
                <img
                src={burguerImg}
                style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "10px",
                }}
                />
                <div className="ml-2 max-w-[220px] md:max-w-[400px]">
                <h1 className="text-white text-md sm:text-lg font-bold">
                    {product.name}
                </h1>
                <h2 className="text-white text-sm sm:text-md max-w-[40vw] sm:max-w-[30vw]">
                    {product.description}
                </h2>
                </div>
            </div>
            </div>

            <div className='bg-yellow-500 p-2 rounded-lg'>
                <h1 className='text-md font-semibold'>Escolha seu molho</h1>
            </div>

            <div className='text-white text-md flex flex-col gap-y-1 ml-2'>
                <label htmlFor="ketchup" className='mt-2 cursor-pointer'>
                    <input type="checkbox" name="ketchup" id="ketchup" className='w-4 h-4'/>
                    <span className='ml-2'>Ketchup</span> 
                </label>

                <label htmlFor="molhoVerde" className='cursor-pointer'>
                    <input type="checkbox" name="molhoVerde" id="molhoVerde" className='w-4 h-4'/>
                    <span className='ml-2'>Molho Verde</span> 
                </label>

                <label htmlFor="Barbecue" className='cursor-pointer'>
                    <input type="checkbox" name="Barbecue" id="Barbecue" className='w-4 h-4'/>
                    <span className='ml-2'>Barbecue</span> 
                </label>

                <label htmlFor="Molho de alho" className='cursor-pointer'>
                    <input type="checkbox" name="Molho de alho" id="Molho de alho" className='w-4 h-4'/>
                    <span className='ml-2'>Molho Aioli (Maionese de alho)</span> 
                </label>
            </div>

            <div className='bg-yellow-500 p-2 mt-4 rounded-lg'>
                <h1 className='text-md font-semibold'>Turbine seu Hamburguer</h1>
            </div>

            <div className='text-white text-md flex flex-col gap-y-1 ml-2'>
                <label className='mt-2 cursor-pointer flex justify-between items-center border border-b-neutral-900 border-t-0 border-l-0 border-r-0 py-2'>
                    <div className='flex items-center gap-x-2'>
                        <IncrementeDecrementButton/>
                        <span className='text-md font-semibold'>Carne 150g</span> 
                    </div>

                    <span className='text-md font-semibold'>+ R$ 9,00</span>

                </label>

                <label className='mt-2 cursor-pointer flex justify-between items-center border border-b-neutral-900 border-t-0 border-l-0 border-r-0 py-2'>
                    <div className='flex items-center gap-x-2'>
                        <IncrementeDecrementButton/>
                        <span className='text-md font-semibold'>Bacon extra</span> 
                    </div>

                    <span className='text-md font-semibold'>+ R$ 3,00</span>

                </label>

                <label className='mt-2 cursor-pointer flex justify-between items-center border border-b-neutral-900 border-t-0 border-l-0 border-r-0 py-2'>
                    <div className='flex items-center gap-x-2'>
                        <IncrementeDecrementButton/>
                        <span className='text-md font-semibold'>Queijo cheedar extra</span> 
                    </div>

                    <span className='text-md font-semibold'>+ R$ 3,00</span>

                </label>

                <label className='mt-2 cursor-pointer flex justify-between items-center border border-b-neutral-900 border-t-0 border-l-0 border-r-0 py-2'>
                    <div className='flex items-center gap-x-2'>
                        <IncrementeDecrementButton/>
                        <span className='text-md font-semibold'>Salada extra (alface,tomate e cebola)</span> 
                    </div>

                    <span className='text-md font-semibold'>+ R$ 3,00</span>

                </label>
            </div>

            <button
          className={`bg-red-600 py-4 mt-4 rounded-lg w-full m-auto text-white text-md font-bold hover:bg-red-600 transition-all`}
        >
          Ir para carrinho
        </button>

        </div>
    )
}