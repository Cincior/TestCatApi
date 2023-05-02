import Menu from "../components/Menu";

function CatInfoPage() {
    return (
        <>
            <Menu name="Generator" path="generator" />
            <div className="container-fluid d-flex flex-column">
                <h1 className="d-flex justify-content-center">Cats</h1>
                <h4 className="d-flex justify-content-center text-center">Welcome to the best page about cats which will help you to improve your mental healt. To get the best content click on the generator in top left corner. There is no better way to make you smile. More info below </h4>
            </div>
            <div className="mt-5 ms-3">
                <a target="_blank" className="h5" href="https://pl.wikipedia.org/wiki/Kot_domowy">Cats - basic info</a>
            </div>
            <p className="text-center fw-bold text-dark fixed-bottom ">CINCIOR 2K23</p>
        </>
    );
}

export default CatInfoPage;
