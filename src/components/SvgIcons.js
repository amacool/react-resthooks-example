import React from 'react';

export const FilterIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20">
    <path fill="#cecfd2" className="a"
      d="M1212,109h-2v14h-2v2h2v4h2v-4h2v-2h-2V109m7,0h-2v9h-2v2h2v9h2v-9h2v-2h-2v-9m7,0h-2v4h-2v2h2v14h2V115h2v-2h-2v-4"
      transform="translate(-1208 -109)"
    />
  </svg>
);

export const DownloadIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
    <path fill="#cecfd2" className="a"
      d="M-1000,758.222c0,.978-.68,1.778-2.111,1.778h-16.111a1.778,1.778,0,0,1-1.778-1.778v-6.444a1.782,1.782,0,0,1,1.889-1.778h1.118a.994.994,0,0,1,.993.993v.014a.994.994,0,0,1-.993.993h-.014a.994.994,0,0,0-.993.993v4.014a.994.994,0,0,0,.993.993h14.014a.994.994,0,0,0,.993-.993v-4.014a.994.994,0,0,0-.993-.993h-.014a.994.994,0,0,1-.993-.993v-.014a.994.994,0,0,1,.993-.993h1.229a1.778,1.778,0,0,1,1.778,1.778v6.444Zm-5.726-11.549,0,0a.994.994,0,0,0-1.408-.05l-1.021.957a.5.5,0,0,1-.842-.365V741a1,1,0,0,0-1-1h0a1,1,0,0,0-1,1v6.2a.5.5,0,0,1-.845.362l-.974-.929a.993.993,0,0,0-1.41.04h0a.993.993,0,0,0,.043,1.4l2.848,2.689a2,2,0,0,0,2.753-.007l2.816-2.685A1,1,0,0,0-1005.726,746.673Z"
      transform="translate(1020 -740)"
    />
  </svg>
);

export const ThreeDots = ({ color, width = 20 }) => (
  <svg
    fill={color}
    version="1.1"
    id="Capa_1"
    x="0px"
    y="0px"
    viewBox="0 0 32.055 32.055"
    style={{ enableBackground: 'new 0 0 32.055 32.055', width }}
  >
    <g>
      <path d="M3.968,12.061C1.775,12.061,0,13.835,0,16.027c0,2.192,1.773,3.967,3.968,3.967c2.189,0,3.966-1.772,3.966-3.967
        C7.934,13.835,6.157,12.061,3.968,12.061z M16.233,12.061c-2.188,0-3.968,1.773-3.968,3.965c0,2.192,1.778,3.967,3.968,3.967
        s3.97-1.772,3.97-3.967C20.201,13.835,18.423,12.061,16.233,12.061z M28.09,12.061c-2.192,0-3.969,1.774-3.969,3.967
        c0,2.19,1.774,3.965,3.969,3.965c2.188,0,3.965-1.772,3.965-3.965S30.278,12.061,28.09,12.061z"/>
    </g>
  </svg>
);

export const SupportIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16">
    <path fill="#fff" className="a"
      d="M8,0a8,8,0,1,0,8,8A8.024,8.024,0,0,0,8,0ZM8,10a2,2,0,1,1,2-2A2.006,2.006,0,0,1,8,10ZM8,2a5.834,5.834,0,0,1,2.6.6L9.044,4.156a3.591,3.591,0,0,0-2.089,0L5.4,2.6A5.834,5.834,0,0,1,8,2ZM2,8a5.834,5.834,0,0,1,.6-2.6L4.156,6.956a3.591,3.591,0,0,0,0,2.089L2.6,10.6A5.834,5.834,0,0,1,2,8Zm6,6a5.834,5.834,0,0,1-2.6-.6l1.556-1.556a3.591,3.591,0,0,0,2.089,0L10.6,13.4A5.834,5.834,0,0,1,8,14Zm5.4-3.4L11.844,9.044a3.591,3.591,0,0,0,0-2.089L13.4,5.4a5.933,5.933,0,0,1,0,5.2Z"
      transform="translate(0 0)"
    />
  </svg>
);

export const SettingsIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16">
    <path fill="#fff" className="a"
      d="M13.3,5.2l1.1-2.1L13,1.7,10.9,2.8a3.582,3.582,0,0,0-1.1-.4L9,0H7L6.2,2.3a4.179,4.179,0,0,0-1,.4L3.1,1.6,1.6,3.1,2.7,5.2a4.179,4.179,0,0,0-.4,1L0,7V9l2.3.8c.1.4.3.7.4,1.1L1.6,13,3,14.4l2.1-1.1a3.582,3.582,0,0,0,1.1.4L7,16H9l.8-2.3c.4-.1.7-.3,1.1-.4L13,14.4,14.4,13l-1.1-2.1a3.582,3.582,0,0,0,.4-1.1L16,9V7l-2.3-.8A4.179,4.179,0,0,0,13.3,5.2ZM8,11A2.946,2.946,0,0,1,5,8,2.946,2.946,0,0,1,8,5a2.946,2.946,0,0,1,3,3A2.946,2.946,0,0,1,8,11Z"
      transform="translate(0 0)"
    />
  </svg>
);

