const Navbar = () => {

    const navLinks = [
        { href: '#about', label: 'About' },
        { href: '#projects', label: 'Projects' },
        { href: '#experience', label: 'Experience' },
        { href: '#testimonials', label: 'Testimonials' },
        { href: '#contact', label: 'Contact' },
    ]

    return (
        <header>
            <nav>
                <a href="">RA<span>.</span></a>

                <div>
                    <div>
                        {navLinks.map((link, index) => (
                            <a href={link.href} key={index}>
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar