import React from 'react'
import { useDoctorQuery } from '../../../services/queryHooks/useDoctorsQuery'
import Loading from '../../../components/ui/Loading'
import DoctorCard from './DoctorCard'
import { doc } from '../../../utils/types'
import Title from './Title'

const Doctors: React.FC = () => {
  const { isLoading, data } = useDoctorQuery()

    if ( isLoading ) return <Loading />
    return (
      <div id="doctors" className="min-w-screen min-h-screen pt-8">
        <div className="container mx-auto">
          <Title firstHalf="Our" secondHalf="Doctors" />
          <div className="flex flex-row flex-wrap justify-center gap-5">
            {data?.data.map((doc: doc) => (
              <DoctorCard
                img={doc.img}
                docName={doc.name}
                docSpeciality={doc.speciality}
              />
            ))}
          </div>
        </div>
      </div>
    );
}

export default Doctors