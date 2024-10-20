export default function AboutBlock3() {
    return (
        <div className="flex flex-col p-10 md:p-10 bg-[#1a1611] min-h-96 justify-center items-center">
            <span className="max-w-[700px] text-[#ece3ca] text-[54px] text-center mt-24">Explore our key areas of expertise</span>
            <span className="max-w-[830px] text-[#ece3ca] text-[28px] text-center mt-10">Contact us today to discuss your renovation project and learn more about how our specialized services can meet your needs.</span>
            
            <div className="join join-vertical w-full text-[#ece3ca] mt-20 max-w-[1400px]">
                <div className="collapse collapse-plus join-item border-base-300 border-t-[1px] border-b-[1px]">
                    <input type="radio" name="my-accordion-4" defaultChecked />
                    <div className="collapse-title  font-medium text-[32px] px-10 py-7">Bathroom Remodeling</div>
                    <div className="collapse-content text-[24px] max-w-[790px] text-center">
                        <p>Transform your kitchen into a stunning and functional heart of your home, from custom cabinetry to state-of-the-art appliances.</p>
                    </div>
                </div>

                <div className="collapse collapse-plus join-item border-base-300 border-t-[1px] border-b-[1px]">
                    <input type="radio" name="my-accordion-4" defaultChecked />
                    <div className="collapse-title  font-medium text-[32px] px-10 py-7">Kitchen Renovations</div>
                    <div className="collapse-content text-[24px] max-w-[790px] text-center">
                        <p>Transform your kitchen into a stunning and functional heart of your home, from custom cabinetry to state-of-the-art appliances.</p>
                    </div>
                </div>

                <div className="collapse collapse-plus join-item border-base-300 border-t-[1px] border-b-[1px]">
                    <input type="radio" name="my-accordion-4" defaultChecked />
                    <div className="collapse-title  font-medium text-[32px] px-10 py-7">Exterior Makeovers</div>
                    <div className="collapse-content text-[24px] max-w-[790px] text-center">
                        <p>Transform your kitchen into a stunning and functional heart of your home, from custom cabinetry to state-of-the-art appliances.</p>
                    </div>
                </div>

                <div className="collapse collapse-plus join-item border-base-300 border-t-[1px] border-b-[1px]">
                    <input type="radio" name="my-accordion-4" defaultChecked />
                    <div className="collapse-title  font-medium text-[32px] px-10 py-7">Home Additions</div>
                    <div className="collapse-content text-[24px] max-w-[790px]">
                        <p>Transform your kitchen into a stunning and functional heart of your home, from custom cabinetry to state-of-the-art appliances.</p>
                    </div>
                </div>

                <div className="collapse collapse-plus join-item border-base-300 border-t-[1px] border-b-[1px]">
                    <input type="radio" name="my-accordion-4" defaultChecked />
                    <div className="collapse-title  font-medium text-[32px] px-10 py-7">Whole Home Renovations</div>
                    <div className="collapse-content text-[24px] max-w-[790px] text-center">
                        <p>Transform your kitchen into a stunning and functional heart of your home, from custom cabinetry to state-of-the-art appliances.</p>
                    </div>
                </div>

                <div className="collapse collapse-plus join-item border-base-300 border-t-[1px] border-b-[1px]">
                    <input type="radio" name="my-accordion-4" defaultChecked />
                    <div className="collapse-title  font-medium text-[32px] px-10 py-7">Custom Projects</div>
                    <div className="collapse-content text-[24px] max-w-[790px] text-center">
                        <p>Transform your kitchen into a stunning and functional heart of your home, from custom cabinetry to state-of-the-art appliances.</p>
                    </div>
                </div>
                
            </div>

            <button className="transition-all ease-in-out text-[24px] md:text-[34px] text-[#ece3ca] bg-[#1a1611] hover:bg-[#ece3ca] hover:text-[#1a1611] p-2 self-center my-20 border-solid border-[1.5px] border-[#ece3ca] px-10">APPLY FOR A CONSULTATION NOW</button>
        </div>
    );
}