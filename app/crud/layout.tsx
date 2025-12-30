import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="bg-gradient-to-bl from-blue-900 to-black/60 w-full h-screen">
            <div className="p-5">
                <h1 className="text-2xl font-bold">Welcome to the CRUD OPERATION SYSTEM</h1>
                <p className="text-md text-gray-500">FastAPI + Alcamy + Next JS</p>
            </div>
            {children}
        </div>
    );
};

export default layout;
