const Footer = ({ darkMode }) => {
    return (
        <footer className={`text-center py-6 border-t-2 ${darkMode ? "bg-bgColor text-white border-blue-300" : "bg-white text-bgColor border-blue-500"}`}>
            <p className="text-sm">© 2025 Developer Portfolio. All Rights Reserved.</p>
        </footer>
    );
};

export default Footer;
