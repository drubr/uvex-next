import Image from "next/image";

export default function ProductImageSlider({
  images,
}: {
  images: string[] | undefined;
}) {
  if (!images || images.length <= 0) return null;

  return (
    <section className="relative grid gap-8">
      <button className="absolute left-0 top-1/2 z-50 -translate-y-1/2 bg-white/40 p-4">
        Left
      </button>

      <button className="absolute right-0 top-1/2 z-50 -translate-y-1/2 bg-white/40 p-4">
        Left
      </button>

      <ul className="relative">
        {images.map((image, index) => (
          <li key={index}>
            <Image
              width={950}
              height={713}
              src={image}
              alt={image}
              className="z-40 mx-auto rounded-2xl object-contain"
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
