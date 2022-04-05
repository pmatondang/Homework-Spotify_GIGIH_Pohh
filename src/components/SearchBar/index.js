const SearchBar = ({ query, onChange, onCallBack }) => {
    const onTrigger = (e) => {
        e.preventDefault();
        onCallBack(e.target.query.value);
    };

    return (
        <form onSubmit={onTrigger}>
            <input type="text" name="query" value={query} onChange={onChange} />
            <input type="submit" value="search" />
        </form>
    );
};

export default SearchBar;