import BasicFormRoom from '../../../components/BasicFormRoom';

export default function AddRoom({ params }) {
  return <BasicFormRoom method={'POST'} params={params} />;
}
