import React, { useEffect, useRef } from 'react';

const LinkedInProfile = () => {
    const linkedInRef = useRef(null);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://platform.linkedin.com/in.js';
        script.type = 'text/javascript';
        script.async = true;
        script.innerHTML = 'lang: en_US';
        document.body.appendChild(script);

        const memberProfile = document.createElement('script');
        memberProfile.type = 'IN/MemberProfile';
        memberProfile.setAttribute('data-id', 'https://www.linkedin.com/in/pingdu-zhou-975124205/');
        memberProfile.setAttribute('data-format', 'inline');
        memberProfile.setAttribute('data-related', 'false');
        linkedInRef.current.appendChild(memberProfile);
    }, []);

    return <div ref={linkedInRef}></div>;
};

export default LinkedInProfile;
