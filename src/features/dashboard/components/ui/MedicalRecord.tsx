import React from "react";

const MedicalRecord: React.FC = () => {
  return (
    <div>
      <h2 className="text-dark font-bold text-2xl text-center mb-5">
        Medical record for:
        <br />
        <span className="inline-block text-semiDark">Ahmed sabbah mohamed</span>
      </h2>
      <div role="tablist" className="tabs tabs-lifted">
        <input
          type="radio"
          name="my_tabs"
          className="tab"
          aria-label="Diagnoses"
          defaultChecked
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6 shadow-md"
        >
          Diagnoses History
        </div>

        <input type="radio" name="my_tabs" className="tab" aria-label="Lab" />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6 shadow-md"
        >
          Lab History
        </div>

        <input
          type="radio"
          name="my_tabs"
          className="tab"
          aria-label="Radiolgy"
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6 shadow-md"
        >
          Radiolgy History
        </div>
      </div>
    </div>
  );
};

export default MedicalRecord;
