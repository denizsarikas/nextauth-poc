import { headers } from "next/headers";

export default async function APIFromServer() {
  const resp = await fetch("http://localhost:3000/api/restricted", {
    method: "GET",
    headers: headers(),
  }).then((res) => res.json());

  return (
    <div>
      <div>
        Restricted
      </div>
      <div>Giriş anı: {resp?.date}</div>
    </div>
  );
}
