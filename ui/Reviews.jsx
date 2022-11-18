import Testimonials from '@/ui/Testimonials';

export async function getData() {
  const res = await fetch(
    'https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJ65r-D2iH44kRQVvxQOaxUUY&key=AIzaSyABLGmZ_4PNQoeLOH58jW3XNrdRbwQuTvI',
    { next: { revalidate: 60 } }
  );
  return res.json();
}

export default async function Reviews() {
  const data = await getData();
  return (
    <Testimonials
      reviews={data?.result?.reviews}
      totalReviews={data?.result?.user_ratings_total}
    />
  );
}
