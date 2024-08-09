import React from "react";
import { useGetDataQuery } from "../redux/api/baseApi";
import { Spin } from "antd";

const DashboardStats = () => {
  const { data, isLoading } = useGetDataQuery();
  if (isLoading) {
    return <Spin />
  }
  const DataLength = data.length;
  let rel = 0;
  const relevance = data.map(d=> {
    if(d.relevance) {
      rel += d?.relevance;
    }
  })
  let imp = 0;
  const impact = data.map(d=> {
    if(d.impact) {
      imp += d?.impact;
    }
  })
  let inten = 0;
  const intensity = data.map(d=>{
    if(d.intensity) {
      inten += d?.intensity;
    }
  })
  return (
    <div className="flex flex-col">
      <h1 className='text-start text-3xl mt-12 font-bold ms-4 mb-7'>Dashboard Result</h1>
      <div className="flex flex-1 flex-col md:flex-row lg:flex-row mx-2">
        <div className=" bg-red-500 rounded-lg  mb-2 p-2 md:w-1/4 mx-2">
          <div className="p-4 flex flex-col">
            <a href="#" className="no-underline text-white text-2xl">
              {DataLength}
            </a>
            <a href="#" className="no-underline text-white text-lg">
              Total Datas
            </a>
          </div>
        </div>

        <div className="shadow bg-info rounded-lg mb-2 p-2 md:w-1/4 mx-2">
          <div className="p-4 flex flex-col">
            <a href="#" className="no-underline text-white text-2xl">
              {rel}
            </a>
            <a href="#" className="no-underline text-white text-lg">
              Total Relevance
            </a>
          </div>
        </div>

        <div className="shadow bg-warning rounded-lg mb-2 p-2 md:w-1/4 mx-2">
          <div className="p-4 flex flex-col">
            <a href="#" className="no-underline text-white text-2xl">
              {imp}
            </a>
            <a href="#" className="no-underline text-white text-lg">
              Total Impact
            </a>
          </div>
        </div>

        <div className="shadow bg-success rounded-lg mb-2 p-2 md:w-1/4 mx-2">
          <div className="p-4 flex flex-col">
            <a href="#" className="no-underline text-white text-2xl">
              {inten}
            </a>
            <a href="#" className="no-underline text-white text-lg">
              Total Intensity
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardStats;