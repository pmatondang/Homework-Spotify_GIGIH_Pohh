import SearchBar from "../SearchBar/index";
import Gif from "../Gif/index"
import data from "../../data"

const SearchBarIndex = () => {
    return (
        <>
            <SearchBar />
            <br />
            {data.map(
                (it) =>
                    it.rating === "g" && (
                        <Gif key={it.id} source={it.url} title={it.title} />
                    )
            )}
        </>
    );
};

export default SearchBarIndex;