"use client";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function Toast() {
    const notification = "This is the sample notification";

    useEffect(() => {
        if (!notification) {
            return;
        }
        toast.success(notification);
    }, [notification]);
    return (
        <div>
            <ToastContainer position="top-right" autoClose={3000} />
        </div>
    );
}
