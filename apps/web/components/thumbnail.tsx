import Image from 'next/image';

const defaultImage = '/static/images/default-thumbnail.png';

export default function Thumbnail({ images }: { images: string[] | undefined }) {
  let image = images ? images[0] : defaultImage;
  image = image ?? defaultImage;
  return (
    <Image
      src={image}
      alt={image}
      className="my-2 h-auto max-w-sm rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30"
      width={200}
      height={200}
    />
  );
}
