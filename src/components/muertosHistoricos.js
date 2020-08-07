import React, { useState, useEffect } from "react"
import Highcharts, { color } from "highcharts/highstock"
import highchartsMore from "highcharts/highcharts-more.js"
import solidGauge from "highcharts/modules/solid-gauge.js"
import HighchartsReact from "highcharts-react-official"

highchartsMore(Highcharts)
solidGauge(Highcharts)

const MuertosHistoricos = () => {
  const [options, setOptions] = useState({
    chart: {
      type: "solidgauge",
    },
    credits: {
      enabled: false,
    },
    title: null,

    pane: {
      center: ["50%", "85%"],
      size: "140%",
      startAngle: -90,
      endAngle: 90,
      background: {
        backgroundColor:
          Highcharts.defaultOptions.legend.backgroundColor || "#EEE",
        innerRadius: "60%",
        outerRadius: "100%",
        shape: "arc",
      },
    },
    exporting: {
      enabled: false,
    },

    // the value axis
    yAxis: {
      stops: [
        [0.1, "#55BF3B"], // green
        [0.35, "#DDDF0D"], // yellow
        [0.7, "#DF5353"], // red
      ],
      lineWidth: 0,
      tickWidth: 0,
      minorTickInterval: 5,
      tickAmount: 5,
      title: {
        y: -70,
      },
      labels: {
        y: 16,
      },
    },
    plotOptions: {
      solidgauge: {
        dataLabels: {
          y: 5,
          borderWidth: 0,
          useHTML: true,
        },
      },
    },
  })

  useEffect(() => {
    fetch("https://chile-coronapi1.p.rapidapi.com/v3/latest/nation", {
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
        console.log(data)
        return Object.entries(data)
      })
      .then(data => {
        const deathProp = (data[0][1] * 100) / 19000000
        console.log(deathProp)
        setOptions({
          yAxis: {
            min: 0,
            max: 100,
            title: {
              text: "Proporcion de infectados",
            },
          },
          tooltip: {
            enabled: true,
            formatter: function () {
              return Highcharts.numberFormat(this.y, 2) + " %"
            },
          },
          series: [
            {
              name: "Proporcion de infectados",
              data: [deathProp],
              dataLabels: {
                format:
                  '<div style="text-align:center">' +
                  '<span style="font-size:25px">{y:.2f} %</span>' +
                  "</div>",
              },
              tooltip: {
                pointFormat: "tres: <b>{y:.2f}</b><br/>",
                valueSuffix: " %",
              },
            },
          ],
          responsive: {
            rules: [
              {
                condition: {
                  maxWidth: 500,
                },
                chartOptions: {
                  legend: {
                    align: "center",
                    verticalAlign: "bottom",
                    layout: "horizontal",
                  },
                  yAxis: {
                    labels: {
                      align: "left",
                      x: 0,
                      y: -5,
                    },
                    title: {
                      text: null,
                    },
                  },
                  subtitle: {
                    text: null,
                  },
                  credits: {
                    enabled: false,
                  },
                  responsive: {
                    rules: [
                      {
                        condition: {
                          maxWidth: 100,
                        },
                        chartOptions: {
                          plotOptions: {
                            solidgauge: {
                              dataLabels: {
                                enabled: false,
                              },
                            },
                          },
                          yAxis: {
                            labels: {
                              enabled: false,
                            },
                          },
                          pane: {
                            center: ["50%", "50%"],
                            size: "50%",
                            startAngle: -90,
                            endAngle: 90,
                            background: {
                              backgroundColor: "#000",
                            },
                          },
                        },
                      },
                    ],
                  },
                },
              },
            ],
          },
        })
      })
  }, [])

  return <HighchartsReact highcharts={Highcharts} options={options} />
}

export default MuertosHistoricos
