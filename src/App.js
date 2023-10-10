import "./styles.css";
import PrimarySearchAppBar from "./components/appbar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Switch } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { useState, useEffect } from "react";
import NewsBoard from "./components/newsboard";

export default function App() {
  var [data, setData] = useState([]);
  var [isLoading, setIsLoading] = useState(true);
  var [isError, setIsError] = useState(false);

  useEffect(() => {
    async function fetchdata() {
      try {
        var url =
          "https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?" +
          "api-key=23TmUYK1VMFMHJAnadVAZoXPdsBTuyEm";

        var req = new Request(url);
        var response = await fetch(req);
        if (!response.ok) {
          setIsLoading(false);
          throw new Error("failed to load");
        }
        var data = await response.json();
        setData(data.results);
        setIsLoading(false);
        console.log(data);
      } catch (error) {
        setIsError(true);
      }
    }

    fetchdata();
  }, []);

  const [theme, settheme] = useState(false);

  const darkTheme = createTheme({
    palette: {
      mode: theme ? "dark" : "light"
    }
  });
  const handleChange = (event) => {
    settheme(event.target.checked);
  };

  if (data) {
    return (
      <div className="App">
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <PrimarySearchAppBar setTheme={settheme} />

          <NewsBoard data={data} />
        </ThemeProvider>
      </div>
    );
  }

  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <PrimarySearchAppBar setTheme={settheme} />
      </ThemeProvider>
    </div>
  );
}
