import React from "react";

const social_icons = [
    {class: "fab fa-facebook", href: "https://www.facebook.com/justinpostservice"},
    {class: "fab fa-instagram", href: "https://instagram.com/justinpostservice"},
    {class: "fab fa-telegram", href: "https://instagram.com/justinpostservice"},
    {class: "fab fa-facebook-messenger", href: "https://m.me/justinpostservice"},
    {class: "fab fa-viber", href: "https://tinyurl.com/justinpostservice"}
];

const SocialIcons = (props) => {

    return (
        <aside className="col social_icons">
            {social_icons.map((item, index) => {
                return (
                    <a
                        key={index}
                        className="mr-3 __link"
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className={item.class} />
                    </a> 
                )
            })}
        </aside>
    );
};

export default SocialIcons;
