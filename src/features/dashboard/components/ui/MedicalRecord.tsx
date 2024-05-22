import React from "react";
import { MedicalRecordProps } from "../../../../utils/types";
import { Case, Default, Switch } from "react-if";
import noData from "../../../../assets/images/no-data.gif";

const MedicalRecord: React.FC<MedicalRecordProps> = ({
  patientName,
  reports,
  labs,
  radiologies,
}) => {
  const showAllReports = (key: string, value: string) => {
    return (
      <div className="border border-slate-200 rounded-lg p-2 flex gap-2">
        <span className="inline-block text-semiDark font-bold">{key}</span>
        <span>{value}</span>
      </div>
    );
  };

  const noDataAvailable = (
    <Default>
      <img className=" w-1/6 h-auto" src={noData} alt="no-data" />
    </Default>
  );

  return (
    <div>
      <h2 className="text-dark font-bold text-2xl text-center mb-5">
        Medical record for:
        <br />
        <span className="inline-block text-semiDark">{patientName}</span>
      </h2>
      <div role="tablist" className="tabs tabs-lifted">
        <input
          type="radio"
          name="my_tabs"
          className="tab text-lg"
          aria-label="Diagnoses"
          defaultChecked
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6 shadow-md"
        >
          <div className="flex gap-3 flex-wrap">
            <Switch>
              <Case condition={reports.length > 0}>
                {reports?.map(
                  (report: {
                    id: number;
                    prescription: string;
                    diagnose: string;
                    createdAt: string;
                  }) => {
                    return (
                      <div
                        key={report.id}
                        className="border border-slate-200 rounded-lg p-2 flex gap-2 flex-row flex-wrap items-end bg-slate-50"
                      >
                        {showAllReports("preperciption:", report?.prescription)}
                        {showAllReports("diagnose:", report?.diagnose)}
                        <span className="text-slate-500 text-xs">
                          {report.createdAt}
                        </span>
                      </div>
                    );
                  }
                )}
              </Case>
              {noDataAvailable}
            </Switch>
          </div>
        </div>

        <input
          type="radio"
          name="my_tabs"
          className="tab text-lg"
          aria-label="Lab"
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6 shadow-md"
        >
          <div className="flex">
            <Switch>
              <Case condition={labs.length > 0}>{labs?.map((lab) => "")}</Case>
              {noDataAvailable}
            </Switch>
          </div>
        </div>

        <input
          type="radio"
          name="my_tabs"
          className="tab text-lg"
          aria-label="Radiolgy"
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6 shadow-md"
        >
          <Switch>
            <Case condition={radiologies.length > 0}>
              {radiologies.map((radiology) => "")}
            </Case>
            {noDataAvailable}
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default MedicalRecord;
