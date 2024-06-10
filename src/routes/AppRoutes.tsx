import React, { useEffect, useState } from 'react';
import { Switch, Case, Default } from 'react-if';
import DoctorRoutes from './DoctorRoutes';
import ReceptionRoutes from './ReceptionRoutes';
import PublicRoutes from './PublicRoutes';
import ManagerRoutes from './ManagerRoutes';

const AppRoutes: React.FC = () => {
  const [specialization, setSpecialization] = useState<string | null>(null);

  useEffect(() => {
    const fetchedSpecialization = localStorage.getItem("specialization");
    setSpecialization(fetchedSpecialization);
    }, []);

  return (
    <Switch>
      <Default>
        <PublicRoutes />
      </Default>
      <Case condition={specialization === "DOCTOR"}>
        <DoctorRoutes />
      </Case>
      <Case condition={specialization === "RECEPTIONIST"}>
        <ReceptionRoutes />
      </Case>
      <Case condition={specialization === "MANAGER"}>
        <ManagerRoutes />
      </Case>
    </Switch>
  );
}

export default AppRoutes