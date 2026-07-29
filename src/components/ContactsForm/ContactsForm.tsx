"use client";

import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from "@emailjs/browser";
import styles from "./form.module.scss";

const emailServiceId = "service_h0yuidd";
const emailTemplateId = "template_8fl60sd";
const emailPublicKey = "SDGBlEDoTs9cNxtLw";

type Inputs = {
    from_name: string;
    from_email: string;
    message: string;
};

function ContactsForm() {
    const { register, handleSubmit, reset } = useForm<Inputs>();

    const [status, setStatus] = useState<null | "sent" | "error">(null);
    const [isSending, setIsSending] = useState<boolean>(false);

    useEffect(() => {
        let timerId: NodeJS.Timeout;
        if (status !== null) {
            timerId = setTimeout(() => {
                setStatus(null);
            }, 3000);
        }
        return () => {
            clearTimeout(timerId);
        };
    }, [status]);

    const onSubmit: SubmitHandler<Inputs> = values => {
        setIsSending(true);
        emailjs
            .send(emailServiceId, emailTemplateId, values, {
                publicKey: emailPublicKey,
            })
            .then(() => {
                reset();
                setStatus("sent");
            })
            .catch(error => {
                console.error("EmailJS error:", error);
                setStatus("error");
            })
            .finally(() => {
                setIsSending(false);
            });
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <input
                type="text"
                {...register("from_name", { required: true })}
                placeholder="Enter name"
                className={styles.input}
            />
            <input
                type="email"
                {...register("from_email", { required: true })}
                placeholder="Enter your email"
                className={styles.input}
            />
            <textarea
                rows={3}
                {...register("message", { required: true })}
                placeholder="Enter your message"
                className={styles.input}
            />
            <button type="submit" disabled={isSending || status === "sent"} className={styles.button}>
                {isSending && "Message in progress"}
                {status === "sent" && "Message sent successfully"}
                {status === "error" && "An error has occurred. Try again, please"}
                {status === null && !isSending && "Send"}
            </button>
        </form>
    );
}

export default ContactsForm;
