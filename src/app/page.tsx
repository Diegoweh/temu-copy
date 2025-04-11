import { getCurrentSession } from "@/actions/auth";

const Home = async () => {

  const { user } = await getCurrentSession();

  return (
    <div className="">
      {JSON.stringify(user)}
    </div>
  );
}

export default Home;
