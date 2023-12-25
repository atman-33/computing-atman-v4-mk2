export async function generateStaticParams() {
  const ids = ['1', '2', '3'];

  return ids.map((id) => ({
    id: id
  }));
}

const Page = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  return (
    <div>
      <div>{`id: ${id}`}</div>
    </div>
  );
};

export default Page;
