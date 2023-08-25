import Rooms from '../Rooms';

export default function HotelInfo({ params }) {
  return (
    <div style={{ marginBlockEnd: '20px' }}>
      <Rooms params={params} />
    </div>
  );
}
