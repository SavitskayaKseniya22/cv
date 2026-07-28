"use client";

import Skills from "./about-me/components/Skills/Skills";
import ContactsForm from "./about-me/components/ContactsForm/ContactsForm";
import Contacts from "./about-me/components/Contacts/Contacts";

function AboutMe() {
    return (
        <>
            <Skills />
            <div>
                <p>
                    Hi! I&apos;m a web developer who builds modern, fast, and user-friendly web applications. I value
                    clean code, thoughtful architecture, and attention to detail. I&apos;m constantly learning new
                    technologies and strive to create solutions that are both reliable and enjoyable to use.
                </p>
                <br />
                <p>Location: Sofia, Bulgaria</p>
                <p>Languages: English - B2, Russian - native</p>
            </div>
            <Contacts />
            <ContactsForm />
        </>
    );
}

export default AboutMe;
