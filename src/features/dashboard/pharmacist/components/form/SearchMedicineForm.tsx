// import React, { useState } from "react";
// import Input from "../../../../../components/form/Input";
// import SubmitBtn from "../../../../../components/form/SubmitBtn";
// import { Form, Formik, FormikHelpers } from "formik";
// import { SearchMedicine } from "../../utils/types";
// import {
//   useDeleteMedicine,
//   useSearchMedicine,
// } from "../../services/pharmacistQueries";
// import Loading from "../../../../../components/ui/Loading";

// const SearchMedicineForm: React.FC = () => {
//   const [query, setQuery] = useState<string>("");
//   const [loading, setLoading] = useState<boolean>(false);
//   const { mutateAsync } = useDeleteMedicine();
//   const { data, isLoading, refetch } = useSearchMedicine(query);

//   const handleSubmit = async (
//     _values: SearchMedicine,
//     { setSubmitting }: FormikHelpers<SearchMedicine>
//   ) => {
//     setSubmitting(true);
//     try {
//       await refetch();
//     } catch (err) {
//       console.log(err);
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   const handleDelelte = async (id: string) => {
//     setLoading(true);
//     try {
//       await mutateAsync(id);
//     } catch (err) {
//       console.log(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <Formik initialValues={{ medicine: "" }} onSubmit={handleSubmit}>
//         {({ values, isSubmitting }) => {
//           setQuery(values.medicine);
//           return (
//             <Form className="flex flex-col items-center justify-center gap-2">
//               <Input label="Medicine Name" name="medicine" />
//               <SubmitBtn BtnTxt="Search" disabled={isSubmitting || isLoading} />
//               {(isLoading || isSubmitting) && <Loading />}
//             </Form>
//           );
//         }}
//       </Formik>
//       <div
//         className={`${
//           data?.data?.data &&
//           "bg-white rounded-md p-3 my-2 max-h-[50vh] overflow-auto"
//         }`}
//       >
//         {data?.data?.data && (
//           <div className="overflow-x-auto">
//             <table className="table">
//               <thead>
//                 <tr>
//                   <th>ID</th>
//                   <th>Name</th>
//                   <th>Options</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {data?.data?.data.map(
//                   (medicine: { name: string; id: number }, index: number) => (
//                     <tr>
//                       <th>{index + 1}</th>
//                       <td>{medicine.name}</td>
//                       <td>
//                         <button
//                           onClick={() => handleDelelte(medicine.id.toString())}
//                           disabled={loading}
//                           className="rounded btn-sm bg-error text-white hover:opacity-80"
//                         >
//                           Delete
//                         </button>
//                       </td>
//                     </tr>
//                   )
//                 )}
//               </tbody>
//             </table>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default SearchMedicineForm;

import React, { useState, useCallback, useEffect } from "react";
import { Formik, FormikHelpers } from "formik";
import { SearchMedicine } from "../../utils/types";
import { useSearchMedicine } from "../../services/pharmacistQueries";
import MedicineForm from "./MedicineForm";
import Loading from "../../../../../components/ui/Loading";
import MedicineList from "../ui/MedicineList";

const SearchMedicineForm: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const { data, isLoading, refetch, error } = useSearchMedicine(query);

  const handleSubmit = useCallback(
    async (
      values: SearchMedicine,
      { setSubmitting }: FormikHelpers<SearchMedicine>
    ) => {
      setSubmitting(true);
      setQuery(values.medicine);
      try {
        if (values.medicine.trim()) {
          await refetch();
        } else {
          console.error("Query parameter is required");
        }
      } catch (err) {
        console.error(err);
      } finally {
        setSubmitting(false);
      }
    },
    [refetch]
  );

  useEffect(() => {
    if (query.trim()) {
      refetch();
    }
  }, [query, refetch]);

  return (
    <div>
      <Formik initialValues={{ medicine: "" }} onSubmit={handleSubmit}>
        {({ isSubmitting }) => (
          <MedicineForm isSubmitting={isSubmitting} isLoading={isLoading} />
        )}
      </Formik>
      {isLoading && query && <Loading />}
      {error && <div className="text-error">{error.message}</div>}
      {data?.data?.data && <MedicineList medicines={data.data.data} />}
    </div>
  );
};

export default SearchMedicineForm;
