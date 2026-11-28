type Props={
    params:Promise<{
        slug?:string[];
    }>
}

export default async function hello({params}:Props){
    const{slug}=await params;

  return (
  <>
    {!slug ? (
      <h1>Welcome to Store</h1>
    ) : (
      slug.map((item, index) => (
        <h1 key={index}>{item}</h1>
      ))
    )}
  </>
);
}