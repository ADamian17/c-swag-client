import ClotheCard from '../ClotheCard/ClotheCard';

const ClothesList = ({ clothes }) => (clothes.map(clothe => <ClotheCard key={clothe.pk} clothe={clothe} />));

export default ClothesList;