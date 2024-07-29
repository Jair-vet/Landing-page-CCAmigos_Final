import { InfoEvento } from "./InfoEvento"

export const InfoLanding = () => {
  return (
    <div className="container mx-auto">
        <h2 className="text-3xl text-white font-bold text-center uppercase">Equiparte</h2>

        <div className="mr-12 ml-12 mt-5">
            <p className="text-white mb-4 text-center uppercase">
                Un llamado a todos los directores de alabanza, músicos, cantantes y creativos
                que quieran crecer en habilidades y conocimiento mientras sirven a su iglesia
                local.
            </p>
            <p className="text-white mb-4 text-center uppercase">
                Dos días de talleres, enseñanza y noche de adoración con nuestro invitado
                especial Omar Rodríguez, talleres:
            </p>
        </div>

        <div className="mr-12 ml-12 mt-10 mb-20">
            <ol className="space-y-4 text-gray-500 list-disc dark:text-white">
               <div className="flex gap-10 justify-center">
                <div className="uppercase">
                    <li>Canto, audio en vivo y broadcast.</li>
                    <li>Teoría musical.</li>
                    <li>Excelencia en la adoración.</li>
                    <li>Sanidad interior.</li>
                    <li>Dirigiendo la adoración.</li>
                </div>
                <div className="uppercase">
                    <li>Viviendo en lo profético.</li>
                    <li>Bajo.</li>
                    <li>Guitarra.</li>
                    <li>Secuencias y Ableton.</li>
                    <li>Panel creativo, entre otros…</li>
                </div>
               </div>
            </ol>
        </div>

        <InfoEvento />
    </div>
  )
}
