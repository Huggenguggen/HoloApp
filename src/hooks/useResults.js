import { setStatusBarBackgroundColor } from "expo-status-bar";
import { useEffect, useState } from "react";
import holodex from "../api/holodex";

export default () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [liveStreams, setLiveStreams] = useState([]);
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    QueryLive();
    QueryChannels();
  }, [])

  const QueryLive = async () => {
    try {
      const response = await holodex.get("/live", {
        params: {
          limit: '50',
          order: 'asc',
          type: 'vtuber',
        }
      });
      setLiveStreams(response.data);
      setErrorMessage("");
    } catch (err) {
      setErrorMessage(`${err}`);
    }
  };

  const QueryChannels = async (offset) => {
    try {
      const response = await holodex.get("/channels", {
        params: {
          limit: '50',
          type: 'vtuber',
          offset: `${offset}`
        }
      })

      setChannels(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  return [QueryLive, channels, liveStreams, errorMessage];
};