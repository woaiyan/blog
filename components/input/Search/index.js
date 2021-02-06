import "./index.less"
function Text({
                  placeholder= '',
                  onSearch = (e) => {console.log(e)}
              }) {
    return <div className="wy-input-search">
        <svg className="icon wy-input-search-icon" aria-hidden="true">
            <use xlinkHref="#iconsousuo"></use>
        </svg>
        <input  placeholder={placeholder}/>
    </div>

}

export default Text