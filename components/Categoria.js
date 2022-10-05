import Image from "next/image";
import useQuiosco from "../hooks/useQuiosco";

const Categoria = ({ categoria }) => {
  const { handleClickCategoria, categoriaActual } = useQuiosco();
  const { nombre, icono, id } = categoria;

  return (
    <div
      className={`flex item-center gap-4 w-full border p-5 hover:bg-amber-400 ${
        categoriaActual?.id === id ? "bg-amber-400" : ""
      }`}
    >
      <Image
        width={50}
        height={50}
        src={`/assets/img/icono_${icono}.svg`}
        alt="Imagen Icono ${icono}"
      />

      <button
        type="button"
        className="text-2xl font-bold hover:cursor-pointer"
        onClick={() => handleClickCategoria(id)}
      >
        {nombre}
      </button>
    </div>
  );
};

export default Categoria;
