import React from "react";

class Search extends React.Component {
  state = {
    value: "",
  };

  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
  }

  componentDidMount() {
    this.inputRef.current.focus();
  }

  render() {
    return (
      <div>
        <form className="col-sm-5 col-lg-4 col-xxl-3  mx-auto mb-3 mb-lg-3 ">
          <input
            ref={this.inputRef}
            id="searchEl"
            type="text"
            placeholder="Search..."
            value={this.state.value}
            onChange={(e) =>
              this.setState({
                value: e.target.value,
              })
            }
          />
          <div
            className="ui button"
            onClick={() => {
              this.props.onSearch(this.state.value);
            }}
          >
            Add Github User
          </div>
        </form>
      </div>
    );
  }
}

export default Search;
