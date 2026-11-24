// import link from "next/link";
// import {useRouter} from "next/navigation";
// // export default function page() {
    
// }

import {kartuProfil} from"./components/kartuProfil";


export default function home() {
    return (
        <main className="halaman">
            <h1>Kartu profil Interaktif</h1>
            <p>Latihan React hari pertama</p>

            {/*Kartu profil*/}
            <KartuProfil nama="budi" kelas ="XII RPL 1" hobi="berenang"/>
            <KartuProfil nama="suci" kelas ="XII RPL 1" hobi="masak-masak"/>
            <KartuProfil nama="Dewa" kelas ="XII RPL 1" hobi="Gaming"/>
            <KartuProfil/>
            <KartuProfil/>

            
        </main>
    );
}