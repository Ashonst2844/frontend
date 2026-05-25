interface MainPageProps {
    children: React.ReactNode;
}

function MainPage({children}: MainPageProps) {
    return (
        <div id="main-page">
            {children}
        </div>
    )
}
export default MainPage;