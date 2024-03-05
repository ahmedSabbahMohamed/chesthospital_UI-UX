import React from 'react'
import { useDoctorQuery } from '../../../services/queryHooks'
import Loading from '../../../components/ui/Loading'
import DoctorCard from './DoctorCard'
import { doc } from '../../../utils/types'
import Title from './Title'
import { useTranslation } from 'react-i18next'

const Doctors: React.FC = () => {
  const { isLoading, data } = useDoctorQuery()
  const { t } = useTranslation()

    if ( isLoading ) return <Loading />
    return (
      <div id="doctors" className="min-w-screen min-h-screen pt-8">
        <div className="container mx-auto">
          <Title firstHalf={t("our")} secondHalf={t("doctors")} />
          <div className="flex flex-row flex-wrap justify-center gap-5">
            {data?.data.map((doc: doc) => (
              <DoctorCard
                key={doc.id}
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