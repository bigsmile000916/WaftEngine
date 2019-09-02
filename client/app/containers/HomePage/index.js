/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Link } from 'react-router-dom';
import CategoryElement from '../../components/CategoryElement';
import StarIcon from '@material-ui/icons/star';

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
  render() {
    const { classes, category } = this.props;

    return (
      <>
        <div className=" border-b border-grey-light">
          <div className="max-w-lg mx-auto pt-12 overflow-hidden relative flex">
            <div className="w-1/2">
              <h1 className="uppercase text-4xl sans-serif">Help us to grow</h1>
              <p className="my-4">You don't have to donate always. A Github star is enough for WaftEngine.</p>
              <a className="px-3 py-2 no-underline inline-flex items-center font-bold" href="https://github.com/wafttech/waftengine" target="_blank" style={{
                color: '#333',
                backgroundImage: 'linear-gradient(-180deg, #FAFBFC 0%, #EFF3F6 100%)',
                border: '1px solid #CDCFD0',
                borderRadius: 4
              }}><StarIcon /><span className="pl-2">Star WaftEngine</span></a>

            </div>
            <div className="w-1/2">
              <svg width="240px" height="292px" viewBox="0 0 240 292" version="1.1">
                <g id="177985-OWL3S4-710" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" opacity="0.466294649">
                  <g id="Group-17" transform="translate(0.000000, -1.000000)" fill="#FC3D39">
                    <path className="leftHand" d="M134.297,6.888 L134.297,3.596 C134.297,3.473 134.305,3.358 134.319,3.252 L134.073,3.215 C133.702,3.165 132.354,3.377 130.289,8.12 C131.523,7.166 132.666,6.842 133.654,6.842 C133.877,6.842 134.091,6.859 134.297,6.888 Z M140.975,17.97 C141.047,14.102 140.585,10.848 139.603,8.3 C138.841,6.323 137.823,4.93 136.523,4.096 L136.523,7.12 C136.523,7.345 136.457,7.553 136.343,7.728 C137.24,8.403 137.904,9.401 138.321,10.701 C138.681,11.778 138.881,13.145 138.934,14.87 C139.008,16.872 139.096,18.846 139.199,20.795 L139.235,20.789 C139.736,20.705 140.214,20.971 140.422,21.407 C140.527,21.414 140.628,21.435 140.728,21.472 C140.728,21.473 140.808,21.496 141.012,21.485 C140.98,20.306 140.967,19.13 140.975,17.97 Z M133.367,9.076 L133.357,9.328 C132.827,12.82 132.619,16.583 132.737,20.512 C132.897,21.999 133.014,22.357 133.043,22.432 C133.318,23.185 134.024,23.886 135.105,24.496 C135.589,24.746 136.301,24.992 137.228,25.231 C137.012,21.883 136.839,18.453 136.709,14.946 C136.664,13.454 136.495,12.262 136.206,11.394 C135.856,10.303 135.318,9.599 134.611,9.261 C134.354,9.154 134.039,9.057 133.659,9.057 C133.565,9.057 133.468,9.063 133.367,9.076 Z M140.16,80.53 C140.089,77.099 139.593,74.251 138.685,72.063 C137.593,69.407 136.019,68.067 133.883,67.966 C132.98,67.931 132.119,68.152 131.287,68.64 C131.255,68.756 131.203,68.866 131.134,68.967 C130.4,76.019 129.965,80.393 129.841,81.978 C129.673,83.847 129.612,85.242 129.656,86.097 C129.764,87.493 130.132,88.64 130.744,89.496 C131.716,90.827 133.186,91.654 135.238,92.025 C136.411,92.238 138.198,92.249 140.555,92.056 C140.32,88.207 140.188,84.362 140.16,80.53 Z M166.38745,292.129075 C156.859483,276.160835 147.353109,259.817822 136.382,240.725 C136.26,240.502 136.136,240.279 136.009,240.058 C127.139,228.992 122.419,213.079 121.98,192.757 C121.881,187.334 122.206,178.753 122.947,167.251 C123.659,156.282 123.92,147.793 123.724,142.023 C123.577,137.912 123.142,132.232 122.43,125.137 C121.616,116.869 121.104,111.152 120.906,108.14 C120.506,101.625 120.575,95.618 121.111,90.152 C119.867,67.72 119.515,53.992 119.867,47.646 C120.494,36.45 122.239,26.325 125.054,17.55 C125.685,14.182 126.716,10.813 128.116,7.538 C129.389,4.542 131.426,0.607 134.372,1.008 C137.734,1.461 140.193,3.644 141.68,7.499 C142.766,10.317 143.278,13.854 143.202,17.999 C143.191,19.5 143.216,21.042 143.275,22.581 C143.617,31.681 145.178,41.599 147.913,52.061 C150.071,60.175 153.792,71.388 158.974,85.387 C164.865,101.235 168.829,112.478 170.757,118.804 C174.597,131.416 176.909,143.033 177.629,153.336 C177.927,157.802 178.002,163.29 177.854,169.654 C177.755,173.275 177.58,178.758 177.334,185.936 C177.041,198.947 178.026,209.585 180.261,217.554 C198.45975,242.8022 218.123799,268.011828 239.144625,292.013061 L236.177842,292.00742 C215.517177,268.309387 196.173812,243.467069 178.289,218.805 C175.813,209.864 174.812,199.05 175.109,185.872 C175.355,178.687 175.53,173.21 175.628,169.597 C175.775,163.305 175.701,157.884 175.408,153.488 C174.7,143.355 172.419,131.904 168.627,119.453 C166.713,113.169 162.763,101.969 156.887,86.161 C151.68,72.095 147.937,60.814 145.761,52.628 C143.087,42.402 141.518,32.68 141.095,23.71 C140.735,23.726 140.422,23.696 140.148,23.621 C139.916,23.601 139.655,23.547 139.348,23.454 C140.248,38.486 142.004,51.899 144.585,63.419 C148.421,80.524 154.425,95.52 162.429,107.991 C162.761,108.508 162.611,109.197 162.094,109.529 C161.576,109.861 160.887,109.711 160.556,109.193 C152.41,96.503 146.306,81.266 142.412,63.906 C140.036,53.298 138.353,41.115 137.387,27.56 C135.933,27.226 134.845,26.867 134.048,26.455 C132.456,25.558 131.415,24.462 130.958,23.214 C130.848,22.926 130.698,22.381 130.519,20.706 C130.406,17.106 130.552,13.713 130.947,10.513 C129.937,11.543 129.106,12.882 128.476,14.485 C128.029,15.682 127.599,16.917 127.198,18.153 C124.423,26.785 122.707,36.741 122.089,47.77 C121.794,53.098 122.005,63.765 122.732,80.25 C123.194,78.32 123.734,76.483 124.349,74.742 C125.26,72.27 126.431,70.226 127.832,68.667 C129.664,66.638 131.731,65.664 133.979,65.741 C137.033,65.887 139.309,67.729 140.742,71.213 C141.756,73.656 142.308,76.774 142.386,80.498 C142.483,93.724 143.825,107.087 146.371,120.212 C148.943,133.269 152.72,146.174 157.594,158.568 C157.819,159.14 157.537,159.786 156.965,160.011 C156.393,160.236 155.747,159.954 155.522,159.382 C150.599,146.864 146.786,133.83 144.187,120.639 C142.495,111.918 141.329,103.093 140.702,94.278 C138.137,94.486 136.216,94.465 134.841,94.216 C132.236,93.745 130.253,92.599 128.939,90.8 C128.082,89.599 127.576,88.074 127.435,86.241 C127.382,85.24 127.444,83.781 127.622,81.792 C127.732,80.392 128.083,76.826 128.667,71.177 C127.808,72.369 127.061,73.818 126.443,75.497 C123.44,83.997 122.325,94.934 123.127,108 C123.323,110.983 123.834,116.675 124.645,124.916 C125.362,132.057 125.801,137.786 125.949,141.945 C126.147,147.791 125.885,156.353 125.168,167.394 C124.432,178.835 124.108,187.354 124.206,192.713 C124.634,212.571 129.207,228.054 137.799,238.731 C138.045,239.134 138.191,239.393 138.323,239.635 C149.529882,259.137773 159.207064,275.769258 168.943182,292.067289 L166.38745,292.129075 Z" id="Fill-14"></path>
                    <path className="rightHand" d="M112.337,86.097 C112.23,87.493 111.861,88.64 111.25,89.496 C110.278,90.827 108.808,91.654 106.755,92.025 C105.582,92.238 103.795,92.249 101.439,92.056 C101.674,88.207 101.805,84.362 101.834,80.53 C101.905,77.099 102.401,74.251 103.309,72.063 C104.401,69.407 105.975,68.067 108.111,67.966 C109.014,67.931 109.875,68.152 110.706,68.64 C110.739,68.756 110.79,68.866 110.859,68.967 C111.594,76.019 112.029,80.393 112.153,81.978 C112.32,83.847 112.382,85.242 112.337,86.097 Z M108.339,6.842 C108.117,6.842 107.902,6.859 107.696,6.888 L107.696,3.596 C107.696,3.473 107.689,3.358 107.675,3.252 L107.921,3.215 C108.291,3.165 109.639,3.377 111.705,8.12 C110.471,7.166 109.328,6.842 108.339,6.842 Z M109.256,20.512 C109.097,21.999 108.98,22.357 108.951,22.432 C108.675,23.185 107.969,23.886 106.889,24.496 C106.405,24.746 105.693,24.992 104.765,25.231 C104.981,21.883 105.154,18.453 105.284,14.946 C105.33,13.454 105.498,12.262 105.788,11.394 C106.138,10.303 106.676,9.599 107.382,9.261 C107.639,9.154 107.955,9.057 108.334,9.057 C108.428,9.057 108.525,9.063 108.627,9.076 L108.636,9.328 C109.166,12.82 109.375,16.583 109.256,20.512 Z M103.672,10.701 C103.313,11.778 103.112,13.145 103.059,14.87 C102.985,16.872 102.897,18.846 102.794,20.795 L102.758,20.789 C102.258,20.705 101.78,20.971 101.571,21.407 C101.467,21.414 101.366,21.435 101.266,21.472 C101.265,21.473 101.185,21.496 100.982,21.485 C101.014,20.306 101.026,19.13 101.018,17.97 C100.947,14.102 101.408,10.848 102.39,8.3 C103.153,6.323 104.17,4.93 105.47,4.096 L105.47,7.12 C105.47,7.345 105.536,7.553 105.651,7.728 C104.754,8.403 104.09,9.401 103.672,10.701 Z M122.127,47.646 C121.5,36.45 119.755,26.325 116.94,17.55 C116.308,14.182 115.278,10.813 113.877,7.538 C112.604,4.542 110.567,0.607 107.622,1.008 C104.259,1.461 101.8,3.644 100.313,7.499 C99.227,10.317 98.715,13.854 98.792,17.999 C98.802,19.5 98.778,21.042 98.719,22.581 C98.377,31.681 96.816,41.599 94.08,52.061 C91.923,60.175 88.201,71.388 83.019,85.387 C77.129,101.235 73.164,112.478 71.237,118.804 C67.397,131.416 65.084,143.033 64.364,153.336 C64.067,157.802 63.991,163.29 64.14,169.654 C64.238,173.275 64.413,178.758 64.659,185.936 C64.952,198.947 63.967,209.585 61.732,217.554 C42.8781481,243.695084 22.4368483,268.511247 0.551253714,292.023055 L3.61494658,292.003818 C25.1038091,268.796513 45.1865793,244.340173 63.705,218.805 C66.18,209.864 67.181,199.05 66.884,185.872 C66.638,178.687 66.463,173.21 66.365,169.597 C66.218,163.305 66.292,157.884 66.585,153.488 C67.293,143.355 69.575,131.904 73.366,119.453 C75.281,113.169 79.231,101.969 85.107,86.161 C90.313,72.095 94.056,60.815 96.233,52.628 C98.907,42.402 100.475,32.68 100.899,23.71 C101.259,23.726 101.571,23.696 101.846,23.621 C102.077,23.601 102.338,23.547 102.645,23.454 C101.746,38.486 99.989,51.899 97.409,63.419 C93.573,80.524 87.569,95.52 79.564,107.991 C79.232,108.508 79.382,109.197 79.9,109.529 C80.417,109.861 81.106,109.711 81.437,109.193 C89.583,96.503 95.688,81.266 99.581,63.906 C101.958,53.298 103.641,41.115 104.607,27.56 C106.061,27.226 107.148,26.867 107.946,26.455 C109.537,25.558 110.579,24.462 111.035,23.214 C111.146,22.926 111.296,22.381 111.474,20.706 C111.588,17.106 111.442,13.713 111.046,10.513 C112.056,11.543 112.888,12.882 113.517,14.485 C113.965,15.682 114.395,16.917 114.795,18.153 C117.571,26.785 119.287,36.741 119.904,47.77 C120.199,53.098 119.989,63.765 119.261,80.25 C118.799,78.32 118.26,76.483 117.645,74.742 C116.734,72.27 115.563,70.226 114.161,68.667 C112.33,66.638 110.263,65.664 108.014,65.741 C104.96,65.887 102.684,67.729 101.251,71.213 C100.238,73.656 99.685,76.775 99.608,80.498 C99.51,93.724 98.169,107.087 95.622,120.212 C93.05,133.269 89.274,146.173 84.4,158.568 C84.175,159.14 84.456,159.786 85.028,160.011 C85.6,160.236 86.246,159.954 86.471,159.382 C91.395,146.864 95.208,133.83 97.807,120.639 C99.499,111.918 100.664,103.093 101.292,94.278 C103.856,94.486 105.777,94.465 107.152,94.216 C109.757,93.745 111.74,92.599 113.054,90.8 C113.912,89.599 114.418,88.074 114.559,86.241 C114.611,85.24 114.549,83.781 114.371,81.792 C114.261,80.392 113.911,76.826 113.327,71.177 C114.186,72.369 114.932,73.818 115.551,75.497 C118.554,83.997 119.669,94.934 118.866,108 C118.67,110.983 118.16,116.675 117.348,124.916 C116.632,132.057 116.193,137.785 116.045,141.945 C115.846,147.791 116.109,156.353 116.825,167.394 C117.562,178.835 117.886,187.354 117.788,192.713 C117.359,212.571 112.786,228.054 104.195,238.731 C103.948,239.134 103.802,239.393 103.67,239.635 C92.2782504,259.459489 82.2057898,275.91183 72.03876,292.05247 L74.6869495,292.023732 C84.6130677,276.242253 94.4828291,260.091155 105.611,240.725 C105.734,240.502 105.858,240.279 105.984,240.058 C114.855,228.992 119.575,213.079 120.013,192.757 C120.112,187.334 119.787,178.753 119.047,167.251 C118.335,156.282 118.073,147.793 118.269,142.023 C118.416,137.912 118.851,132.232 119.563,125.137 C120.377,116.869 120.89,111.152 121.087,108.14 C121.488,101.625 121.419,95.618 120.883,90.152 C122.126,67.72 122.478,53.992 122.127,47.646 Z" id="Fill-15"></path>
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>
        <div className="max-w-lg mx-auto pt-12 pb-12 overflow-hidden">
          <CategoryElement cat_id="5d09d3c5ba5fe21594e59bb4" />
        </div>
      </>
    );
  }
}
