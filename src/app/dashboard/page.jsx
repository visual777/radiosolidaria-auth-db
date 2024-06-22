import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";

const dashboard = async () => {
    const session = await getServerSession(options);

    if(!session) {
      redirect('/api/auth/signin/?callbackUrl=/dashboard')
    }

  return (
    <div><h1>Dashboard only admins</h1></div>
  )
}

export default dashboard