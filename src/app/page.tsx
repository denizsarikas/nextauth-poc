import { getServerSession } from "next-auth";
import { cookies } from 'next/headers'

function GetCookies() {

  const cookieStore = cookies()

  return cookieStore.getAll().map((cookie, i) => (
    <div key={cookie.name}>
      <p>Cookie {i+1}: {cookie.name}</p>
    </div>
  ))
}

export default async function Home() {
  const session = await getServerSession();
  const cookieStore = cookies()
  return (
    <div className="p-4 flex flex-col gap-5">
      <h2 className="text-2xl text-yellow-300">cookies</h2>
      <GetCookies />
      <h2 className="text-2xl text-yellow-300">getserversessiondan gelen datalar</h2>
      {session?.user?.name ? (
        <div>
          <img src={session.user.image} alt="profile-picture" />
          <p>{session?.user?.name}</p>
          <p>{session?.user?.email}</p>
        </div>
      ) : (
        <div>Not Logged In</div>
      )}
    </div>
  );
}
