import React from "react";
import Cookies from "js-cookie";
import Grid from "@material-ui/core/Grid";
import "../css/Home.css";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios";
import Collage from "../components/Collage";
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "artists",
      date: "short_term",
      rows: 5,
      columns: 5,
      images: Array(),
    };

    this.handleTypeChange = this.handleTypeChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleRowChange = this.handleRowChange.bind(this);
    this.handleColumnChange = this.handleColumnChange.bind(this);
    this.generateCollage = this.generateCollage.bind(this);
  }

  generateCollage() {
    let limit = this.state.rows * this.state.columns;
    let token = Cookies.get("spotifyAuthToken");
    let config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    axios
      .get(
        `https://api.spotify.com/v1/me/top/${this.state.type}?time_range=${this.state.date}&limit=${limit}&offset=0`,
        config
      )
      .then((response) => {
        let coversArray = Array();
        response.data.items.map((data, key) => {
          coversArray.push(data.images[0].url);
        });
        this.setState({ images: coversArray });
      });
  }

  handleTypeChange(event) {
    this.setState({ type: event.target.value });
  }

  handleRowChange(event) {
    this.setState({ rows: event.target.value });
  }

  handleColumnChange(event) {
    this.setState({ columns: event.target.value });
  }

  handleDateChange(event) {
    this.setState({ date: event.target.value });
  }

  render() {
    return (
      <div className="home">
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
          style={{ minHeight: "100vh" }}
        >
          <Grid
            item
            xs={6}
            style={{ textAlign: "center" }}
            className="home-base-form"
          >
            <div>
              <Grid className="input-flex">
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={this.state.type}
                  onChange={this.handleTypeChange}
                >
                  <MenuItem value={"artists"}>Artists</MenuItem>
                  <MenuItem value={"songs"}>Songs</MenuItem>
                </Select>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={this.state.date}
                  onChange={this.handleDateChange}
                >
                  <MenuItem value={"short_term"}>Month</MenuItem>
                  <MenuItem value={"medium_term"}>6 Months</MenuItem>
                  <MenuItem value={"long_term"}>All Time</MenuItem>
                </Select>
                <TextField
                  id="standard-number"
                  label="Rows"
                  onChange={this.handleRowChange}
                  InputProps={{
                    inputProps: {
                      max: 7,
                      min: 1,
                    },
                  }}
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <TextField
                  id="standard-number"
                  label="Columns"
                  onChange={this.handleColumnChange}
                  InputProps={{
                    inputProps: {
                      max: 7,
                      min: 1,
                    },
                  }}
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <Button onClick={this.generateCollage} variant="contained">
                  Generate
                </Button>
              </Grid>
            </div>
            {this.state.images.length > 0 && (
              <Collage
                rows={this.state.rows}
                columns={this.state.columns}
                images={this.state.images}
              />
            )}
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Home;
