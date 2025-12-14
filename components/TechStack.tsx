
export default function TechStack({ tech }: { tech: string }) {
    return (
        <>
         <div className="bg-blue-900 text-white font-poppins text-xs font-regular rounded-2xl px-2 py-1 m-2">
           {tech}
         </div>
        </>
    )
}