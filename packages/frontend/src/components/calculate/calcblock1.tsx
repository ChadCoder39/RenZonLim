export default function CalculateBlock1() {
    return (
        <div className="min-h-screen mt-36 p-10 flex flex-col items-center justify-center">

            <h1 className="text-center text-3xl md:text-5xl font-bold mb-10">CALCULATE THE COST OF YOUR REPAIR</h1>
            <p className="text-center text-lg mb-8">BY ANSWERING 4 QUESTIONS</p>
            
            <div className="flex flex-col">

                <div className="flex flex-col gap-4 bg-[#352920] p-10 text-[#eae2d7] items-center justify-center my-10">
                    <div className="w-full max-w-2xl space-y-6 mb-10">
                        <h2 className="text-xl">01. CHOOSE YOUR SERVICE</h2>
                        <div className="grid grid-cols-3 gap-4">
                            <button className="bg-[#41352C] hover:bg-[#554B42] text-white py-4 rounded">Apartment Renovation</button>
                            <button className="bg-[#41352C] hover:bg-[#554B42] text-white py-4 rounded">Apartment Renovation</button>
                            <button className="bg-[#41352C] hover:bg-[#554B42] text-white py-4 rounded">Apartment Renovation</button>
                        </div>
                    </div>

                    <div className="w-full max-w-2xl space-y-6 mb-10">
                        <h2 className="text-xl">02. INDICATE THE AREA</h2>
                        <input
                            type="number"
                            placeholder="m²"
                            className="w-full py-4 text-center text-[#352920] bg-[#eae2d7] rounded"
                        />
                    </div>

                    <div className="w-full max-w-2xl space-y-6 mb-10">
                        <h2 className="text-xl">03. CHOOSE RENOVATION STYLE</h2>
                        <div className="grid grid-cols-3 gap-4">
                            <button className="bg-[#41352C] hover:bg-[#554B42] text-white py-4 rounded">Loft</button>
                            <button className="bg-[#41352C] hover:bg-[#554B42] text-white py-4 rounded">Minimalism</button>
                            <button className="bg-[#41352C] hover:bg-[#554B42] text-white py-4 rounded">Scandinavian</button>
                            <button className="bg-[#41352C] hover:bg-[#554B42] text-white py-4 rounded">Modern</button>
                            <button className="bg-[#41352C] hover:bg-[#554B42] text-white py-4 rounded">Baroque</button>
                        </div>
                    </div>

                    <div className="w-full max-w-2xl space-y-6 mb-10">
                        <h2 className="text-xl">04. ADDITIONAL SERVICES (IF NEEDED)</h2>
                        <div className="space-y-4">
                            <label className="flex items-center">
                                <input type="checkbox" className="form-checkbox h-6 w-6 text-[#eae2d7] bg-[#41352C] mr-4" />
                                Development of a design project
                            </label>
                            <label className="flex items-center">
                                <input type="checkbox" className="form-checkbox h-6 w-6 text-[#eae2d7] bg-[#41352C] mr-4" />
                                Kitchen Installation
                            </label>
                            <label className="flex items-center">
                                <input type="checkbox" className="form-checkbox h-6 w-6 text-[#eae2d7] bg-[#41352C] mr-4" />
                                Laying Floor Coverings
                            </label>
                            <label className="flex items-center">
                                <input type="checkbox" className="form-checkbox h-6 w-6 text-[#eae2d7] bg-[#41352C] mr-4" />
                                Installation of Suspended Ceilings
                            </label>
                            <label className="flex items-center">
                                <input type="checkbox" className="form-checkbox h-6 w-6 text-[#eae2d7] bg-[#41352C] mr-4" />
                                Furniture Assembly
                            </label>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                    <button className="bg-[#554B42] hover:bg-[#695F56] text-white py-4 px-8 rounded">CALCULATE</button>
                    <p>Your Approximate Cost:  <span className="font-bold"> _________</span></p>
                </div>
            </div>
        </div>
    );
}
