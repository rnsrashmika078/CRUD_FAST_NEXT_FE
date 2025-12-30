import { redirect } from "next/navigation";

const page = () => {
    redirect("/crud");
    return <div></div>;
};

export default page;
