import Forms from "../../../components/Forms";
import GetJobs from "../../../components/getJobs";
import Link from "next/link"

export default function Applications() {
  return (
    <div className="min-h-screen relative bg-slate-200">
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/applications">Applications</Link></li>
      </ul>
      <div className="flex justify-around flex-col items-center h-1/2 ">
        <h1 className=" text-4xl font-bold mt-12 mb-12">ZotApply</h1>
        <Forms/>
      </div>
      <div className="flex  flex-col items-center h-1/2 ">
        <GetJobs/>
      </div>
    </div>
  );
}