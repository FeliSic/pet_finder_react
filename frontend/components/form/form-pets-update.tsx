import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import './form.css';

type Pet = {
  id: number; // No es necesario el '!'
  name: string;
  bio: string; // Asegúrate de que esta propiedad esté bien escrita
  lastSeenLocation: {
    name: string;
    lat: number;
    lng: number;
  };
  status: string;
  imgUrl: string;
  ownerId: number;
  createdAt: string; // Cambia a 'Date' si es un objeto Date, pero generalmente se recibe como string
  updatedAt: string; // Igual que arriba
};


export default function EditPet() {
  const { petId } = useParams();
  const navigate = useNavigate();
  const [petData, setPetData] = useState<Pet | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const userId = JSON.parse(localStorage.getItem("userId") || "{}");
  console.log("userId:", userId); // Verifica el valor
  useEffect(() => {
    const fetchPetData = async () => {
      try {
        const res = await fetch(`http://localhost:3000/users/${userId}/pets`);
        if (!res.ok) throw new Error("Error al obtener los datos de la mascota");
        const data = await res.json();
        setPetData(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPetData();
  }, [petId]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setPetData((prevData: any) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:3000/users/${userId}/pets/${petId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(petData),
      });
      if (!res.ok) throw new Error("Error al actualizar la mascota");
      alert("Mascota actualizada con éxito");
      navigate("/myreports");
    } catch (err: any) {
      setError(err.message);
    }
  };

  if (loading) return <p>Cargando...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <form className="formStyle" onSubmit={handleSubmit}>
      <h1>Editar Mascota</h1>
      <input
        type="text"
        name="name"
        value={petData?.name || ""}
        onChange={handleChange}
        required
      />
      {/* Agrega más campos según sea necesario */}
      <button type="submit">Actualizar Mascota</button>
    </form>
  );
}
