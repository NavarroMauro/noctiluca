import React, { useState, useEffect } from "react"
import Highcharts, { color } from "highcharts/highstock"
import HighchartsReact from "highcharts-react-official"

const ActivosHistoricos = () => {
  const [options, setOptions] = useState({
    legend: {
      enabled: false,
    },
    title: {
      text: "HISTORICO COVID-19 CHILE- Confirmados",
    },
    xSeries: "timedate",
    yAxis: "",
    series: [{ data: [] }],
  })

  useEffect(() => {
    fetch("https://chile-coronapi1.p.rapidapi.com/v3/historical/nation", {
      method: "GET",
      headers: {
        "x-rapidapi-host": "chile-coronapi1.p.rapidapi.com",
        "x-rapidapi-key": "5afb9539b2msh32d0d06f16fd204p1e11cdjsn9a53fbf1c1f7",
      },
    })
      .then(res => {
        return res.json()
      })
      .then(data => {
        return Object.entries(data)
      })
      .then(data => {
        setOptions({
          xAxis: {
            type: "datetime",
            labels: {
              // format: "{value:%Y%b-%e}",
              formatter: function () {
                return Highcharts.dateFormat("%e %b %Y", this.value)
              },
            },
            title: {
              text: "Dias",
            },
          },
          series: [
            {
              data: data.map(row => {
                return row[0].day, row[1].confirmed
              }),
              color: "#d69e2e",
              pointStart: Date.UTC(2020, 2, 8),
              pointInterval: 24 * 3600 * 1000, // one day
            },
          ],
        })
      })
  }, [])

  return <HighchartsReact highcharts={Highcharts} options={options} />
}

export default ActivosHistoricos
