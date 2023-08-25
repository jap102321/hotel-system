import BasicFormHotel from '@/app/components/BasicFormHotel';

export default function EditHotel({ params }) {
  return <BasicFormHotel method={'PUT'} params={params} />;
}
