type Props = {
  params: Promise<{
    slug: string[];
  }>;
};

export default async function hello({ params }: Props) {
  const { slug } = await params;

  return (
    <>
      {slug.map((category, index) => (
        <h1 key={index}>
          {index + 1}. {category}
        </h1>
      ))}
    </>
  );
}