export const ProductsIcon = () => (
  <svg width="13" height="16" viewBox="0 0 13 16">
    <path fill="#fff" className="a"
      d="M703.721-209.525a.524.524,0,0,1,.125.36v8.312a.764.764,0,0,1-.312.531l-6.344,6.375a.954.954,0,0,1-.7.282.95.95,0,0,1-.7-.282l-4.657-4.656a.955.955,0,0,1-.281-.7.955.955,0,0,1,.281-.7l.782-.781-.782-.813a.955.955,0,0,1-.281-.7.955.955,0,0,1,.281-.7l6.375-6.375a.788.788,0,0,1,.532-.281h5.343A.44.44,0,0,1,703.721-209.525Zm-.875,8.485V-202.6l-5.656,5.656a.954.954,0,0,1-.7.282.95.95,0,0,1-.7-.282l-3.157-3.156-.781.813,4.625,4.625,6.375-6.344Zm-1-7.141a.518.518,0,0,0,.141.359.458.458,0,0,0,.359.157.458.458,0,0,0,.359-.157.518.518,0,0,0,.141-.359.469.469,0,0,0-.141-.344.487.487,0,0,0-.359-.14.487.487,0,0,0-.359.14A.469.469,0,0,0,701.846-208.181Z"
      transform="translate(-690.846 209.665)"
    />
  </svg>
);

export const CustomersIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16">
    <g className="b" clip="path:url(#a)">
      <path fill="#fff" className="c"
        d="M702.548-169.7a.964.964,0,0,1,.3.7v14a.966.966,0,0,1-.3.7.96.96,0,0,1-.7.3h-12a.959.959,0,0,1-.7-.3.962.962,0,0,1-.3-.7v-14a.96.96,0,0,1,.3-.7.959.959,0,0,1,.7-.3h12A.96.96,0,0,1,702.548-169.7Zm-12.7,14.7h2v-14h-2Zm12-14h-9v14h9Zm-2.062,9.812q0,.876-1.235,1.219a4.523,4.523,0,0,1-2.469,0q-1.234-.344-1.234-1.219a3.82,3.82,0,0,1,.719-2.344,2.122,2.122,0,0,1,1.75-.968,2.126,2.126,0,0,1,1.75.968A3.833,3.833,0,0,1,699.783-159.188Zm-2.5-6.969a1.476,1.476,0,0,1,1.078.454,1.476,1.476,0,0,1,.453,1.078,1.423,1.423,0,0,1-.453,1.062,1.5,1.5,0,0,1-1.078.438,1.445,1.445,0,0,1-1.063-.438,1.442,1.442,0,0,1-.437-1.062v-.625l.437-.453A1.423,1.423,0,0,1,697.283-166.157Zm6.562.157h1v-3h-1Zm0,4h1v-3h-1Zm0,4h1v-3h-1Z"
        transform="translate(-688.845 170)"
      />
    </g>
  </svg>
);

export const SalesIcon = () => (
  <svg width="11.938" height="15.812" viewBox="0 0 11.938 15.812">
    <path fill="#fff" className="a"
      d="M692.815-240.991a1.445,1.445,0,0,0-.438,1.062,1.447,1.447,0,0,0,.438,1.063l5.375,5.375a2.783,2.783,0,0,1-2.875-.782l-3.531-3.531a2.822,2.822,0,0,1-.907-2.109,2.925,2.925,0,0,1,.907-2.141l.781-.781a2.893,2.893,0,0,1,2.125-.875,2.9,2.9,0,0,1,2.125.875l3.531,3.531a2.789,2.789,0,0,1,.75,2.906l-5.344-5.375a1.449,1.449,0,0,0-1.062-.437,1.448,1.448,0,0,0-1.063.437Zm.531,8.687a2.792,2.792,0,0,1-.75-2.906l5.344,5.375A1.442,1.442,0,0,0,699-229.4a1.447,1.447,0,0,0,1.063-.437l.812-.781a1.451,1.451,0,0,0,.438-1.063,1.448,1.448,0,0,0-.438-1.062l-5.375-5.375a2.781,2.781,0,0,1,2.875.781l3.532,3.531a2.832,2.832,0,0,1,.906,2.109,2.93,2.93,0,0,1-.906,2.141l-.782.781A2.9,2.9,0,0,1,699-227.9a2.893,2.893,0,0,1-2.125-.875Z"
      transform="translate(-690.877 243.71)"
    />
  </svg>
);

export const HomeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16">
    <defs>
      <clipPath id="a">
        <rect className="a" width="16" height="16" fill="none"/>
      </clipPath>
    </defs>
    <g transform="translate(-3 0)">
      <g className="b" transform="translate(3)" clip="path:url(#a)">
        <path fill="#fff" className="c"
          d="M15.581,5.186l-7-5a1,1,0,0,0-1.162,0l-7,5A1,1,0,0,0,1.581,6.814L2,6.515V15a1,1,0,0,0,1,1H13a1,1,0,0,0,1-1V6.515A1.7,1.7,0,0,0,15,7a1,1,0,0,0,.582-1.814ZM12,14H10V11a2,2,0,0,0-4,0v3H4V5.086L8,2.229l4,2.857Z"
          transform="translate(0 0)"
        />
      </g>
    </g>
  </svg>
);

export const StarIcon = () => (
  <svg width="19" height="19" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation">
    <path fill="white" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
    <path fill="none" d="M0 0h24v24H0z"/>
  </svg>
);

export const IconLeft = () => (
  <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation"><path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"></path></svg>
);

export const IconRight = () => (
  <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation"><path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"></path></svg>
);