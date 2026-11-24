'use client';
import link from "next/link";
import {useRouter} from "next/navigation";
export default function page() {
    return (
        <div>
            <h1>Detail22</h1>
            <link href="/detail">
            <button className="bg-blue-500 rounded-md" onClick={() => { alert('tes')}}>Halaman Detail</button>
            </link>

            <br />
            <br />

            <button className="bg-blue-500 rounded-md" onClick={() => {
                useRouter.push('/detail')
            }}>Halaman Detail</button>
        </div>
    );
}