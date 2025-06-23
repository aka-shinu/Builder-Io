"use client";

export default function TitleBlock() {
  return (
    <div className="w-full h-fit flex flex-col">
      <div className="w-full text-center !text-[#00C7BE] uppercase font-[700] font-[Inter] text-[90%]" style={{fontFamily: 'var(--font-inter)'}}>Blog</div>
      <div className="m-5 w-full h-fit flex flex-col space-y-2">
        <div
          className="w-fit !text-black font-[500] font-poppins text-5xl"
          style={{ fontFamily: "var(--font-poppins)", fontWeight: "500" }}
        >
          Explore our Knowledge Base
        </div>
        <div className="w-full !text-black opacity-65 font-[Inter]">
          Insights and resources for AI in healthcare
        </div>
      </div>
    </div>
  );
}
