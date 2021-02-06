import "./index.less"
function Text({
                  placeholder= '',
                  onChange = (e) => {console.log(e)}
              }) {
    return <input className="wy-input-text" placeholder={placeholder} onChange={e=>onChange(e.target.value)}/>

}

export default Text