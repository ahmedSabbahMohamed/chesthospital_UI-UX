import React from "react";
import { useDeleteMedicine } from "../../services/pharmacistQueries";

interface MedicineListItemProps {
  medicine: { id: number; name: string };
  index: number;
}

const MedicineListItem: React.FC<MedicineListItemProps> = ({
  medicine,
  index,
}) => {
  const { mutateAsync: deleteMedicine } = useDeleteMedicine();

  const handleDelete = async () => {
    try {
      await deleteMedicine(medicine.id.toString());
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <tr>
      <th>{index + 1}</th>
      <td>{medicine.name}</td>
      <td>
        <button
          onClick={handleDelete}
          className="rounded btn-sm bg-error text-white hover:opacity-80"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default MedicineListItem;
