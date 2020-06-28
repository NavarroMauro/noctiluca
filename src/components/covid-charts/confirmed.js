import React, { useState, useEffect } from "react"
import Axios from "axios"
import moment from "moment"
// console.log(moment.now())

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  // Label,
} from "recharts"

const Confirmed = () => {
  // const timestampNow = Date.now()

  const [arr, setArr] = useState([])
  const API_URL = "https://api.covid19api.com/all"

  useEffect(() => {
    Axios.get(API_URL)
      .then(res => {
        setArr(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  const totalConfirmedCases = arr
    .filter(field => {
      return (
        field.CountryCode === "AR" ||
        field.CountryCode === "CL" ||
        field.CountryCode === "PE" ||
        field.CountryCode === "BR" ||
        field.CountryCode === "EC" ||
        field.CountryCode === "BO"
      )
    })
    .map(d => {
      return {
        x: new Date(d.Date).getTime(),
        y: parseFloat(d.Confirmed),
        label: d.Country,
      }
    })
  // If we want to get less data resolution we can remove the above filter
  const AR = totalConfirmedCases.filter(ele => ele.label === "Argentina")
  const CL = totalConfirmedCases.filter(ele => ele.label === "Chile")
  const PE = totalConfirmedCases.filter(ele => ele.label === "Peru")
  const BR = totalConfirmedCases.filter(ele => ele.label === "Brazil")
  const EC = totalConfirmedCases.filter(ele => ele.label === "Ecuador")
  const BO = totalConfirmedCases.filter(ele => ele.label === "Bolivia")

  function formatXAxis(tickItem) {
    // If using moment.js
    return moment(tickItem).format("MMM Do YYYY")
  }

  return (
    <div className="mx-auto block">
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          // width={400}
          // height={500}
          data={totalConfirmedCases}
          // scale="time"
          // dataKey="Argentina"
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <XAxis
            dataKey="x"
            dataType="number"
            tickFormatter={formatXAxis}
            allowDuplicatedCategory={false}
            fontSize={14}
            // allowDataOverflow="true"
            // domain={["dataMin", "dataMax"]}
            label={{
              // value: "Fecha",
              // angle: -90,
              position: "insideBottomLeft",
              offset: -15,
            }}
          />
          <YAxis
            dataType="number"
            label={{
              value: "Casos Confirmados",
              angle: -90,
              position: "insideLeft",
              offset: 80,
            }}
          />
          <Tooltip labelFormatter={t => new Date(t).toUTCString()} />
          <Legend />
          <Line
            data={AR}
            name="Argentina"
            type="monotone"
            dataKey="y"
            stroke="orange"
            // activeDot={{ r: 8 }}
          />
          <Line
            name="Chile"
            data={CL}
            type="monotone"
            dataKey="y"
            stroke="red"
            // activeDot={{ r: 8 }}
          />
          <Line
            data={PE}
            name="Peru"
            type="monotone"
            dataKey="y"
            stroke="black"
            // activeDot={{ r: 8 }}
          />
          <Line
            data={BR}
            name="Brasil"
            type="monotone"
            dataKey="y"
            stroke="green"
            // activeDot={{ r: 8 }}
          />
          <Line
            data={EC}
            name="Ecuador"
            type="monotone"
            dataKey="y"
            stroke="yellow"
            // activeDot={{ r: 8 }}
          />
          <Line
            data={BO}
            name="Bolivia"
            type="monotone"
            dataKey="y"
            stroke="#82ca9d"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Confirmed
