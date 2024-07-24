# Sales-GL

Plot retail sales statistics geographically using React, TypeScript and DeckGL.

After cloning this repo:

- Run `npm install`
- Create a blank *.env* file in the root directory
- Add variable `VITE_REACT_API_GMAPS` for a Google Maps JS API key

## Loading Data

- Replace the example file `src/assets/sales.example.json` with a sales array in the following format:

```js
[
    {
        "id": "DEA01", // generic lookup code or tag
        "company": "DEALER ONE PLC",
        "value": 68215.23, // sales figure
        "latitude": 51.5043,
        "longitude": -0.0829
    }
]
```
