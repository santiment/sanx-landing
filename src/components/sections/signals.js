export const signals = {
  title: 'Signals',
  items: [
    {
      title: "Signals' definition",
      points: [
        {
          text: 'Signal is an event that occurs in a certain point in time.',
        },
        {
          text: 'Signal could be linked to an asset or/and to a metric that describes that asset.',
        },
      ],
    },
    {
      title: 'MVRV-signals methodology',
      text: 'MVRV signals are supposed to track asset danger (overvaluing) and opportunity (undervaluing) zones based on the MVRV metrics. MVRV spikes/dips coincide with the price local maxima and minima while the MVRV metric itself aims at relative stationarity. The zones entering calculation is based on the previous local extrema.',
      points: [
        {
          title: 'Defining the extrema',
          subpoints: [
            {
              title: 'Maxima',
              text: 'The historical spikes are defined by combining the events when current MVRV value is above the 2-month mean value by more than 1.8 of 2-month std and this current value is a maximum in the local neighborhood of 1 month.',
            },
            {
              title: 'Minima',
              text: 'The historical dips are defined by combining the events when current MVRV value is below the 2-month mean value by more than 1.5 of 2-month std and this current value is a minimum in the local neighborhood of 1 month.',
            },
          ],
        },
        {
          title: 'Defining the MVRV signals',
          text: 'The median value among the previous MVRV most significant spikes (dips) is considered as the upper (lower) threshold. While this value is above the upper threshold the danger zone signals are firing. And while the value is below the lower threshold - the opportunity signals are fired.',
        },
      ],
    },
  ],
}
