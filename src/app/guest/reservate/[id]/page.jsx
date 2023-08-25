import BasicFormReservation from '@/app/components/ReservateForm';

const ReserveRoom = ({ params, roomId }) => {
  return <BasicFormReservation params={params} roomId={roomId} />;
};

export default ReserveRoom;
